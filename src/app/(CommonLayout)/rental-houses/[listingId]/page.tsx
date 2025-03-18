import ListingDetails from "@/components/modules/listings/listingDetails/ListingDetails";
import RentifyContainer from "@/components/ui/core/RentifyContainer";
import { getSingleListing } from "@/services/Listing";

const RentalHousesDetailsPage = async ({ params }: { params: Promise<{ listingId: string }> }) => {
    const { listingId } = await params;

    const { data: listing } = await getSingleListing(listingId);

    return (
        <RentifyContainer>
            <ListingDetails listing={listing} />
        </RentifyContainer>
    );
};

export default RentalHousesDetailsPage;
