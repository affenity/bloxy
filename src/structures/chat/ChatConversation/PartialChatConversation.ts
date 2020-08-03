import Client from "../../../client";


export interface PartialChatConversationOptions {
    id: number;
    title?: string;
}

export default class PartialChatConversation {
    public client: Client;
    public id: number;
    public title: string | null;

    constructor (data: PartialChatConversationOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title || null;
    }
}
