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
    group: PartialGroup;
    role: GroupRole | null;
    constructor(data: GroupMemberOptions, client: Client);
}
