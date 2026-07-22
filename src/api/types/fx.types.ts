/**
 * fx — /api/v1/fx/*
 * ⚠️ Inferred shapes — verify against real spec.
 */

export interface FxRate {
  symbol: string; // e.g. "USD"
  rate_id: string;
  base_id: string;
  base_symbol: string;
  base_name: string;
  base_decimals: number;
  quote_id: string;
  quote_symbol: string;
  buy_rate: string;
  sell_rate: string;
  mid_rate: string;
  captured_at: string;
  source: string;
}

export type FxSide = "buy" | "sell";

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

export type FxPayoutStatus = "pending" | "processing" | "completed" | "failed";

export interface FxPayoutRequest {
  symbol: string;
  amount: string;
  bankName: string;
  accountNumber: string;
  bankCountry: string;
  beneficiaryName: string;
  routingType: string;
  swiftCode: string;
  iban: string;
  sortCode: string;
  routingNumber: string;
  bankAddress: string;
  narration: string;
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
