"use client";

import { RentifyTable } from "@/components/ui/core/RentifyTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Check, Edit, Eye, Plus, SquareX, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/RentifyTable/TablePagination";
import { IListing, IMeta, IRequest } from "@/types";
import Swal from "sweetalert2";
import { deleteListing, updateListingStatus } from "@/services/Listing";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const RentalHouseRequest = ({ requests, meta }: { requests: IRequest[]; meta: IMeta }) => {
    const router = useRouter();

    const handleStatus = async (listingId: string) => {
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
                    const res = await updateListingStatus(listingId);

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

    const handleDelete = async (listingId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await deleteListing(listingId);

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
            accessorKey: "landlordPhoneNumber",
            header: "landlordPhoneNumber",
            cell: ({ row }) => <span>{row.original.landlordPhoneNumber}</span>,
        },
        {
            accessorKey: "moveInDate",
            header: "moveInDate",
            cell: ({ row }) => <span>{row.original.moveInDate.toString()}</span>,
        },
        {
            accessorKey: "specialRequirements",
            header: "Rent Amount",
            cell: ({ row }) => <span>৳ {row.original.specialRequirements}</span>,
        },
        // {
        //     accessorKey: "numberOfBedrooms",
        //     header: "Bedrooms",
        //     cell: ({ row }) => <span>{row.original.numberOfBedrooms}</span>,
        // },
        // {
        //     accessorKey: "isActive",
        //     header: () => <div>Status</div>,
        //     cell: ({ row }) => (
        //         <div>
        //             {row.original.isActive ? (
        //                 <Badge variant="secondary" className="bg-green-500">
        //                     Active
        //                 </Badge>
        //             ) : (
        //                 <Badge variant="destructive">Inactive</Badge>
        //             )}
        //         </div>
        //     ),
        // },
        // {
        //     accessorKey: "action",
        //     header: "Action",
        //     cell: ({ row }) => (
        //         <div className="flex items-center space-x-3">
        //             <button
        //                 className="text-gray-500 hover:text-blue-500 cursor-pointer"
        //                 title="View"
        //                 onClick={() => router.push(`/rental-houses/${row.original._id}`)}
        //             >
        //                 <Eye className="w-5 h-5" />
        //             </button>

        //             <button
        //                 className="text-gray-500 hover:text-green-500 cursor-pointer"
        //                 title="Edit"
        //                 onClick={() =>
        //                     router.push(`/landlord/update-rental-house/${row.original._id}`)
        //                 }
        //             >
        //                 <Edit className="w-5 h-5" />
        //             </button>

        //             <button
        //                 className="text-red-500 cursor-pointer"
        //                 title="Delete"
        //                 onClick={() => handleDelete(row.original._id)}
        //             >
        //                 <Trash className="w-5 h-5" />
        //             </button>

        //             {row.original.isActive ? (
        //                 <button
        //                     className="text-red-500 cursor-pointer"
        //                     title="Make Inactive"
        //                     onClick={() => handleStatus(row.original._id)}
        //                 >
        //                     <SquareX className="w-5 h-5" />
        //                 </button>
        //             ) : (
        //                 <button
        //                     className="bg-green-500 cursor-pointer"
        //                     title="Make Active"
        //                     onClick={() => handleStatus(row.original._id)}
        //                 >
        //                     <Check className="w-5 h-5" />
        //                 </button>
        //             )}
        //         </div>
        //     ),
        // },
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
            <RentifyTable columns={columns} data={requests || []} />
            <TablePagination totalPage={meta?.totalPage} />
        </div>
    );
};

export default RentalHouseRequest;
