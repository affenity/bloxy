import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type PrivateMessagesGetAnnouncements = {
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
export declare type PrivateMessagesGetAnnouncementsMetaData = {
    numOfAnnouncements: number;
};
export declare type PrivateMessagesGetMessagesOptions = {
    pageNumber?: number;
    pageSize?: number;
    messageTab?: "Inbox" | "Sent" | "Archive";
};
export declare type PrivateMessagesGetMessages = {
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
export declare type PrivateMessagesGetMessageOptions = {
    messageId: number;
};
export declare type PrivateMessagesGetMessage = PrivateMessagesGetMessages["collection"][0];
export declare type PrivateMessagesGetUnreadMessagesCount = {
    count: number;
};
export declare type PrivateMessagesArchiveMessagesOptions = {
    messageIds: number[];
};
export declare type PrivateMessagesArchiveMessages = {
    failedMessages?: {
        messageId: number;
        errorMessage: string;
    }[];
};
export declare type PrivateMessagesMarkMessagesReadOptions = PrivateMessagesArchiveMessagesOptions;
export declare type PrivateMessagesMarkMessagesRead = PrivateMessagesArchiveMessages;
export declare type PrivateMessagesMarkMessagesUnreadOptions = PrivateMessagesArchiveMessagesOptions;
export declare type PrivateMessagesMarkMessagesUnread = PrivateMessagesArchiveMessages;
export declare type PrivateMessagesSendMessageOptions = {
    userId: number;
    subject: string;
    body: string;
    recipientId: number;
    replyMessageId?: number;
    includePreviousMessage?: boolean;
};
export declare type PrivateMessagesSendMessage = {
    success: boolean;
    shortMessage: string;
    message: string;
};
export declare type PrivateMessagesUnArchiveMessagesOptions = PrivateMessagesArchiveMessagesOptions;
export declare type PrivateMessagesUnArchiveMessages = PrivateMessagesArchiveMessages;
export declare class PrivateMessagesAPI extends BaseAPI {
    constructor(client: Client);
    getAnnouncements(): Promise<PrivateMessagesGetAnnouncements>;
    getAnnouncementsMetaData(): Promise<PrivateMessagesGetAnnouncementsMetaData>;
    getMessages(options: PrivateMessagesGetMessagesOptions): Promise<PrivateMessagesGetMessages>;
    getMessage(options: PrivateMessagesGetMessageOptions): Promise<PrivateMessagesGetMessage>;
    canMessage(options: {
        userId: number;
    }): Promise<boolean>;
    getUnreadMessagesCount(): Promise<PrivateMessagesGetUnreadMessagesCount>;
    archiveMessages(options: PrivateMessagesArchiveMessagesOptions): Promise<PrivateMessagesArchiveMessages>;
    markMessagesRead(options: PrivateMessagesMarkMessagesReadOptions): Promise<PrivateMessagesMarkMessagesRead>;
    markMessagesUnread(options: PrivateMessagesMarkMessagesUnreadOptions): Promise<PrivateMessagesMarkMessagesUnread>;
    sendMessage(options: PrivateMessagesSendMessageOptions): Promise<PrivateMessagesSendMessage>;
    unArchiveMessages(options: PrivateMessagesUnArchiveMessagesOptions): Promise<PrivateMessagesUnArchiveMessages>;
}
