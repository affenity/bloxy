"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageSent {
    constructor(data, client) {
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
exports.default = ChatMessageSent;
