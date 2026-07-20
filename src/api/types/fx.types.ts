/**
 * fx — /api/v1/fx/*
 * ⚠️ Inferred shapes — verify against real spec.
 */

export interface FxRate {
  symbol: string; // e.g. "USD"
  buy: number;
  sell: number;
  updatedAt: string;
}

export type FxSide = 'buy' | 'sell';

export interface FxConvertRequest {
  symbol: string;
  side: FxSide;
  amount: number;
  pin: string;
}

export interface FxConversion {
  id: string;
  symbol: string;
  side: FxSide;
  amount: number;
  rate: number;
  createdAt: string;
}

export type FxPayoutStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface FxPayoutRequest {
  symbol: string;
  amount: number;
  bankId: string;
  accountNumber: string;
  accountName: string;
  pin: string;
}

export interface FxPayout {
  id: string;
  symbol: string;
  amount: number;
  status: FxPayoutStatus;
  beneficiary?: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
  createdAt: string;
}
