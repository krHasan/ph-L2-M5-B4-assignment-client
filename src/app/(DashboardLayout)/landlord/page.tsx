import LandlordDashboard from "@/components/modules/landlord/landlord-dashboard/LandlordDashboard";
import { getDashboardStates } from "@/services/Dashboard";

const LandlordDashboardPage = async () => {
    const res = await getDashboardStates();
    const { data } = res;
    return (
        <div>
            <LandlordDashboard states={data} />
        </div>
    );
};

export default LandlordDashboardPage;
