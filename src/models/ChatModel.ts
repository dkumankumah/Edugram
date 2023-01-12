export interface ChatModel {
    _id: string;
    messages: Message[];
    student: UserChatModel;
    tutor: UserChatModel;
}

export interface Message {
    message: string;
    sender: string;
    dateTime: string;
}

export interface UserChatModel {
    _id: string;
    firstName: string;
}
