import ClientBase from "./ClientBase";
import { ClientCredentialsOptions, ClientOptions } from "../interfaces/ClientInterfaces";
import { APIs } from "./apis";
import ClientUser from "../structures/ClientUser";
import RESTController from "../controllers/rest";
import { Structures } from "../structures";
import Group from "../structures/group/Group";
import ClientSocket from "./lib/ClientSocket/ClientSocket";
import User from "../structures/user/User";
import PartialUser from "../structures/user/PartialUser";
export default class Client extends ClientBase {
    user: ClientUser | null;
    apis: APIs;
    login: OmitThisParameter<(this: Client, credentials?: ClientCredentialsOptions) => Promise<ClientUser>>;
    rest: RESTController;
    structures: Structures;
    socket: ClientSocket;
    constructor(options?: ClientOptions);
    init(): void;
    getGroup(groupId: number): Promise<Group>;
    getUser(userId: number): Promise<User>;
    getUserIdFromUsername(username: string): Promise<PartialUser>;
    getUsernameFromUserId(userId: number): Promise<PartialUser>;
    getUsersByUserIds(userIds: number[], excludeBannedUsers?: boolean): Promise<PartialUser[]>;
    getUsersByUsernames(usernames: string[], excludeBannedUsers?: boolean): Promise<PartialUser[]>;
}
