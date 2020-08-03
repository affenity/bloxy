import { Socket as ClientSocket } from "../ClientSocket";
import handleChatNotifications from "./chatNotifications";
import handleFriendshipNotifications from "./friendShipnotifications";
import handleMessageNotifications from "./messageNotifications";
import handlePresenceBulkNotifications from "./presenceBulkNotifications";


const handlersMap = new Map<string, (socket: ClientSocket, messageType: string, message: unknown) => void>();

handlersMap.set("chatnotifications", handleChatNotifications);
handlersMap.set("friendshipnotifications", handleFriendshipNotifications);
handlersMap.set("messagenotifications", handleMessageNotifications);
handlersMap.set("presencebulknotifications", handlePresenceBulkNotifications);

export default handlersMap;
