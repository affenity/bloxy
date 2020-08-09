import { Socket as ClientSocket } from "../ClientSocket";
import { PartialUser } from "../../../../structures/User";


export default function handlePresenceBulkNotifications (socket: ClientSocket, _messageType: string, message: any): void {
    if (!Array.isArray(message)) {
        throw new Error("Presence bulk notification message was not an array");
    }

    message.forEach(presenceUpdated => {
        socket.emit("userPresenceChanged", new PartialUser({
            id: presenceUpdated.UserId
        }, socket.client));
    });
}
