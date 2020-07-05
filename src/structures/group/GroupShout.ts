import Client from "../../client";
import PartialUser from "../user/PartialUser";
import PartialGroup from "./PartialGroup";


export interface GroupShoutOptions {
    content: string;
    creator: {
        id: number;
        username: string;
    };
    group: {
        id: number;
        name?: string;
    };
}

export default class GroupShout {
    public client: Client;
    public content: string;
    public creator: PartialUser;
    public group: PartialGroup;

    constructor (data: GroupShoutOptions, client: Client) {
        this.client = client;
        this.content = data.content;
        this.creator = new PartialUser(data.creator, client);
        this.group = new PartialGroup({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}
