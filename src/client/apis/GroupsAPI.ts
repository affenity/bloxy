import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type GroupsGroupRolePermissionsOptions = {
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
export type GroupsGroupRoleOptions = {
  id?: number;
  name?: string;
  rank?: number;
  group: {
    id: number;
    name?: string;
  };
};
export type GroupsGroupOptions = {
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
export type GroupsGetGroupOptions = {
  groupId: number;
};
export type GroupsGetGroup = {
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
export type GroupsGetMultiGroupsOptions = {
  groupIds: number[];
};
export type GroupsGetMultiGroups = {
  data: GroupsGroupOptions[];
};
export type GroupsGetGroupAuditLogsOptions = {
  groupId: number;
  actionType:
    | "DeletePost"
    | "RemoveMember"
    | "AcceptJoinRequest"
    | "DeclineJoinRequest"
    | "PostStatus"
    | "ChangeRank"
    | "BuyAd"
    | "SendAllyRequest"
    | "CreateEnemy"
    | "AcceptAllyRequest"
    | "DeclineAllyRequest"
    | "DeleteAlly"
    | "DeleteEnemy"
    | "AddGroupPlace"
    | "RemoveGroupPlace"
    | "CreateItems"
    | "ConfigureItems"
    | "SpendGroupFunds"
    | "ChangeOwner"
    | "Delete"
    | "AdjustCurrencyAmounts"
    | "Abandon"
    | "Claim"
    | "Rename"
    | "ChangeDescription"
    | "InviteToClan"
    | "KickFromClan"
    | "CancelCLanInvite"
    | "BuyClan"
    | "CreateGroupAsset"
    | "UpdateGroupAsset"
    | "ConfigureGroupAsset"
    | "RevertGroupAsset"
    | "CreateGroupDeveloperProduct"
    | "ConfigureGroupGame"
    | "Lock"
    | "Unlock"
    | "CreateGamePass"
    | "CreateBadge"
    | "ConfigureBadge"
    | "SavePlace"
    | "PublishPlace";
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsGetGroupAuditLogs = {
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
export type GroupsGetGroupSettingsOptions = {
  groupId: number;
};
export type GroupsGetGroupSettings = {
  groupId: number;
  isApprovalRequired: boolean;
  isBuildersClubRequired: boolean;
  areEnemiesAllowed: boolean;
  areGroupFundsVisible: boolean;
  areGroupGamesVisible: boolean;
};
export type GroupsUpdateGroupSettingsOptions = GroupsGetGroupSettings;
export type GroupsUpdateGroupSettings = unknown;
export type GroupsGetGroupConfigurationMetaData = {
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
export type GroupsGetGroupsMetaData = {
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
export type GroupsCreateGroupOptions = {
  name: string;
  description: string;
  publicGroup: boolean;
  buildersClubMembersOnly: boolean;
  files: unknown;
};
export type GroupsCreateGroup = GroupsGroupOptions;
export type GroupsUpdateGroupDescriptionOptions = {
  groupId: number;
  description: string;
};
export type GroupsUpdateGroupDescription = {
  newDescription: string;
};
export type GroupsUpdateGroupStatusOptions = {
  groupId: number;
  message: string;
};
export type GroupsUpdateGroupStatus = GroupsGroupOptions["shout"];
export type GroupsUpdateGroupIconOptions = {
  groupId: number;
  files: unknown;
};
export type GroupsUpdateGroupIcon = unknown;
export type GroupsDeclineJoinRequestsOptions = {
  groupId: number;
  userIds: number[];
};
export type GroupsDeclineJoinRequests = unknown;
export type GroupsGetJoinRequestsOptions = {
  groupId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsGetJoinRequests = {
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
export type GroupsAcceptJoinRequestsOptions = {
  groupId: number;
  userIds: number[];
};
export type GroupsAcceptJoinRequests = unknown;
export type GroupsDeclineJoinRequestOptions = {
  groupId: number;
  userId: number;
};
export type GroupsDeclineJoinRequest = unknown;
export type GroupsGetJoinRequestOptions = {
  groupId: number;
  userId: number;
};
export type GroupsGetJoinRequest = GroupsGetJoinRequests["data"][0];
export type GroupsAcceptJoinRequestOptions = {
  groupId: number;
  userId: number;
};
export type GroupsAcceptJoinRequest = unknown;
export type GroupsGetSelfGroupMembershipOptions = {
  groupId: number;
};
export type GroupsGetSelfGroupMembership = {
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
export type GroupsGetGroupRolesOptions = {
  groupId: number;
};
export type GroupsGetGroupRoles = {
  groupId: number;
  roles: {
    id: number;
    name: string;
    description: string;
    rank: number;
    memberCount: number;
  }[];
};
export type GroupsGetMembersWithRoleOptions = {
  groupId: number;
  roleId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsGetMembersWithRole = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    buildersClubMembershipType: "None" | string;
    userId: number;
    username: string;
    displayName: string;
  }[];
};
export type GroupsGetMembersOptions = {
  groupId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsGetMembers = GroupsGetMembersWithRole;
export type GroupsJoinGroupOptions = {
  groupId: number;
  captchaToken: string;
  captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export type GroupsJoinGroup = unknown;
export type GroupsGetSelfPendingGroupJoins = {
  data: GroupsGroupOptions[];
};
export type GroupsGetUserGroupsOptions = {
  userId: number;
};
export type GroupsGetUserGroups = {
  data: {
    group: GroupsGroupOptions;
    role: GroupsGetGroupRoles["roles"][0];
  }[];
};
export type GroupsChangeOwnerOptions = {
  groupId: number;
  userId: number;
};
export type GroupsChangeOwner = unknown;
export type GroupsClaimGroupOptions = {
  groupId: number;
};
export type GroupsClaimGroup = unknown;
export type GroupsKickMemberOptions = {
  groupId: number;
  userId: number;
};
export type GroupsKickMember = unknown;
export type GroupsUpdateMemberOptions = {
  groupId: number;
  userId: number;
  roleId: number;
};
export type GroupsUpdateMember = unknown;
export type GroupsGetGroupPayoutsOptions = {
  groupId: number;
};
export type GroupsGetGroupPayouts = {
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
export type GroupsPayoutMembersOptions = {
  groupId: number;
  users: {
    userId: number;
    amount: number;
  }[];
  type: "FixedAmount" | "Percentage" | string;
};
export type GroupsPayoutMembers = unknown;
export type GroupsUpdateRecurringPayoutsOptions = GroupsPayoutMembersOptions;
export type GroupsUpdateRecurringPayouts = unknown;
export type GroupsGetGroupRelationshipsOptions = {
  groupId: number;
  relationshipType: "enemies" | "allies";
  startRowIndex?: number;
  maxRows?: number;
};
export type GroupsGetGroupRelationships = {
  groupId: number;
  relationshipType: GroupsGetGroupRelationshipsOptions["relationshipType"];
  totalGroupCount: number;
  relatedGroups: GroupsGroupOptions[];
  nextRowIndex: number;
};
export type GroupsDeclineRelationshipRequestsOptions = {
  groupId: number;
  relationshipType: GroupsGetGroupRelationshipsOptions["relationshipType"];
  withGroups: number[];
};
export type GroupsDeclineRelationshipRequests = unknown;
export type GroupsGetRelationshipRequestsOptions =
  GroupsGetGroupRelationshipsOptions;
export type GroupsGetRelationshipRequests = GroupsGetGroupRelationships;
export type GroupsAcceptRelationshipRequestsOptions =
  GroupsDeclineRelationshipRequestsOptions;
export type GroupsAcceptRelationshipRequests = unknown;
export type GroupsDeleteRelationshipOptions = Omit<
  GroupsDeclineRelationshipRequestsOptions,
  "withGroups"
> & {
  withGroup: number;
};
export type GroupsDeleteRelationship = unknown;
export type GroupsCreateRelationshipOptions = Omit<
  GroupsDeclineRelationshipRequestsOptions,
  "withGroups"
> & {
  withGroup: number;
};
export type GroupsCreateRelationship = unknown;
export type GroupsDeclineRelationshipRequestOptions = Omit<
  GroupsDeclineRelationshipRequestsOptions,
  "withGroups"
> & {
  withGroup: number;
};
export type GroupsDeclineRelationshipRequest = unknown;
export type GroupsAcceptRelationshipRequestOptions =
  GroupsDeclineRelationshipRequestOptions;
export type GroupsAcceptRelationshipRequest = unknown;
export type GroupsGetRolePermissionsOptions = {
  groupId: number;
  roleId: number;
};
export type GroupsGetRolePermissions = GroupsGroupRolePermissionsOptions;
export type GroupsUpdateRolePermissionsOptions = {
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
export type GroupsUpdateRolePermissions = unknown;
export type GroupsGetGuestPermissionsOptions = {
  groupId: number;
};
export type GroupsGetGuestPermissions = GroupsGroupRolePermissionsOptions;
export type GroupsGetAllRolesPermissionsOptions = {
  groupId: number;
};
export type GroupsGetAllRolesPermissions = {
  data: GroupsGroupRolePermissionsOptions[];
};
export type GroupsGetSocialLinksOptions = {
  groupId: number;
};
export type GroupsGetSocialLinks = {
  data: {
    id: number;
    type: "Facebook" | string;
    url: string;
    title: string;
  }[];
};
export type GroupsPostSocialLinkOptions = {
  groupId: number;
  type: "Facebook" | string;
  url: string;
  title: string;
};
export type GroupsPostSocialLink = GroupsGetSocialLinks["data"][0];
export type GroupsDeleteSocialLinkOptions = {
  groupId: number;
  id: number;
};
export type GroupsDeleteSocialLink = unknown;
export type GroupsUpdateSocialLinkOptions = {
  groupId: number;
  id: number;
  type: "Facebook" | string;
  url: string;
  title: string;
};
export type GroupsUpdateSocialLink = unknown;
export type GroupsGetWallPostsOptions = {
  groupId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsGetWallPosts = {
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
export type GroupsCreateWallPostOptions = {
  groupId: number;
  body: string;
  captchaToken: string;
  captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export type GroupsCreateWallPost = GroupsGetWallPosts["data"][0];
export type GroupsDeleteWallPostOptions = {
  groupId: number;
  id: number;
};
export type GroupsDeleteWallPost = unknown;
export type GroupsDeleteWallPostsByUserOptions = {
  groupId: number;
  userId: number;
};
export type GroupsDeleteWallPostsByUser = unknown;
export type GroupsSearchGroupsByKeywordOptions = {
  keyword: string;
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type GroupsSearchGroupsByKeyword = {
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
export type GroupsSearchGroupsOptions = {
  groupName: string;
};
export type GroupsSearchGroups = {
  data: {
    id: number;
    name: string;
    memberCount: number;
  }[];
};
export type GroupsGetGroupSearchMetaData = {
  SuggestedGroupKeywords: string[];
};
export type GroupsGetRolesByIdsOptions = {
  roleIds: number[];
};
export type GroupsGetRolesByIds = {
  data: {
    groupId: number;
    id: number;
    name: string;
    description: string;
    rank: number;
    memberCount: number;
  }[];
};
export type GroupsGetUserPrimaryGroupOptions = {
  userId: number;
};
export type GroupsGetUserPrimaryGroup = {
  group?: GroupsGroupOptions;
  role?: GroupsGroupRoleOptions;
  isPrimaryGroup?: boolean;
};
export type GroupsRemovePrimaryGroup = unknown;
export type GroupsSetPrimaryGroupOptions = {
  groupId: number;
};
export type GroupsSetPrimaryGroup = unknown;
export type GroupsCreateRoleOptions = {
  groupId: number;
  name: string;
  description: string;
  rank: number;
  usingGroupFunds: boolean;
};
export type GroupsCreateRole = Omit<GroupsGetRolesByIds["data"][0], "groupId">;
export type GroupsDeleteRoleOptions = {
  groupId: number;
  roleId: number;
};
export type GroupsDeleteRole = unknown;
export type GroupsUpdateRoleOptions = {
  groupId: number;
  roleId: number;
  name: string;
  description: string;
  rank: number;
};
export type GroupsUpdateRole = GroupsCreateRole;

export default class GroupsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://groups.roblox.com/"
    });
  }

  getGroup(options: GroupsGetGroupOptions): Promise<GroupsGetGroup> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}`
      },
      json: true
    }).then((response) => response.body);
  }

  getMultiGroups(
    options: GroupsGetMultiGroupsOptions
  ): Promise<GroupsGetMultiGroups> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/groups`,
        qs: {
          groupIds: options.groupIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getAuditLogs(
    options: GroupsGetGroupAuditLogsOptions
  ): Promise<GroupsGetGroupAuditLogs> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/audit-log`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupSettings(
    options: GroupsGetGroupSettingsOptions
  ): Promise<GroupsGetGroupSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/settings`
      },
      json: true
    }).then((response) => response.body);
  }

  updateGroupSettings(
    options: GroupsUpdateGroupSettingsOptions
  ): Promise<GroupsUpdateGroupSettings> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/settings`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupConfigurationMetaData(): Promise<GroupsGetGroupConfigurationMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/configuration/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupsMetaData(): Promise<GroupsGetGroupsMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  createGroup(options: GroupsCreateGroupOptions): Promise<GroupsCreateGroup> {
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
    }).then((response) => response.body);
  }

  updateGroupDescription(
    options: GroupsUpdateGroupDescriptionOptions
  ): Promise<GroupsUpdateGroupDescription> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/description`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateGroupStatus(
    options: GroupsUpdateGroupStatusOptions
  ): Promise<GroupsUpdateGroupStatus> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/status`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateGroupIcon(
    options: GroupsUpdateGroupIconOptions
  ): Promise<GroupsUpdateGroupIcon> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/icon`,
        method: "PATCH",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }

  declineJoinRequests(
    options: GroupsDeclineJoinRequestsOptions
  ): Promise<GroupsDeclineJoinRequests> {
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
    }).then((response) => response.body);
  }

  getJoinRequests(
    options: GroupsGetJoinRequestsOptions
  ): Promise<GroupsGetJoinRequests> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/join-requests`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  acceptJoinRequests(
    options: GroupsAcceptJoinRequestsOptions
  ): Promise<GroupsAcceptJoinRequests> {
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
    }).then((response) => response.body);
  }

  declineJoinRequest(
    options: GroupsDeclineJoinRequestOptions
  ): Promise<GroupsDeclineJoinRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getJoinRequest(
    options: GroupsGetJoinRequestOptions
  ): Promise<GroupsGetJoinRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`
      },
      json: true
    }).then((response) => response.body);
  }

  acceptJoinRequest(
    options: GroupsAcceptJoinRequestOptions
  ): Promise<GroupsAcceptJoinRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/join-requests/users/${options.userId}`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfGroupMembership(
    options: GroupsGetSelfGroupMembershipOptions
  ): Promise<GroupsGetSelfGroupMembership> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/membership`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupRoles(
    options: GroupsGetGroupRolesOptions
  ): Promise<GroupsGetGroupRoles> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/roles`
      },
      json: true
    }).then((response) => response.body);
  }

  getMembersWithRole(
    options: GroupsGetMembersWithRoleOptions
  ): Promise<GroupsGetMembersWithRole> {
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
    }).then((response) => response.body);
  }

  getMembers(options: GroupsGetMembersOptions): Promise<GroupsGetMembers> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/users`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  joinGroup(options: GroupsJoinGroupOptions): Promise<GroupsJoinGroup> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/users`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfPendingGroupJoins(): Promise<GroupsGetSelfPendingGroupJoins> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/groups/pending`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserGroups(
    options: GroupsGetUserGroupsOptions
  ): Promise<GroupsGetUserGroups> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/groups/roles`
      },
      json: true
    }).then((response) => response.body);
  }

  changeGroupOwner(
    options: GroupsChangeOwnerOptions
  ): Promise<GroupsChangeOwner> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/change-owner`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  claimGroup(options: GroupsClaimGroupOptions): Promise<GroupsClaimGroup> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/claim-ownership`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  kickMember(options: GroupsKickMemberOptions): Promise<GroupsKickMember> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/users/${options.userId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  updateMember(
    options: GroupsUpdateMemberOptions
  ): Promise<GroupsUpdateMember> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/users/${options.userId}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupPayouts(
    options: GroupsGetGroupPayoutsOptions
  ): Promise<GroupsGetGroupPayouts> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/payouts`
      },
      json: true
    }).then((response) => response.body);
  }

  payoutMembers(
    options: GroupsPayoutMembersOptions
  ): Promise<GroupsPayoutMembers> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/payouts`,
        method: "POST",
        json: {
          PayoutType: options.type,
          Recipients: options.users.map((userData) => ({
            recipientId: userData.userId,
            recipientType: "User",
            amount: userData.amount
          }))
        }
      },
      json: true
    }).then((response) => response.body);
  }

  updateRecurringPayouts(
    options: GroupsUpdateRecurringPayoutsOptions
  ): Promise<GroupsUpdateRecurringPayouts> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/payouts/recurring`,
        method: "POST",
        json: {
          PayoutType: options.type,
          Recipients: options.users.map((userData) => ({
            recipientId: userData.userId,
            recipientType: "User",
            amount: userData.amount
          }))
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupRelationships(
    options: GroupsGetGroupRelationshipsOptions
  ): Promise<GroupsGetGroupRelationships> {
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
    }).then((response) => response.body);
  }

  declineRelationshipRequests(
    options: GroupsDeclineRelationshipRequestsOptions
  ): Promise<GroupsDeclineRelationshipRequests> {
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
    }).then((response) => response.body);
  }

  getRelationshipRequests(
    options: GroupsGetRelationshipRequestsOptions
  ): Promise<GroupsGetRelationshipRequests> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  acceptRelationshipRequests(
    options: GroupsAcceptRelationshipRequestsOptions
  ): Promise<GroupsAcceptRelationshipRequests> {
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
    }).then((response) => response.body);
  }

  deleteRelationship(
    options: GroupsDeleteRelationshipOptions
  ): Promise<GroupsDeleteRelationship> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  createRelationship(
    options: GroupsCreateRelationshipOptions
  ): Promise<GroupsCreateRelationship> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/${options.withGroup}`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  acceptRelationshipRequest(
    options: GroupsAcceptRelationshipRequestOptions
  ): Promise<GroupsAcceptRelationshipRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`
      },
      json: true
    }).then((response) => response.body);
  }

  declineRelationshipRequest(
    options: GroupsDeclineRelationshipRequestOptions
  ): Promise<GroupsDeclineRelationshipRequest> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/relationships/${options.relationshipType}/requests/${options.withGroup}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  getRolePermissions(
    options: GroupsGetRolePermissionsOptions
  ): Promise<GroupsGetRolePermissions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`
      },
      json: true
    }).then((response) => response.body);
  }

  updateRolePermissions(
    options: GroupsUpdateRolePermissionsOptions
  ): Promise<GroupsUpdateRolePermissions> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/roles/${options.roleId}/permissions`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGuestPermissions(
    options: GroupsGetGuestPermissionsOptions
  ): Promise<GroupsGetGuestPermissions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/roles/guest/permissions`
      },
      json: true
    }).then((response) => response.body);
  }

  getAllRolesPermissions(
    options: GroupsGetAllRolesPermissionsOptions
  ): Promise<GroupsGetAllRolesPermissions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/roles/permissions`
      },
      json: true
    }).then((response) => response.body);
  }

  getSocialLinks(
    options: GroupsGetSocialLinksOptions
  ): Promise<GroupsGetSocialLinks> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/social-links`
      },
      json: true
    }).then((response) => response.body);
  }

  createSocialLink(
    options: GroupsPostSocialLinkOptions
  ): Promise<GroupsPostSocialLink> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/social-links`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  deleteSocialLink(
    options: GroupsDeleteSocialLinkOptions
  ): Promise<GroupsDeleteSocialLink> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/social-links/${options.id}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  updateSocialLink(
    options: GroupsUpdateSocialLinkOptions
  ): Promise<GroupsUpdateSocialLink> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/social-links/${options.id}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getWallPosts(
    options: GroupsGetWallPostsOptions
  ): Promise<GroupsGetWallPosts> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/wall/posts`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  createWallPost(
    options: GroupsCreateWallPostOptions
  ): Promise<GroupsCreateWallPost> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/wall/posts`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  deleteWallPost(
    options: GroupsDeleteWallPostOptions
  ): Promise<GroupsDeleteWallPost> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/wall/posts/${options.id}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  deleteUserWallPosts(
    options: GroupsDeleteWallPostsByUserOptions
  ): Promise<GroupsDeleteWallPostsByUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/wall/users/${options.userId}/posts`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  searchGroupsByKeyword(
    options: GroupsSearchGroupsByKeywordOptions
  ): Promise<GroupsSearchGroupsByKeyword> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/search`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  searchGroups(
    options: GroupsSearchGroupsOptions
  ): Promise<GroupsSearchGroups> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/search/lookup`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupSearchMetaData(): Promise<GroupsGetGroupSearchMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/search/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getRolesByIds(
    options: GroupsGetRolesByIdsOptions
  ): Promise<GroupsGetRolesByIds> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/roles`,
        qs: {
          ids: options.roleIds.join(",")
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getUserPrimaryGroup(
    options: GroupsGetUserPrimaryGroupOptions
  ): Promise<GroupsGetUserPrimaryGroup> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/groups/primary/role`
      },
      json: true
    }).then((response) => response.body);
  }

  removePrimaryGroup(): Promise<GroupsRemovePrimaryGroup> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/groups/primary`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  setPrimaryGroup(
    options: GroupsSetPrimaryGroupOptions
  ): Promise<GroupsSetPrimaryGroup> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/user/groups/primary`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  createRole(options: GroupsCreateRoleOptions): Promise<GroupsCreateRole> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/rolesets/create`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  deleteRole(options: GroupsDeleteRoleOptions): Promise<GroupsDeleteRole> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
        method: "DELETE"
      },
      json: true
    }).then((response) => response.body);
  }

  updateRole(options: GroupsUpdateRoleOptions): Promise<GroupsUpdateRole> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/rolesets/${options.roleId}`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
