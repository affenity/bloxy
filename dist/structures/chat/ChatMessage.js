"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
class ChatMessage {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.sender = new PartialUser_1.default({
            id: data.senderTargetId
        }, client);
        this.sentAt = new Date(data.sent);
        this.type = data.messageType;
        this.decorators = data.decorators;
        this.content = data.content;
    }
}
exports.default = ChatMessage;
