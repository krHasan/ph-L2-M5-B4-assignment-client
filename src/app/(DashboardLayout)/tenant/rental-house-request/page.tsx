import RentalHouseRequest from "@/components/modules/tenant/rental-house-request/RentalHouseRequest";
import { getAllRequests } from "@/services/Request";

const RentalHouseRequestPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ page: string }>;
}) => {
    const { page } = await searchParams;
    const res = await getAllRequests(page, "10");
    const { data, meta } = res;
    return (
        <div>
            <RentalHouseRequest requests={data} meta={meta} />
        </div>
    );
};

export default RentalHouseRequestPage;
