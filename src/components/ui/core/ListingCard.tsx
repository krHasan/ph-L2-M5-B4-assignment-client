"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { IListing } from "@/types";
import { BedSingle, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ListingCard = ({ listing }: { listing: IListing }) => {
    return (
        <article className="flex flex-col py-4 pr-4 pl-3.5 bg-white rounded-2xl shadow-lg min-w-60 w-[300px]">
            <Image
                src={
                    listing?.imageUrls[0] ||
                    "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                }
                alt={listing?.location}
                width={300}
                height={300}
                className="object-contain self-center max-w-full rounded-xl aspect-[1.41] w-[314px]"
            />
            <div className="mt-4 w-full">
                <header>
                    <h3 className="text-lg font-semibold text-zinc-900">{listing?.rentArea}</h3>
                    <div className="flex gap-1 items-center mt-1.5 w-full text-xs text-neutral-700">
                        <Map />
                        <p>{listing?.location}</p>
                    </div>
                </header>
                <p className="mt-5 text-lg font-semibold text-red-700">
                    ৳ {listing?.rentAmount.toLocaleString()} / Month
                </p>
                <div className="flex gap-4 items-start mt-5 w-full text-sm whitespace-nowrap text-neutral-700">
                    <div className="flex gap-1 items-center">
                        {listing.rentType === "family" && (
                            <Badge className="text-md" variant={"default"}>
                                {listing?.rentType}
                            </Badge>
                        )}
                        {listing.rentType === "bachelor" && (
                            <Badge className="text-md" variant={"destructive"}>
                                {listing?.rentType}
                            </Badge>
                        )}
                        {listing.rentType === "office" && (
                            <Badge className="text-md" variant={"outline"}>
                                {listing?.rentType}
                            </Badge>
                        )}
                        {listing.rentType === "sublet" && (
                            <Badge className="text-md" variant={"secondary"}>
                                {listing?.rentType}
                            </Badge>
                        )}
                    </div>
                    <div className="flex gap-1 items-center">
                        <BedSingle />
                        <span>Beds:</span>
                        <span className="font-semibold">{listing?.numberOfBedrooms}</span>
                    </div>
                </div>
            </div>
            <CardFooter className="block mt-5">
                <div className="flex gap-2 items-center justify-center">
                    <Button size="sm" variant="default" className="w-32">
                        <Link href={`/rental-houses/${listing?._id}`} passHref>
                            See Details
                        </Link>
                    </Button>
                </div>
            </CardFooter>
        </article>
    );
};

export default ListingCard;
