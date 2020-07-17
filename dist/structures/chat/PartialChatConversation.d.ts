import Client from "../../client";
export interface PartialChatConversationOptions {
    id: number;
    title?: string;
}
export default class PartialChatConversation {
    client: Client;
    id: number;
    title: string | null;
    constructor(data: PartialChatConversationOptions, client: Client);
}
