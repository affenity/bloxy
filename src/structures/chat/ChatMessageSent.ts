import Client from "../../client";


export interface ChatMessageSentOptions {
    content: string;
    filteredForReceivers: boolean;
    messageId: string;
    sent: string;
    messageType: "PlainText" | string;
    resultType: "Success" | string;
    statusMessage: string;
}

export default class ChatMessageSent {
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
