import { apiClient, unwrap } from '../client';
import type {
  FxRate,
  FxConvertRequest,
  FxConversion,
  FxPayoutRequest,
  FxPayout,
} from '../types/fx.types';

export const FxService = {
  listRates: () =>
    unwrap(apiClient.get<FxRate[]>('/api/v1/fx/rates')),

  getRate: (symbol: string) =>
    unwrap(apiClient.get<FxRate>(`/api/v1/fx/rates/${symbol}`)),

  convert: (payload: FxConvertRequest) =>
    unwrap(apiClient.post<FxConversion>('/api/v1/fx/convert', payload)),

  listConversions: () =>
    unwrap(apiClient.get<FxConversion[]>('/api/v1/fx/conversions')),

  requestPayout: (payload: FxPayoutRequest) =>
    unwrap(apiClient.post<FxPayout>('/api/v1/fx/payouts', payload)),

  listPayouts: () =>
    unwrap(apiClient.get<FxPayout[]>('/api/v1/fx/payouts')),

  getPayout: (id: string) =>
    unwrap(apiClient.get<FxPayout>(`/api/v1/fx/payouts/${id}`)),
};
