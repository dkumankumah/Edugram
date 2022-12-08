export interface UserModel {
    _id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    address?: Address;
    dateOfBirth?: string;
    profile: Profile;
    educationLevel?: string;
    phonenumber?: number;
    review?: Review[];
    verified?: boolean;
    responses?: Respons[];
    averageResponseTime?: number;
    role: string;
    notification?: Notification[];
}

export interface Address {
    city: string;
    houseNumber: string;
    postalCode: string;
    street: string;
}

export interface Profile {
    bio?: string;
    image?: string;
}

export interface Review {
    rating: number;
    remark: string;
    userId: string;
}

export interface ResponseTime {
    $timestamp: string;
}

export interface Respons {
    requestId: string;
    responseTime: ResponseTime;
}

export interface Notification {
    notificationId: string;
    description: string;
}

