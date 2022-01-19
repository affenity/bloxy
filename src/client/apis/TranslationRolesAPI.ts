import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type TranslationRolesGetSelfGameRolesOptions = {
  gameId: number;
};
export type TranslationRolesGetSelfGameRoles = {
  data: string[];
};
export type TranslationRolesGetGameRoleAssigneesOptions = {
  gameId: number;
  role: "translator";
};
export type TranslationRolesGetGameRoleAssignees = {
  data: {
    id: null;
    name: string;
    type: "user";
  }[];
};
export type TranslationRolesGetSelfGamesAccessByRoleOptions = {
  role: "translator";
  exclusiveStartKey?: string;
  pageSize?: number;
};
export type TranslationRolesGetSelfGamesAccessByRole = {
  games: {
    gameId: number;
    assignee: {
      assigneeType: "user";
      id: number;
    };
  }[];
};
export type TranslationRolesUpdateUserAccess = {
  gameId: number;
  userId: number;
  role: "translator";
  revoke?: boolean;
};
export type TranslationRolesUpdateUser = unknown;

export class TranslationRolesAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://translationroles.roblox.com/"
    });
  }

  getSelfGameRoles(
    options: TranslationRolesGetSelfGameRolesOptions
  ): Promise<TranslationRolesGetSelfGameRoles> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/game-localization-roles/games/${options.gameId}/current-user/roles`
      },
      json: true
    }).then((response) => response.body);
  }

  getGameRoleAssignees(
    options: TranslationRolesGetGameRoleAssigneesOptions
  ): Promise<TranslationRolesGetGameRoleAssignees> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/game-localization-roles/games/${options.gameId}/roles/${options.role}/assignees`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfGamesAccessByRole(
    options: TranslationRolesGetSelfGamesAccessByRoleOptions
  ): Promise<TranslationRolesGetSelfGamesAccessByRole> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/game-localization-roles/roles/${options.role}/current-user`
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserAccess(
    options: TranslationRolesUpdateUserAccess
  ): Promise<TranslationRolesUpdateUser> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/game-localization-roles/games/${options.gameId}`,
        method: "PATCH",
        json: {
          assigneeId: options.userId,
          assigneeType: "user",
          role: "translator",
          revoke: options.revoke !== undefined ? options.revoke : false
        }
      },
      json: true
    }).then((response) => response.body);
  }
}
