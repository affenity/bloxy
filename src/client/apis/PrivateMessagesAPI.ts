import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetAnnouncements = {
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
}
export type GetAnnouncementsMetaData = {
    numOfAnnouncements: number;
}
export type GetMessagesOptions = {
    pageNumber?: number;
    pageSize?: number;
    messageTab?: "Inbox" | "Sent" | "Archive";
}
export type GetMessages = {
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
}
export type GetMessageOptions = {
    messageId: number;
}
export type GetMessage = GetMessages["collection"][0];
export type GetUnreadMessagesCount = {
    count: number;
}
export type ArchiveMessagesOptions = {
    messageIds: number[];
}
export type ArchiveMessages = {
    failedMessages?: {
        messageId: number;
        errorMessage: string;
    }[];
}
export type MarkMessagesReadOptions = ArchiveMessagesOptions;
export type MarkMessagesRead = ArchiveMessages;
export type MarkMessagesUnreadOptions = ArchiveMessagesOptions;
export type MarkMessagesUnread = ArchiveMessages;
export type SendMessageOptions = {
    userId: number;
    subject: string;
    body: string;
    recipientId: number;
    replyMessageId?: number;
    includePreviousMessage?: boolean;
}
export type SendMessage = {
    success: boolean;
    shortMessage: string;
    message: string;
}
export type UnArchiveMessagesOptions = ArchiveMessagesOptions;
export type UnArchiveMessages = ArchiveMessages;


export default class PrivateMessagesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://privatemessages.roblox.com/"
        });
    }

    getAnnouncements (): Promise<GetAnnouncements> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/announcements`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAnnouncementsMetaData (): Promise<GetAnnouncementsMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/announcements/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMessages (options: GetMessagesOptions): Promise<GetMessages> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMessage (options: GetMessageOptions): Promise<GetMessage> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/${options.messageId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUnreadMessagesCount (): Promise<GetUnreadMessagesCount> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/unread/count`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    archiveMessages (options: ArchiveMessagesOptions): Promise<ArchiveMessages> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/archive`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    markMessagesRead (options: MarkMessagesReadOptions): Promise<MarkMessagesRead> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/mark-read`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    markMessagesUnread (options: MarkMessagesUnreadOptions): Promise<MarkMessagesUnread> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/mark-unread`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    sendMessage (options: SendMessageOptions): Promise<SendMessage> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/send`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    unArchiveMessages (options: UnArchiveMessagesOptions): Promise<UnArchiveMessages> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/messages/unarchive`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
