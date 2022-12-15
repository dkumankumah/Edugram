export interface ChatModel {
    _id: string;
    messages: Message[];
    student: string;
    tutor: string;
}

export interface Message {
    message: string;
    sender: string;
    dateTime: string;
}
