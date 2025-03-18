"use client";
import React from "react";
import BookingCard from "./BookingCard";
import { IListing } from "@/types";
import { BedSingle, CheckSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PropertyInfo = ({ listing }: { listing: IListing }) => {
    return (
        <section className="mt-8 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="w-[55%] max-md:ml-0 max-md:w-full">
                    <article className="flex flex-col text-neutral-900 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col self-start max-md:max-w-full">
                            <header className="self-start max-md:max-w-full">
                                <h1 className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
                                    {listing.rentArea}
                                </h1>
                                <p className="mt-4 text-lg leading-none">{listing.location}</p>
                            </header>
                            <div className="flex flex-wrap gap-10 items-start py-2.5 mt-8 text-base leading-none max-md:max-w-full">
                                <div className="flex gap-5 items-start">
                                    <div className="flex gap-2 items-start">
                                        <Badge className="text-md">{listing.rentType}</Badge>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="flex gap-2 items-start">
                                        <BedSingle />
                                        <span>{listing.numberOfBedrooms} bedroom</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 max-w-full w-[648px]">
                            <section className="w-full">
                                <h2 className="text-4xl font-bold leading-none max-md:max-w-full">
                                    Desription
                                </h2>
                                <p className="mt-3 text-base leading-5 max-md:max-w-full">
                                    {listing.description}
                                </p>
                            </section>
                        </div>
                        <div className="mt-10 max-w-full w-[648px]">
                            <section className="w-full">
                                <h2 className="text-4xl font-bold leading-none max-md:max-w-full">
                                    Amenities
                                </h2>
                                <p className="mt-3 text-base leading-5 max-md:max-w-full">
                                    {listing?.amenities.map((item, index) => (
                                        <p key={index}>
                                            <div className="flex gap-2 mt-4 w-full">
                                                <CheckSquare />
                                                <div className="self-stretch my-auto">{item}</div>
                                            </div>
                                        </p>
                                    ))}
                                </p>
                            </section>
                        </div>
                    </article>
                </div>
                <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                    <BookingCard listing={listing} />
                </div>
            </div>
        </section>
    );
};

export default PropertyInfo;
