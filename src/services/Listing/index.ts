"use server";
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// get all listings
export const getAllListings = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams();

    if (query?.price) {
        params.append("minAmount", "0");
        params.append("maxAmount", query?.rentAmount ? query?.rentAmount.toString() : "100000");
    }

    if (query?.rentArea) {
        params.append("rentArea", query?.rentArea ? query?.rentArea.toString() : "");
    }
    if (query?.rentType) {
        params.append("rentType", query?.rentType ? query?.rentType.toString() : "");
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`,
            {
                next: {
                    tags: ["LISTING"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

// get my listings
export const getMyListings = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/my-listings?limit=${limit}&page=${page}`,
            {
                headers: {
                    Authorization: (await cookies()).get("accessToken")!.value,
                },
                next: {
                    tags: ["LISTING"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

// get single listing
export const getSingleListing = async (listingId: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
            next: {
                tags: ["LISTING"],
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};

// add listing
export const addListing = async (listingData: FormData): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/create-list`, {
            method: "POST",
            body: listingData,
            headers: {
                Authorization: token,
            },
        });
        revalidateTag("LISTING");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

// update listing
export const updateListing = async (listingData: FormData, listingId: string): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
            method: "PATCH",
            body: listingData,
            headers: {
                Authorization: token,
            },
        });
        revalidateTag("LISTING");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

// delete listing
export const deleteListing = async (listingId: string): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        });
        revalidateTag("LISTING");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

// update listing status
export const updateListingStatus = async (listingId: string): Promise<any> => {
    const token = await getValidToken();
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/update-status/${listingId}`,
            {
                method: "PATCH",
                headers: {
                    Authorization: token,
                },
            }
        );
        revalidateTag("LISTING");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
