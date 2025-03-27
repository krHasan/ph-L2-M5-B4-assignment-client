import { z } from "zod";

export const resetPasswordSchema = z.object({
    password: z
        .string({ required_error: "Password is required" })
        .min(7, "Password must be at least 7 characters"),
    passwordConfirm: z.string({ required_error: "Password Confirmation is required" }).min(1),
});
