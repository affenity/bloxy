"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleChatNotifications(socket, messageType, message) {
    switch (messageType) {
        case "created":
            socket.emit("message", {
                messageId: message.MessageId
            });
            break;
        case "markasread":
            socket.emit("messageRead", {
                messageId: message.MessageId
            });
            break;
        case "markasunread":
            socket.emit("messageUnread", {
                messageId: message.MessageId
            });
            break;
        case "archived":
            socket.emit("messageArchived", {
                messageId: message.MessageId
            });
            break;
        case "unarchived":
            socket.emit("messageUnarchived", {
                messageId: message.MessageId
            });
            break;
        default:
            break;
    }
}
exports.default = handleChatNotifications;
