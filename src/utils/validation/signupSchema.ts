import { z } from "zod";

export const passwordRules = [
  {
    label: "At least 1 capital letter",
    test: (pw: string) => /[A-Z]/.test(pw),
  },
  { label: "At least 1 small letter", test: (pw: string) => /[a-z]/.test(pw) },
  { label: "At least 1 number", test: (pw: string) => /[0-9]/.test(pw) },
  {
    label: "At least 1 special character",
    test: (pw: string) => /[^A-Za-z0-9]/.test(pw),
  },
  { label: "Need at least 8 characters", test: (pw: string) => pw.length >= 8 },
];

const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .refine((pw) => passwordRules.every((r) => r.test(pw)), {
    message: "Password does not meet all requirements",
  });

export const signupSchema = z
  .object({
    email: z.email("Enter a valid email address"),
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\d{10}$/, "Enter a valid 10-digit phone number"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // error attaches to the confirm field, not the form root
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
