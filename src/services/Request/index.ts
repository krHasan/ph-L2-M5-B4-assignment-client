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

// export const getMyListings = async (page?: string, limit?: string) => {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_BASE_API}/listings/my-listings?limit=${limit}&page=${page}`,
//             {
//                 headers: {
//                     Authorization: (await cookies()).get("accessToken")!.value,
//                 },
//                 next: {
//                     tags: ["REQUESTS"],
//                 },
//             }
//         );
//         const data = await res.json();
//         return data;
//     } catch (error: any) {
//         return Error(error.message);
//     }
// };

// export const getSingleListing = async (listingId: string) => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
//             next: {
//                 tags: ["REQUESTS"],
//             },
//         });
//         const data = await res.json();
//         return data;
//     } catch (error: any) {
//         return Error(error.message);
//     }
// };

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

// export const updateListing = async (listingData: FormData, listingId: string): Promise<any> => {
//     const token = await getValidToken();
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
//             method: "PATCH",
//             body: listingData,
//             headers: {
//                 Authorization: token,
//             },
//         });
//         revalidateTag("REQUESTS");
//         return res.json();
//     } catch (error: any) {
//         return Error(error);
//     }
// };

// export const deleteListing = async (listingId: string): Promise<any> => {
//     const token = await getValidToken();
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: token,
//             },
//         });
//         revalidateTag("REQUESTS");
//         return res.json();
//     } catch (error: any) {
//         return Error(error);
//     }
// };

// export const updateListingStatus = async (listingId: string): Promise<any> => {
//     const token = await getValidToken();
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_BASE_API}/listings/update-status/${listingId}`,
//             {
//                 method: "PATCH",
//                 headers: {
//                     Authorization: token,
//                 },
//             }
//         );
//         revalidateTag("REQUESTS");
//         return res.json();
//     } catch (error: any) {
//         return Error(error);
//     }
// };
