"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../../structures/User");
function handleFriendshipNotifications(socket, messageType, message) {
    switch (messageType) {
        case "friendshipdestroyed":
            socket.emit("friendLost", {
                user: new User_1.PartialUser({
                    id: [message.UserId1, message.UserId2].filter(id => id !== socket.client.user.id)[0]
                }, socket.client)
            });
            break;
        case "friendshiprequested":
            socket.emit("friendRequest", {
                user: new User_1.PartialUser({
                    id: message.UserId1
                }, socket.client)
            });
            break;
        case "friendshipcreated":
            socket.emit("friendAdded", {
                user: new User_1.PartialUser({
                    id: message.UserId1
                }, socket.client)
            });
            break;
        default:
            break;
    }
}
exports.default = handleFriendshipNotifications;
