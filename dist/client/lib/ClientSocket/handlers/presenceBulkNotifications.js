"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../../../structures/User");
function handlePresenceBulkNotifications(socket, _messageType, message) {
    if (!Array.isArray(message)) {
        throw new Error("Presence bulk notification message was not an array");
    }
    message.forEach(presenceUpdated => {
        socket.emit("userPresenceChanged", new User_1.PartialUser({
            id: presenceUpdated.UserId
        }, socket.client));
    });
}
exports.default = handlePresenceBulkNotifications;
