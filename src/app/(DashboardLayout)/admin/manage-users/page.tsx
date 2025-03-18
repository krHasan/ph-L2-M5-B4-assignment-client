import ManageUsers from "@/components/modules/admin/ManageUsers/ManageUsers";
import { getAllUsers } from "@/services/AuthService";

const ManageUsersPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data, meta } = await getAllUsers(page, "10");
    return (
        <div>
            <ManageUsers users={data} meta={meta} />
        </div>
    );
};

export default ManageUsersPage;
