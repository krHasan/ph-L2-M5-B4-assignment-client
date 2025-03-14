"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import Logo from "@/assets/Logo";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "./registerValidation";
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(registrationSchema),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const password = form.watch("password");
    const passwordConfirm = form.watch("passwordConfirm");
    const router = useRouter();

    const { setIsLoading } = useUser();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        try {
            const res = await registerUser(data);
            setIsLoading(true);
            if (res?.success) {
                toast.success(res?.message);
                router.push("/login");
            } else {
                toast.error(res?.message);
            }
        } catch (err: any) {
            console.error(err);
        }
    };

    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
            <div className="flex items-center space-x-4 ">
                <Logo />
                <div>
                    <h1 className="text-xl font-semibold">Register</h1>
                    <p className="font-extralight text-sm text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Register as a</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="tenant" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Tenant</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="landlord" />
                                            </FormControl>
                                            <FormLabel className="font-normal">Landlord</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        disabled={!!passwordConfirm && password !== passwordConfirm}
                        type="submit"
                        className="mt-5 w-full cursor-pointer"
                    >
                        {isSubmitting ? "Registering...." : "Register"}
                    </Button>
                </form>
            </Form>
            <p className="text-sm text-gray-600 text-center my-3">
                Already have an account ?
                <Link href="/login" className="text-primary">
                    Login
                </Link>
            </p>
        </div>
    );
}
