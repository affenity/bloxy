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
    client: Client;
    content: string;
    creator: PartialUser;
    group: PartialGroup;
    constructor(data: GroupShoutOptions, client: Client);
}
