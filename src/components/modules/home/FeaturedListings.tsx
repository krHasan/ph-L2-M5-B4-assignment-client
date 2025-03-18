import { Button } from "@/components/ui/button";
import RentifyContainer from "@/components/ui/core/RentifyContainer";
import { getAllListings } from "@/services/Listing";
import { IListing } from "@/types";
import Link from "next/link";
import ListingCard from "@/components/ui/core/ListingCard";

const FeaturedListings = async () => {
    const { data: listings } = await getAllListings();
    return (
        <div className=" bg-white bg-opacity-50 pt-6 pb-8">
            <RentifyContainer className="my-16">
                <div className="flex items-center justify-between ">
                    <h2 className="text-3xl font-bold">Featured Rental Houses</h2>
                    <Link href="/rental-houses" className="cursor-pointer">
                        <Button variant="outline" className="rounded-full">
                            All Collection
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {listings?.slice(0, 3).map((listing: IListing, idx: number) => (
                        <ListingCard key={idx} listing={listing} />
                    ))}
                </div>
            </RentifyContainer>
        </div>
    );
};

export default FeaturedListings;
