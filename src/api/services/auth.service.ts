import { apiClient, tokenStorage, unwrap } from "../client";
import type {
  EmailVerifyRequest,
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  PhoneSendRequest,
  PhoneVerifyRequest,
  RefreshResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
} from "../types/auth.types";

export const AuthService = {
  async register(payload: RegisterRequest): Promise<RegisterResponse> {
    const data = await unwrap(
      apiClient.post<{ data: RegisterResponse }>(
        "/api/v1/auth/register",
        payload,
      ),
    );
    await tokenStorage.setTokens(data?.data);
    return data?.data;
  },

  async login(payload: LoginRequest): Promise<LoginResponse> {
    const data = await unwrap(
      apiClient.post<{ data: LoginResponse }>("/api/v1/auth/login", payload),
    );
    await tokenStorage.setTokens(data.data);
    return data.data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/api/v1/auth/logout");
    await tokenStorage.clearTokens();
  },

  async refresh(): Promise<RefreshResponse> {
    const refreshToken = await tokenStorage.getRefreshToken();
    const data = await unwrap(
      apiClient.post<RefreshResponse>("/api/v1/auth/refresh", { refreshToken }),
    );
    await tokenStorage.setTokens(data);
    return data;
  },

  resendEmailCode: () => unwrap(apiClient.post("/api/v1/auth/email/resend")),

  verifyEmail: (payload: EmailVerifyRequest) =>
    unwrap(apiClient.post("/api/v1/auth/email/verify", payload)),

  sendPhoneCode: (payload: PhoneSendRequest) =>
    unwrap(apiClient.post("/api/v1/auth/phone/send", payload)),

  verifyPhone: (payload: PhoneVerifyRequest) =>
    unwrap(apiClient.post("/api/v1/auth/phone/verify", payload)),

  forgotPassword: (payload: ForgotPasswordRequest) =>
    unwrap(apiClient.post("/api/v1/auth/password/forgot", payload)),

  resetPassword: (payload: ResetPasswordRequest) =>
    unwrap(apiClient.post("/api/v1/auth/password/reset", payload)),
};
