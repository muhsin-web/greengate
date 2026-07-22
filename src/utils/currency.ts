const localeMap: Record<string, string> = {
  USD: "en-US",
  EUR: "en-IE",
  GBP: "en-GB",
  NGN: "en-NG",
  CAD: "en-CA",
};

const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  NGN: "₦",
  CAD: "CA$",
};

export function formatCurrency(amount: number, currency = "NGN") {
  return new Intl.NumberFormat(localeMap[currency] ?? "en-NG", {
    style: "currency",
    currency,
  }).format(amount);
}

export function getCurrencyIcon(currency: string = "USD"): string {
  return currencySymbols[currency] ?? currency;
}
