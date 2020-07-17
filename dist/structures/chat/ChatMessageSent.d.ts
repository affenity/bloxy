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
