import Client from "../client";
import { GetGroupUniversesOptions } from "../client/apis/DevelopAPI";
import { CursorPage } from "./Asset";
import { PartialGameUniverse } from "./Game";
import { GetGroupRevenueSummaryInTimeFrame, GetGroupRevenueSummaryInTimeFrameOptions, GetGroupTransactions, GetGroupTransactionsOptions } from "../client/apis/EconomyAPI";
import { AcceptJoinRequest, AcceptJoinRequests, AcceptJoinRequestsOptions, AcceptRelationshipRequest, AcceptRelationshipRequests, AcceptRelationshipRequestsOptions, ChangeOwner, ClaimGroup, CreateRelationship, CreateRelationshipOptions, CreateRole, CreateRoleOptions, CreateWallPost, CreateWallPostOptions, DeclineJoinRequest, DeclineJoinRequests, DeclineRelationshipRequest, DeclineRelationshipRequests, DeclineRelationshipRequestsOptions, DeleteRelationship, DeleteRelationshipOptions, DeleteRole, DeleteSocialLink, DeleteWallPost, GetAllRolesPermissions, GetGroupPayouts, GetGroupRelationships, GetGroupRelationshipsOptions, GetGroupSettings, GetGuestPermissions, GetJoinRequest, GetJoinRequestsOptions, GetMembersOptions, GetMembersWithRoleOptions, GetRelationshipRequests, GetRelationshipRequestsOptions, GetRolePermissions, GetSelfGroupMembership, GetSocialLinks, GetWallPostsOptions, JoinGroup, JoinGroupOptions, KickMember, PayoutMembers, PayoutMembersOptions, PostSocialLink, PostSocialLinkOptions, RemovePrimaryGroup, SetPrimaryGroup, UpdateGroupDescription, UpdateGroupIcon, UpdateGroupSettings, UpdateGroupSettingsOptions, UpdateGroupStatus, UpdateMember, UpdateRecurringPayouts, UpdateRecurringPayoutsOptions, UpdateRole, UpdateRoleOptions, UpdateRolePermissions, UpdateRolePermissionsOptions, UpdateSocialLink, UpdateSocialLinkOptions } from "../client/apis/GroupsAPI";
import { PartialUser, PartialUserOptions, UserBase } from "./User";
declare type GroupRelationships<T extends "enemies" | "allies"> = Omit<GetGroupRelationships, "relatedGroups"> & {
    groupId: number;
    relationshipType: T;
    totalGroupCount: number;
    groups: Group[];
    nextRowIndex: number;
};
export interface GroupBaseOptions {
    id: number;
    name?: string;
}
export declare class GroupBase {
    client: Client;
    id: number;
    name: string | null;
    constructor(data: GroupBaseOptions, client: Client);
    getUniverses(options?: Omit<GetGroupUniversesOptions, "groupId">): Promise<CursorPage<PartialGameUniverse>>;
    /**
     * Returns whether the authenticated user can manage the group or not
     * @returns {Promise<boolean>}
     */
    canSelfManage(): Promise<boolean>;
    /**
     * Gets the currently available funds in the group
     * @returns {Promise<number>}
     */
    getFunds(): Promise<number>;
    getRevenueSummaryInTimeFrame(timeFrame: GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]): Promise<GetGroupRevenueSummaryInTimeFrame>;
    getTransactions(options: Omit<GetGroupTransactionsOptions, "groupId">): Promise<GetGroupTransactions>;
    getAllies(maxItems?: number, startItem?: number): Promise<GroupRelationships<"allies">>;
    getEnemies(maxItems?: number, startItem?: number): Promise<GroupRelationships<"enemies">>;
    getGroup(): Promise<Group>;
    getIsMember(userId: number): Promise<GroupMember | null>;
    getSettings(): Promise<GetGroupSettings>;
    updateSettings(options: Omit<UpdateGroupSettingsOptions, "groupId">): Promise<UpdateGroupSettings>;
    updateDescription(description: string): Promise<UpdateGroupDescription>;
    updateShout(shout: string): Promise<UpdateGroupStatus>;
    updateIcon(file: unknown): Promise<UpdateGroupIcon>;
    declineJoinRequests(userIds: number[]): Promise<DeclineJoinRequests>;
    getJoinRequests(options: Omit<GetJoinRequestsOptions, "groupId">): Promise<CursorPage<GroupJoinRequest>>;
    acceptJoinRequests(options: Omit<AcceptJoinRequestsOptions, "groupId">): Promise<AcceptJoinRequests>;
    declineJoinRequest(userId: number): Promise<DeclineJoinRequest>;
    getJoinRequest(userId: number): Promise<GetJoinRequest>;
    acceptJoinRequest(userId: number): Promise<AcceptJoinRequest>;
    getSelfMembership(): Promise<GetSelfGroupMembership>;
    getRoles(): Promise<GroupRole[]>;
    getMembersWithRole(options: Omit<GetMembersWithRoleOptions, "groupId">): Promise<CursorPage<GroupMember>>;
    getMembers(options: Omit<GetMembersOptions, "groupId">): Promise<CursorPage<GroupMember>>;
    join(options: Omit<JoinGroupOptions, "groupId">): Promise<JoinGroup>;
    getIsPendingJoin(): Promise<boolean>;
    changeOwner(userId: number): Promise<ChangeOwner>;
    claim(): Promise<ClaimGroup>;
    kickMember(userId: number): Promise<KickMember>;
    updateMember(userId: number, roleId: number): Promise<UpdateMember>;
    getPayouts(): Promise<GetGroupPayouts>;
    payoutMembers(options: Omit<PayoutMembersOptions, "groupId">): Promise<PayoutMembers>;
    updateRecurringPayouts(options: Omit<UpdateRecurringPayoutsOptions, "groupId">): Promise<UpdateRecurringPayouts>;
    getRelationships(options: Omit<GetGroupRelationshipsOptions, "groupId">): Promise<GetGroupRelationships>;
    declineRelationshipRequests(options: Omit<DeclineRelationshipRequestsOptions, "groupId">): Promise<DeclineRelationshipRequests>;
    getRelationshipRequests(options: Omit<GetRelationshipRequestsOptions, "groupId">): Promise<GetRelationshipRequests>;
    acceptRelationshipRequests(options: Omit<AcceptRelationshipRequestsOptions, "groupId">): Promise<AcceptRelationshipRequests>;
    deleteRelationship(options: Omit<DeleteRelationshipOptions, "groupId">): Promise<DeleteRelationship>;
    createRelationship(options: Omit<CreateRelationshipOptions, "groupId">): Promise<CreateRelationship>;
    acceptRelationshipRequest(type: "enemies" | "allies", withGroup: number): Promise<AcceptRelationshipRequest>;
    declineRelationshipRequest(type: "enemies" | "allies", withGroup: number): Promise<DeclineRelationshipRequest>;
    getRolePermissions(roleId: number): Promise<GetRolePermissions>;
    updateRolePermissions(roleId: number, permissions: Omit<UpdateRolePermissionsOptions, "groupId" | "roleId">): Promise<UpdateRolePermissions>;
    getGuestPermissions(): Promise<GetGuestPermissions>;
    getAllRolesPermissions(): Promise<GetAllRolesPermissions>;
    getSocialLinks(): Promise<GetSocialLinks>;
    createSocialLink(options: Omit<PostSocialLinkOptions, "groupId">): Promise<PostSocialLink>;
    deleteSocialLink(id: number): Promise<DeleteSocialLink>;
    updateSocialLink(options: Omit<UpdateSocialLinkOptions, "groupId">): Promise<UpdateSocialLink>;
    getWallPosts(options: Omit<GetWallPostsOptions, "groupId">): Promise<CursorPage<GroupWallPost>>;
    createWallPost(options: Omit<CreateWallPostOptions, "groupId">): Promise<CreateWallPost>;
    deleteWallPost(id: number): Promise<DeleteWallPost>;
    getIsUserPrimaryGroup(userId: number): Promise<GroupMember | null>;
    removeAsPrimary(): Promise<RemovePrimaryGroup>;
    setAsPrimary(): Promise<SetPrimaryGroup>;
    createRole(options: Omit<CreateRoleOptions, "groupId">): Promise<CreateRole>;
    deleteRole(roleId: number): Promise<DeleteRole>;
    updateRole(roleId: number, options: Omit<UpdateRoleOptions, "groupId" | "roleId">): Promise<UpdateRole>;
}
export interface PartialGroupOptions {
    id: number;
    name?: string;
}
export declare class PartialGroup extends GroupBase {
    constructor(data: PartialGroupOptions, client: Client);
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
export declare class GroupMember extends UserBase {
    group: PartialGroup;
    role: GroupRole | null;
    constructor(data: GroupMemberOptions, client: Client);
    kick(): Promise<unknown>;
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
export declare class Group extends GroupBase {
    description: string;
    name: string;
    owner: GroupMember | null;
    shout: GroupShout | null;
    constructor(data: GroupOptions, client: Client);
}
export interface GroupJoinRequestOptions {
    id?: number;
    user: PartialUserOptions;
    group: PartialGroupOptions;
    created: string;
}
export declare class GroupJoinRequest {
    client: Client;
    id: number | null;
    user: PartialUser;
    group: PartialGroup;
    created: Date;
    constructor(data: GroupJoinRequestOptions, client: Client);
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
export declare class GroupRole {
    client: Client;
    id: number | null;
    name: string | null;
    rank: number | null;
    group: PartialGroup;
    constructor(data: GroupRoleOptions, client: Client);
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
export declare class GroupRolePermissions {
    client: Client;
    group: PartialGroup;
    role: GroupRole;
    permissions: GroupRolePermissionsOptions["permissions"];
    constructor(data: GroupRolePermissionsOptions, client: Client);
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
export declare class GroupShout {
    client: Client;
    content: string;
    creator: PartialUser;
    group: PartialGroup;
    constructor(data: GroupShoutOptions, client: Client);
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
export declare class GroupWallPost {
    client: Client;
    id: number;
    creator: GroupMember;
    content: string;
    created: Date;
    constructor(data: GroupWallPostOptions, client: Client);
}
export {};
