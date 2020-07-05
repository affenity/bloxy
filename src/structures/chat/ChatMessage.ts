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
}

export default class ChatMessage {
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
