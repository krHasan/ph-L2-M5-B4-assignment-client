import UpdateListingForm from "@/components/modules/landlord/rental-house/UpdateRentalHouseForm";
import { getSingleListing } from "@/services/Listing";

const UpdateListingPage = async ({ params }: { params: Promise<{ listingId: string }> }) => {
    const { listingId } = await params;

    const { data: listing } = await getSingleListing(listingId);

    return (
        <div className="flex justify-center items-center">
            <UpdateListingForm listing={listing} />
        </div>
    );
};

export default UpdateListingPage;
