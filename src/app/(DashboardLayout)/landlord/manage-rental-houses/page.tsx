import ManageRentalHouse from "@/components/modules/landlord/manage-rental-house/ManageRentalHouse";
import { getMyListings } from "@/services/Listing";
import { toast } from "sonner";

const ManageRentalHousesPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const res = await getMyListings(page, "10");
    if (!res.success) {
        toast.error("please login again");
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
