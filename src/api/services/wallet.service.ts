import { apiClient, unwrap } from '../client';
import type {
  Wallet,
  CreateWalletRequest,
  WalletBalance,
  WalletRestriction,
  WalletTransferRequest,
  WalletTransferResponse,
} from '../types/wallet.types';
import type { Transaction, TransactionListParams } from '../types/transaction.types';
import type { PaginatedResponse } from '../types/common.types';

export const WalletService = {
  list: () =>
    unwrap(apiClient.get<Wallet[]>('/api/v1/wallets')),

  create: (payload: CreateWalletRequest) =>
    unwrap(apiClient.post<Wallet>('/api/v1/wallets', payload)),

  getBalances: (id: string) =>
    unwrap(apiClient.get<WalletBalance[]>(`/api/v1/wallets/${id}/balances`)),

  getTransactions: (id: string, params?: TransactionListParams) =>
    unwrap(
      apiClient.get<PaginatedResponse<Transaction>>(`/api/v1/wallets/${id}/transactions`, { params }),
    ),

  getRestrictions: (id: string) =>
    unwrap(apiClient.get<WalletRestriction[]>(`/api/v1/wallets/${id}/restrictions`)),

  transfer: (payload: WalletTransferRequest) =>
    unwrap(apiClient.post<WalletTransferResponse>('/api/v1/wallets/transfer', payload)),
};
