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
    public client: Client;
    public id: number;
    public creator: GroupMember;
    public content: string;
    public created: Date;

    constructor (data: GroupWallPostOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.content = data.body;
        this.creator = new GroupMember({
            group: {
                id: data.group.id,
                name: data.group.name
            },
            id: data.poster.userId,
            name: data.poster.username
        }, client);
        this.created = new Date(data.created);
    }
}
