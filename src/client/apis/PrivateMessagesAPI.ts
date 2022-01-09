import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type PrivateMessagesGetAnnouncements = {
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
export type PrivateMessagesGetAnnouncementsMetaData = {
  numOfAnnouncements: number;
};
export type PrivateMessagesGetMessagesOptions = {
  pageNumber?: number;
  pageSize?: number;
  messageTab?: "Inbox" | "Sent" | "Archive";
};
export type PrivateMessagesGetMessages = {
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
export type PrivateMessagesGetMessageOptions = {
  messageId: number;
};
export type PrivateMessagesGetMessage =
  PrivateMessagesGetMessages["collection"][0];
export type PrivateMessagesGetUnreadMessagesCount = {
  count: number;
};
export type PrivateMessagesArchiveMessagesOptions = {
  messageIds: number[];
};
export type PrivateMessagesArchiveMessages = {
  failedMessages?: {
    messageId: number;
    errorMessage: string;
  }[];
};
export type PrivateMessagesMarkMessagesReadOptions =
  PrivateMessagesArchiveMessagesOptions;
export type PrivateMessagesMarkMessagesRead = PrivateMessagesArchiveMessages;
export type PrivateMessagesMarkMessagesUnreadOptions =
  PrivateMessagesArchiveMessagesOptions;
export type PrivateMessagesMarkMessagesUnread = PrivateMessagesArchiveMessages;
export type PrivateMessagesSendMessageOptions = {
  userId: number;
  subject: string;
  body: string;
  recipientId: number;
  replyMessageId?: number;
  includePreviousMessage?: boolean;
};
export type PrivateMessagesSendMessage = {
  success: boolean;
  shortMessage: string;
  message: string;
};
export type PrivateMessagesUnArchiveMessagesOptions =
  PrivateMessagesArchiveMessagesOptions;
export type PrivateMessagesUnArchiveMessages = PrivateMessagesArchiveMessages;

export default class PrivateMessagesAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://privatemessages.roblox.com/"
    });
  }

  getAnnouncements(): Promise<PrivateMessagesGetAnnouncements> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/announcements`
      },
      json: true
    }).then((response) => response.body);
  }

  getAnnouncementsMetaData(): Promise<PrivateMessagesGetAnnouncementsMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/announcements/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getMessages(
    options: PrivateMessagesGetMessagesOptions
  ): Promise<PrivateMessagesGetMessages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getMessage(
    options: PrivateMessagesGetMessageOptions
  ): Promise<PrivateMessagesGetMessage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/${options.messageId}`
      },
      json: true
    }).then((response) => response.body);
  }

  canMessage(options: { userId: number }): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/${options.userId}/can-message`
      },
      json: true
    }).then((response) => response.body.canMessage);
  }

  getUnreadMessagesCount(): Promise<PrivateMessagesGetUnreadMessagesCount> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/unread/count`
      },
      json: true
    }).then((response) => response.body);
  }

  archiveMessages(
    options: PrivateMessagesArchiveMessagesOptions
  ): Promise<PrivateMessagesArchiveMessages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/archive`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markMessagesRead(
    options: PrivateMessagesMarkMessagesReadOptions
  ): Promise<PrivateMessagesMarkMessagesRead> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/mark-read`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markMessagesUnread(
    options: PrivateMessagesMarkMessagesUnreadOptions
  ): Promise<PrivateMessagesMarkMessagesUnread> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/mark-unread`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  sendMessage(
    options: PrivateMessagesSendMessageOptions
  ): Promise<PrivateMessagesSendMessage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/send`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  unArchiveMessages(
    options: PrivateMessagesUnArchiveMessagesOptions
  ): Promise<PrivateMessagesUnArchiveMessages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/messages/unarchive`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
