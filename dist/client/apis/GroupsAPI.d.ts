import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GroupRoleOptions, GroupOptions, GroupRolePermissionsOptions } from "../../structures/Group";
export declare type GetGroupOptions = {
    groupId: number;
};
export declare type GetGroup = {
    id: number;
    name: string;
    description: string;
    owner: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    };
    shout: {
        body: string;
        poster: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
        created: string;
        updated: string;
    };
    memberCount: number;
    isBuildersClubOnly: boolean;
    publicEntryAllowed: boolean;
    isLocked: boolean;
};
export declare type GetMultiGroupsOptions = {
    groupIds: number[];
};
export declare type GetMultiGroups = {
    data: GroupOptions[];
};
export declare type GetGroupAuditLogsOptions = {
    groupId: number;
    actionType: "DeletePost" | "RemoveMember" | "AcceptJoinRequest" | "DeclineJoinRequest" | "PostStatus" | "ChangeRank" | "BuyAd" | "SendAllyRequest" | "CreateEnemy" | "AcceptAllyRequest" | "DeclineAllyRequest" | "DeleteAlly" | "DeleteEnemy" | "AddGroupPlace" | "RemoveGroupPlace" | "CreateItems" | "ConfigureItems" | "SpendGroupFunds" | "ChangeOwner" | "Delete" | "AdjustCurrencyAmounts" | "Abandon" | "Claim" | "Rename" | "ChangeDescription" | "InviteToClan" | "KickFromClan" | "CancelCLanInvite" | "BuyClan" | "CreateGroupAsset" | "UpdateGroupAsset" | "ConfigureGroupAsset" | "RevertGroupAsset" | "CreateGroupDeveloperProduct" | "ConfigureGroupGame" | "Lock" | "Unlock" | "CreateGamePass" | "CreateBadge" | "ConfigureBadge" | "SavePlace" | "PublishPlace";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetGroupAuditLogs = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        actor: {
            user: {
                buildersClubMembershipType: "None" | string;
                userId: number;
                username: string;
                displayName: string;
            };
            role: {
                id: number;
                name: string;
                description: string;
                rank: number;
                memberCount: number;
            };
        };
        actionType: string;
        description: unknown;
        created: string;
    }[];
};
export declare type GetGroupSettingsOptions = {
    groupId: number;
};
export declare type GetGroupSettings = {
    groupId: number;
    isApprovalRequired: boolean;
    isBuildersClubRequired: boolean;
    areEnemiesAllowed: boolean;
    areGroupFundsVisible: boolean;
    areGroupGamesVisible: boolean;
};
export declare type UpdateGroupSettingsOptions = GetGroupSettings;
export declare type UpdateGroupSettings = {};
export declare type GetGroupConfigurationMetaData = {
    groupConfiguration: {
        nameMaxLength: number;
        descriptionMaxLength: number;
        iconMaxFileSizeMb: number;
        cost: number;
    };
    recurringPayoutsConfiguration: {
        maxPayoutPartners: number;
    };
    roleConfiguration: {
        nameMaxLength: number;
        descriptionMaxLength: number;
        limit: number;
        cost: number;
        minRank: number;
        maxRank: number;
    };
    isPremiumPayoutsEnabled: boolean;
    isDefaultEmblemPolicyEnabled: boolean;
};
export declare type GetGroupsMetaData = {
    groupLimit: number;
    currentGroupCount: number;
    groupStatusMaxLength: number;
    areProfileGroupsHidden: boolean;
    isGroupDetailsPolicyEnabled: boolean;
};
export declare type CreateGroupOptions = {
    name: string;
    description: string;
    publicGroup: boolean;
    buildersClubMembersOnly: boolean;
    files: unknown;
};
export declare type CreateGroup = GroupOptions;
export declare type UpdateGroupDescriptionOptions = {
    groupId: number;
    description: string;
};
export declare type UpdateGroupDescription = {
    newDescription: string;
};
export declare type UpdateGroupStatusOptions = {
    groupId: number;
    status: string;
};
export declare type UpdateGroupStatus = GroupOptions["shout"];
export declare type UpdateGroupIconOptions = {
    groupId: number;
    files: unknown;
};
export declare type UpdateGroupIcon = {};
export declare type DeclineJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
};
export declare type DeclineJoinRequests = {};
export declare type GetJoinRequestsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetJoinRequests = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        requester: {
            userId: number;
            username: string;
            displayName: string;
        };
        created: string;
    }[];
};
export declare type AcceptJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
};
export declare type AcceptJoinRequests = {};
export declare type DeclineJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type DeclineJoinRequest = {};
export declare type GetJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type GetJoinRequest = GetJoinRequests["data"][0];
export declare type AcceptJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type AcceptJoinRequest = {};
export declare type GetSelfGroupMembershipOptions = {
    groupId: number;
};
export declare type GetSelfGroupMembership = {
    groupId: number;
    isPrimary: boolean;
    isPendingJoin: boolean;
    userRole: {
        user: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
        role: {
            id: number;
            name: string;
            description: string;
            rank: number;
            memberCount: number;
        };
    };
    permissions: GroupRolePermissionsOptions["permissions"];
};
export declare type GetGroupRolesOptions = {
    groupId: number;
};
export declare type GetGroupRoles = {
    groupId: number;
    roles: {
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
};
export declare type GetMembersWithRoleOptions = {
    groupId: number;
    roleId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetMembersWithRole = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    }[];
};
export declare type GetMembersOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetMembers = GetMembersWithRole;
export declare type JoinGroupOptions = {
    groupId: number;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type JoinGroup = {};
export declare type GetSelfPendingGroupJoins = {
    data: GroupOptions[];
};
export declare type GetUserGroupsOptions = {
    userId: number;
};
export declare type GetUserGroups = {
    data: {
        group: GroupOptions;
        role: GetGroupRoles["roles"][0];
    }[];
};
export declare type ChangeOwnerOptions = {
    groupId: number;
    userId: number;
};
export declare type ChangeOwner = {};
export declare type ClaimGroupOptions = {
    groupId: number;
};
export declare type ClaimGroup = {};
export declare type KickMemberOptions = {
    groupId: number;
    userId: number;
};
export declare type KickMember = {};
export declare type UpdateMemberOptions = {
    groupId: number;
    userId: number;
    roleId: number;
};
export declare type UpdateMember = {};
export declare type GetGroupPayoutsOptions = {
    groupId: number;
};
export declare type GetGroupPayouts = {
    data: {
        user: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
        percentage: number;
    }[];
};
export declare type PayoutMembersOptions = {
    groupId: number;
    users: {
        userId: number;
        amount: number;
    }[];
    type: "FixedAmount" | "Percentage" | string;
};
export declare type PayoutMembers = {};
export declare type UpdateRecurringPayoutsOptions = PayoutMembersOptions;
export declare type UpdateRecurringPayouts = {};
export declare type GetGroupRelationshipsOptions = {
    groupId: number;
    relationshipType: "enemies" | "allies";
    startRowIndex?: number;
    maxRows?: number;
};
export declare type GetGroupRelationships = {
    groupId: number;
    relationshipType: GetGroupRelationshipsOptions["relationshipType"];
    totalGroupCount: number;
    relatedGroups: GroupOptions[];
    nextRowIndex: number;
};
export declare type DeclineRelationshipRequestsOptions = {
    groupId: number;
    relationshipType: GetGroupRelationshipsOptions["relationshipType"];
    withGroups: number[];
};
export declare type DeclineRelationshipRequests = {};
export declare type GetRelationshipRequestsOptions = GetGroupRelationshipsOptions;
export declare type GetRelationshipRequests = GetGroupRelationships;
export declare type AcceptRelationshipRequestsOptions = DeclineRelationshipRequestsOptions;
export declare type AcceptRelationshipRequests = {};
export declare type DeleteRelationshipOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type DeleteRelationship = {};
export declare type CreateRelationshipOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type CreateRelationship = {};
export declare type DeclineRelationshipRequestOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type DeclineRelationshipRequest = {};
export declare type AcceptRelationshipRequestOptions = DeclineRelationshipRequestOptions;
export declare type AcceptRelationshipRequest = {};
export declare type GetRolePermissionsOptions = {
    groupId: number;
    roleId: number;
};
export declare type GetRolePermissions = GroupRolePermissionsOptions;
export declare type UpdateRolePermissionsOptions = {
    groupId: number;
    roleId: number;
    DeleteFromWall: boolean;
    PostToWall: boolean;
    InviteMembers: boolean;
    PostToStatus: boolean;
    RemoveMembers: boolean;
    ViewStatus: boolean;
    ViewWall: boolean;
    ChangeRank: boolean;
    AdvertiseGroup: boolean;
    ManageRelationships: boolean;
    AddGroupPlaces: boolean;
    ViewAuditLogs: boolean;
    CreateItems: boolean;
    ManageItems: boolean;
    SpendGroupFunds: boolean;
    ManageClan: boolean;
    ManageGroupGames: boolean;
};
export declare type UpdateRolePermissions = {};
export declare type GetGuestPermissionsOptions = {
    groupId: number;
};
export declare type GetGuestPermissions = GroupRolePermissionsOptions;
export declare type GetAllRolesPermissionsOptions = {
    groupId: number;
};
export declare type GetAllRolesPermissions = {
    data: GroupRolePermissionsOptions[];
};
export declare type GetSocialLinksOptions = {
    groupId: number;
};
export declare type GetSocialLinks = {
    data: {
        id: number;
        type: "Facebook" | string;
        url: string;
        title: string;
    }[];
};
export declare type PostSocialLinkOptions = {
    groupId: number;
    type: "Facebook" | string;
    url: string;
    title: string;
};
export declare type PostSocialLink = GetSocialLinks["data"][0];
export declare type DeleteSocialLinkOptions = {
    groupId: number;
    id: number;
};
export declare type DeleteSocialLink = {};
export declare type UpdateSocialLinkOptions = {
    groupId: number;
    id: number;
    type: "Facebook" | string;
    url: string;
    title: string;
};
export declare type UpdateSocialLink = {};
export declare type GetWallPostsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetWallPosts = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        id: number;
        body: string;
        created: string;
        updated: string;
        poster: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
    }[];
};
export declare type CreateWallPostOptions = {
    groupId: number;
    body: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type CreateWallPost = GetWallPosts["data"][0];
export declare type DeleteWallPostOptions = {
    groupId: number;
    id: number;
};
export declare type DeleteWallPost = {};
export declare type DeleteWallPostsByUserOptions = {
    groupId: number;
    userId: number;
};
export declare type DeleteWallPostsByUser = {};
export declare type SearchGroupsByKeywordOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type SearchGroupsByKeyword = {
    keyword: string;
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        id: number;
        name: string;
        description: string;
        memberCount: number;
        publicEntryAllowed: boolean;
        created: string;
        updated: string;
    }[];
};
export declare type SearchGroupsOptions = {
    groupName: string;
};
export declare type SearchGroups = {
    data: {
        id: number;
        name: string;
        memberCount: number;
    }[];
};
export declare type GetGroupSearchMetaData = {
    SuggestedGroupKeywords: string[];
};
export declare type GetRolesByIdsOptions = {
    roleIds: number[];
};
export declare type GetRolesByIds = {
    data: {
        groupId: number;
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
};
export declare type GetUserPrimaryGroupOptions = {
    userId: number;
};
export declare type GetUserPrimaryGroup = {
    group?: GroupOptions;
    role?: GroupRoleOptions;
    isPrimaryGroup?: boolean;
};
export declare type RemovePrimaryGroup = {};
export declare type SetPrimaryGroupOptions = {
    groupId: number;
};
export declare type SetPrimaryGroup = {};
export declare type CreateRoleOptions = {
    groupId: number;
    name: string;
    description: string;
    rank: number;
    usingGroupFunds: boolean;
};
export declare type CreateRole = Omit<GetRolesByIds["data"][0], "groupId">;
export declare type DeleteRoleOptions = {
    groupId: number;
    roleId: number;
};
export declare type DeleteRole = {};
export declare type UpdateRoleOptions = {
    groupId: number;
    roleId: number;
    name: string;
    description: string;
    rank: number;
};
export declare type UpdateRole = CreateRole;
export default class GroupsAPI extends BaseAPI {
    constructor(client: Client);
    getGroup(options: GetGroupOptions): Promise<GetGroup>;
    getMultiGroups(options: GetMultiGroupsOptions): Promise<GetMultiGroups>;
    getAuditLogs(options: GetGroupAuditLogsOptions): Promise<GetGroupAuditLogs>;
    getGroupSettings(options: GetGroupSettingsOptions): Promise<GetGroupSettings>;
    updateGroupSettings(options: UpdateGroupSettingsOptions): Promise<UpdateGroupSettings>;
    getGroupConfigurationMetaData(): Promise<GetGroupConfigurationMetaData>;
    getGroupsMetaData(): Promise<GetGroupsMetaData>;
    createGroup(options: CreateGroupOptions): Promise<CreateGroup>;
    updateGroupDescription(options: UpdateGroupDescriptionOptions): Promise<UpdateGroupDescription>;
    updateGroupStatus(options: UpdateGroupStatusOptions): Promise<UpdateGroupStatus>;
    updateGroupIcon(options: UpdateGroupIconOptions): Promise<UpdateGroupIcon>;
    declineJoinRequests(options: DeclineJoinRequestsOptions): Promise<DeclineJoinRequests>;
    getJoinRequests(options: GetJoinRequestsOptions): Promise<GetJoinRequests>;
    acceptJoinRequests(options: AcceptJoinRequestsOptions): Promise<AcceptJoinRequests>;
    declineJoinRequest(options: DeclineJoinRequestOptions): Promise<DeclineJoinRequest>;
    getJoinRequest(options: GetJoinRequestOptions): Promise<GetJoinRequest>;
    acceptJoinRequest(options: AcceptJoinRequestOptions): Promise<AcceptJoinRequest>;
    getSelfGroupMembership(options: GetSelfGroupMembershipOptions): Promise<GetSelfGroupMembership>;
    getGroupRoles(options: GetGroupRolesOptions): Promise<GetGroupRoles>;
    getMembersWithRole(options: GetMembersWithRoleOptions): Promise<GetMembersWithRole>;
    getMembers(options: GetMembersOptions): Promise<GetMembers>;
    joinGroup(options: JoinGroupOptions): Promise<JoinGroup>;
    getSelfPendingGroupJoins(): Promise<GetSelfPendingGroupJoins>;
    getUserGroups(options: GetUserGroupsOptions): Promise<GetUserGroups>;
    changeGroupOwner(options: ChangeOwnerOptions): Promise<ChangeOwner>;
    claimGroup(options: ClaimGroupOptions): Promise<ClaimGroup>;
    kickMember(options: KickMemberOptions): Promise<KickMember>;
    updateMember(options: UpdateMemberOptions): Promise<UpdateMember>;
    getGroupPayouts(options: GetGroupPayoutsOptions): Promise<GetGroupPayouts>;
    payoutMembers(options: PayoutMembersOptions): Promise<PayoutMembers>;
    updateRecurringPayouts(options: UpdateRecurringPayoutsOptions): Promise<UpdateRecurringPayouts>;
    getGroupRelationships(options: GetGroupRelationshipsOptions): Promise<GetGroupRelationships>;
    declineRelationshipRequests(options: DeclineRelationshipRequestsOptions): Promise<DeclineRelationshipRequests>;
    getRelationshipRequests(options: GetRelationshipRequestsOptions): Promise<GetRelationshipRequests>;
    acceptRelationshipRequests(options: AcceptRelationshipRequestsOptions): Promise<AcceptRelationshipRequests>;
    deleteRelationship(options: DeleteRelationshipOptions): Promise<DeleteRelationship>;
    createRelationship(options: CreateRelationshipOptions): Promise<CreateRelationship>;
    acceptRelationshipRequest(options: AcceptRelationshipRequestOptions): Promise<AcceptRelationshipRequest>;
    declineRelationshipRequest(options: DeclineRelationshipRequestOptions): Promise<DeclineRelationshipRequest>;
    getRolePermissions(options: GetRolePermissionsOptions): Promise<GetRolePermissions>;
    updateRolePermissions(options: UpdateRolePermissionsOptions): Promise<UpdateRolePermissions>;
    getGuestPermissions(options: GetGuestPermissionsOptions): Promise<GetGuestPermissions>;
    getAllRolesPermissions(options: GetAllRolesPermissionsOptions): Promise<GetAllRolesPermissions>;
    getSocialLinks(options: GetSocialLinksOptions): Promise<GetSocialLinks>;
    createSocialLink(options: PostSocialLinkOptions): Promise<PostSocialLink>;
    deleteSocialLink(options: DeleteSocialLinkOptions): Promise<DeleteSocialLink>;
    updateSocialLink(options: UpdateSocialLinkOptions): Promise<UpdateSocialLink>;
    getWallPosts(options: GetWallPostsOptions): Promise<GetWallPosts>;
    createWallPost(options: CreateWallPostOptions): Promise<CreateWallPost>;
    deleteWallPost(options: DeleteWallPostOptions): Promise<DeleteWallPost>;
    deleteUserWallPosts(options: DeleteWallPostsByUserOptions): Promise<DeleteWallPostsByUser>;
    searchGroupsByKeyword(options: SearchGroupsByKeywordOptions): Promise<SearchGroupsByKeyword>;
    searchGroups(options: SearchGroupsOptions): Promise<SearchGroups>;
    getGroupSearchMetaData(): Promise<GetGroupSearchMetaData>;
    getRolesByIds(options: GetRolesByIdsOptions): Promise<GetRolesByIds>;
    getUserPrimaryGroup(options: GetUserPrimaryGroupOptions): Promise<GetUserPrimaryGroup>;
    removePrimaryGroup(): Promise<RemovePrimaryGroup>;
    setPrimaryGroup(options: SetPrimaryGroupOptions): Promise<SetPrimaryGroup>;
    createRole(options: CreateRoleOptions): Promise<CreateRole>;
    deleteRole(options: DeleteRoleOptions): Promise<DeleteRole>;
    updateRole(options: UpdateRoleOptions): Promise<UpdateRole>;
}
