import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { WalletService } from '../services/wallet.service';
import type { CreateWalletRequest, WalletTransferRequest } from '../types/wallet.types';
import type { TransactionListParams } from '../types/transaction.types';

export const walletKeys = {
  all: ['wallets'] as const,
  balances: (id: string) => ['wallets', id, 'balances'] as const,
  transactions: (id: string, params?: TransactionListParams) =>
    ['wallets', id, 'transactions', params] as const,
  restrictions: (id: string) => ['wallets', id, 'restrictions'] as const,
};

export function useWallets() {
  return useQuery({ queryKey: walletKeys.all, queryFn: WalletService.list });
}

export function useWalletBalances(id: string) {
  return useQuery({
    queryKey: walletKeys.balances(id),
    queryFn: () => WalletService.getBalances(id),
    enabled: !!id,
    staleTime: 30_000, // balances should feel "live" — refetch fairly often
    refetchOnWindowFocus: true,
  });
}

export function useWalletTransactions(id: string, params?: TransactionListParams) {
  return useQuery({
    queryKey: walletKeys.transactions(id, params),
    queryFn: () => WalletService.getTransactions(id, params),
    enabled: !!id,
  });
}

export function useWalletRestrictions(id: string) {
  return useQuery({
    queryKey: walletKeys.restrictions(id),
    queryFn: () => WalletService.getRestrictions(id),
    enabled: !!id,
  });
}

export function useCreateWallet() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateWalletRequest) => WalletService.create(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: walletKeys.all }),
  });
}

export function useWalletTransfer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: WalletTransferRequest) => WalletService.transfer(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: walletKeys.balances(variables.fromWalletId) });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
}
