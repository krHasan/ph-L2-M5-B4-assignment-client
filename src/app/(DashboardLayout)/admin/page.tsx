import AdminDashboard from "@/components/modules/admin/admin-dashboard/AdminDashboard";
import { getDashboardStates } from "@/services/Dashboard";

const AdminDashboardPage = async () => {
    const res = await getDashboardStates();
    const { data } = res;
    return (
        <div>
            <AdminDashboard states={data} />
        </div>
    );
};

export default AdminDashboardPage;
