"use server";

import { getValidToken } from "@/lib/verifyToken";
import { jwtDecode } from "jwt-decode";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/create-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();

        return result;
    } catch (error: any) {
        return Error(error);
    }
};

export const getAllUsers = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/user?limit=${limit}&page=${page}`,
            {
                headers: {
                    Authorization: (await cookies()).get("accessToken")!.value,
                },
                next: {
                    tags: ["USERS"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

export const updateUserStatus = async (userId: string): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/user/change-status/${userId}`,
            {
                method: "POST",
                headers: {
                    Authorization: token,
                },
            }
        );
        revalidateTag("USERS");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json();

        if (result?.success) {
            (await cookies()).set("accessToken", result?.data?.accessToken);
            (await cookies()).set("refreshToken", result?.data?.refreshToken);
        }

        return result;
    } catch (error: any) {
        return Error(error);
    }
};

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};

export const reCaptchaTokenVerification = async (token: string) => {
    try {
        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
                response: token,
            }),
        });

        return res.json();
    } catch (err: any) {
        return Error(err);
    }
};

export const logout = async () => {
    (await cookies()).delete("accessToken");
    (await cookies()).delete("refreshToken");
};

export const getNewToken = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("refreshToken")!.value,
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const changePassword = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("accessToken")!.value,
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();

        return result;
    } catch (error: any) {
        return Error(error);
    }
};
