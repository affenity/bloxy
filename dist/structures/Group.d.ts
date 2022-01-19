import { Client } from "../client";
import { DevelopGetGroupUniversesOptions } from "../client/apis/DevelopAPI";
import { CursorPage } from "./Asset";
import { PartialGameUniverse } from "./Game";
import { EconomyGetGroupRevenueSummaryInTimeFrame, EconomyGetGroupRevenueSummaryInTimeFrameOptions, EconomyGetGroupTransactions, EconomyGetGroupTransactionsOptions } from "../client/apis/EconomyAPI";
import { GroupsAcceptJoinRequest, GroupsAcceptJoinRequests, GroupsAcceptJoinRequestsOptions, GroupsAcceptRelationshipRequest, GroupsAcceptRelationshipRequests, GroupsAcceptRelationshipRequestsOptions, GroupsChangeOwner, GroupsClaimGroup, GroupsCreateRelationship, GroupsCreateRelationshipOptions, GroupsCreateRole, GroupsCreateRoleOptions, GroupsCreateWallPost, GroupsCreateWallPostOptions, GroupsDeclineJoinRequest, GroupsDeclineJoinRequests, GroupsDeclineRelationshipRequest, GroupsDeclineRelationshipRequests, GroupsDeclineRelationshipRequestsOptions, GroupsDeleteRelationship, GroupsDeleteRelationshipOptions, GroupsDeleteRole, GroupsDeleteSocialLink, GroupsDeleteWallPost, GroupsGetAllRolesPermissions, GroupsGetGroupPayouts, GroupsGetGroupRelationships, GroupsGetGroupRelationshipsOptions, GroupsGetGroupSettings, GroupsGetGuestPermissions, GroupsGetJoinRequest, GroupsGetJoinRequestsOptions, GroupsGetMembersOptions, GroupsGetMembersWithRoleOptions, GroupsGetRelationshipRequests, GroupsGetRelationshipRequestsOptions, GroupsGetRolePermissions, GroupsGetSelfGroupMembership, GroupsGetSocialLinks, GroupsGetWallPostsOptions, GroupsJoinGroup, GroupsJoinGroupOptions, GroupsKickMember, GroupsPayoutMembers, GroupsPayoutMembersOptions, GroupsPostSocialLink, GroupsPostSocialLinkOptions, GroupsRemovePrimaryGroup, GroupsSetPrimaryGroup, GroupsUpdateGroupDescription, GroupsUpdateGroupIcon, GroupsUpdateGroupSettings, GroupsUpdateGroupSettingsOptions, GroupsUpdateGroupStatus, GroupsUpdateMember, GroupsUpdateRecurringPayouts, GroupsUpdateRecurringPayoutsOptions, GroupsUpdateRole, GroupsUpdateRoleOptions, GroupsUpdateRolePermissions, GroupsUpdateRolePermissionsOptions, GroupsUpdateSocialLink, GroupsUpdateSocialLinkOptions } from "../client/apis/GroupsAPI";
import { PartialUser, PartialUserOptions, UserBase } from "./User";
declare type GroupRelationships<T extends "enemies" | "allies"> = Omit<GroupsGetGroupRelationships, "relatedGroups"> & {
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
    getUniverses(options?: Omit<DevelopGetGroupUniversesOptions, "groupId">): Promise<CursorPage<PartialGameUniverse>>;
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
    getRevenueSummaryInTimeFrame(timeFrame: EconomyGetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]): Promise<EconomyGetGroupRevenueSummaryInTimeFrame>;
    getTransactions(options: Omit<EconomyGetGroupTransactionsOptions, "groupId">): Promise<EconomyGetGroupTransactions>;
    getAllies(maxItems?: number, startItem?: number): Promise<GroupRelationships<"allies">>;
    getEnemies(maxItems?: number, startItem?: number): Promise<GroupRelationships<"enemies">>;
    getGroup(): Promise<Group>;
    getMember(userId: number): Promise<GroupMember | null>;
    getIsMember(userId: number): Promise<GroupMember | null>;
    getSettings(): Promise<GroupsGetGroupSettings>;
    updateSettings(options: Omit<GroupsUpdateGroupSettingsOptions, "groupId">): Promise<GroupsUpdateGroupSettings>;
    updateDescription(description: string): Promise<GroupsUpdateGroupDescription>;
    updateShout(shout: string): Promise<GroupsUpdateGroupStatus>;
    updateIcon(file: unknown): Promise<GroupsUpdateGroupIcon>;
    declineJoinRequests(userIds: number[]): Promise<GroupsDeclineJoinRequests>;
    getJoinRequests(options: Omit<GroupsGetJoinRequestsOptions, "groupId">): Promise<CursorPage<GroupJoinRequest>>;
    acceptJoinRequests(options: Omit<GroupsAcceptJoinRequestsOptions, "groupId">): Promise<GroupsAcceptJoinRequests>;
    declineJoinRequest(userId: number): Promise<GroupsDeclineJoinRequest>;
    getJoinRequest(userId: number): Promise<GroupsGetJoinRequest>;
    acceptJoinRequest(userId: number): Promise<GroupsAcceptJoinRequest>;
    getSelfMembership(): Promise<GroupsGetSelfGroupMembership>;
    getRoles(): Promise<GroupRole[]>;
    getMembersWithRole(options: Omit<GroupsGetMembersWithRoleOptions, "groupId">): Promise<CursorPage<GroupMember>>;
    getMembers(options: Omit<GroupsGetMembersOptions, "groupId">): Promise<CursorPage<GroupMember>>;
    join(options: Omit<GroupsJoinGroupOptions, "groupId">): Promise<GroupsJoinGroup>;
    getIsPendingJoin(): Promise<boolean>;
    changeOwner(userId: number): Promise<GroupsChangeOwner>;
    claim(): Promise<GroupsClaimGroup>;
    kickMember(userId: number): Promise<GroupsKickMember>;
    updateMember(userId: number, roleId: number): Promise<GroupsUpdateMember>;
    getPayouts(): Promise<GroupsGetGroupPayouts>;
    payoutMembers(options: Omit<GroupsPayoutMembersOptions, "groupId">): Promise<GroupsPayoutMembers>;
    updateRecurringPayouts(options: Omit<GroupsUpdateRecurringPayoutsOptions, "groupId">): Promise<GroupsUpdateRecurringPayouts>;
    getRelationships(options: Omit<GroupsGetGroupRelationshipsOptions, "groupId">): Promise<GroupsGetGroupRelationships>;
    declineRelationshipRequests(options: Omit<GroupsDeclineRelationshipRequestsOptions, "groupId">): Promise<GroupsDeclineRelationshipRequests>;
    getRelationshipRequests(options: Omit<GroupsGetRelationshipRequestsOptions, "groupId">): Promise<GroupsGetRelationshipRequests>;
    acceptRelationshipRequests(options: Omit<GroupsAcceptRelationshipRequestsOptions, "groupId">): Promise<GroupsAcceptRelationshipRequests>;
    deleteRelationship(options: Omit<GroupsDeleteRelationshipOptions, "groupId">): Promise<GroupsDeleteRelationship>;
    createRelationship(options: Omit<GroupsCreateRelationshipOptions, "groupId">): Promise<GroupsCreateRelationship>;
    acceptRelationshipRequest(type: "enemies" | "allies", withGroup: number): Promise<GroupsAcceptRelationshipRequest>;
    declineRelationshipRequest(type: "enemies" | "allies", withGroup: number): Promise<GroupsDeclineRelationshipRequest>;
    getRolePermissions(roleId: number): Promise<GroupsGetRolePermissions>;
    updateRolePermissions(roleId: number, permissions: Omit<GroupsUpdateRolePermissionsOptions, "groupId" | "roleId">): Promise<GroupsUpdateRolePermissions>;
    getGuestPermissions(): Promise<GroupsGetGuestPermissions>;
    getAllRolesPermissions(): Promise<GroupsGetAllRolesPermissions>;
    getSocialLinks(): Promise<GroupsGetSocialLinks>;
    createSocialLink(options: Omit<GroupsPostSocialLinkOptions, "groupId">): Promise<GroupsPostSocialLink>;
    deleteSocialLink(id: number): Promise<GroupsDeleteSocialLink>;
    updateSocialLink(options: Omit<GroupsUpdateSocialLinkOptions, "groupId">): Promise<GroupsUpdateSocialLink>;
    getWallPosts(options: Omit<GroupsGetWallPostsOptions, "groupId">): Promise<CursorPage<GroupWallPost>>;
    createWallPost(options: Omit<GroupsCreateWallPostOptions, "groupId">): Promise<GroupsCreateWallPost>;
    deleteWallPost(id: number): Promise<GroupsDeleteWallPost>;
    getIsUserPrimaryGroup(userId: number): Promise<GroupMember | null>;
    removeAsPrimary(): Promise<GroupsRemovePrimaryGroup>;
    setAsPrimary(): Promise<GroupsSetPrimaryGroup>;
    createRole(options: Omit<GroupsCreateRoleOptions, "groupId">): Promise<GroupsCreateRole>;
    deleteRole(roleId: number): Promise<GroupsDeleteRole>;
    updateRole(roleId: number, options: Omit<GroupsUpdateRoleOptions, "groupId" | "roleId">): Promise<GroupsUpdateRole>;
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
    isLocked: boolean;
}
export declare class Group extends GroupBase {
    description: string;
    name: string;
    owner: GroupMember | null;
    shout: GroupShout | null;
    memberCount: number;
    isBuildersClubOnly: boolean;
    publicEntryAllowed: boolean;
    isLocked: boolean;
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
