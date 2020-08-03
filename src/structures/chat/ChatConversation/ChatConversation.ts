import PartialUser from "../../user/PartialUser";
import PartialGameUniverse from "../../game/GameUniverse/PartialGameUniverse";
import Client from "../../../client";


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

export default class ChatConversation {
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
