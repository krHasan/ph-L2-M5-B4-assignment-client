"use client";

import { IListing } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

const ListingCard = ({ listing }: { listing: IListing }) => {
    return (
        <Card className="p-3">
            <CardHeader className="relative p-0 h-48">
                <Image
                    src={
                        listing?.imageUrls[0] ||
                        "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                    }
                    width={500}
                    height={500}
                    alt="listing image"
                    className="rounded-sm h-48 object-cover"
                />
            </CardHeader>

            <CardContent className=" p-0 mt-2">
                <Link href={`/rental-houses/${listing?._id}`} passHref>
                    <CardTitle
                        title={listing?.location}
                        className="font-semibold cursor-pointer text-sm"
                    >
                        {listing?.location.length > 20
                            ? listing?.location?.slice(0, 20) + "..."
                            : listing?.location}
                    </CardTitle>
                </Link>

                <div className="flex items-center justify-between my-2">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">
                            ৳ {listing?.rentAmount.toLocaleString()}
                        </span>
                    </p>
                </div>
            </CardContent>

            <CardFooter className="block p-0">
                <div className="flex gap-2 items-center justify-between">
                    <Button
                        disabled={listing?.numberOfBedrooms === 0}
                        size="sm"
                        variant="outline"
                        className="w-32"
                    >
                        Buy Now
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ListingCard;
