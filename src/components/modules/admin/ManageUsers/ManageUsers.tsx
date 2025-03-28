"use client";

import { RentifyTable } from "@/components/ui/core/RentifyTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Check, Plus, SquareX } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/RentifyTable/TablePagination";
import { IAppUser, IMeta } from "@/types";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { updateUserStatus } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";

const ManageUsers = ({ users, meta }: { users: IAppUser[]; meta: IMeta }) => {
    const router = useRouter();
    const { user } = useUser();

    const handleStatus = async (userId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are going to change the status",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#333",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Change Status!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await updateUserStatus(userId);

                    if (res.success) {
                        toast.success(res.message);
                    } else {
                        toast.error(res.message);
                    }
                } catch (err: any) {
                    console.error(err);
                }
            }
        });
    };

    const columns: ColumnDef<IAppUser>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => <span>{row.original.name}</span>,
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => <span>{row.original.email}</span>,
        },
        {
            accessorKey: "phoneNumber",
            header: "Phone Number",
            cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }) => <span>{row.original.role}</span>,
        },
        {
            accessorKey: "status",
            header: () => <div>Status</div>,
            cell: ({ row }) => (
                <div>
                    {row.original.status === "active" ? (
                        <Badge variant="secondary" className="bg-green-500">
                            Active
                        </Badge>
                    ) : (
                        <Badge variant="destructive">Blocked</Badge>
                    )}
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <div>
                    {row.original.email !== user?.email && (
                        <div className="flex items-center space-x-3">
                            {row.original.status === "active" ? (
                                <button
                                    className="text-red-500 cursor-pointer"
                                    title="Block User"
                                    onClick={() => handleStatus(row.original._id)}
                                >
                                    <SquareX className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    className="bg-green-500 cursor-pointer"
                                    title="Make Active"
                                    onClick={() => handleStatus(row.original._id)}
                                >
                                    <Check className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Manage Rental Houses</h1>
                <div className="flex items-center gap-2">
                    <Button
                        onClick={() => router.push("/landlord/add-rental-house")}
                        size="sm"
                        className="cursor-pointer"
                    >
                        Add New <Plus />
                    </Button>
                </div>
            </div>
            <RentifyTable columns={columns} data={users || []} />
            <TablePagination totalPage={meta?.totalPage} />
        </div>
    );
};

export default ManageUsers;
