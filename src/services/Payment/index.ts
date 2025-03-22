"use server";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";

export const createPayment = async (data: Record<string, unknown>): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/payments/initiate`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
        revalidateTag("REQUESTS");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
