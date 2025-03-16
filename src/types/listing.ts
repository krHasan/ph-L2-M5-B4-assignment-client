export interface IListing {
    _id: string;
    landlordId: ILandlord;
    location: string;
    description: string;
    rentType: string;
    rentAmount: number;
    numberOfBedrooms: number;
    imageUrls: string[];
    amenities: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    isActive: boolean;
    rentArea: string;
    status: string;
}

export interface ILandlord {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    needsPasswordChange: boolean;
    role: string;
    status: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
