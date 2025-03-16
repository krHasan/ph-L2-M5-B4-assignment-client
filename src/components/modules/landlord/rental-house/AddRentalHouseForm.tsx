"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import RentifyImageUploader from "@/components/ui/core/RentifyImageUploader";
import ImagePreviewer from "@/components/ui/core/RentifyImageUploader/ImagePreviewer";
import { Plus } from "lucide-react";
import Logo from "@/assets/Logo";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addListing } from "@/services/Listing";
import { useUser } from "@/context/UserContext";

export default function AddRentalHouseForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const { user } = useUser();

    const rentType = [
        { id: "family", name: "Family" },
        { id: "bachelor", name: "Bachelor" },
        { id: "office", name: "Office" },
        { id: "sublet", name: "Sublet" },
    ];

    const rentArea = [
        { id: "Mirpur", name: "Mirpur" },
        { id: "Dhanmondi", name: "Dhanmondi" },
        { id: "Mohammadpur", name: "Mohammadpur" },
        { id: "Uttora", name: "Uttora" },
        { id: "Badda", name: "Badda" },
        { id: "Bashundhara", name: "Bashundhara" },
    ];

    const router = useRouter();

    const form = useForm({
        defaultValues: {
            rentArea: "",
            location: "",
            description: "",
            rentType: "",
            rentAmount: "",
            numberOfBedrooms: "",
            amenities: [{ value: "" }],
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const { append: appendAmenity, fields: amenityFields } = useFieldArray({
        control: form.control,
        name: "amenities",
    });

    const addAmenity = () => {
        appendAmenity({ value: "" });
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (!user) {
            toast.error("User not found");
            return false;
        }

        const amenities = data.amenities.map((amenity: { value: string }) => amenity.value);

        const modifiedData = {
            ...data,
            landlordEmail: user.email,
            amenities,
            rentAmount: parseFloat(data.rentAmount),
            numberOfBedrooms: parseInt(data.numberOfBedrooms),
        };

        const formData = new FormData();
        formData.append("data", JSON.stringify(modifiedData));

        for (const file of imageFiles) {
            formData.append("images", file);
        }
        try {
            const res = await addListing(formData);

            if (res.success) {
                toast.success(res.message);
                router.push("/landlord/manage-rental-houses");
            } else {
                toast.error(res.message);
                console.log(res);
            }
        } catch (err: any) {
            console.error(err);
            console.log(err);
        }
    };

    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
            <div className="flex items-center space-x-4 mb-5 ">
                <Logo />

                <h1 className="text-xl font-bold">Add A Rental House</h1>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-between items-center border-t border-b py-3 my-5">
                        <p className="text-primary font-bold text-xl">Basic Information</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="rentArea"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rent Area</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Rent Area" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {rentArea.map((area) => (
                                                <SelectItem key={area?.id} value={area?.id}>
                                                    {area?.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rentType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rent Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Rent Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {rentType.map((area) => (
                                                <SelectItem key={area?.id} value={area?.id}>
                                                    {area?.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rentAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rent Amount</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="numberOfBedrooms"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number Of Bedrooms</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="my-5 space-y-4">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="h-36 resize-none"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center border-t border-b py-3 my-5">
                            <p className="text-primary font-bold text-xl">Images</p>
                        </div>
                        <div className="flex gap-4 ">
                            <RentifyImageUploader
                                setImageFiles={setImageFiles}
                                setImagePreview={setImagePreview}
                                label="Upload Image"
                                className="w-fit mt-0"
                            />
                            <ImagePreviewer
                                className="flex flex-wrap gap-4"
                                setImageFiles={setImageFiles}
                                imagePreview={imagePreview}
                                setImagePreview={setImagePreview}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center border-t border-b py-3 my-5">
                            <p className="text-primary font-bold text-xl">Amenities</p>
                            <Button
                                variant="outline"
                                className="size-10"
                                onClick={addAmenity}
                                type="button"
                            >
                                <Plus className="text-primary" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {amenityFields.map((amenities, index) => (
                                <div key={amenities.id}>
                                    <FormField
                                        control={form.control}
                                        name={`amenities.${index}.value`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Amenities {index + 1}</FormLabel>
                                                <FormControl>
                                                    <Input {...field} value={field.value || ""} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Adding Rental House....." : "Add Rental House"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
