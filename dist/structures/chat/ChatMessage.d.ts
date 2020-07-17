import Client from "../../client";
import PartialUser from "../user/PartialUser";
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
export default class ChatMessage {
    client: Client;
    id: string;
    sender: PartialUser;
    sentAt: Date;
    type: "PlainText" | string;
    decorators: string[];
    content: string;
    constructor(data: ChatMessageOptions, client: Client);
}
