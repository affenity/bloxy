"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PartialChatConversation_1 = tslib_1.__importDefault(require("../../../../structures/chat/PartialChatConversation"));
function handleChatNotifications(socket, messageType, message) {
    switch (messageType) {
        case "newmessagebyself":
            socket.emit("chatMessageSent", new PartialChatConversation_1.default({
                id: message.ConversationId
            }, socket.client));
            break;
        default:
            break;
    }
}
exports.default = handleChatNotifications;
