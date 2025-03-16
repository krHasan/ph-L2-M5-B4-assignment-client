"use client";

import { RentifyTable } from "@/components/ui/core/RentifyTable/index";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import TablePagination from "@/components/ui/core/RentifyTable/TablePagination";
import { IListing, IMeta } from "@/types";

const ManageRentalHouse = ({ listings, meta }: { listings: IListing[]; meta: IMeta }) => {
    const router = useRouter();

    const handleView = (listing: IListing) => {
        console.log("Viewing product:", listing);
    };

    const handleDelete = (listingId: string) => {
        console.log("Deleting product with ID:", listingId);
    };

    const columns: ColumnDef<IListing>[] = [
        {
            accessorKey: "landlordId.name",
            header: "Landlord Name",
            cell: ({ row }) => <span>{row.original.landlordId.name}</span>,
        },
        {
            accessorKey: "landlordId.email",
            header: "Email",
            cell: ({ row }) => <span>{row.original.landlordId.email}</span>,
        },
        {
            accessorKey: "landlordId.phoneNumber",
            header: "Phone Number",
            cell: ({ row }) => <span>{row.original.landlordId.phoneNumber}</span>,
        },
        {
            accessorKey: "rentArea",
            header: "Rent Area",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <Image
                        src={row.original.imageUrls[0]}
                        alt={row.original.location}
                        width={40}
                        height={40}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="truncate">{row.original.rentArea}</span>
                </div>
            ),
        },
        {
            accessorKey: "rentType",
            header: "Rent Type",
            cell: ({ row }) => <span>{row.original.rentType}</span>,
        },
        {
            accessorKey: "location",
            header: "Address",
            cell: ({ row }) => <span>{row.original.location}</span>,
        },
        {
            accessorKey: "rentAmount",
            header: "Rent Amount",
            cell: ({ row }) => <span>৳ {row.original.rentAmount.toLocaleString()}</span>,
        },
        {
            accessorKey: "numberOfBedrooms",
            header: "Bedrooms",
            cell: ({ row }) => <span>{row.original.numberOfBedrooms}</span>,
        },
        {
            accessorKey: "action",
            header: "Action",
            cell: ({ row }) => (
                <div className="flex items-center space-x-3">
                    <button
                        className="text-gray-500 hover:text-blue-500"
                        title="View"
                        onClick={() => handleView(row.original)}
                    >
                        <Eye className="w-5 h-5" />
                    </button>

                    <button
                        className="text-gray-500 hover:text-green-500"
                        title="Edit"
                        onClick={() =>
                            router.push(`/landlord/update-rental-house/${row.original._id}`)
                        }
                    >
                        <Edit className="w-5 h-5" />
                    </button>

                    <button
                        className="text-gray-500 hover:text-red-500"
                        title="Delete"
                        onClick={() => handleDelete(row.original._id)}
                    >
                        <Trash className="w-5 h-5" />
                    </button>
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
            <RentifyTable columns={columns} data={listings || []} />
            <TablePagination totalPage={meta?.totalPage} />
        </div>
    );
};

export default ManageRentalHouse;
