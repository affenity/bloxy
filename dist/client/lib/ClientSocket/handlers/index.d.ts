import { Socket as ClientSocket } from "../ClientSocket";
declare const handlersMap: Map<string, (socket: ClientSocket, messageType: string, message: unknown) => void>;
export default handlersMap;
