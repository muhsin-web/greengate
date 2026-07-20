import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import * as SecureStore from "expo-secure-store";
import type { AuthTokens } from "./types/auth.types";

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------

const BASE_URL = "https://greengate-api.up.railway.app";

const ACCESS_TOKEN_KEY = "greengate_access_token";
const REFRESH_TOKEN_KEY = "greengate_refresh_token";

// -----------------------------------------------------------------------------
// Token storage — SecureStore is backed by Keychain (iOS) / Keystore (Android),
// which is the right place for auth tokens on a fintech app (never AsyncStorage).
// -----------------------------------------------------------------------------

export const tokenStorage = {
  getAccessToken: () => SecureStore.getItemAsync(ACCESS_TOKEN_KEY),
  getRefreshToken: () => SecureStore.getItemAsync(REFRESH_TOKEN_KEY),

  async setTokens(tokens: AuthTokens): Promise<void> {
    await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, tokens?.accessToken);
    await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, tokens?.refreshToken);
  },

  async clearTokens(): Promise<void> {
    await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
  },
};

// -----------------------------------------------------------------------------
// Session-expired hook — set this from your app root (e.g. to trigger navigation
// to the login screen) so the client doesn't need to know about navigation.
// -----------------------------------------------------------------------------

type SessionExpiredHandler = () => void;
let onSessionExpired: SessionExpiredHandler | null = null;

export function setOnSessionExpired(handler: SessionExpiredHandler) {
  onSessionExpired = handler;
}

// -----------------------------------------------------------------------------
// Axios instance
// -----------------------------------------------------------------------------

/**
 * Unwraps an axios response to just its `data`, with an explicit signature —
 * this exists so service files never write `.then((r) => r.data)` themselves,
 * which is the pattern that trips up TS's generic inference (r collapsing to
 * `any` under `noImplicitAny`). Use it as: `unwrap(apiClient.get<T>(url))`.
 */
export function unwrap<T>(promise: Promise<AxiosResponse<T>>): Promise<T> {
  return promise.then((response: AxiosResponse<T>) => response?.data);
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

// Attach access token to every outgoing request
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await tokenStorage.getAccessToken();
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
);

// -----------------------------------------------------------------------------
// 401 handling: refresh once, queue any requests that arrive mid-refresh,
// replay them all with the new token. Prevents a "refresh storm" when several
// screens fire requests at the same time and all get a 401 together.
// -----------------------------------------------------------------------------

let isRefreshing = false;
let refreshQueue: Array<(token: string | null) => void> = [];

function subscribeTokenRefresh(cb: (token: string | null) => void) {
  refreshQueue.push(cb);
}

function onRefreshed(token: string | null) {
  console.log(token);
  refreshQueue.forEach((cb) => cb(token));
  refreshQueue = [];
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;

    const status = error.response?.status;
    const isAuthEndpoint =
      originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/register") ||
      originalRequest?.url?.includes("/auth/refresh");

    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !isAuthEndpoint
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((token) => {
            if (token) {
              originalRequest.headers.set("Authorization", `Bearer ${token}`);
              resolve(apiClient(originalRequest));
            } else {
              reject(error);
            }
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = await tokenStorage.getRefreshToken();
        if (!refreshToken) throw error;

        // Bare axios call (not apiClient) to avoid recursive interceptor loop
        const { data } = await axios.post<AuthTokens>(
          `${BASE_URL}/api/v1/auth/refresh`,
          { refreshToken },
        );

        await tokenStorage.setTokens(data);
        onRefreshed(data?.accessToken);
        isRefreshing = false;

        originalRequest.headers.set(
          "Authorization",
          `Bearer ${data.accessToken}`,
        );
        return apiClient(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        onRefreshed(null);
        await tokenStorage.clearTokens();
        onSessionExpired?.();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
