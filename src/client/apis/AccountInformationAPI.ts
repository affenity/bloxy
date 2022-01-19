import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { UserIdOption, Privacy } from "../..";

// AccountInformation
export type AccountInformationBirthdate = {
  birthDay: number;
  birthMonth: number;
  birthYear: number;
};
export type AccountInformationDescription = {
  description: string;
};
export type AccountInformationGender = {
  gender: number;
};
export type AccountInformationXboxConsecutiveLoginDays = {
  count: number;
};

// Metadata
export type AccountInformationMetaData = {
  isAllowedNotificationsEndpointDisabled: boolean;
  isAccountSettingsPolicyEnabled: boolean;
  isPhoneNumberEnabled: boolean;
  MaxUserDescriptionLength: number;
  isUserDescriptionEnabled: boolean;
  isUserBlockEndpointsUpdated: boolean;
  isIDVerificationEnabled: boolean;
  isPasswordRequiredForAgingDown: boolean;
  homePageUpsellCardVariation: string;
};

// PromotionChannel
export type AccountInformationOwnPromotionChannels = {
  promotionChannelsVisibilityPrivacy: Privacy;
  facebook: string;
  twitter: string;
  youtube: string;
  twitch: string;
  guilded: string;
};
export declare type AccountInformationPromotionChannels = Omit<
  AccountInformationOwnPromotionChannels,
  "promotionChannelsVisibilityPrivacy"
>;

// StarCodeAffiliate
export type AccountInformationStarCodeAffiliate = {
  userId: number;
  name: string;
  code: string;
};
export type AccountInformationSetStarCodeAffiliate = {
  code: string;
};
export type AccountInformationAddStarCodeAffiliateOption = {
  code: string;
};

// RobloxBadges
export type AccountInformationRobloxBadge = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};
export declare type AccountInformationRobloxBadges =
  AccountInformationRobloxBadge[];

export class AccountInformationAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      baseUrl: "https://accountinformation.roblox.com/",
      client
    });
  }

  getUserBirthdate(): Promise<AccountInformationBirthdate> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/birthdate"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserBirthdate(options: AccountInformationBirthdate): Promise<boolean> {
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

  getUserDescription(): Promise<AccountInformationDescription> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/description"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserDescription(
    options: AccountInformationDescription
  ): Promise<boolean> {
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

  getUserGender(): Promise<AccountInformationGender> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/gender"
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserGender(options: AccountInformationGender): Promise<boolean> {
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

  getConsecutiveXboxLoginDays(): Promise<AccountInformationXboxConsecutiveLoginDays> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/xbox-live/consecutive-login-days"
      },
      json: true
    }).then((response) => response.body);
  }

  getMetaData(): Promise<AccountInformationMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "v1/metadata"
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfPromotionChannels(): Promise<AccountInformationOwnPromotionChannels> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/promotion-channels"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserPromotionChannels(
    options: UserIdOption
  ): Promise<AccountInformationPromotionChannels> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/promotion-channels`
      },
      json: true
    }).then((response) => response.body);
  }

  updateUserPromotionChannels(
    options: AccountInformationOwnPromotionChannels
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

  getStarCodeAffiliate(): Promise<AccountInformationStarCodeAffiliate> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/star-code-affiliates"
      },
      json: true
    }).then((response) => response.body);
  }

  addStarCodeAffiliate(
    options: AccountInformationAddStarCodeAffiliateOption
  ): Promise<AccountInformationStarCodeAffiliate> {
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

  getRobloxBadges(
    options: UserIdOption
  ): Promise<AccountInformationRobloxBadges> {
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
