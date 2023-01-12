import {UserModel} from "./UserModel";
import {Course} from "./CourseModel";

export interface TutorModel extends UserModel {
    course?: Course[];
    review?: Review[];
    responses?: Response[];
    request?: Request[];

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