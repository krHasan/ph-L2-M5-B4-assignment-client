"use client";

import Logo from "@/assets/Logo";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { resetPassword } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { resetPasswordSchema } from "./resetPasswordValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword = ({ email, token }: { email: string; token: string }) => {
    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
    });
    const {
        formState: { isSubmitting },
    } = form;

    const router = useRouter();
    const password = form.watch("password");
    const passwordConfirm = form.watch("passwordConfirm");

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Processing....");
        try {
            const userInfo = {
                email,
                newPassword: data.password,
                token,
            };
            const res = await resetPassword(userInfo);
            console.log(res);
            if (res?.error) {
                toast.error("Something went wrong", { id: toastId });
            } else {
                toast.success(res?.message, { id: toastId });
                router.push("/login");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Something went wrong", { id: toastId });
        }
    };

    return (
        <div className="p-2 lg:p-10 w-[500px] mx-auto">
            <div className="flex justify-center my-5">
                <Logo />
            </div>
            <h1 className="text-lg font-bold mb-2">Enter new password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>

                                {passwordConfirm && password !== passwordConfirm ? (
                                    <FormMessage> Password does not match </FormMessage>
                                ) : (
                                    <FormMessage />
                                )}
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="mt-5 w-full cursor-pointer">
                        {isSubmitting ? "Processing...." : "Change"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ResetPassword;
