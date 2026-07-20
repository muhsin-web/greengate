/**
 * account — /api/v1/account/*
 * ⚠️ Inferred shapes — verify against real spec.
 */

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface SetPinRequest {
  pin: string;
}

export interface ChangePinRequest {
  currentPin: string;
  newPin: string;
}

export interface Session {
  id: string;
  device?: string;
  ipAddress?: string;
  location?: string;
  current: boolean;
  createdAt: string;
  lastActiveAt?: string;
}

export interface Device {
  id: string;
  name?: string;
  platform?: string;
  lastSeenAt?: string;
}

export interface SecurityEvent {
  id: string;
  type: string;
  description?: string;
  ipAddress?: string;
  createdAt: string;
}
