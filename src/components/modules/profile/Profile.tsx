"use client";

import RentifyContainer from "@/components/ui/core/RentifyContainer";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { passwordChangeSchema } from "./ChangePasswordValidation";
import { changePassword } from "@/services/AuthService";
import { Separator } from "@/components/ui/separator";
import { ContentLoading } from "@/components/ui/core/Loading/ContentLoading";

const Profile = () => {
    const { user, setIsLoading } = useUser();

    const form = useForm({
        resolver: zodResolver(passwordChangeSchema),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const oldPassword = form.watch("oldPassword");
    const newPassword = form.watch("newPassword");
    const router = useRouter();

    if (!user) {
        setIsLoading(true);
        return <ContentLoading />;
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await changePassword(data);
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
        <RentifyContainer>
            <div className="flex flex-col gap-y-4">
                <h1 className="text-xl font-bold">Account Details</h1>
                <Input defaultValue={user?.name} disabled />
                <Input defaultValue={user?.email} disabled />
                <Input defaultValue={user?.role} disabled />
            </div>
            <Separator className="my-7" />
            <h1 className="text-xl font-bold mb-4">Change Password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                    <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Old Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        disabled={!newPassword || !oldPassword}
                        type="submit"
                        className="mt-5 w-full cursor-pointer"
                    >
                        {isSubmitting ? "Updating...." : "Change"}
                    </Button>
                </form>
            </Form>
        </RentifyContainer>
    );
};

export default Profile;
