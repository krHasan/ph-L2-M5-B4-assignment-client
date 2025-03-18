import RentalHouseRequest from "@/components/modules/tenant/rental-house-request/ManageRentalHouse";
import { getAllRequests } from "@/services/Request";
import { toast } from "sonner";

const RentalHouseRequestPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const res = await getAllRequests(page, "10");
    if (!res.success) {
        toast.error("please login again");
        return false;
    }
    const { data, meta } = res;
    console.log(data);
    return (
        <div>
            <RentalHouseRequest requests={data} meta={meta} />
        </div>
    );
};

export default RentalHouseRequestPage;
