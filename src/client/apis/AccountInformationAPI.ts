import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { Privacy } from "../../types/GeneralTypes";

// AccountInformation
export declare interface UserAccountBirthdate {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
}
export declare interface UserAccountDescription {
  description: string;
}
export declare interface UserAccountGender {
  gender: number;
}
export declare interface UserAccountXboxConsecutiveLoginDays {
  count: number;
}

// Metadata
export declare interface UserAccountMetaData {
  isAllowedNotificationsEndpointDisabled: boolean;
  isAccountSettingsPolicyEnabled: boolean;
  isPhoneNumberEnabled: boolean;
  MaxUserDescriptionLength: number;
  isUserDescriptionEnabled: boolean;
  isUserBlockEndpointsUpdated: boolean;
  isIDVerificationEnabled: boolean;
  isPasswordRequiredForAgingDown: boolean;
  homePageUpsellCardVariation: string;
}

// PromotionChannel
export declare interface UserAccountOwnPromotionChannels {
  promotionChannelsVisibilityPrivacy: Privacy;
  facebook: string;
  twitter: string;
  youtube: string;
  twitch: string;
  guilded: string;
}
export declare type UserAccountPromotionChannels = Omit<
  UserAccountOwnPromotionChannels,
  "promotionChannelsVisibilityPrivacy"
>;

// StarCodeAffiliate
export declare interface UserAccountStarCodeAffiliate {
  userId: number;
  name: string;
  code: string;
}
export declare interface UserAccountSetStarCodeAffiliate {
  code: string;
}

// RobloxBadges
export declare interface UserAccountRobloxBadge {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
export declare type UserAccountRobloxBadges = UserAccountRobloxBadge[];

export default class AccountInformationAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://accountinformation.roblox.com/",
      client
    });
  }

  getUserBirthdate(): Promise<UserAccountBirthdate> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/birthdate"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserBirthdate(options: UserAccountBirthdate): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/birthdate",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getUserDescription(): Promise<UserAccountDescription> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/description"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserDescription(options: UserAccountDescription): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/description",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getUserGender(): Promise<UserAccountGender> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/gender"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserGender(options: UserAccountGender): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/gender",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  getConsecutiveXboxLoginDays(): Promise<UserAccountXboxConsecutiveLoginDays> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/xbox-live/consecutive-login-days"
      },
      json: true
    }).then((response) => response.body);
  }

  getMetaData(): Promise<UserAccountMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "v1/metadata"
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfPromotionChannels(): Promise<UserAccountOwnPromotionChannels> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/promotion-channels"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserPromotionChannels(options: {
    userId: number;
  }): Promise<UserAccountPromotionChannels> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/promotion-channels`
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserPromotionChannels(
    options: UserAccountOwnPromotionChannels
  ): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/promotion-channels",
        method: "POST",
        json: options
      },
      json: true
    }).then(() => true);
  }

  removeStarCodeAffiliate(): Promise<boolean> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/star-code-affiliates",
        method: "DELETE"
      },
      json: true
    }).then(() => true);
  }

  getStarCodeAffiliate(): Promise<UserAccountStarCodeAffiliate> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/star-code-affiliates"
      },
      json: true
    }).then((response) => response.body);
  }

  addStarCodeAffiliate(
    options: UserAccountSetStarCodeAffiliate
  ): Promise<UserAccountStarCodeAffiliate> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/star-code-affiliates",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getRobloxBadges(options: {
    userId: number;
  }): Promise<UserAccountRobloxBadges> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/roblox-badges`,
        method: "GET"
      },
      json: true
    }).then((response) => response.body);
  }
}
