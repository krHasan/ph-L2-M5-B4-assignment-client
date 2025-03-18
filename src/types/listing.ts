export interface IListing {
    _id: string;
    landlordId: IAppUser;
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

export interface IAppUser {
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
export interface IRequest {
    _id: string;
    landlordId: IAppUser;
    landlordPhoneNumber: string;
    listingId: IListing;
    moveInDate: Date;
    paymentStatus: string;
    specialRequirements: string;
    status: string;
    tenantId: IAppUser;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
