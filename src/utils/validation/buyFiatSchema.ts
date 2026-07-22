import { z } from "zod";

export const buyFiatSchema = z.object({
  accountName: z.string().min(2, "Account name is too short"),
  bankName: z.string().min(2, "Bank name is too short"),
  routingNumber: z.string().min(2, "Routing number is too short"),
  bankAddress: z.string().min(2, "Enter valid bank address"),
  sortCode: z.string().min(2, "Enter valid sort code"),
  iban: z.string().min(2, "Iban number too short"),
  routingType: z.string().min(2, "Pick a valid routing type"),
  bankCountry: z.string().min(2, "Enter country"),
  accountNumber: z
    .string()
    .min(1, "Account number is required")
    .regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
  swiftCode: z
    .string()
    .min(1, "Swift number is required")
    .regex(/^\d{4}$/, "Enter a valid min 4-digit phone number"),
  narration: z.string(),
});

export type BuyFiatFormValues = z.infer<typeof buyFiatSchema>;
