"use client";
import { IListing } from "@/types";
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useUser } from "@/context/UserContext";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { createRequest } from "@/services/Request";
import { useRouter } from "next/navigation";

const BookingCard = ({ listing }: { listing: IListing }) => {
    const [date, setDate] = useState<Date>();
    const [note, setNote] = useState("");
    const { user } = useUser();
    const router = useRouter();

    const handleBooking = () => {
        if (!date) {
            toast.error("Please select a date first");
        }
        const saveData = {
            listingId: listing._id,
            moveInDate: date,
            specialRequirements: note,
        };
        Swal.fire({
            title: "Are you sure?",
            text: "You are going to create a request",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#333",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await createRequest(saveData);

                    if (res.success) {
                        router.push("/tenant/rental-house-request");
                        toast.success(res.message);
                    } else {
                        toast.error(res.message);
                    }
                } catch (err: any) {
                    console.error(err);
                }
            }
        });
    };

    return (
        <aside className="flex flex-col grow items-center p-10 w-full bg-zinc-100 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-bold leading-none text-neutral-900">
                ৳ {listing.rentAmount.toLocaleString()} / Month
            </h2>
            <div className="flex flex-col gap-y-5 mt-10 text-lg leading-none text-neutral-900 max-md:max-w-full">
                <div className="flex flex-col gap-y-3">
                    <label className="font-bold" htmlFor="move-in">
                        Move in
                    </label>
                    <div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <label className="font-bold" htmlFor="note">
                        Note
                    </label>
                    <Input
                        type="text"
                        id="note"
                        className="bg-white"
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Anything on your mind"
                    />
                </div>
            </div>
            <div className="flex flex-col mt-10 w-full max-w-[441px] max-md:max-w-full">
                {user?.role === "tenant" ? (
                    <button
                        onClick={handleBooking}
                        className="gap-2.5 self-center px-10 py-3 text-lg font-bold leading-none text-white bg-teal-900 rounded-[40px] max-md:px-5 cursor-pointer"
                    >
                        Request For Rent
                    </button>
                ) : (
                    <p className="text-center text-red-500">Only A Tenant Can Apply For Booking</p>
                )}

                <p className="mt-4 text-sm leading-4 text-center text-neutral-900 max-md:max-w-full">
                    When you book this apartment, your reservation will be confirmed by the
                    landlord, then you have to make a advanced payment of one month rent
                </p>
            </div>
        </aside>
    );
};

export default BookingCard;
