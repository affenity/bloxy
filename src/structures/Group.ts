import Client from "../client";
import { GetGroupUniversesOptions } from "../client/apis/DevelopAPI";
import { CursorPage } from "./Asset";
import { PartialGameUniverse } from "./Game";
import {
    GetGroupRevenueSummaryInTimeFrame,
    GetGroupRevenueSummaryInTimeFrameOptions,
    GetGroupTransactions,
    GetGroupTransactionsOptions
} from "../client/apis/EconomyAPI";
import {
    DeclineJoinRequests,
    GetGroupSettings,
    UpdateGroupDescription,
    UpdateGroupIcon,
    UpdateGroupSettings,
    UpdateGroupSettingsOptions,
    UpdateGroupStatus
} from "../client/apis/GroupsAPI";
import { GetGroupAllies, GetGroupEnemies } from "../client/apis/GeneralAPI";
import { PartialUser, PartialUserOptions, UserBase } from "./User";


type HandleGroupRelationshipResponse = { group: PartialGroup; description: string; emblemUrl: string }[];


export interface GroupBaseOptions {
    id: number;
    name?: string;
}


export class GroupBase {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: GroupBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }

    getUniverses (options?: Omit<GetGroupUniversesOptions, "groupId">): Promise<CursorPage<PartialGameUniverse>> {
        return this.client.apis.developAPI.getGroupUniverses({
            ...options,
            groupId: this.id
        }).then(response => {
            console.log(response);
            return new CursorPage(this.client, options || {}, {
                ...response,
                data: response.data.map(universeData => new PartialGameUniverse(({
                    id: universeData.id,
                    name: universeData.name,
                    rootPlace: universeData.rootPlaceId ? {
                        id: universeData.rootPlaceId
                    } : undefined
                }), this.client))
            }, this.getUniverses);
        });
    }

    /**
     * Returns whether the authenticated user can manage the group or not
     * @returns {Promise<boolean>}
     */
    canSelfManage (): Promise<boolean> {
        return this.client.apis.developAPI.getSelfManageableGroups()
            .then(response => !!response.data.find(data => data.id === this.id));
    }

    /**
     * Gets the currently available funds in the group
     * @returns {Promise<number>}
     */
    getFunds (): Promise<number> {
        return this.client.apis.economyAPI.getGroupCurrency({
            groupId: this.id
        }).then(response => response.robux);
    }

    getRevenueSummaryInTimeFrame (timeFrame: GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]): Promise<GetGroupRevenueSummaryInTimeFrame> {
        return this.client.apis.economyAPI.getGroupRevenueByTime({
            groupId: this.id,
            timeFrame
        });
    }

    getTransactions (options: Omit<GetGroupTransactionsOptions, "groupId">): Promise<GetGroupTransactions> {
        return this.client.apis.economyAPI.getGroupTransactions({
            groupId: this.id,
            ...options
        });
    }

    getAllies (page?: number): Promise<HandleGroupRelationshipResponse> {
        return this.client.apis.generalApi.getGroupAllies({
            groupId: this.id,
            page: page || 0
        }).then(response => this.handleGroupRelationshipsResponse(response));
    }

    getEnemies (page?: number): Promise<HandleGroupRelationshipResponse> {
        return this.client.apis.generalApi.getGroupEnemies({
            groupId: this.id,
            page: page || 0
        }).then(response => this.handleGroupRelationshipsResponse(response));
    }

    getGroup (): Promise<Group> {
        return this.client.getGroup(this.id);
    }

    getIsMember (userId: number): Promise<GroupMember | null> {
        return this.client.apis.groupsAPI.getUserGroups({
            userId
        }).then(response => {
            const foundGroup = response.data.find(groupData => groupData.group.id === this.id);

            if (foundGroup) {
                return new GroupMember({
                    id: userId,
                    role: foundGroup.role,
                    group: foundGroup.group
                }, this.client);
            } else {
                return null;
            }
        });
    }

    getSettings (): Promise<GetGroupSettings> {
        return this.client.apis.groupsAPI.getGroupSettings({
            groupId: this.id
        });
    }

    updateSettings (options: Omit<UpdateGroupSettingsOptions, "groupId">): Promise<UpdateGroupSettings> {
        return this.client.apis.groupsAPI.updateGroupSettings({
            groupId: this.id,
            ...options
        });
    }

    updateDescription (description: string): Promise<UpdateGroupDescription> {
        return this.client.apis.groupsAPI.updateGroupDescription({
            description,
            groupId: this.id
        });
    }

    updateShout (shout: string): Promise<UpdateGroupStatus> {
        return this.client.apis.groupsAPI.updateGroupStatus({
            groupId: this.id,
            status: shout
        });
    }

    updateIcon (file: unknown): Promise<UpdateGroupIcon> {
        return this.client.apis.groupsAPI.updateGroupIcon({
            files: file,
            groupId: this.id
        });
    }

    declineJoinRequests (userIds: number[]): Promise<DeclineJoinRequests> {
        return this.client.apis.groupsAPI.declineJoinRequests({
            groupId: this.id,
            userIds
        });
    }

    private handleGroupRelationshipsResponse = (response: (GetGroupAllies[0] | GetGroupEnemies[0])[]): HandleGroupRelationshipResponse => response.map(data => ({
        group: new PartialGroup({
            id: data.Id,
            name: data.Name
        }, this.client),
        description: data.Description,
        emblemUrl: data.EmblemUrl
    }));
}


export interface PartialGroupOptions {
    id: number;
    name?: string;
}


export class PartialGroup extends GroupBase {
    constructor (data: PartialGroupOptions, client: Client) {
        super(data, client);
    }
}


export interface GroupMemberOptions {
    group: PartialGroupOptions;
    name?: string | null;
    /**
     * The user id
     */
    id: number;
    role?: {
        id: number;
        name: string;
        rank: number;
    };
}


export class GroupMember extends UserBase {
    public group: PartialGroup;
    public role: GroupRole | null;

    constructor (data: GroupMemberOptions, client: Client) {
        super({
            name: data.name,
            id: data.id
        }, client);
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


export class Group extends GroupBase {
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


export interface GroupJoinRequestOptions {
    id?: number;
    user: PartialUserOptions;
    group: PartialGroupOptions;
    created: string;
}


export class GroupJoinRequest {
    public client: Client;
    public id: number | null;
    public user: PartialUser;
    public group: PartialGroup;
    public created: Date;

    constructor (data: GroupJoinRequestOptions, client: Client) {
        this.client = client;
        this.id = data.id || null;
        this.user = new PartialUser(data.user, client);
        this.group = new PartialGroup(data.group, client);
        this.created = new Date(data.created);
    }
}


export interface GroupRoleOptions {
    id?: number;
    name?: string;
    rank?: number;
    group: {
        id: number;
        name?: string;
    };
}


export class GroupRole {
    public client: Client;
    public id: number | null;
    public name: string | null;
    public rank: number | null;
    public group: PartialGroup;

    constructor (data: GroupRoleOptions, client: Client) {
        this.client = client;
        this.id = data.id || null;
        this.name = data.name || null;
        this.rank = data.rank || null;
        this.group = new PartialGroup({
            id: data.group.id,
            name: data.group.name
        }, client);
    }
}


export interface GroupRolePermissionsOptions {
    groupId: number;
    role: {
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    };
    permissions: {
        groupPostsPermissions: {
            viewWall: boolean;
            postToWall: boolean;
            deleteFromWall: boolean;
            viewStatus: boolean;
            postToStatus: boolean;
        };
        groupMembershipPermissions: {
            changeRank: boolean;
            inviteMembers: boolean;
            removeMembers: boolean;
        };
        groupManagementPermissions: {
            manageRelationships: boolean;
            manageClan: boolean;
            viewAuditLogs: boolean;
        };
        groupEconomyPermissions: {
            spendGroupFunds: boolean;
            advertiseGroup: boolean;
            createItems: boolean;
            manageItems: boolean;
            addGroupPlaces: boolean;
            manageGroupGames: boolean;
            viewGroupPayouts: boolean;
        };
    };
}


export class GroupRolePermissions {
    public client: Client;
    public group: PartialGroup;
    public role: GroupRole;
    public permissions: GroupRolePermissionsOptions["permissions"];

    constructor (data: GroupRolePermissionsOptions, client: Client) {
        this.client = client;
        this.group = new PartialGroup({
            id: data.groupId
        }, client);
        this.role = new GroupRole({
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
                id: this.group.id
            }
        }, client);
        this.permissions = data.permissions;
    }
}


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


export class GroupShout {
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


export class GroupWallPost {
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
