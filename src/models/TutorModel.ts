import {UserModel} from "./UserModel";

export interface TutorModel extends UserModel {
    course?: Course[];
    review?: Review[];
    responses?: Response[];
    request?: Request[];

}

export interface Course {
    subject?: string;
    fee: number;
}

export interface Review {
    rating: number;
    remark: string;
    userId: string;
}

export interface Response {
    requestId: string;
    responseTime: ResponseTime;
}

export interface ResponseTime {
    $timestamp: string;
}

export interface Request {
    id: string;
    firstName: string;
    lastName: string;
    location: string;
    subject: string;
    status: string;
}
