import {UserModel} from "./UserModel";

export interface TutorModel extends UserModel {
    course: Course[];
    review?: Review[];
    responses?: Response[];

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
