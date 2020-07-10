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
    public description: string;
    public name: string;
    public owner: GroupMember | null;
    public shout: GroupShout | null;

    constructor (data: GroupOptions, client: Client) {
        super(data, client);
        this.description = data.description;
        this.name = data.name;
        this.owner = data.owner ? new GroupMember({
            id: data.owner.userId,
            name: data.owner.username,
            group: this
        }, client) : null;
        this.shout = data.shout ? new GroupShout({
            content: data.shout.body,
            creator: {
                id: data.shout.poster.userId,
                username: data.shout.poster.username
            },
            group: {
                id: this.id,
                name: this.name || undefined
            }
        }, client) : null;
    }
}
