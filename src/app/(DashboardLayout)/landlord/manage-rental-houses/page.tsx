import ManageRentalHouse from "@/components/modules/landlord/manage-rental-house/ManageRentalHouse";
import { getMyListings } from "@/services/Listing";

const ManageRentalHousesPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const res = await getMyListings(page, "10");
    if (!res.success) {
        console.log(res.message);
        return false;
    }
    const { data, meta } = res;
    return (
        <div>
            <ManageRentalHouse listings={data} meta={meta} />
        </div>
    );
};

export default ManageRentalHousesPage;
