import PartialUser from "../user/PartialUser";
import PartialGameUniverse from "../game/GameUniverse/PartialGameUniverse";
import Client from "../../client";
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
        displayName: ShadowRootInit;
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
}
