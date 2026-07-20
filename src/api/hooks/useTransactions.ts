import { useMutation, useQuery } from '@tanstack/react-query';
import { TransactionService } from '../services/transaction.service';
import type { EmailStatementRequest, TransactionListParams } from '../types/transaction.types';

export const transactionKeys = {
  list: (params?: TransactionListParams) => ['transactions', params] as const,
  stats: ['transactions', 'stats'] as const,
  detail: (id: string) => ['transactions', id] as const,
};

export function useTransactions(params?: TransactionListParams) {
  return useQuery({
    queryKey: transactionKeys.list(params),
    queryFn: () => TransactionService.list(params),
  });
}

export function useTransactionStats() {
  return useQuery({ queryKey: transactionKeys.stats, queryFn: TransactionService.stats });
}

export function useTransaction(id: string) {
  return useQuery({
    queryKey: transactionKeys.detail(id),
    queryFn: () => TransactionService.getOne(id),
    enabled: !!id,
  });
}

export function useEmailStatement() {
  return useMutation({
    mutationFn: (payload: EmailStatementRequest) => TransactionService.emailStatement(payload),
  });
}
