import ManageRentalHouseAdmin from "@/components/modules/admin/manage-rental-house/ManageRentalHouseAdmin";
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
            <ManageRentalHouseAdmin listings={data} meta={meta} />
        </div>
    );
};

export default ManageRentalHousesPage;
