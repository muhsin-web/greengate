/**
 * wallets — /api/v1/wallets/*
 * ⚠️ Inferred shapes — verify against real spec.
 */

export interface Wallet {
  id: string;
  name: string;
  type?: string;
  createdAt: string;
}

export interface CreateWalletRequest {
  name: string;
}

export interface WalletBalance {
  asset: string; // e.g. "NGN", "USD", "BTC"
  available: number;
  ledger: number;
}

export type WalletRestrictionType = 'PND' | 'PNC' | 'FREEZE';

export interface WalletRestriction {
  id: string;
  type: WalletRestrictionType;
  reason?: string;
  createdAt: string;
}

export interface WalletTransferRequest {
  fromWalletId: string;
  toUserIdentifier: string; // email / phone / username of recipient
  asset: string;
  amount: number;
  pin: string;
  narration?: string;
}

export type WalletTransferStatus = 'completed' | 'pending' | 'failed';

export interface WalletTransferResponse {
  transactionId: string;
  status: WalletTransferStatus;
}
