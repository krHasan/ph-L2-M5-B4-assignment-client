"use client";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterSidebar() {
    const [rentAmount, setRentAmount] = useState([0]);

    const [isLoading, setIsLoading] = useState(false);

    const rentTypes = [
        { _id: "family", name: "Family" },
        { _id: "bachelor", name: "Bachelor" },
        { _id: "office", name: "Office" },
        { _id: "sublet", name: "Sublet" },
    ];
    const rentAreas = [
        { _id: "Mirpur", name: "Mirpur" },
        { _id: "Dhanmondi", name: "Dhanmondi" },
        { _id: "Mohammadpur", name: "Mohammadpur" },
        { _id: "Uttora", name: "Uttora" },
        { _id: "Badda", name: "Badda" },
        { _id: "Bashundhara", name: "Bashundhara" },
    ];

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearchQuery = (query: string, value: string | number) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set(query, value.toString());

        router.push(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    return (
        <div className="p-6  bg-white rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filter</h2>
                {searchParams.toString().length > 0 && (
                    <Button
                        onClick={() => {
                            router.push(`${pathname}`, {
                                scroll: false,
                            });
                        }}
                        size="sm"
                        className="bg-black hover:bg-gray-700 ml-5"
                    >
                        Clear Filters
                    </Button>
                )}
            </div>
            {/* Filter by rentAmount */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Rent Amount</h2>
                <div className="flex items-center justify-between text-sm mb-2">
                    <span>৳ 0</span>
                    <span>৳ 500000</span>
                </div>
                <Slider
                    max={500000}
                    step={1}
                    onValueChange={(value) => {
                        setRentAmount(value);
                        handleSearchQuery("rentAmount", value[0]);
                    }}
                    className="w-full"
                />
                <p className="text-sm mt-2">Selected Amount: ${rentAmount[0]}</p>
            </div>
            {/* rentType */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Rent Type</h2>
                {!isLoading && (
                    <RadioGroup className="space-y-2">
                        {rentTypes?.map((rentType: { _id: string; name: string }) => (
                            <div key={rentType._id} className="flex items-center space-x-2">
                                <RadioGroupItem
                                    onClick={() => handleSearchQuery("rentType", rentType._id)}
                                    value={rentType._id}
                                    id={rentType._id}
                                />
                                <Label htmlFor={rentType._id} className="text-gray-500 font-light">
                                    {rentType.name}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                )}
            </div>
            {/* rentArea */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Rent Area</h2>
                {!isLoading && (
                    <RadioGroup className="space-y-2">
                        {rentAreas?.map((rentArea: { _id: string; name: string }) => (
                            <div key={rentArea._id} className="flex items-center space-x-2">
                                <RadioGroupItem
                                    onClick={() => handleSearchQuery("rentArea", rentArea._id)}
                                    value={rentArea._id}
                                    id={rentArea._id}
                                />
                                <Label htmlFor={rentArea._id} className="text-gray-500 font-light">
                                    {rentArea.name}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                )}
            </div>
        </div>
    );
}
