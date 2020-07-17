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
    client: Client;
    id: number | null;
    name: string | null;
    rank: number | null;
    group: PartialGroup;
    constructor(data: GroupRoleOptions, client: Client);
}
