import ResetPassword from "@/components/modules/auth/reset-password/ResetPassword";

const ResetPasswordPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ email: string; token: string }>;
}) => {
    const { email, token } = await searchParams;
    return (
        <div>
            <ResetPassword email={email} token={token} />
        </div>
    );
};

export default ResetPasswordPage;
