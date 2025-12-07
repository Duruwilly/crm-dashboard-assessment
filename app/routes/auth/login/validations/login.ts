import z from "zod";

export const email = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address.");

export const LoginSchema = z.object({
  email,
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export type TLogin = z.infer<typeof LoginSchema>;
