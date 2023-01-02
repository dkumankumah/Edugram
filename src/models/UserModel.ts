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
    phoneNumber?: number;
    verified?: boolean;
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
    lessonLocation?: LessonLocation[]
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
