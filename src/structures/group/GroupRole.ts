import PartialGroup from "./PartialGroup";
import Client from "../../client";


export interface GroupRoleOptions {
    id?: number;
    name?: string;
    rank?: number;
    group: {
        id: number;
        name?: string;
    };
}

export default class GroupRole {
    public client: Client;
    public id: number | null;
    public name: string | null;
    public rank: number | null;
    public group: PartialGroup;

    constructor (data: GroupRoleOptions, client: Client) {
        this.client = client;
        this.id = data.id || null;
        this.name = data.name || null;
        this.rank = data.rank || null;
        this.group = new PartialGroup({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
