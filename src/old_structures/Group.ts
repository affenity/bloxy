import { Client } from "../client";
import { DevelopGetGroupUniversesOptions } from "../client/apis/DevelopAPI";
import { CursorPage } from "./Asset";
import { PartialGameUniverse, PartialGameUniverseOptions } from "./Game";
import {
  EconomyGetGroupRevenueSummaryInTimeFrame,
  EconomyGetGroupRevenueSummaryInTimeFrameOptions,
  EconomyGetGroupTransactions,
  EconomyGetGroupTransactionsOptions
} from "../client/apis/EconomyAPI";
import {
  GroupsAcceptJoinRequest,
  GroupsAcceptJoinRequests,
  GroupsAcceptJoinRequestsOptions,
  GroupsAcceptRelationshipRequest,
  GroupsAcceptRelationshipRequests,
  GroupsAcceptRelationshipRequestsOptions,
  GroupsChangeOwner,
  GroupsClaimGroup,
  GroupsCreateRelationship,
  GroupsCreateRelationshipOptions,
  GroupsCreateRole,
  GroupsCreateRoleOptions,
  GroupsCreateWallPost,
  GroupsCreateWallPostOptions,
  GroupsDeclineJoinRequest,
  GroupsDeclineJoinRequests,
  GroupsDeclineRelationshipRequest,
  GroupsDeclineRelationshipRequests,
  GroupsDeclineRelationshipRequestsOptions,
  GroupsDeleteRelationship,
  GroupsDeleteRelationshipOptions,
  GroupsDeleteRole,
  GroupsDeleteSocialLink,
  GroupsDeleteWallPost,
  GroupsGetAllRolesPermissions,
  GroupsGetGroupPayouts,
  GroupsGetGroupRelationships,
  GroupsGetGroupRelationshipsOptions,
  GroupsGetGroupSettings,
  GroupsGetGuestPermissions,
  GroupsGetJoinRequest,
  GroupsGetJoinRequestsOptions,
  GroupsGetMembersOptions,
  GroupsGetMembersWithRoleOptions,
  GroupsGetRelationshipRequests,
  GroupsGetRelationshipRequestsOptions,
  GroupsGetRolePermissions,
  GroupsGetSelfGroupMembership,
  GroupsGetSocialLinks,
  GroupsGetWallPostsOptions,
  GroupsJoinGroup,
  GroupsJoinGroupOptions,
  GroupsKickMember,
  GroupsPayoutMembers,
  GroupsPayoutMembersOptions,
  GroupsPostSocialLink,
  GroupsPostSocialLinkOptions,
  GroupsRemovePrimaryGroup,
  GroupsSetPrimaryGroup,
  GroupsUpdateGroupDescription,
  GroupsUpdateGroupIcon,
  GroupsUpdateGroupSettings,
  GroupsUpdateGroupSettingsOptions,
  GroupsUpdateGroupStatus,
  GroupsUpdateMember,
  GroupsUpdateRecurringPayouts,
  GroupsUpdateRecurringPayoutsOptions,
  GroupsUpdateRole,
  GroupsUpdateRoleOptions,
  GroupsUpdateRolePermissions,
  GroupsUpdateRolePermissionsOptions,
  GroupsUpdateSocialLink,
  GroupsUpdateSocialLinkOptions
} from "../client/apis/GroupsAPI";
import { PartialUser, PartialUserOptions, UserBase } from "./User";

interface Structures {
  PartialUser: new (data: PartialUserOptions, client: Client) => PartialUser;
  PartialGameUniverse: new (
    data: PartialGameUniverseOptions,
    client: Client
  ) => PartialGameUniverse;
}

const retrieveStructures = (): Structures => ({
  PartialUser: require("./User").PartialUser,
  PartialGameUniverse: require("./Game").PartialGameUniverse
});

type GroupRelationships<T extends "enemies" | "allies"> = Omit<
  GroupsGetGroupRelationships,
  "relatedGroups"
> & {
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

export class GroupBase {
  public client: Client;
  public id: number;
  public name: string | null;

  constructor(data: GroupBaseOptions, client: Client) {
    this.client = client;
    this.id = data.id;
    this.name = data.name || null;
  }

  getUniverses(
    options?: Omit<DevelopGetGroupUniversesOptions, "groupId">
  ): Promise<CursorPage<PartialGameUniverse>> {
    return this.client.apis.developAPI
      .getGroupUniverses({
        ...options,
        groupId: this.id
      })
      .then((response) => {
        const CursorPageClass = require("./Asset").CursorPage;
        const structures = retrieveStructures();

        return new CursorPageClass(
          this.client,
          options || {},
          {
            ...response,
            data: response.data.map(
              (universeData) =>
                new structures.PartialGameUniverse(
                  {
                    id: universeData.id,
                    name: universeData.name,
                    rootPlace: universeData.rootPlaceId
                      ? {
                          id: universeData.rootPlaceId
                        }
                      : undefined
                  },
                  this.client
                )
            )
          },
          this.getUniverses
        );
      });
  }

  /**
   * Returns whether the authenticated user can manage the group or not
   * @returns {Promise<boolean>}
   */
  canSelfManage(): Promise<boolean> {
    return this.client.apis.developAPI
      .getSelfManageableGroups()
      .then((response) => !!response.data.find((data) => data.id === this.id));
  }

  /**
   * Gets the currently available funds in the group
   * @returns {Promise<number>}
   */
  getFunds(): Promise<number> {
    return this.client.apis.economyAPI
      .getGroupCurrency({
        groupId: this.id
      })
      .then((response) => response.robux);
  }

  getRevenueSummaryInTimeFrame(
    timeFrame: EconomyGetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]
  ): Promise<EconomyGetGroupRevenueSummaryInTimeFrame> {
    return this.client.apis.economyAPI.getGroupRevenueByTime({
      groupId: this.id,
      timeFrame
    });
  }

  getTransactions(
    options: Omit<EconomyGetGroupTransactionsOptions, "groupId">
  ): Promise<EconomyGetGroupTransactions> {
    return this.client.apis.economyAPI.getGroupTransactions({
      groupId: this.id,
      ...options
    });
  }

  getAllies(
    maxItems = 100,
    startItem?: number
  ): Promise<GroupRelationships<"allies">> {
    return this.client.apis.groupsAPI
      .getGroupRelationships({
        relationshipType: "allies",
        groupId: this.id,
        maxRows: maxItems,
        startRowIndex: startItem
      })
      .then((response) => ({
        ...response,
        relationshipType: "allies",
        groups: response.relatedGroups.map(
          (groupData) => new Group(groupData, this.client)
        )
      }));
  }

  getEnemies(
    maxItems = 100,
    startItem?: number
  ): Promise<GroupRelationships<"enemies">> {
    return this.client.apis.groupsAPI
      .getGroupRelationships({
        relationshipType: "enemies",
        groupId: this.id,
        maxRows: maxItems,
        startRowIndex: startItem
      })
      .then((response) => ({
        ...response,
        relationshipType: "enemies",
        groups: response.relatedGroups.map(
          (groupData) => new Group(groupData, this.client)
        )
      }));
  }

  getGroup(): Promise<Group> {
    return this.client.getGroup(this.id);
  }

  getMember(userId: number): Promise<GroupMember | null> {
    return this.client.apis.groupsAPI
      .getUserGroups({
        userId
      })
      .then((response) => {
        const foundGroup = response.data.find(
          (groupData) => groupData.group.id === this.id
        );

        if (foundGroup) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          return new GroupMember(
            {
              id: userId,
              role: foundGroup.role,
              group: foundGroup.group
            },
            this.client
          );
        } else {
          return null;
        }
      });
  }

  getIsMember(userId: number): Promise<GroupMember | null> {
    console.warn(
      `group.getIsMember() is deprecated and may be removed in the future. Please switch to group.getMember`
    );
    return this.getMember(userId);
  }

  getSettings(): Promise<GroupsGetGroupSettings> {
    return this.client.apis.groupsAPI.getGroupSettings({
      groupId: this.id
    });
  }

  updateSettings(
    options: Omit<GroupsUpdateGroupSettingsOptions, "groupId">
  ): Promise<GroupsUpdateGroupSettings> {
    return this.client.apis.groupsAPI.updateGroupSettings({
      groupId: this.id,
      ...options
    });
  }

  updateDescription(
    description: string
  ): Promise<GroupsUpdateGroupDescription> {
    return this.client.apis.groupsAPI.updateGroupDescription({
      description,
      groupId: this.id
    });
  }

  updateShout(shout: string): Promise<GroupsUpdateGroupStatus> {
    return this.client.apis.groupsAPI.updateGroupStatus({
      groupId: this.id,
      message: shout
    });
  }

  updateIcon(file: unknown): Promise<GroupsUpdateGroupIcon> {
    return this.client.apis.groupsAPI.updateGroupIcon({
      files: file,
      groupId: this.id
    });
  }

  declineJoinRequests(userIds: number[]): Promise<GroupsDeclineJoinRequests> {
    return this.client.apis.groupsAPI.declineJoinRequests({
      groupId: this.id,
      userIds
    });
  }

  getJoinRequests(
    options: Omit<GroupsGetJoinRequestsOptions, "groupId">
  ): Promise<CursorPage<GroupJoinRequest>> {
    const CursorPageClass = require("./Asset").CursorPage;

    return this.client.apis.groupsAPI
      .getJoinRequests({
        groupId: this.id,
        ...options
      })
      .then(
        (response) =>
          new CursorPageClass(
            this.client,
            options,
            response,
            this.getJoinRequests
          )
      );
  }

  acceptJoinRequests(
    options: Omit<GroupsAcceptJoinRequestsOptions, "groupId">
  ): Promise<GroupsAcceptJoinRequests> {
    return this.client.apis.groupsAPI.acceptJoinRequests({
      groupId: this.id,
      ...options
    });
  }

  declineJoinRequest(userId: number): Promise<GroupsDeclineJoinRequest> {
    return this.client.apis.groupsAPI.declineJoinRequest({
      groupId: this.id,
      userId
    });
  }

  getJoinRequest(userId: number): Promise<GroupsGetJoinRequest> {
    return this.client.apis.groupsAPI.getJoinRequest({
      groupId: this.id,
      userId
    });
  }

  acceptJoinRequest(userId: number): Promise<GroupsAcceptJoinRequest> {
    return this.client.apis.groupsAPI.acceptJoinRequest({
      groupId: this.id,
      userId
    });
  }

  getSelfMembership(): Promise<GroupsGetSelfGroupMembership> {
    return this.client.apis.groupsAPI.getSelfGroupMembership({
      groupId: this.id
    });
  }

  getRoles(): Promise<GroupRole[]> {
    return this.client.apis.groupsAPI
      .getGroupRoles({
        groupId: this.id
      })
      .then((response) =>
        response.roles.map(
          (roleData) =>
            new GroupRole(
              {
                group: {
                  id: this.id,
                  name: this.name || undefined
                },
                ...roleData
              },
              this.client
            )
        )
      );
  }

  getMembersWithRole(
    options: Omit<GroupsGetMembersWithRoleOptions, "groupId">
  ): Promise<CursorPage<GroupMember>> {
    const CursorPageClass = require("./Asset").CursorPage;

    return this.client.apis.groupsAPI
      .getMembersWithRole({
        groupId: this.id,
        ...options
      })
      .then(
        (response) =>
          new CursorPageClass(
            this.client,
            options,
            response,
            this.getMembersWithRole
          )
      );
  }

  getMembers(
    options: Omit<GroupsGetMembersOptions, "groupId">
  ): Promise<CursorPage<GroupMember>> {
    const CursorPageClass = require("./Asset").CursorPage;

    return this.client.apis.groupsAPI
      .getMembers({
        groupId: this.id,
        ...options
      })
      .then(
        (response) =>
          new CursorPageClass(this.client, options, response, this.getMembers)
      );
  }

  join(
    options: Omit<GroupsJoinGroupOptions, "groupId">
  ): Promise<GroupsJoinGroup> {
    return this.client.apis.groupsAPI.joinGroup({
      groupId: this.id,
      ...options,
      captchaProvider: options.captchaProvider || "PROVIDER_ARKOSELABS"
    });
  }

  getIsPendingJoin(): Promise<boolean> {
    return this.client.apis.groupsAPI
      .getSelfPendingGroupJoins()
      .then(
        (response) =>
          (response.data.find((groupData) => groupData.id === this.id) &&
            true) ||
          false
      );
  }

  changeOwner(userId: number): Promise<GroupsChangeOwner> {
    return this.client.apis.groupsAPI.changeGroupOwner({
      groupId: this.id,
      userId
    });
  }

  claim(): Promise<GroupsClaimGroup> {
    return this.client.apis.groupsAPI.claimGroup({
      groupId: this.id
    });
  }

  kickMember(userId: number): Promise<GroupsKickMember> {
    return this.client.apis.groupsAPI.kickMember({
      groupId: this.id,
      userId
    });
  }

  updateMember(userId: number, roleId: number): Promise<GroupsUpdateMember> {
    return this.client.apis.groupsAPI.updateMember({
      groupId: this.id,
      roleId,
      userId
    });
  }

  getPayouts(): Promise<GroupsGetGroupPayouts> {
    return this.client.apis.groupsAPI.getGroupPayouts({
      groupId: this.id
    });
  }

  payoutMembers(
    options: Omit<GroupsPayoutMembersOptions, "groupId">
  ): Promise<GroupsPayoutMembers> {
    return this.client.apis.groupsAPI.payoutMembers({
      groupId: this.id,
      ...options
    });
  }

  updateRecurringPayouts(
    options: Omit<GroupsUpdateRecurringPayoutsOptions, "groupId">
  ): Promise<GroupsUpdateRecurringPayouts> {
    return this.client.apis.groupsAPI.updateRecurringPayouts({
      groupId: this.id,
      ...options
    });
  }

  getRelationships(
    options: Omit<GroupsGetGroupRelationshipsOptions, "groupId">
  ): Promise<GroupsGetGroupRelationships> {
    return this.client.apis.groupsAPI.getGroupRelationships({
      groupId: this.id,
      ...options
    });
  }

  declineRelationshipRequests(
    options: Omit<GroupsDeclineRelationshipRequestsOptions, "groupId">
  ): Promise<GroupsDeclineRelationshipRequests> {
    return this.client.apis.groupsAPI.declineRelationshipRequests({
      groupId: this.id,
      ...options
    });
  }

  getRelationshipRequests(
    options: Omit<GroupsGetRelationshipRequestsOptions, "groupId">
  ): Promise<GroupsGetRelationshipRequests> {
    return this.client.apis.groupsAPI.getRelationshipRequests({
      groupId: this.id,
      ...options
    });
  }

  acceptRelationshipRequests(
    options: Omit<GroupsAcceptRelationshipRequestsOptions, "groupId">
  ): Promise<GroupsAcceptRelationshipRequests> {
    return this.client.apis.groupsAPI.acceptRelationshipRequests({
      groupId: this.id,
      ...options
    });
  }

  deleteRelationship(
    options: Omit<GroupsDeleteRelationshipOptions, "groupId">
  ): Promise<GroupsDeleteRelationship> {
    return this.client.apis.groupsAPI.deleteRelationship({
      groupId: this.id,
      ...options
    });
  }

  createRelationship(
    options: Omit<GroupsCreateRelationshipOptions, "groupId">
  ): Promise<GroupsCreateRelationship> {
    return this.client.apis.groupsAPI.createRelationship({
      groupId: this.id,
      ...options
    });
  }

  acceptRelationshipRequest(
    type: "enemies" | "allies",
    withGroup: number
  ): Promise<GroupsAcceptRelationshipRequest> {
    return this.client.apis.groupsAPI.acceptRelationshipRequest({
      groupId: this.id,
      relationshipType: type || "allies",
      withGroup
    });
  }

  declineRelationshipRequest(
    type: "enemies" | "allies",
    withGroup: number
  ): Promise<GroupsDeclineRelationshipRequest> {
    return this.client.apis.groupsAPI.declineRelationshipRequest({
      groupId: this.id,
      relationshipType: type || "allies",
      withGroup
    });
  }

  getRolePermissions(roleId: number): Promise<GroupsGetRolePermissions> {
    return this.client.apis.groupsAPI.getRolePermissions({
      groupId: this.id,
      roleId
    });
  }

  updateRolePermissions(
    roleId: number,
    permissions: Omit<GroupsUpdateRolePermissionsOptions, "groupId" | "roleId">
  ): Promise<GroupsUpdateRolePermissions> {
    return this.client.apis.groupsAPI.updateRolePermissions({
      groupId: this.id,
      roleId,
      ...permissions
    });
  }

  getGuestPermissions(): Promise<GroupsGetGuestPermissions> {
    return this.client.apis.groupsAPI.getGuestPermissions({
      groupId: this.id
    });
  }

  getAllRolesPermissions(): Promise<GroupsGetAllRolesPermissions> {
    return this.client.apis.groupsAPI.getAllRolesPermissions({
      groupId: this.id
    });
  }

  getSocialLinks(): Promise<GroupsGetSocialLinks> {
    return this.client.apis.groupsAPI.getSocialLinks({
      groupId: this.id
    });
  }

  createSocialLink(
    options: Omit<GroupsPostSocialLinkOptions, "groupId">
  ): Promise<GroupsPostSocialLink> {
    return this.client.apis.groupsAPI.createSocialLink({
      groupId: this.id,
      ...options
    });
  }

  deleteSocialLink(id: number): Promise<GroupsDeleteSocialLink> {
    return this.client.apis.groupsAPI.deleteSocialLink({
      groupId: this.id,
      id
    });
  }

  updateSocialLink(
    options: Omit<GroupsUpdateSocialLinkOptions, "groupId">
  ): Promise<GroupsUpdateSocialLink> {
    return this.client.apis.groupsAPI.updateSocialLink({
      groupId: this.id,
      ...options
    });
  }

  getWallPosts(
    options: Omit<GroupsGetWallPostsOptions, "groupId">
  ): Promise<CursorPage<GroupWallPost>> {
    const CursorPageClass = require("./Asset").CursorPage;

    return this.client.apis.groupsAPI
      .getWallPosts({
        groupId: this.id,
        ...options
      })
      .then(
        (response) =>
          new CursorPageClass(this.client, options, response, this.getWallPosts)
      );
  }

  createWallPost(
    options: Omit<GroupsCreateWallPostOptions, "groupId">
  ): Promise<GroupsCreateWallPost> {
    return this.client.apis.groupsAPI.createWallPost({
      groupId: this.id,
      ...options
    });
  }

  deleteWallPost(id: number): Promise<GroupsDeleteWallPost> {
    return this.client.apis.groupsAPI.deleteWallPost({
      groupId: this.id,
      id
    });
  }

  getIsUserPrimaryGroup(userId: number): Promise<GroupMember | null> {
    return (
      this.client.apis.groupsAPI
        .getUserPrimaryGroup({
          userId
        })
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        .then((response) =>
          response && response.group && response.role
            ? new GroupMember(
                {
                  group: response.group,
                  role: {
                    id: response.role!.id!,
                    name: response.role!.name!,
                    rank: response.role!.rank!
                  },
                  id: userId
                },
                this.client
              )
            : null
        )
    );
  }

  removeAsPrimary(): Promise<GroupsRemovePrimaryGroup> {
    return this.client.apis.groupsAPI.removePrimaryGroup();
  }

  setAsPrimary(): Promise<GroupsSetPrimaryGroup> {
    return this.client.apis.groupsAPI.setPrimaryGroup({
      groupId: this.id
    });
  }

  createRole(
    options: Omit<GroupsCreateRoleOptions, "groupId">
  ): Promise<GroupsCreateRole> {
    return this.client.apis.groupsAPI.createRole({
      groupId: this.id,
      ...options
    });
  }

  deleteRole(roleId: number): Promise<GroupsDeleteRole> {
    return this.client.apis.groupsAPI.deleteRole({
      groupId: this.id,
      roleId
    });
  }

  updateRole(
    roleId: number,
    options: Omit<GroupsUpdateRoleOptions, "groupId" | "roleId">
  ): Promise<GroupsUpdateRole> {
    return this.client.apis.groupsAPI.updateRole({
      groupId: this.id,
      roleId,
      ...options
    });
  }
}

export interface PartialGroupOptions {
  id: number;
  name?: string;
}

export class PartialGroup extends GroupBase {
  // Shut up eslint, this is not useless either
  // eslint-disable-next-line no-useless-constructor
  constructor(data: PartialGroupOptions, client: Client) {
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

  constructor(data: GroupMemberOptions, client: Client) {
    super(
      {
        name: data.name,
        id: data.id
      },
      client
    );
    this.group = new PartialGroup(data.group, client);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    this.role = data.role
      ? new GroupRole(
          {
            id: data.role.id,
            name: data.role.name,
            rank: data.role.rank,
            group: {
              name: this.name || undefined,
              id: this.id
            }
          },
          client
        )
      : null;
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
  isLocked: boolean;
}

export class Group extends GroupBase {
  public description: string;
  public name: string;
  public owner: GroupMember | null;
  public shout: GroupShout | null;
  public memberCount: number;
  public isBuildersClubOnly: boolean;
  public publicEntryAllowed: boolean;
  public isLocked: boolean;

  constructor(data: GroupOptions, client: Client) {
    super(data, client);
    this.description = data.description;
    this.name = data.name;
    this.owner = data.owner
      ? new GroupMember(
          {
            id: data.owner.userId,
            name: data.owner.username,
            group: this
          },
          client
        )
      : null;
    this.shout = data.shout
      ? new GroupShout(
          {
            content: data.shout.body,
            creator: {
              id: data.shout.poster.userId,
              username: data.shout.poster.username
            },
            group: {
              id: this.id,
              name: this.name || undefined
            }
          },
          client
        )
      : null;
    this.memberCount = data.memberCount;
    this.isBuildersClubOnly = data.isBuildersClubOnly;
    this.publicEntryAllowed = data.publicEntryAllowed;
    this.isLocked = data.isLocked;
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

  constructor(data: GroupJoinRequestOptions, client: Client) {
    const structures = retrieveStructures();

    this.client = client;
    this.id = data.id || null;
    this.user = new structures.PartialUser(data.user, client);
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

  constructor(data: GroupRoleOptions, client: Client) {
    this.client = client;
    this.id = data.id || null;
    this.name = data.name || null;
    this.rank = data.rank || null;
    this.group = new PartialGroup(
      {
        id: data.group.id,
        name: data.group.name
      },
      client
    );
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

  constructor(data: GroupRolePermissionsOptions, client: Client) {
    this.client = client;
    this.group = new PartialGroup(
      {
        id: data.groupId
      },
      client
    );
    this.role = new GroupRole(
      {
        id: data.role.id,
        name: data.role.name,
        rank: data.role.rank,
        group: {
          id: this.group.id
        }
      },
      client
    );
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

  constructor(data: GroupShoutOptions, client: Client) {
    const structures = retrieveStructures();

    this.client = client;
    this.content = data.content;
    this.creator = new structures.PartialUser(data.creator, client);
    this.group = new PartialGroup(
      {
        id: data.group.id,
        name: data.group.name
      },
      client
    );
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

  constructor(data: GroupWallPostOptions, client: Client) {
    this.client = client;
    this.id = data.id;
    this.content = data.body;
    this.creator = new GroupMember(
      {
        group: {
          id: data.group.id,
          name: data.group.name
        },
        id: data.poster.userId,
        name: data.poster.username
      },
      client
    );
    this.created = new Date(data.created);
  }
}
