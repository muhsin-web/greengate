import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AccountService } from '../services/account.service';
import type {
  UpdateProfileRequest,
  ChangePasswordRequest,
  SetPinRequest,
  ChangePinRequest,
} from '../types/account.types';

export const accountKeys = {
  me: ['account', 'me'] as const,
  sessions: ['account', 'sessions'] as const,
  devices: ['account', 'devices'] as const,
  securityEvents: ['account', 'security-events'] as const,
};

export function useMe() {
  return useQuery({ queryKey: accountKeys.me, queryFn: AccountService.getMe });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateProfileRequest) => AccountService.updateProfile(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: accountKeys.me }),
  });
}

export function useChangePassword() {
  return useMutation({
    mutationFn: (payload: ChangePasswordRequest) => AccountService.changePassword(payload),
  });
}

export function useSetPin() {
  return useMutation({ mutationFn: (payload: SetPinRequest) => AccountService.setPin(payload) });
}

export function useChangePin() {
  return useMutation({ mutationFn: (payload: ChangePinRequest) => AccountService.changePin(payload) });
}

export function useSessions() {
  return useQuery({ queryKey: accountKeys.sessions, queryFn: AccountService.listSessions });
}

export function useRevokeSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => AccountService.revokeSession(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: accountKeys.sessions }),
  });
}

export function useDevices() {
  return useQuery({ queryKey: accountKeys.devices, queryFn: AccountService.listDevices });
}

export function useSecurityEvents() {
  return useQuery({ queryKey: accountKeys.securityEvents, queryFn: AccountService.getSecurityEvents });
}
