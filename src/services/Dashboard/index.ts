"use server";
import { cookies } from "next/headers";

export const getDashboardStates = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/dashboard`, {
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value,
            },
        });
        return await res.json();
    } catch (error: any) {
        return Error(error.message);
    }
};
