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
    public client: Client;
    public user: PartialUser;
    public isBanned: boolean;
    public created: Date;
    public description: string;

    constructor (data: FriendRequestOptions, client: Client) {
        this.client = client;
        this.user = new PartialUser({
            id: data.id,
            name: data.name
        }, client);
        this.created = new Date(data.created);
        this.description = data.description;
        this.isBanned = data.isBanned;
    }
}
