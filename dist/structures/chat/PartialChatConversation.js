"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PartialChatConversation {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.title = data.title || null;
    }
}
exports.default = PartialChatConversation;
