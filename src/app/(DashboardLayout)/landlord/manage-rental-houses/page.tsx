import ManageRentalHouse from "@/components/modules/landlord/manage-rental-house/ManageRentalHouse";
import { getAllListings } from "@/services/Listing";

const ManageRentalHousesPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const { data, meta } = await getAllListings(page, "10");
    return (
        <div>
            <ManageRentalHouse listings={data} meta={meta} />
        </div>
    );
};

export default ManageRentalHousesPage;
