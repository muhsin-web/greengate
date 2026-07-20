const localeMap: Record<string, string> = {
  USD: "en-US",
  EUR: "en-IE",
  GBP: "en-GB",
  NGN: "en-NG",
};

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat(localeMap[currency] ?? "en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
