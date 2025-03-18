import { IListing } from "@/types";
import FilterSidebar from "./filterSidebar/FilterSidebar";
import ListingCard from "@/components/ui/core/ListingCard";

const AllListings = ({ listings }: { listings: IListing[] }) => {
    return (
        <div className="flex gap-8 my-10">
            <div className="w-3/12">
                <FilterSidebar />
            </div>
            <div className="w-9/12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings?.map((listing: IListing, idx: number) => (
                        <ListingCard key={idx} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllListings;
