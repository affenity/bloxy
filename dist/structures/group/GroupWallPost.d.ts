import GroupMember from "./GroupMember";
import Client from "../../client";
export interface GroupWallPostOptions {
    id: number;
    poster: {
        buildersClubMembershipType: string;
        userId: number;
        username: string;
        displayName: string;
    };
    group: {
        id: number;
        name?: string;
    };
    body: string;
    created: string;
    updated: string;
}
export default class GroupWallPost {
    client: Client;
    id: number;
    creator: GroupMember;
    content: string;
    created: Date;
    constructor(data: GroupWallPostOptions, client: Client);
}
