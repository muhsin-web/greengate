/**
 * transactions — /api/v1/transactions/*
 * ⚠️ Inferred shapes — verify against real spec, especially TransactionType/Status enums.
 */

export type TransactionType =
  | 'deposit'
  | 'withdrawal'
  | 'transfer'
  | 'fx_conversion'
  | 'fx_payout';

export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'reversed';

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;
  asset: string;
  amount: number;
  fee?: number;
  narration?: string;
  createdAt: string;
  // Type-specific detail block returned by GET /transactions/{id}
  detail?: Record<string, unknown>;
}

export interface TransactionListParams {
  page?: number;
  limit?: number;
  type?: TransactionType;
  status?: TransactionStatus;
  search?: string;
  from?: string; // ISO date
  to?: string; // ISO date
  sort?: string;
}

export interface TransactionStats {
  totalIn: number;
  totalOut: number;
  count: number;
}

export interface EmailStatementRequest {
  from: string; // ISO date
  to: string; // ISO date
}
