import Client from "../client";
import { PartialUser } from "./User";
import { PartialGameUniverse } from "./Game";


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


export class ChatConversation {
    public client: Client;
    public id: number;
    public title: string;
    public initiator: PartialUser;
    public hasUnreadMessages: boolean;
    public members: PartialUser[];
    public type: string;
    public conversationTitle: {
        forViewer: string;
        isDefaultTitle: boolean;
    };
    public lastUpdated: Date;
    public universe: PartialGameUniverse | null;

    constructor (data: ChatConversationOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title;
        this.initiator = new PartialUser({
            id: data.initiator.targetId,
            name: data.initiator.name || undefined
        }, client);
        this.hasUnreadMessages = data.hasUnreadMessages;
        this.members = data.participants.map(participantData => new PartialUser({
            id: participantData.targetId,
            name: participantData.name
        }, client));
        this.type = data.conversationType;
        this.lastUpdated = new Date(data.lastUpdated);
        this.universe = data.conversationUniverse ? new PartialGameUniverse({
            id: data.conversationUniverse
        }, client) : null;
        this.conversationTitle = {
            forViewer: data.conversationTitle.titleForViewer,
            isDefaultTitle: data.conversationTitle.isDefaultTitle
        };
    }
}


export interface PartialChatConversationOptions {
    id: number;
    title?: string;
}


export class PartialChatConversation {
    public client: Client;
    public id: number;
    public title: string | null;

    constructor (data: PartialChatConversationOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title || null;
    }
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


export class ChatMessage {
    public client: Client;
    public id: string;
    public sender: PartialUser;
    public sentAt: Date;
    public type: "PlainText" | string;
    public decorators: string[];
    public content: string;

    constructor (data: ChatMessageOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.sender = new PartialUser({
            id: data.senderTargetId
        }, client);
        this.sentAt = new Date(data.sent);
        this.type = data.messageType;
        this.decorators = data.decorators;
        this.content = data.content;
    }
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


export class ChatMessageSent {
    public client: Client;
    public content: string;
    public filtered: boolean;
    public id: string;
    public sentAt: Date;
    public type: "PlainText" | string;
    public result: "Success" | string;
    public status: string;

    constructor (data: ChatMessageSentOptions, client: Client) {
        this.client = client;
        this.id = data.messageId;
        this.content = data.content;
        this.filtered = data.filteredForReceivers;
        this.sentAt = new Date(data.sent);
        this.result = data.resultType;
        this.status = data.statusMessage;
        this.type = data.messageType;
    }
}
