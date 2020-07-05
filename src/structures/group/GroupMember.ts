import UserBase from "../user/UserBase";
import Client from "../../client";
import PartialGroup, { PartialGroupOptions } from "./PartialGroup";
import GroupRole from "./GroupRole";


export interface GroupMemberOptions {
    id: number;
    group: PartialGroupOptions;
    name?: string | null;
    role?: {
        id: number;
        name: string;
        rank: number;
    };
}

export default class GroupMember extends UserBase {
    public group: PartialGroup;
    public role: GroupRole | null;

    constructor (data: GroupMemberOptions, client: Client) {
        super(data, client);
        this.group = new PartialGroup(data.group, client);
        this.role = data.role ? new GroupRole({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                name: this.name || undefined,
                id: this.id
            }
        }, client) : null;
    }
}
