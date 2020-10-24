import * as ClientSocket from "../ClientSocket";
import { PartialUser } from "../../../../structures/User";


export default function handleFriendshipNotifications (socket: ClientSocket.Socket, messageType: string, message: any): void {
    switch (messageType) {
        case "friendshipdestroyed":
            socket.emit("friendLost", {
                user: new PartialUser({
                    id: [message.UserId1, message.UserId2].filter(id => id !== socket.client.user!.id)[0]!
                }, socket.client)
            });
            break;
        case "friendshiprequested":
            socket.emit("friendRequest", {
                user: new PartialUser({
                    id: message.UserId1
                }, socket.client)
            });
            break;
        case "friendshipcreated":
            socket.emit("friendAdded", {
                user: new PartialUser({
                    id: message.UserId1
                }, socket.client)
            });
            break;
        default:
            break;
    }
}
