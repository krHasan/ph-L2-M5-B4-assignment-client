import { IListing } from "@/types";
import PropertyGallery from "./PropertyGallery";
import PropertyInfo from "./PropertyInfo";
import PolicyDetails from "./PolicyDetails";

const ListingDetails = ({ listing }: { listing: IListing }) => {
    return (
        <main className="flex overflow-hidden flex-col items-center pb-16 bg-white">
            <PropertyGallery listing={listing} />
            <PropertyInfo listing={listing} />
            <PolicyDetails />
        </main>
    );
};

export default ListingDetails;
