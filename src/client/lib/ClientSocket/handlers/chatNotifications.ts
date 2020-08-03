import * as ClientSocket from "../ClientSocket";
import PartialChatConversation from "../../../../structures/chat/ChatConversation/PartialChatConversation";


export default function handleChatNotifications (socket: ClientSocket.Socket, messageType: string, message: any): void {
    switch (messageType) {
    case "newmessagebyself":
        socket.emit("chatMessageSent", new PartialChatConversation({
            id: message.ConversationId
        }, socket.client));
        break;
    default:
        break;
    }
}
