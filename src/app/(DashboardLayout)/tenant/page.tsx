import TenantDashboard from "@/components/modules/tenant/tenant-dashboard/TenantDashboard";
import { getDashboardStates } from "@/services/Dashboard";

const TenantDashboardPage = async () => {
    const res = await getDashboardStates();
    const { data } = res;
    return (
        <div>
            <TenantDashboard states={data} />
        </div>
    );
};

export default TenantDashboardPage;
