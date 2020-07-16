import ClientSocket from "../ClientSocket";
import handleChatNotifications from "./chatNotifications";


const handlersMap = new Map<string, (socket: ClientSocket, messageType: string, message: unknown) => void>();

handlersMap.set("chatnotifications", handleChatNotifications);

export default handlersMap;
