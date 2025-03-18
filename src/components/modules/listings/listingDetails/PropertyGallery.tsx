import { IListing } from "@/types";
import Image from "next/image";
import React from "react";

const PropertyGallery = ({ listing }: { listing: IListing }) => {
    return (
        <section className="self-stretch w-full max-md:max-w-full mt-5">
            <div className="flex gap-5 max-md:flex-col">
                <div className="w-[66%] max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col pb-5 w-full rounded-xl min-h-[60vh] max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
                        <Image
                            src={listing?.imageUrls[0]}
                            alt="product image"
                            width={500}
                            height={500}
                            className="object-cover rounded-md absolute inset-0 size-full"
                        />
                    </div>
                </div>
                <div className="w-[34%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-around gap-4 min-h-[60vh]">
                        {listing?.imageUrls.slice(1, 3).map((image: string, idx: number) => (
                            <Image
                                key={idx}
                                src={image}
                                alt="product image"
                                width={500}
                                height={500}
                                className="rounded-md w-full object-cover h-40"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyGallery;
