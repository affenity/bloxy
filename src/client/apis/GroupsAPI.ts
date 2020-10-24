import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { GroupOptions, GroupRoleOptions, GroupRolePermissionsOptions } from "../../structures/Group";


export type GetGroupOptions = {
    groupId: number;
}
export type GetGroup = {
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
}
export type GetMultiGroupsOptions = {
    groupIds: number[];
}
export type GetMultiGroups = {
    data: GroupOptions[];
}
export type GetGroupAuditLogsOptions = {
    groupId: number;
    actionType: "DeletePost" | "RemoveMember" | "AcceptJoinRequest" | "DeclineJoinRequest" | "PostStatus" | "ChangeRank" | "BuyAd" | "SendAllyRequest" | "CreateEnemy" | "AcceptAllyRequest" | "DeclineAllyRequest" | "DeleteAlly" | "DeleteEnemy" | "AddGroupPlace" | "RemoveGroupPlace" | "CreateItems" | "ConfigureItems" | "SpendGroupFunds" | "ChangeOwner" | "Delete" | "AdjustCurrencyAmounts" | "Abandon" | "Claim" | "Rename" | "ChangeDescription" | "InviteToClan" | "KickFromClan" | "CancelCLanInvite" | "BuyClan" | "CreateGroupAsset" | "UpdateGroupAsset" | "ConfigureGroupAsset" | "RevertGroupAsset" | "CreateGroupDeveloperProduct" | "ConfigureGroupGame" | "Lock" | "Unlock" | "CreateGamePass" | "CreateBadge" | "ConfigureBadge" | "SavePlace" | "PublishPlace";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetGroupAuditLogs = {
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
}
export type GetGroupSettingsOptions = {
    groupId: number;
}
export type GetGroupSettings = {
    groupId: number;
    isApprovalRequired: boolean;
    isBuildersClubRequired: boolean;
    areEnemiesAllowed: boolean;
    areGroupFundsVisible: boolean;
    areGroupGamesVisible: boolean;
}
export type UpdateGroupSettingsOptions = GetGroupSettings;
export type UpdateGroupSettings = unknown
export type GetGroupConfigurationMetaData = {
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
}
export type GetGroupsMetaData = {
    groupLimit: number;
    currentGroupCount: number;
    groupStatusMaxLength: number;
    areProfileGroupsHidden: boolean;
    isGroupDetailsPolicyEnabled: boolean;
}
export type CreateGroupOptions = {
    name: string;
    description: string;
    publicGroup: boolean;
    buildersClubMembersOnly: boolean;
    files: unknown;
}
export type CreateGroup = GroupOptions;
export type UpdateGroupDescriptionOptions = {
    groupId: number;
    description: string;
}
export type UpdateGroupDescription = {
    newDescription: string;
}
export type UpdateGroupStatusOptions = {
    groupId: number;
    message: string;
}
export type UpdateGroupStatus = GroupOptions["shout"];
export type UpdateGroupIconOptions = {
    groupId: number;
    files: unknown;
}
export type UpdateGroupIcon = unknown
export type DeclineJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
}
export type DeclineJoinRequests = unknown
export type GetJoinRequestsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetJoinRequests = {
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
}
export type AcceptJoinRequestsOptions = {
    groupId: number;
    userIds: number[];
}
export type AcceptJoinRequests = unknown
export type DeclineJoinRequestOptions = {
    groupId: number;
    userId: number;
}
export type DeclineJoinRequest = unknown
export type GetJoinRequestOptions = {
    groupId: number;
    userId: number;
}
export type GetJoinRequest = GetJoinRequests["data"][0];
export type AcceptJoinRequestOptions = {
    groupId: number;
    userId: number;
}
export type AcceptJoinRequest = unknown
export type GetSelfGroupMembershipOptions = {
    groupId: number;
}
export type GetSelfGroupMembership = {
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
export type GetGroupRolesOptions = {
    groupId: number;
}
export type GetGroupRoles = {
    groupId: number;
    roles: {
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
}
export type GetMembersWithRoleOptions = {
    groupId: number;
    roleId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetMembersWithRole = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        buildersClubMembershipType: "None" | string;
        userId: number;
        username: string;
        displayName: string;
    }[];
}
export type GetMembersOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetMembers = GetMembersWithRole;
export type JoinGroupOptions = {
    groupId: number;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
}
export type JoinGroup = unknown
export type GetSelfPendingGroupJoins = {
    data: GroupOptions[];
}
export type GetUserGroupsOptions = {
    userId: number;
}
export type GetUserGroups = {
    data: {
        group: GroupOptions;
        role: GetGroupRoles["roles"][0];
    }[];
}
export type ChangeOwnerOptions = {
    groupId: number;
    userId: number;
}
export type ChangeOwner = unknown
export type ClaimGroupOptions = {
    groupId: number;
}
export type ClaimGroup = unknown
export type KickMemberOptions = {
    groupId: number;
    userId: number;
}
export type KickMember = unknown
export type UpdateMemberOptions = {
    groupId: number;
    userId: number;
    roleId: number;
}
export type UpdateMember = unknown
export type GetGroupPayoutsOptions = {
    groupId: number;
}
export type GetGroupPayouts = {
    data: {
        user: {
            buildersClubMembershipType: "None" | string;
            userId: number;
            username: string;
            displayName: string;
        };
        percentage: number;
    }[];
}
export type PayoutMembersOptions = {
    groupId: number;
    users: {
        userId: number;
        amount: number;
    }[];
    type: "FixedAmount" | "Percentage" | string;
}
export type PayoutMembers = unknown
export type UpdateRecurringPayoutsOptions = PayoutMembersOptions
export type UpdateRecurringPayouts = unknown
export type GetGroupRelationshipsOptions = {
    groupId: number;
    relationshipType: "enemies" | "allies";
    startRowIndex?: number;
    maxRows?: number;
}
export type GetGroupRelationships = {
    groupId: number;
    relationshipType: GetGroupRelationshipsOptions["relationshipType"];
    totalGroupCount: number;
    relatedGroups: GroupOptions[];
    nextRowIndex: number;
}
export type DeclineRelationshipRequestsOptions = {
    groupId: number;
    relationshipType: GetGroupRelationshipsOptions["relationshipType"];
    withGroups: number[];
}
export type DeclineRelationshipRequests = unknown
export type GetRelationshipRequestsOptions = GetGroupRelationshipsOptions;
export type GetRelationshipRequests = GetGroupRelationships;
export type AcceptRelationshipRequestsOptions = DeclineRelationshipRequestsOptions
export type AcceptRelationshipRequests = unknown
export type DeleteRelationshipOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
}
export type DeleteRelationship = unknown
export type CreateRelationshipOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
}
export type CreateRelationship = unknown
export type DeclineRelationshipRequestOptions = Omit<DeclineRelationshipRequestsOptions, "withGroups"> & {
    withGroup: number;
};
export type DeclineRelationshipRequest = unknown
export type AcceptRelationshipRequestOptions = DeclineRelationshipRequestOptions;
export type AcceptRelationshipRequest = unknown
export type GetRolePermissionsOptions = {
    groupId: number;
    roleId: number;
}
export type GetRolePermissions = GroupRolePermissionsOptions;
export type UpdateRolePermissionsOptions = {
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
}
export type UpdateRolePermissions = unknown
export type GetGuestPermissionsOptions = {
    groupId: number;
}
export type GetGuestPermissions = GroupRolePermissionsOptions;
export type GetAllRolesPermissionsOptions = {
    groupId: number;
}
export type GetAllRolesPermissions = {
    data: GroupRolePermissionsOptions[];
}
export type GetSocialLinksOptions = {
    groupId: number;
}
export type GetSocialLinks = {
    data: {
        id: number;
        type: "Facebook" | string;
        url: string;
        title: string;
    }[];
}
export type PostSocialLinkOptions = {
    groupId: number;
    type: "Facebook" | string;
    url: string;
    title: string;
}
export type PostSocialLink = GetSocialLinks["data"][0];
export type DeleteSocialLinkOptions = {
    groupId: number;
    id: number;
}
export type DeleteSocialLink = unknown
export type UpdateSocialLinkOptions = {
    groupId: number;
    id: number;
    type: "Facebook" | string;
    url: string;
    title: string;
}
export type UpdateSocialLink = unknown
export type GetWallPostsOptions = {
    groupId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetWallPosts = {
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
}
export type CreateWallPostOptions = {
    groupId: number;
    body: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
}
export type CreateWallPost = GetWallPosts["data"][0];
export type DeleteWallPostOptions = {
    groupId: number;
    id: number;
}
export type DeleteWallPost = unknown
export type DeleteWallPostsByUserOptions = {
    groupId: number;
    userId: number;
}
export type DeleteWallPostsByUser = unknown
export type SearchGroupsByKeywordOptions = {
    keyword: string;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type SearchGroupsByKeyword = {
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
export type SearchGroupsOptions = {
    groupName: string;
}
export type SearchGroups = {
    data: {
        id: number;
        name: string;
        memberCount: number;
    }[];
}
export type GetGroupSearchMetaData = {
    SuggestedGroupKeywords: string[];
}
export type GetRolesByIdsOptions = {
    roleIds: number[];
}
export type GetRolesByIds = {
    data: {
        groupId: number;
        id: number;
        name: string;
        description: string;
        rank: number;
        memberCount: number;
    }[];
}
export type GetUserPrimaryGroupOptions = {
    userId: number;
}
export type GetUserPrimaryGroup = {
    group?: GroupOptions;
    role?: GroupRoleOptions;
    isPrimaryGroup?: boolean;
}
export type RemovePrimaryGroup = unknown;
export type SetPrimaryGroupOptions = {
    groupId: number;
}
export type SetPrimaryGroup = unknown
export type CreateRoleOptions = {
    groupId: number;
    name: string;
    description: string;
    rank: number;
    usingGroupFunds: boolean;
}
export type CreateRole = Omit<GetRolesByIds["data"][0], "groupId">;
export type DeleteRoleOptions = {
    groupId: number;
    roleId: number;
}
export type DeleteRole = unknown
export type UpdateRoleOptions = {
    groupId: number;
    roleId: number;
    name: string;
    description: string;
    rank: number;
}
export type UpdateRole = CreateRole;

export default class GroupsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://groups.roblox.com/"
        });
    }

    getGroup (options: GetGroupOptions): Promise<GetGroup> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}`
            },
            json: true
        })
            .then(response => response.body);
    }

    getMultiGroups (options: GetMultiGroupsOptions): Promise<GetMultiGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/groups`,
                qs: {
                    groupIds: options.groupIds.join(",")
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAuditLogs (options: GetGroupAuditLogsOptions): Promise<GetGroupAuditLogs> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/audit-log`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupSettings (options: GetGroupSettingsOptions): Promise<GetGroupSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/settings`
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGroupSettings (options: UpdateGroupSettingsOptions): Promise<UpdateGroupSettings> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/settings`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupConfigurationMetaData (): Promise<GetGroupConfigurationMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/configuration/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupsMetaData (): Promise<GetGroupsMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    createGroup (options: CreateGroupOptions): Promise<CreateGroup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/create`,
                method: "POST",
                formData: {
                    "request.name": options.name,
                    "request.description": options.description,
                    "request.publicGroup": options.publicGroup,
                    "request.buildersClubMembersOnly": options.buildersClubMembersOnly,
                    "request.files": options.files
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGroupDescription (options: UpdateGroupDescriptionOptions): Promise<UpdateGroupDescription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/description`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGroupStatus (options: UpdateGroupStatusOptions): Promise<UpdateGroupStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/status`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGroupIcon (options: UpdateGroupIconOptions): Promise<UpdateGroupIcon> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/icon`,
                method: "PATCH",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }

    declineJoinRequests (options: DeclineJoinRequestsOptions): Promise<DeclineJoinRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                method: "DELETE",
                json: {
                    UserIds: options.userIds
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getJoinRequests (options: GetJoinRequestsOptions): Promise<GetJoinRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptJoinRequests (options: AcceptJoinRequestsOptions): Promise<AcceptJoinRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests`,
                method: "POST",
                json: {
                    UserIds: options.userIds
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    declineJoinRequest (options: DeclineJoinRequestOptions): Promise<DeclineJoinRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    getJoinRequest (options: GetJoinRequestOptions): Promise<GetJoinRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptJoinRequest (options: AcceptJoinRequestOptions): Promise<AcceptJoinRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfGroupMembership (options: GetSelfGroupMembershipOptions): Promise<GetSelfGroupMembership> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/membership`
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupRoles (options: GetGroupRolesOptions): Promise<GetGroupRoles> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/roles`
            },
            json: true
        })
            .then(response => response.body);
    }

    getMembersWithRole (options: GetMembersWithRoleOptions): Promise<GetMembersWithRole> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/users`,
                qs: {
                    ...options,
                    roleSetId: options.roleId
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getMembers (options: GetMembersOptions): Promise<GetMembers> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/users`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    joinGroup (options: JoinGroupOptions): Promise<JoinGroup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfPendingGroupJoins (): Promise<GetSelfPendingGroupJoins> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/pending`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserGroups (options: GetUserGroupsOptions): Promise<GetUserGroups> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/groups/roles`
            },
            json: true
        })
            .then(response => response.body);
    }

    changeGroupOwner (options: ChangeOwnerOptions): Promise<ChangeOwner> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/change-owner`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    claimGroup (options: ClaimGroupOptions): Promise<ClaimGroup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/claim-ownership`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    kickMember (options: KickMemberOptions): Promise<KickMember> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users/${options.userId}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    updateMember (options: UpdateMemberOptions): Promise<UpdateMember> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/users/${options.userId}`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupPayouts (options: GetGroupPayoutsOptions): Promise<GetGroupPayouts> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts`
            },
            json: true
        })
            .then(response => response.body);
    }

    payoutMembers (options: PayoutMembersOptions): Promise<PayoutMembers> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts`,
                method: "POST",
                json: {
                    PayoutType: options.type,
                    Recipients: options.users.map(userData => ({
                        recipientId: userData.userId,
                        recipientType: "User",
                        amount: userData.amount
                    }))
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateRecurringPayouts (options: UpdateRecurringPayoutsOptions): Promise<UpdateRecurringPayouts> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/payouts/recurring`,
                method: "POST",
                json: {
                    PayoutType: options.type,
                    Recipients: options.users.map(userData => ({
                        recipientId: userData.userId,
                        recipientType: "User",
                        amount: userData.amount
                    }))
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupRelationships (options: GetGroupRelationshipsOptions): Promise<GetGroupRelationships> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}`,
                qs: {
                    "model.startRowIndex": options.startRowIndex || 0,
                    "model.maxRows": options.maxRows
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    declineRelationshipRequests (options: DeclineRelationshipRequestsOptions): Promise<DeclineRelationshipRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                method: "DELETE",
                json: {
                    GroupIds: options.withGroups
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getRelationshipRequests (options: GetRelationshipRequestsOptions): Promise<GetRelationshipRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptRelationshipRequests (options: AcceptRelationshipRequestsOptions): Promise<AcceptRelationshipRequests> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
                method: "DELETE",
                json: {
                    GroupIds: options.withGroups
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteRelationship (options: DeleteRelationshipOptions): Promise<DeleteRelationship> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    createRelationship (options: CreateRelationshipOptions): Promise<CreateRelationship> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptRelationshipRequest (options: AcceptRelationshipRequestOptions): Promise<AcceptRelationshipRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`
            },
            json: true
        })
            .then(response => response.body);
    }

    declineRelationshipRequest (options: DeclineRelationshipRequestOptions): Promise<DeclineRelationshipRequest> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    getRolePermissions (options: GetRolePermissionsOptions): Promise<GetRolePermissions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`
            },
            json: true
        })
            .then(response => response.body);
    }

    updateRolePermissions (options: UpdateRolePermissionsOptions): Promise<UpdateRolePermissions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getGuestPermissions (options: GetGuestPermissionsOptions): Promise<GetGuestPermissions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/guest/permissions`
            },
            json: true
        })
            .then(response => response.body);
    }

    getAllRolesPermissions (options: GetAllRolesPermissionsOptions): Promise<GetAllRolesPermissions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/roles/permissions`
            },
            json: true
        })
            .then(response => response.body);
    }

    getSocialLinks (options: GetSocialLinksOptions): Promise<GetSocialLinks> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/social-links`
            },
            json: true
        })
            .then(response => response.body);
    }

    createSocialLink (options: PostSocialLinkOptions): Promise<PostSocialLink> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteSocialLink (options: DeleteSocialLinkOptions): Promise<DeleteSocialLink> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links/${options.id}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    updateSocialLink (options: UpdateSocialLinkOptions): Promise<UpdateSocialLink> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/social-links/${options.id}`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getWallPosts (options: GetWallPostsOptions): Promise<GetWallPosts> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    createWallPost (options: CreateWallPostOptions): Promise<CreateWallPost> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteWallPost (options: DeleteWallPostOptions): Promise<DeleteWallPost> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/posts/${options.id}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteUserWallPosts (options: DeleteWallPostsByUserOptions): Promise<DeleteWallPostsByUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/wall/users/${options.userId}/posts`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    searchGroupsByKeyword (options: SearchGroupsByKeywordOptions): Promise<SearchGroupsByKeyword> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    searchGroups (options: SearchGroupsOptions): Promise<SearchGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search/lookup`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupSearchMetaData (): Promise<GetGroupSearchMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/search/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    getRolesByIds (options: GetRolesByIdsOptions): Promise<GetRolesByIds> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/roles`,
                qs: {
                    ids: options.roleIds.join(",")
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserPrimaryGroup (options: GetUserPrimaryGroupOptions): Promise<GetUserPrimaryGroup> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/groups/primary/role`
            },
            json: true
        })
            .then(response => response.body);
    }

    removePrimaryGroup (): Promise<RemovePrimaryGroup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/primary`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    setPrimaryGroup (options: SetPrimaryGroupOptions): Promise<SetPrimaryGroup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/groups/primary`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    createRole (options: CreateRoleOptions): Promise<CreateRole> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/create`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteRole (options: DeleteRoleOptions): Promise<DeleteRole> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
                method: "DELETE"
            },
            json: true
        })
            .then(response => response.body);
    }

    updateRole (options: UpdateRoleOptions): Promise<UpdateRole> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
                method: "PATCH",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}

