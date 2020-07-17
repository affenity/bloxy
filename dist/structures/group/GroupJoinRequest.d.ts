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
    client: Client;
    id: number | null;
    user: PartialUser;
    group: PartialGroup;
    created: Date;
    constructor(data: GroupJoinRequestOptions, client: Client);
}
