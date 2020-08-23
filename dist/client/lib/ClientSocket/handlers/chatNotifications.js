"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chat_1 = require("../../../../structures/Chat");
const User_1 = require("../../../../structures/User");
function handleChatNotifications(socket, messageType, message) {
    switch (messageType) {
        case "participanttyping":
            socket.emit(message.IsTyping ? "chatUserTyping" : "chatUserTypingStopped", {
                user: new User_1.PartialUser({
                    id: message.UserId
                }, socket.client),
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newmessage":
            socket.emit("chatMessage", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newmessagebyself":
            socket.emit("chatMessageSent", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newconversation":
            socket.emit("chatConversationAdded", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "conversationremoved":
            socket.emit("chatConversationRemoved", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "participantadded":
            socket.emit("chatMemberAdded", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "participantlefet":
            socket.emit("chatMemberLeft", {
                conversation: new Chat_1.PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        default:
            break;
    }
}
exports.default = handleChatNotifications;
