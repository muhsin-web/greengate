// libs/format-currency.ts
export function formatAmountInput(text: string): string {
  // Strip everything except digits and one decimal point
  let cleaned = text.replace(/[^0-9.]/g, "");

  // Prevent multiple decimal points
  const parts = cleaned.split(".");
  if (parts.length > 2) {
    cleaned = parts[0] + "." + parts.slice(1).join("");
  }

  // Limit to 2 decimal places
  const [whole, decimal] = cleaned.split(".");
  if (decimal !== undefined && decimal.length > 2) {
    cleaned = `${whole}.${decimal.slice(0, 2)}`;
  }

  return cleaned;
}

// export function formatAmountDisplay(value: string): string {
//   if (!value) return "0.00";

//   const [whole, decimal] = value.split(".");
//   const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//   return decimal !== undefined
//     ? `${formattedWhole}.${decimal}`
//     : formattedWhole;
// }

export function formatAmountDisplay(value: string): string {
  if (!value) return "0.00";

  const [whole, decimal = ""] = value.split(".");
  const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedDecimal = decimal.padEnd(2, "0").slice(0, 2);

  return `${formattedWhole}.${formattedDecimal}`;
}

// Converts back to a plain number, useful when submitting to your API
export function parseAmount(value: string): number {
  return parseFloat(value.replace(/,/g, "")) || 0;
}
