import GroupBase from "./GroupBase";
import Client from "../../client";
import GroupMember from "./GroupMember";
import GroupShout from "./GroupShout";
export interface GroupOptions {
    id: number;
    name: string;
    description: string;
    owner: {
        buildersClubMembershipType: string;
        userId: number;
        username: string;
        displayName: string;
    } | null;
    shout: {
        body: string;
        poster: {
            buildersClubMembershipType: string;
            userId: number;
            username: string;
            displayName: string;
        };
        created: string;
        updated: string;
    } | null;
    memberCount: number;
    isBuildersClubOnly: boolean;
    publicEntryAllowed: boolean;
    created?: string;
}
export default class Group extends GroupBase {
    description: string;
    name: string;
    owner: GroupMember | null;
    shout: GroupShout | null;
    constructor(data: GroupOptions, client: Client);
}
