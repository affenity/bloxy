import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type GroupsGroupRolePermissionsOptions = {
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
};
export declare type GroupsGroupRoleOptions = {
    id?: number;
    name?: string;
    rank?: number;
    group: {
        id: number;
        name?: string;
    };
};
export declare type GroupsGroupOptions = {
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
};
export declare type GroupsGetGroupOptions = {
    groupId: number;
};
export declare type GroupsGetGroup = {
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
export declare type GroupsGetMultiGroupsOptions = {
    groupIds: number[];
};
export declare type GroupsGetMultiGroups = {
    data: GroupsGroupOptions[];
};
export declare type GroupsGetGroupAuditLogsOptions = {
    groupId: number;
    actionType: "DeletePost" | "RemoveMember" | "AcceptJoinRequest" | "DeclineJoinRequest" | "PostStatus" | "ChangeRank" | "BuyAd" | "SendAllyRequest" | "CreateEnemy" | "AcceptAllyRequest" | "DeclineAllyRequest" | "DeleteAlly" | "DeleteEnemy" | "AddGroupPlace" | "RemoveGroupPlace" | "CreateItems" | "ConfigureItems" | "SpendGroupFunds" | "ChangeOwner" | "Delete" | "AdjustCurrencyAmounts" | "Abandon" | "Claim" | "Rename" | "ChangeDescription" | "InviteToClan" | "KickFromClan" | "CancelCLanInvite" | "BuyClan" | "CreateGroupAsset" | "UpdateGroupAsset" | "ConfigureGroupAsset" | "RevertGroupAsset" | "CreateGroupDeveloperProduct" | "ConfigureGroupGame" | "Lock" | "Unlock" | "CreateGamePass" | "CreateBadge" | "ConfigureBadge" | "SavePlace" | "PublishPlace";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsGetGroupAuditLogs = {
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
export declare type GroupsGetGroupSettingsOptions = {
    groupId: number;
};
export declare type GroupsGetGroupSettings = {
    groupId: number;
    isApprovalRequired: boolean;
    isBuildersClubRequired: boolean;
    areEnemiesAllowed: boolean;
    areGroupFundsVisible: boolean;
    areGroupGamesVisible: boolean;
};
export declare type GroupsUpdateGroupSettingsOptions = GroupsGetGroupSettings;
export declare type GroupsUpdateGroupSettings = unknown;
export declare type GroupsGetGroupConfigurationMetaData = {
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
export declare type GroupsGetGroupsMetaData = {
    groupLimit: number;
    currentGroupCount: number;
    groupStatusMaxLength: number;
    groupPostMaxLength: number;
    isGroupWallNotificationsEnabled: boolean;
    groupWallNotificationsSubscribeIntervalInMilliseconds: number;
    areProfileGroupsHidden: boolean;
    isGroupDetailsPolicyEnabled: boolean;
    showPreviousGroupNames: boolean;
};
export declare type GroupsCreateGroupOptions = {
    name: string;
    description: string;
    publicGroup: boolean;
    buildersClubMembersOnly: boolean;
    files: unknown;
};
export declare type GroupsCreateGroup = GroupsGroupOptions;
export declare type GroupsUpdateGroupDescriptionOptions = {
    groupId: number;
    description: string;
};
export declare type GroupsUpdateGroupDescription = {
    newDescription: string;
};
export declare type GroupsUpdateGroupStatusOptions = {
    groupId: number;
    message: string;
};
export declare type GroupsUpdateGroupStatus = GroupsGroupOptions["shout"];
export declare type GroupsUpdateGroupIconOptions = {
    groupId: number;
    files: unknown;
};
export declare type GroupsUpdateGroupIcon = unknown;
export declare type GroupsDeclineJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
};
export declare type GroupsDeclineJoinRequests = unknown;
export declare type GroupsGetJoinRequestsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsGetJoinRequests = {
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
export declare type GroupsAcceptJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
};
export declare type GroupsAcceptJoinRequests = unknown;
export declare type GroupsDeclineJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsDeclineJoinRequest = unknown;
export declare type GroupsGetJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsGetJoinRequest = GroupsGetJoinRequests["data"][0];
export declare type GroupsAcceptJoinRequestOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsAcceptJoinRequest = unknown;
export declare type GroupsGetSelfGroupMembershipOptions = {
    groupId: number;
};
export declare type GroupsGetSelfGroupMembership = {
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
    permissions: GroupsGroupRolePermissionsOptions["permissions"];
};
export declare type GroupsGetGroupRolesOptions = {
    groupId: number;
};
export declare type GroupsGetGroupRoles = {
    groupId: number;
    roles: {
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
};
export declare type GroupsGetMembersWithRoleOptions = {
    groupId: number;
    roleId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsGetMembersWithRole = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    }[];
};
export declare type GroupsGetMembersOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsGetMembers = GroupsGetMembersWithRole;
export declare type GroupsJoinGroupOptions = {
    groupId: number;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type GroupsJoinGroup = unknown;
export declare type GroupsGetSelfPendingGroupJoins = {
    data: GroupsGroupOptions[];
};
export declare type GroupsGetUserGroupsOptions = {
    userId: number;
};
export declare type GroupsGetUserGroups = {
    data: {
        group: GroupsGroupOptions;
        role: GroupsGetGroupRoles["roles"][0];
    }[];
};
export declare type GroupsChangeOwnerOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsChangeOwner = unknown;
export declare type GroupsClaimGroupOptions = {
    groupId: number;
};
export declare type GroupsClaimGroup = unknown;
export declare type GroupsKickMemberOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsKickMember = unknown;
export declare type GroupsUpdateMemberOptions = {
    groupId: number;
    userId: number;
    roleId: number;
};
export declare type GroupsUpdateMember = unknown;
export declare type GroupsGetGroupPayoutsOptions = {
    groupId: number;
};
export declare type GroupsGetGroupPayouts = {
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
export declare type GroupsPayoutMembersOptions = {
    groupId: number;
    users: {
        userId: number;
        amount: number;
    }[];
    type: "FixedAmount" | "Percentage" | string;
};
export declare type GroupsPayoutMembers = unknown;
export declare type GroupsUpdateRecurringPayoutsOptions = GroupsPayoutMembersOptions;
export declare type GroupsUpdateRecurringPayouts = unknown;
export declare type GroupsGetGroupRelationshipsOptions = {
    groupId: number;
    relationshipType: "enemies" | "allies";
    startRowIndex?: number;
    maxRows?: number;
};
export declare type GroupsGetGroupRelationships = {
    groupId: number;
    relationshipType: GroupsGetGroupRelationshipsOptions["relationshipType"];
    totalGroupCount: number;
    relatedGroups: GroupsGroupOptions[];
    nextRowIndex: number;
};
export declare type GroupsDeclineRelationshipRequestsOptions = {
    groupId: number;
    relationshipType: GroupsGetGroupRelationshipsOptions["relationshipType"];
    withGroups: number[];
};
export declare type GroupsDeclineRelationshipRequests = unknown;
export declare type GroupsGetRelationshipRequestsOptions = GroupsGetGroupRelationshipsOptions;
export declare type GroupsGetRelationshipRequests = GroupsGetGroupRelationships;
export declare type GroupsAcceptRelationshipRequestsOptions = GroupsDeclineRelationshipRequestsOptions;
export declare type GroupsAcceptRelationshipRequests = unknown;
export declare type GroupsDeleteRelationshipOptions = Omit<GroupsDeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type GroupsDeleteRelationship = unknown;
export declare type GroupsCreateRelationshipOptions = Omit<GroupsDeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type GroupsCreateRelationship = unknown;
export declare type GroupsDeclineRelationshipRequestOptions = Omit<GroupsDeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export declare type GroupsDeclineRelationshipRequest = unknown;
export declare type GroupsAcceptRelationshipRequestOptions = GroupsDeclineRelationshipRequestOptions;
export declare type GroupsAcceptRelationshipRequest = unknown;
export declare type GroupsGetRolePermissionsOptions = {
    groupId: number;
    roleId: number;
};
export declare type GroupsGetRolePermissions = GroupsGroupRolePermissionsOptions;
export declare type GroupsUpdateRolePermissionsOptions = {
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
export declare type GroupsUpdateRolePermissions = unknown;
export declare type GroupsGetGuestPermissionsOptions = {
    groupId: number;
};
export declare type GroupsGetGuestPermissions = GroupsGroupRolePermissionsOptions;
export declare type GroupsGetAllRolesPermissionsOptions = {
    groupId: number;
};
export declare type GroupsGetAllRolesPermissions = {
    data: GroupsGroupRolePermissionsOptions[];
};
export declare type GroupsGetSocialLinksOptions = {
    groupId: number;
};
export declare type GroupsGetSocialLinks = {
    data: {
        id: number;
        type: "Facebook" | string;
        url: string;
        title: string;
    }[];
};
export declare type GroupsPostSocialLinkOptions = {
    groupId: number;
    type: "Facebook" | string;
    url: string;
    title: string;
};
export declare type GroupsPostSocialLink = GroupsGetSocialLinks["data"][0];
export declare type GroupsDeleteSocialLinkOptions = {
    groupId: number;
    id: number;
};
export declare type GroupsDeleteSocialLink = unknown;
export declare type GroupsUpdateSocialLinkOptions = {
    groupId: number;
    id: number;
    type: "Facebook" | string;
    url: string;
    title: string;
};
export declare type GroupsUpdateSocialLink = unknown;
export declare type GroupsGetWallPostsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsGetWallPosts = {
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
export declare type GroupsCreateWallPostOptions = {
    groupId: number;
    body: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type GroupsCreateWallPost = GroupsGetWallPosts["data"][0];
export declare type GroupsDeleteWallPostOptions = {
    groupId: number;
    id: number;
};
export declare type GroupsDeleteWallPost = unknown;
export declare type GroupsDeleteWallPostsByUserOptions = {
    groupId: number;
    userId: number;
};
export declare type GroupsDeleteWallPostsByUser = unknown;
export declare type GroupsSearchGroupsByKeywordOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GroupsSearchGroupsByKeyword = {
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
export declare type GroupsSearchGroupsOptions = {
    groupName: string;
};
export declare type GroupsSearchGroups = {
    data: {
        id: number;
        name: string;
        memberCount: number;
    }[];
};
export declare type GroupsGetGroupSearchMetaData = {
    SuggestedGroupKeywords: string[];
};
export declare type GroupsGetRolesByIdsOptions = {
    roleIds: number[];
};
export declare type GroupsGetRolesByIds = {
    data: {
        groupId: number;
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
};
export declare type GroupsGetUserPrimaryGroupOptions = {
    userId: number;
};
export declare type GroupsGetUserPrimaryGroup = {
    group?: GroupsGroupOptions;
    role?: GroupsGroupRoleOptions;
    isPrimaryGroup?: boolean;
};
export declare type GroupsRemovePrimaryGroup = unknown;
export declare type GroupsSetPrimaryGroupOptions = {
    groupId: number;
};
export declare type GroupsSetPrimaryGroup = unknown;
export declare type GroupsCreateRoleOptions = {
    groupId: number;
    name: string;
    description: string;
    rank: number;
    usingGroupFunds: boolean;
};
export declare type GroupsCreateRole = Omit<GroupsGetRolesByIds["data"][0], "groupId">;
export declare type GroupsDeleteRoleOptions = {
    groupId: number;
    roleId: number;
};
export declare type GroupsDeleteRole = unknown;
export declare type GroupsUpdateRoleOptions = {
    groupId: number;
    roleId: number;
    name: string;
    description: string;
    rank: number;
};
export declare type GroupsUpdateRole = GroupsCreateRole;
export declare class GroupsAPI extends BaseAPI {
    constructor(client: Client);
    getGroup(options: GroupsGetGroupOptions): Promise<GroupsGetGroup>;
    getMultiGroups(options: GroupsGetMultiGroupsOptions): Promise<GroupsGetMultiGroups>;
    getAuditLogs(options: GroupsGetGroupAuditLogsOptions): Promise<GroupsGetGroupAuditLogs>;
    getGroupSettings(options: GroupsGetGroupSettingsOptions): Promise<GroupsGetGroupSettings>;
    updateGroupSettings(options: GroupsUpdateGroupSettingsOptions): Promise<GroupsUpdateGroupSettings>;
    getGroupConfigurationMetaData(): Promise<GroupsGetGroupConfigurationMetaData>;
    getGroupsMetaData(): Promise<GroupsGetGroupsMetaData>;
    createGroup(options: GroupsCreateGroupOptions): Promise<GroupsCreateGroup>;
    updateGroupDescription(options: GroupsUpdateGroupDescriptionOptions): Promise<GroupsUpdateGroupDescription>;
    updateGroupStatus(options: GroupsUpdateGroupStatusOptions): Promise<GroupsUpdateGroupStatus>;
    updateGroupIcon(options: GroupsUpdateGroupIconOptions): Promise<GroupsUpdateGroupIcon>;
    declineJoinRequests(options: GroupsDeclineJoinRequestsOptions): Promise<GroupsDeclineJoinRequests>;
    getJoinRequests(options: GroupsGetJoinRequestsOptions): Promise<GroupsGetJoinRequests>;
    acceptJoinRequests(options: GroupsAcceptJoinRequestsOptions): Promise<GroupsAcceptJoinRequests>;
    declineJoinRequest(options: GroupsDeclineJoinRequestOptions): Promise<GroupsDeclineJoinRequest>;
    getJoinRequest(options: GroupsGetJoinRequestOptions): Promise<GroupsGetJoinRequest>;
    acceptJoinRequest(options: GroupsAcceptJoinRequestOptions): Promise<GroupsAcceptJoinRequest>;
    getSelfGroupMembership(options: GroupsGetSelfGroupMembershipOptions): Promise<GroupsGetSelfGroupMembership>;
    getGroupRoles(options: GroupsGetGroupRolesOptions): Promise<GroupsGetGroupRoles>;
    getMembersWithRole(options: GroupsGetMembersWithRoleOptions): Promise<GroupsGetMembersWithRole>;
    getMembers(options: GroupsGetMembersOptions): Promise<GroupsGetMembers>;
    joinGroup(options: GroupsJoinGroupOptions): Promise<GroupsJoinGroup>;
    getSelfPendingGroupJoins(): Promise<GroupsGetSelfPendingGroupJoins>;
    getUserGroups(options: GroupsGetUserGroupsOptions): Promise<GroupsGetUserGroups>;
    changeGroupOwner(options: GroupsChangeOwnerOptions): Promise<GroupsChangeOwner>;
    claimGroup(options: GroupsClaimGroupOptions): Promise<GroupsClaimGroup>;
    kickMember(options: GroupsKickMemberOptions): Promise<GroupsKickMember>;
    updateMember(options: GroupsUpdateMemberOptions): Promise<GroupsUpdateMember>;
    getGroupPayouts(options: GroupsGetGroupPayoutsOptions): Promise<GroupsGetGroupPayouts>;
    payoutMembers(options: GroupsPayoutMembersOptions): Promise<GroupsPayoutMembers>;
    updateRecurringPayouts(options: GroupsUpdateRecurringPayoutsOptions): Promise<GroupsUpdateRecurringPayouts>;
    getGroupRelationships(options: GroupsGetGroupRelationshipsOptions): Promise<GroupsGetGroupRelationships>;
    declineRelationshipRequests(options: GroupsDeclineRelationshipRequestsOptions): Promise<GroupsDeclineRelationshipRequests>;
    getRelationshipRequests(options: GroupsGetRelationshipRequestsOptions): Promise<GroupsGetRelationshipRequests>;
    acceptRelationshipRequests(options: GroupsAcceptRelationshipRequestsOptions): Promise<GroupsAcceptRelationshipRequests>;
    deleteRelationship(options: GroupsDeleteRelationshipOptions): Promise<GroupsDeleteRelationship>;
    createRelationship(options: GroupsCreateRelationshipOptions): Promise<GroupsCreateRelationship>;
    acceptRelationshipRequest(options: GroupsAcceptRelationshipRequestOptions): Promise<GroupsAcceptRelationshipRequest>;
    declineRelationshipRequest(options: GroupsDeclineRelationshipRequestOptions): Promise<GroupsDeclineRelationshipRequest>;
    getRolePermissions(options: GroupsGetRolePermissionsOptions): Promise<GroupsGetRolePermissions>;
    updateRolePermissions(options: GroupsUpdateRolePermissionsOptions): Promise<GroupsUpdateRolePermissions>;
    getGuestPermissions(options: GroupsGetGuestPermissionsOptions): Promise<GroupsGetGuestPermissions>;
    getAllRolesPermissions(options: GroupsGetAllRolesPermissionsOptions): Promise<GroupsGetAllRolesPermissions>;
    getSocialLinks(options: GroupsGetSocialLinksOptions): Promise<GroupsGetSocialLinks>;
    createSocialLink(options: GroupsPostSocialLinkOptions): Promise<GroupsPostSocialLink>;
    deleteSocialLink(options: GroupsDeleteSocialLinkOptions): Promise<GroupsDeleteSocialLink>;
    updateSocialLink(options: GroupsUpdateSocialLinkOptions): Promise<GroupsUpdateSocialLink>;
    getWallPosts(options: GroupsGetWallPostsOptions): Promise<GroupsGetWallPosts>;
    createWallPost(options: GroupsCreateWallPostOptions): Promise<GroupsCreateWallPost>;
    deleteWallPost(options: GroupsDeleteWallPostOptions): Promise<GroupsDeleteWallPost>;
    deleteUserWallPosts(options: GroupsDeleteWallPostsByUserOptions): Promise<GroupsDeleteWallPostsByUser>;
    searchGroupsByKeyword(options: GroupsSearchGroupsByKeywordOptions): Promise<GroupsSearchGroupsByKeyword>;
    searchGroups(options: GroupsSearchGroupsOptions): Promise<GroupsSearchGroups>;
    getGroupSearchMetaData(): Promise<GroupsGetGroupSearchMetaData>;
    getRolesByIds(options: GroupsGetRolesByIdsOptions): Promise<GroupsGetRolesByIds>;
    getUserPrimaryGroup(options: GroupsGetUserPrimaryGroupOptions): Promise<GroupsGetUserPrimaryGroup>;
    removePrimaryGroup(): Promise<GroupsRemovePrimaryGroup>;
    setPrimaryGroup(options: GroupsSetPrimaryGroupOptions): Promise<GroupsSetPrimaryGroup>;
    createRole(options: GroupsCreateRoleOptions): Promise<GroupsCreateRole>;
    deleteRole(options: GroupsDeleteRoleOptions): Promise<GroupsDeleteRole>;
    updateRole(options: GroupsUpdateRoleOptions): Promise<GroupsUpdateRole>;
}
