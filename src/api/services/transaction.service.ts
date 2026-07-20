import { apiClient, unwrap } from '../client';
import type {
  Transaction,
  TransactionListParams,
  TransactionStats,
  EmailStatementRequest,
} from '../types/transaction.types';
import type { PaginatedResponse } from '../types/common.types';

export const TransactionService = {
  list: (params?: TransactionListParams) =>
    unwrap(apiClient.get<PaginatedResponse<Transaction>>('/api/v1/transactions', { params })),

  stats: () =>
    unwrap(apiClient.get<TransactionStats>('/api/v1/transactions/stats')),

  /** Returns a CSV blob — pipe into expo-file-system / expo-sharing to save or share. */
  exportCsv: () =>
    unwrap(apiClient.get<Blob>('/api/v1/transactions/export', { responseType: 'blob' })),

  emailStatement: (payload: EmailStatementRequest) =>
    unwrap(apiClient.post('/api/v1/transactions/statement', payload)),

  getOne: (id: string) =>
    unwrap(apiClient.get<Transaction>(`/api/v1/transactions/${id}`)),
};
