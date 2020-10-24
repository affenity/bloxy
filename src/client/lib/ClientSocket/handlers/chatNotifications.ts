import * as ClientSocket from "../ClientSocket";
import { PartialChatConversation } from "../../../../structures/Chat";
import { PartialUser } from "../../../../structures/User";


export default function handleChatNotifications (socket: ClientSocket.Socket, messageType: string, message: any): void {
    switch (messageType) {
        case "participanttyping":
            socket.emit(message.IsTyping ? "chatUserTyping" : "chatUserTypingStopped", {
                user: new PartialUser({
                    id: message.UserId
                }, socket.client),
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newmessage":
            socket.emit("chatMessage", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newmessagebyself":
            socket.emit("chatMessageSent", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "newconversation":
            socket.emit("chatConversationAdded", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "conversationremoved":
            socket.emit("chatConversationRemoved", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "participantadded":
            socket.emit("chatMemberAdded", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        case "participantlefet":
            socket.emit("chatMemberLeft", {
                conversation: new PartialChatConversation({
                    id: message.ConversationId
                }, socket.client)
            });
            break;
        default:
            break;
    }
}
