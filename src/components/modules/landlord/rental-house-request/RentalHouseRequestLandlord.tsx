"use client";

import { RentifyTable } from "@/components/ui/core/RentifyTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/RentifyTable/TablePagination";
import { IMeta, IRequest } from "@/types";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import moment from "moment";
import { updateRequestStatus } from "@/services/Request";

const RentalHouseRequestLandlord = ({ requests, meta }: { requests: IRequest[]; meta: IMeta }) => {
    const router = useRouter();

    const handleRejectRequest = async (requestId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Reject It!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await updateRequestStatus(requestId, { status: "rejected" });

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

    const handleApprovedRequest = async (requestId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#333",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Approved It!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await updateRequestStatus(requestId, { status: "approved" });

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

    const columns: ColumnDef<IRequest>[] = [
        {
            accessorKey: "listingId.rentArea",
            header: "Area",
            cell: ({ row }) => <span>{row.original.listingId.rentArea}</span>,
        },
        {
            accessorKey: "listingId.rentType",
            header: "Type",
            cell: ({ row }) => <span>{row.original.listingId.rentType}</span>,
        },
        {
            accessorKey: "listingId.rentAmount",
            header: "Amount",
            cell: ({ row }) => <span>৳ {row.original.listingId.rentAmount.toLocaleString()}</span>,
        },
        {
            accessorKey: "Contact Number",
            header: "landlordPhoneNumber",
            cell: ({ row }) => <span>{row.original.landlordPhoneNumber}</span>,
        },
        {
            accessorKey: "Move In Date",
            header: "moveInDate",
            cell: ({ row }) => (
                <span>{moment(row.original.moveInDate).format("MMMM Do YYYY")}</span>
            ),
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div>
                    {row.original.status === "pending" && (
                        <Badge variant="destructive" className="bg-yellow-500 text-black">
                            Pending
                        </Badge>
                    )}
                    {row.original.status === "approved" && (
                        <Badge variant="destructive" className="bg-green-500">
                            Approved
                        </Badge>
                    )}
                    {row.original.status === "rejected" && (
                        <Badge variant="destructive" className="bg-red-500">
                            Rejected
                        </Badge>
                    )}
                    {row.original.status === "canceled" && (
                        <Badge variant="destructive" className="bg-stone-500 text-white">
                            Canceled
                        </Badge>
                    )}
                </div>
            ),
        },
        {
            accessorKey: "paymentStatus",
            header: () => <div>Payment</div>,
            cell: ({ row }) => (
                <div>
                    {row.original.paymentStatus === "pending" ? (
                        <Badge variant="destructive" className="bg-yellow-500 text-black">
                            Pending
                        </Badge>
                    ) : (
                        <Badge variant="outline" className="bg-green-500">
                            Paid
                        </Badge>
                    )}
                </div>
            ),
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <button
                        className="text-gray-500 hover:text-blue-500 cursor-pointer"
                        title="View"
                        onClick={() => router.push(`/rental-houses/${row.original.listingId._id}`)}
                    >
                        <Eye className="w-5 h-5" />
                    </button>

                    {row.original.status === "pending" && (
                        <Button
                            size={"sm"}
                            variant={"outline"}
                            className="cursor-pointer bg-green-500"
                            title="Approve"
                            onClick={() => handleApprovedRequest(row.original._id)}
                        >
                            Approve
                        </Button>
                    )}

                    {row.original.status === "pending" && (
                        <Button
                            size={"sm"}
                            variant={"outline"}
                            className="cursor-pointer bg-rose-500"
                            title="Reject Request"
                            onClick={() => handleRejectRequest(row.original._id)}
                        >
                            Reject
                        </Button>
                    )}
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Rental House Request</h1>
            </div>
            <RentifyTable columns={columns} data={requests || []} />
            <TablePagination totalPage={meta?.totalPage} />
        </div>
    );
};

export default RentalHouseRequestLandlord;
