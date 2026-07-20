import { apiClient, unwrap } from "../client";
import type {
  ChangePasswordRequest,
  ChangePinRequest,
  Device,
  SecurityEvent,
  Session,
  SetPinRequest,
  UpdateProfileRequest,
} from "../types/account.types";
import type { AuthUser } from "../types/auth.types";

export const AccountService = {
  getMe: () => unwrap(apiClient.get<{ data: AuthUser }>("/api/v1/account/me")),

  updateProfile: (payload: UpdateProfileRequest) =>
    unwrap(apiClient.patch<AuthUser>("/api/v1/account/profile", payload)),

  changePassword: (payload: ChangePasswordRequest) =>
    unwrap(apiClient.put("/api/v1/account/password", payload)),

  setPin: (payload: SetPinRequest) =>
    unwrap(apiClient.post("/api/v1/account/pin", payload)),

  changePin: (payload: ChangePinRequest) =>
    unwrap(apiClient.put("/api/v1/account/pin", payload)),

  listSessions: () =>
    unwrap(apiClient.get<Session[]>("/api/v1/account/sessions")),

  revokeSession: (id: string) =>
    unwrap(apiClient.delete(`/api/v1/account/sessions/${id}`)),

  listDevices: () => unwrap(apiClient.get<Device[]>("/api/v1/account/devices")),

  getSecurityEvents: () =>
    unwrap(apiClient.get<SecurityEvent[]>("/api/v1/account/security-events")),
};
