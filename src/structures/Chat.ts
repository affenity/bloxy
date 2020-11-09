import Client from "../client";
import { PartialUser, PartialUserOptions } from "./User";
import { PartialGameUniverse, PartialGameUniverseOptions } from "./Game";
import { SendGameLinkMessageOptions, SendMessageOptions } from "../client/apis/ChatAPI";
import { PartialGroup, PartialGroupOptions } from "./Group";


interface Structures {
    PartialUser: new (data: PartialUserOptions, client: Client) => PartialUser;
    PartialGameUniverse: new (data: PartialGameUniverseOptions, client: Client) => PartialGameUniverse;
    PartialGroup: new (data: PartialGroupOptions, client: Client) => PartialGroup;
}


const retrieveStructures = (): Structures => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup
});


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
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.title = data.title;
        this.initiator = new structures.PartialUser({
            id: data.initiator.targetId,
            name: data.initiator.name || undefined
        }, client);
        this.hasUnreadMessages = data.hasUnreadMessages;
        this.members = data.participants.map(participantData => new structures.PartialUser({
            id: participantData.targetId,
            name: participantData.name
        }, client));
        this.type = data.conversationType;
        this.lastUpdated = new Date(data.lastUpdated);
        this.universe = data.conversationUniverse ? new structures.PartialGameUniverse({
            id: data.conversationUniverse
        }, client) : null;
        this.conversationTitle = {
            forViewer: data.conversationTitle.titleForViewer,
            isDefaultTitle: data.conversationTitle.isDefaultTitle
        };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getMessages (amount = 100, startId?: string) {
        return this.client.chat.getConversationMessages(
            this.id,
            amount,
            startId
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    addUsers (users: number[]) {
        return this.client.chat.addUsersToConversation(
            this.id,
            users
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    removeUser (userId: number) {
        return this.client.chat.removeUserFromConversation(
            this.id,
            userId
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    markMessageRead (id: string) {
        return this.client.chat.markMessageRead(
            this.id,
            id
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    markRead () {
        return this.client.chat.markConversationsRead([
            this.id
        ]);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    rename (name: string) {
        return this.client.chat.renameGroupConversation(
            this.id,
            name
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getUnreadMessages (amount = 100) {
        return this.client.chat.getUnreadMessagesInConversations(
            [this.id],
            amount
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getLatestMessages (amount = 100) {
        return this.client.chat.getLatestMessagesInConversations(
            [this.id],
            amount
        );
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    resetUniverse () {
        return this.client.chat.resetConversationUniverse(this.id);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    sendGameLinkMessage (options: SendGameLinkMessageOptions) {
        return this.client.chat.sendGameLinkMessage(options);
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    sendMessage (options: SendMessageOptions) {
        return this.client.chat.sendMessage(options);
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
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.sender = new structures.PartialUser({
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
