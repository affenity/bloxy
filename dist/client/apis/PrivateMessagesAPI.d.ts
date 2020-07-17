import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetAnnouncements = {
    collection: {
        id: number;
        sender: {
            id: number;
            name: string;
            displayName: string;
        };
        subject: string;
        body: string;
        created: string;
        updated: string;
    };
    totalCollectionSize: number;
};
export declare type GetAnnouncementsMetaData = {
    numOfAnnouncements: number;
};
export declare type GetMessagesOptions = {
    pageNumber?: number;
    pageSize?: number;
    messageTab?: "Inbox" | "Sent" | "Archive";
};
export declare type GetMessages = {
    collection: {
        id: number;
        sender: {
            id: number;
            name: string;
            displayName: string;
        };
        recipient: {
            id: number;
            name: string;
            displayName: string;
        };
        subject: string;
        body: string;
        created: string;
        updated: string;
        isRead: boolean;
        isSystemMessage: boolean;
        isReportAbuseDisplayed: boolean;
    }[];
    totalCollectionSize: number;
    totalPages: number;
    pageNumber: number;
};
export declare type GetMessageOptions = {
    messageId: number;
};
export declare type GetMessage = GetMessages["collection"][0];
export declare type GetUnreadMessagesCount = {
    count: number;
};
export declare type ArchiveMessagesOptions = {
    messageIds: number[];
};
export declare type ArchiveMessages = {
    failedMessages?: {
        messageId: number;
        errorMessage: string;
    }[];
};
export declare type MarkMessagesReadOptions = ArchiveMessagesOptions;
export declare type MarkMessagesRead = ArchiveMessages;
export declare type MarkMessagesUnreadOptions = ArchiveMessagesOptions;
export declare type MarkMessagesUnread = ArchiveMessages;
export declare type SendMessageOptions = {
    userId: number;
    subject: string;
    body: string;
    recipientId: number;
    replyMessageId?: number;
    includePreviousMessage?: boolean;
};
export declare type SendMessage = {
    success: boolean;
    shortMessage: string;
    message: string;
};
export declare type UnArchiveMessagesOptions = ArchiveMessagesOptions;
export declare type UnArchiveMessages = ArchiveMessages;
export default class PrivateMessagesAPI extends BaseAPI {
    constructor(client: Client);
    getAnnouncements(): Promise<GetAnnouncements>;
    getAnnouncementsMetaData(): Promise<GetAnnouncementsMetaData>;
    getMessages(options: GetMessagesOptions): Promise<GetMessages>;
    getMessage(options: GetMessageOptions): Promise<GetMessage>;
    getUnreadMessagesCount(): Promise<GetUnreadMessagesCount>;
    archiveMessages(options: ArchiveMessagesOptions): Promise<ArchiveMessages>;
    markMessagesRead(options: MarkMessagesReadOptions): Promise<MarkMessagesRead>;
    markMessagesUnread(options: MarkMessagesUnreadOptions): Promise<MarkMessagesUnread>;
    sendMessage(options: SendMessageOptions): Promise<SendMessage>;
    unArchiveMessages(options: UnArchiveMessagesOptions): Promise<UnArchiveMessages>;
}
