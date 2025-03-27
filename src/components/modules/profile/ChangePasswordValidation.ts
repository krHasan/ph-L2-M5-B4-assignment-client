import { z } from "zod";

export const passwordChangeSchema = z.object({
    oldPassword: z
        .string({ required_error: "Old Password is required" })
        .min(7, "Password must be at least 7 characters"),
    newPassword: z
        .string({ required_error: "New Password is required" })
        .min(7, "Password must be at least 7 characters"),
});
