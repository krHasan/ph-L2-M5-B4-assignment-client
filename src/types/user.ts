export interface IUser {
    userId: string;
    name: string;
    email: string;
    hasShop?: boolean;
    isActive?: boolean;
    role: "landlord" | "tenant" | "admin";
    iat?: number;
    exp?: number;
}
