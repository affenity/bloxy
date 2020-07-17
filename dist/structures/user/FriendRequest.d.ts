import Client from "../../client";
import PartialUser from "./PartialUser";
export interface FriendRequestOptions {
    description: string;
    created: string;
    isBanned: boolean;
    id: number;
    name: string;
    displayName: string;
}
export default class FriendRequest {
    client: Client;
    user: PartialUser;
    isBanned: boolean;
    created: Date;
    description: string;
    constructor(data: FriendRequestOptions, client: Client);
}
