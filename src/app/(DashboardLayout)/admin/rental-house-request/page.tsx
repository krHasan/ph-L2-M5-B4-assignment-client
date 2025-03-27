import RentalHouseRequestAdmin from "@/components/modules/admin/rental-house-request/RentalHouseRequestAdmin";
import { getAllRequests } from "@/services/Request";

const RentalHouseRequestLandlordPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const res = await getAllRequests(page, "10");
    const { data, meta } = res;
    return (
        <div>
            <RentalHouseRequestAdmin requests={data} meta={meta} />
        </div>
    );
};

export default RentalHouseRequestLandlordPage;
