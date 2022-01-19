import { ClientBase, ClientOptions } from "./ClientBase";
import { APIs } from "./apis";
import { ClientUser } from "../old_structures/ClientUser";
import { RESTController } from "../controllers/rest";
import { Group, PartialUser } from "../old_structures";
import * as ClientSocket from "./lib/ClientSocket/ClientSocket";
import { ChatManager } from "./lib/ChatManager/ChatManager";
import { DataStoreManager } from "./lib/DataStoreManager/DataStoreManager";
import { User } from "../structures/User";
import { BaseUser } from "../structures/BaseUser";
export declare class Client extends ClientBase {
    user: ClientUser | null;
    apis: APIs;
    rest: RESTController;
    socket: ClientSocket.Socket;
    dataStoreManager: DataStoreManager;
    chat: ChatManager;
    constructor(options?: ClientOptions);
    isLoggedIn(): boolean;
    init(): void;
    login(cookie?: string): Promise<ClientUser>;
    getGroup(groupId: number): Promise<Group>;
    /**
     * Returns a base user object from a user id.
     * @param userId The user's ID
     */
    getBaseUser(userId: number): BaseUser;
    /**
     * Returns a user object from a user id.
     * @param userId The user's ID
     */
    getUser(userId: number): Promise<User>;
    getUserIdFromUsername(username: string): Promise<PartialUser>;
    getUsernameFromUserId(userId: number | string): Promise<PartialUser>;
    getUsersByUserIds(userIds: number[] | string[], excludeBannedUsers?: boolean): Promise<PartialUser[]>;
    getUsersByUsernames(usernames: string[], excludeBannedUsers?: boolean): Promise<PartialUser[]>;
}
