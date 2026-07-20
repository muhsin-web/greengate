import { useMutation } from '@tanstack/react-query';
import { AuthService } from '../services/auth.service';
import type {
  LoginRequest,
  RegisterRequest,
  EmailVerifyRequest,
  PhoneSendRequest,
  PhoneVerifyRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from '../types/auth.types';

export function useLogin() {
  return useMutation({ mutationFn: (payload: LoginRequest) => AuthService.login(payload) });
}

export function useRegister() {
  return useMutation({ mutationFn: (payload: RegisterRequest) => AuthService.register(payload) });
}

export function useLogout() {
  return useMutation({ mutationFn: () => AuthService.logout() });
}

export function useResendEmailCode() {
  return useMutation({ mutationFn: () => AuthService.resendEmailCode() });
}

export function useVerifyEmail() {
  return useMutation({ mutationFn: (payload: EmailVerifyRequest) => AuthService.verifyEmail(payload) });
}

export function useSendPhoneCode() {
  return useMutation({ mutationFn: (payload: PhoneSendRequest) => AuthService.sendPhoneCode(payload) });
}

export function useVerifyPhone() {
  return useMutation({ mutationFn: (payload: PhoneVerifyRequest) => AuthService.verifyPhone(payload) });
}

export function useForgotPassword() {
  return useMutation({ mutationFn: (payload: ForgotPasswordRequest) => AuthService.forgotPassword(payload) });
}

export function useResetPassword() {
  return useMutation({ mutationFn: (payload: ResetPasswordRequest) => AuthService.resetPassword(payload) });
}
