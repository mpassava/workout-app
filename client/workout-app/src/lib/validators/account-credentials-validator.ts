import { z } from "zod";

export const authCredentialsValidator = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type TauthCredentialsValidator = z.infer<
  typeof authCredentialsValidator
>;
