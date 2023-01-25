
export interface UserModel {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address?: Address;
    gender: string;
    dateOfBirth?: string;
    profile: Profile;
    educationLevel?: string;
    phoneNumber?: string;
    verified?: boolean;
    averageResponseTime?: number;
    role: string;
    notification?: Notification[];
    request?: Request[];

}

export interface Address {
    _id: string;
    city: string;
    houseNumber: string;
    postalCode: string;
    street: string;
}

export interface Profile {
    bio?: string;
    image?: string;
    lessonLocation?: LessonLocation[]
    isVerified?: boolean
}

export interface Notification {
    notificationId: string;
    description: string;
}

export interface LessonLocation {
    locationId: number;
    locationName: string;
    chosen: boolean
}

export interface Request {
    _id: string;
    firstName: string;
    lastName: string;
    email: string,
    location: string;
    subject: string;
    status: string;
}
