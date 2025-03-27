"use client";

import { RentifyTable } from "@/components/ui/core/RentifyTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import TablePagination from "@/components/ui/core/RentifyTable/TablePagination";
import { IMeta, IRequest } from "@/types";
import { Badge } from "@/components/ui/badge";
import moment from "moment";

const RentalHouseRequestAdmin = ({ requests, meta }: { requests: IRequest[]; meta: IMeta }) => {
    const router = useRouter();

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

export default RentalHouseRequestAdmin;
