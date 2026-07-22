import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FxService } from "../services/fx.service";
import type { FxConvertRequest, FxPayoutRequest } from "../types/fx.types";

export const fxKeys = {
  rates: ["fx", "rates"] as const,
  rate: (symbol: string) => ["fx", "rates", symbol] as const,
  conversions: ["fx", "conversions"] as const,
  payouts: ["fx", "payouts"] as const,
  payout: (id: string) => ["fx", "payouts", id] as const,
};

export function useFxRates() {
  return useQuery({
    queryKey: fxKeys.rates,
    queryFn: FxService.listRates,
    // staleTime: 15_000,
    // refetchInterval: 30_000, // rates move — keep the buy/sell screen current
    refetchOnWindowFocus: true,
  });
}

export function useFxRate(symbol: string) {
  return useQuery({
    queryKey: fxKeys.rate(symbol),
    queryFn: () => FxService.getRate(symbol),
    enabled: !!symbol,
    staleTime: 15_000,
    refetchInterval: 30_000,
  });
}

export function useFxConversions() {
  return useQuery({
    queryKey: fxKeys.conversions,
    queryFn: FxService.listConversions,
  });
}

export function useFxConvert() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FxConvertRequest) => FxService.convert(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fxKeys.conversions });
      queryClient.invalidateQueries({ queryKey: ["wallets"] }); // balances changed
    },
  });
}

export function useFxPayouts() {
  return useQuery({ queryKey: fxKeys.payouts, queryFn: FxService.listPayouts });
}

export function useFxPayout(id: string) {
  return useQuery({
    queryKey: fxKeys.payout(id),
    queryFn: () => FxService.getPayout(id),
    enabled: !!id,
  });
}

export function useRequestFxPayout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FxPayoutRequest) => FxService.requestPayout(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fxKeys.payouts });
      queryClient.invalidateQueries({ queryKey: ["wallets"] });
    },
  });
}
