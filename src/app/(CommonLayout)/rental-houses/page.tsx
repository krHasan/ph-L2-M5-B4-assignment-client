import AllListings from "@/components/modules/listings/AllListings";
import RentifyContainer from "@/components/ui/core/RentifyContainer";
import { getAllListings } from "@/services/Listing";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const AllRentalHousesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const { data: listings } = await getAllListings(undefined, undefined, query);

    return (
        <RentifyContainer>
            <h2 className="text-xl font-bold my-5 text-center">All Available Rental Houses </h2>
            <AllListings listings={listings} />
        </RentifyContainer>
    );
};

export default AllRentalHousesPage;
