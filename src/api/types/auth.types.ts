/**
 * auth — /api/v1/auth/*
 * ⚠️ Field names are inferred from endpoint naming + REST conventions.
 * Confirm exact request/response shapes against the real OpenAPI spec.
 */
type UserStatus = "active" | "suspended" | "blocked" | "pending";
type KycTier = "tier0" | "tier1" | "tier2" | "tier3";

interface UserProfile {
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  avatarUrl: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
  occupation: string | null;
}

export interface AuthUser {
  id: string;
  email: string;
  phone: string;
  status: UserStatus;
  kycTier: KycTier;
  emailVerified: boolean;
  phoneVerified: boolean;
  pinSet: boolean;
  referralCode: string;
  lastLoginAt: string;
  createdAt: string;
  profile: UserProfile;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  phone: string;
  referralCode?: string;
  deviceCode?: string;
  platform: string;
  model?: string;
}

export type RegisterResponse = AuthTokens & { user: AuthUser };

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = AuthTokens & { user: AuthUser };

export interface RefreshRequest {
  refreshToken: string;
}

export type RefreshResponse = AuthTokens;

export interface EmailVerifyRequest {
  code: string;
}

export interface PhoneSendRequest {
  phone: string;
}

export interface PhoneVerifyRequest {
  code: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}
