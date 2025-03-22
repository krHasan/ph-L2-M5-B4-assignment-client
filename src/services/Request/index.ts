"use server";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllRequests = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/requests?limit=${limit}&page=${page}`,
            {
                headers: {
                    Authorization: (await cookies()).get("accessToken")!.value,
                },
                next: {
                    tags: ["REQUESTS"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

export const createRequest = async (requestData: Record<string, unknown>): Promise<any> => {
    const token = await getValidToken();
    try {
        console.log(requestData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requests/create-request`, {
            method: "POST",
            body: JSON.stringify(requestData),
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

export const cancelRequest = async (requestId: string): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/requests/cancel-request/${requestId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: token,
                },
            }
        );
        revalidateTag("REQUESTS");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const updateRequestStatus = async (
    requestId: string,
    statusData: Record<string, unknown>
): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/requests/change-request-status/${requestId}`,
            {
                method: "PATCH",
                body: JSON.stringify(statusData),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            }
        );
        revalidateTag("REQUESTS");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
