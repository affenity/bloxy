import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type UsersValidateDisplayNameNewUserOptions = {
  displayName: string;
  birthdate: string;
};
export type UsersValidateDisplayNameNewUser = unknown;
export type UsersValidateDisplayNameExistingUserOptions = {
  userId: number;
  displayName: string;
};
export type UsersValidateDisplayNameExistingUser = unknown;
export type UsersSetSelfDisplayNameOptions = {
  userId: number;
  newDisplayName: string;
};
export type UsersSetSelfDisplayName = unknown;
export type UsersGetUserByIdOptions = {
  userId: number;
};
export type UsersGetUserById = {
  description: string;
  created: string;
  isBanned: boolean;
  id: number;
  name: string;
  displayName: string;
  externalAppDisplayName: string;
};
export type UsersGetSelfAuthenticatedUserInformation = {
  id: number;
  name: string;
  displayName: string;
};
export type UsersGetUsersByUsernamesOptions = {
  usernames: string[];
  excludeBannedUsers?: boolean;
};
export type UsersGetUsersByUsernames = {
  data: {
    requestedUsername: string;
    id: number;
    name: string;
    displayName: string;
  }[];
};
export type UsersGetUsersByUserIdsOptions = {
  userIds: number[];
  excludeBannedUsers?: boolean;
};
export type UsersGetUsersByUserIds = {
  data: Omit<UsersGetUsersByUsernames["data"][0], "requestedUsername">[];
};
export type UsersGetUserStatusOptions = {
  userId: number;
};
export type UsersGetUserStatus = {
  status: string;
};
export type UsersUpdateSelfStatusOptions = {
  userId: number;
  status: string;
};
export type UsersUpdateSelfStatus = {
  status: string;
};
export type UsersSearchUsersOptions = {
  keyword: string;
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type UsersSearchUsers = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    previousUsernames: string[];
    id: number;
    name: string;
    displayName: string;
  }[];
};
export type UsersUserNameHistory = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: { name: string }[];
};

export class UsersAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://users.roblox.com/"
    });
  }

  validateDisplayNameNewUser(
    options: UsersValidateDisplayNameNewUserOptions
  ): Promise<UsersValidateDisplayNameNewUser> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/display-names/validate`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  validateDisplayNameExistingUser(
    options: UsersValidateDisplayNameExistingUserOptions
  ): Promise<UsersValidateDisplayNameExistingUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/display-names/validate`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  setDisplayName(
    options: UsersSetSelfDisplayNameOptions
  ): Promise<UsersSetSelfDisplayName> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/display-names`,
        method: "PATCH",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserById(options: UsersGetUserByIdOptions): Promise<UsersGetUserById> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}`
      },
      json: true
    }).then((response) => response.body);
  }

  getAuthenticatedUserInformation(): Promise<UsersGetSelfAuthenticatedUserInformation> {
    return this.request({
      // This should actually be "true", but as it's needed in client.login, it's set to false
      requiresAuth: false,
      request: {
        path: `v1/users/authenticated`
      },
      json: true
    }).then((response) => response.body);
  }

  getUsersByUsernames(
    options: UsersGetUsersByUsernamesOptions
  ): Promise<UsersGetUsersByUsernames> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/usernames/users`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUsersByIds(
    options: UsersGetUsersByUserIdsOptions
  ): Promise<UsersGetUsersByUserIds> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserNameHistory(options: {
    userId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
  }): Promise<UsersUserNameHistory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/username-history`,
        method: "GET"
      },
      json: true
    }).then((response) => response.body);
  }

  searchUsers(options: UsersSearchUsersOptions): Promise<UsersSearchUsers> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/search`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }
}
