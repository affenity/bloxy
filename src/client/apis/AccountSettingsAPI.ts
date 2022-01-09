import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { Privacy } from "../../types/GenericTypes";
import { UserIdOption } from "../..";

// Accounts
export type AccountSettingsMetaData = {
  isAccountsRestrictionsSpamBugFixEnabled: boolean;
  maximumParentalControlsMonthlySpendLimitInUSD: number;
  isParentalMonthlyLimitInUIEnabled: boolean;
  isParentalNotificationSettingsInUIEnabled: boolean;
};
export type AccountSettingsGroup = {
  title: string;
  url: string;
  suffix: string;
};
export type AccountSettingsGroups = AccountSettingsGroup[];

// PrivacySettings
export type AccountSettingsAppChatPrivacy = {
  appChatPrivacy: Omit<Privacy, "AllUsers" | "Followers" | "Following"> | "All";
};
export type AccountSettingsGameChatPrivacy = {
  gameChatPrivacy: Omit<Privacy, "Followers" | "Following" | "Friends">;
};
export type AccountSettingsInventoryPrivacy = {
  inventoryPrivacy: Privacy;
};
export type AccountSettingsPrivacy = {
  phoneDiscovery: Omit<Privacy, "Followers" | "Following" | "Friends">;
};
export type AccountSettingsPrivacyInfo = {
  isPhoneDiscoveryEnabled: boolean;
};
export type AccountSettingsPrivateMessagePrivacy = {
  privateMessagePrivacy: Privacy;
};
export type AccountSettingsVisibilityPrivacy = {
  visibilityPrivacy: number;
};

export default class AccountSettingsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://accountsettings.roblox.com/",
      client
    });
  }

  getMetaData(): Promise<AccountSettingsMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/account/settings/metadata"
      },
      json: true
    }).then((response) => ({
      isAccountsRestrictionsSpamBugFixEnabled:
        response.body.IsAccountsRestrictionsSpamBugFixEnabled,
      isParentalMonthlyLimitInUIEnabled:
        response.body.IsParentalMonthlyLimitInUIEnabled,
      isParentalNotificationSettingsInUIEnabled:
        response.body.IsParentalNotificationSettingsInUIEnabled,
      maximumParentalControlsMonthlySpendLimitInUSD:
        response.body.MaximumParentalControlsMonthlySpendLimitInUSD
    }));
  }

  getSettingsGroups(): Promise<AccountSettingsGroups> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "v1/account/settings/settings-groups"
      },
      json: true
    }).then((response) =>
      response.body.map((val: any) => ({
        title: val.Title,
        url: val.Url,
        suffix: val.Suffix
      }))
    );
  }

  getAppChatPrivacy(): Promise<AccountSettingsAppChatPrivacy> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/app-chat-privacy"
      },
      json: true
    }).then((response) => response.body);
  }

  updateAppChatPrivacy(
    options: AccountSettingsAppChatPrivacy
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/app-chat-privacy",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getGameChatPrivacy(): Promise<AccountSettingsGameChatPrivacy> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/game-chat-privacy"
      },
      json: true
    }).then((response) => response.body);
  }

  updateGameChatPrivacy(
    options: AccountSettingsGameChatPrivacy
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/game-chat-privacy",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getInventoryPrivacy(): Promise<AccountSettingsInventoryPrivacy> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/inventory-privacy"
      },
      json: true
    }).then((response) => response.body);
  }

  updateInventoryPrivacy(
    options: AccountSettingsInventoryPrivacy
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/inventory-privacy",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getUserPrivacy(): Promise<AccountSettingsPrivacy> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/privacy"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserPrivacy(options: AccountSettingsPrivacy): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/privacy",
        method: "PATCH",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getUserPrivacySettingsInfo(): Promise<AccountSettingsPrivacyInfo> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/privacy/info"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserPrivateMessagePrivacy(): Promise<AccountSettingsPrivateMessagePrivacy> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/private-message-privacy"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserPrivateMessagePrivacy(
    options: AccountSettingsPrivateMessagePrivacy
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/private-message-privacy",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  blockUser(options: UserIdOption): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/block`,
        method: "POST"
      },
      json: true
    }).then(() => true);
  }

  unblockUser(options: UserIdOption): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/unblock`,
        method: "POST"
      },
      json: true
    }).then(() => true);
  }
}
