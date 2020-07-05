import Client from "../../client";
import PartialUser, { PartialUserOptions } from "../user/PartialUser";
import PartialGroup, { PartialGroupOptions } from "./PartialGroup";


export interface GroupJoinRequestOptions {
    id?: number;
    user: PartialUserOptions;
    group: PartialGroupOptions;
    created: string;
}

export default class GroupJoinRequest {
    public client: Client;
    public id: number | null;
    public user: PartialUser;
    public group: PartialGroup;
    public created: Date;

    constructor (data: GroupJoinRequestOptions, client: Client) {
        this.client = client;
        this.id = data.id || null;
        this.user = new PartialUser(data.user, client);
        this.group = new PartialGroup(data.group, client);
        this.created = new Date(data.created);
    }
}
