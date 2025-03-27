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
import { forgotPassword } from "@/services/AuthService";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
    const form = useForm({});
    const {
        formState: { isSubmitting },
    } = form;
    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Processing....");
        try {
            const userInfo = {
                email: data.email,
            };
            const res = await forgotPassword(userInfo);
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
            <h1 className="text-lg font-bold mb-2">Please provide you email</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="mt-5 w-full cursor-pointer">
                        {isSubmitting ? "Processing...." : "Send Request"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ForgetPassword;
