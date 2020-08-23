import Client from "../client";
import { PartialUser } from "./User";
import { PartialGameUniverse } from "./Game";
import { SendGameLinkMessageOptions, SendMessageOptions } from "../client/apis/ChatAPI";
export interface ChatConversationOptions {
    id: number;
    title: string;
    initiator: {
        type: "User" | string;
        targetId: number;
        name: string | null;
        displayName: string | null;
    };
    hasUnreadMessages: boolean;
    participants: {
        type: "User" | string;
        targetId: number;
        name: string;
        displayName: string;
    }[];
    conversationType: "OneToOneConversation" | string;
    conversationTitle: {
        titleForViewer: string;
        isDefaultTitle: boolean;
    };
    lastUpdated: string;
    conversationUniverse: number | null;
}
export declare class ChatConversation {
    client: Client;
    id: number;
    title: string;
    initiator: PartialUser;
    hasUnreadMessages: boolean;
    members: PartialUser[];
    type: string;
    conversationTitle: {
        forViewer: string;
        isDefaultTitle: boolean;
    };
    lastUpdated: Date;
    universe: PartialGameUniverse | null;
    constructor(data: ChatConversationOptions, client: Client);
    getMessages(amount?: number, startId?: string): Promise<ChatMessage[]>;
    addUsers(users: number[]): Promise<import("../client/apis/ChatAPI").AddUsersToConversation>;
    removeUser(userId: number): Promise<import("../client/apis/ChatAPI").RemoveUserFromConversation>;
    markMessageRead(id: string): Promise<import("../client/apis/ChatAPI").MarkMessageInConversationAsRead>;
    markRead(): Promise<import("../client/apis/ChatAPI").MarkConversationsAsSeen>;
    rename(name: string): Promise<import("../client/apis/ChatAPI").RenameGroupConversation>;
    getUnreadMessages(amount?: number): Promise<ChatMessage[]>;
    getLatestMessages(amount?: number): Promise<ChatMessage[]>;
    resetUniverse(): Promise<import("../client/apis/ChatAPI").ResetConversationUniverse>;
    sendGameLinkMessage(options: SendGameLinkMessageOptions): Promise<ChatMessageSent>;
    sendMessage(options: SendMessageOptions): Promise<ChatMessageSent>;
}
export interface PartialChatConversationOptions {
    id: number;
    title?: string;
}
export declare class PartialChatConversation {
    client: Client;
    id: number;
    title: string | null;
    constructor(data: PartialChatConversationOptions, client: Client);
}
export interface ChatMessageOptions {
    id: string;
    senderType: string;
    sent: string;
    read: boolean;
    messageType: "PlainText" | string;
    decorators: string[];
    senderTargetId: number;
    content: string;
    link?: {
        type: "Game";
        game: {
            universeId: number;
        };
    };
    eventBased?: {
        type: "SetConversationUniverse";
        setConversationUniverse: {
            actorUserId: number;
            universeId: number;
        };
    };
}
export declare class ChatMessage {
    client: Client;
    id: string;
    sender: PartialUser;
    sentAt: Date;
    type: "PlainText" | string;
    decorators: string[];
    content: string;
    constructor(data: ChatMessageOptions, client: Client);
}
export interface ChatMessageSentOptions {
    content: string;
    filteredForReceivers: boolean;
    messageId: string;
    sent: string;
    messageType: "PlainText" | string;
    resultType: "Success" | string;
    statusMessage: string;
}
export declare class ChatMessageSent {
    client: Client;
    content: string;
    filtered: boolean;
    id: string;
    sentAt: Date;
    type: "PlainText" | string;
    result: "Success" | string;
    status: string;
    constructor(data: ChatMessageSentOptions, client: Client);
}
