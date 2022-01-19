import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { UserIdOption, Privacy } from "../..";
export declare type AccountInformationBirthdate = {
    birthDay: number;
    birthMonth: number;
    birthYear: number;
};
export declare type AccountInformationDescription = {
    description: string;
};
export declare type AccountInformationGender = {
    gender: number;
};
export declare type AccountInformationXboxConsecutiveLoginDays = {
    count: number;
};
export declare type AccountInformationMetaData = {
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
export declare type AccountInformationOwnPromotionChannels = {
    promotionChannelsVisibilityPrivacy: Privacy;
    facebook: string;
    twitter: string;
    youtube: string;
    twitch: string;
    guilded: string;
};
export declare type AccountInformationPromotionChannels = Omit<AccountInformationOwnPromotionChannels, "promotionChannelsVisibilityPrivacy">;
export declare type AccountInformationStarCodeAffiliate = {
    userId: number;
    name: string;
    code: string;
};
export declare type AccountInformationSetStarCodeAffiliate = {
    code: string;
};
export declare type AccountInformationAddStarCodeAffiliateOption = {
    code: string;
};
export declare type AccountInformationRobloxBadge = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
};
export declare type AccountInformationRobloxBadges = AccountInformationRobloxBadge[];
export declare class AccountInformationAPI extends BaseAPI {
    constructor(client: Client);
    getUserBirthdate(): Promise<AccountInformationBirthdate>;
    updateUserBirthdate(options: AccountInformationBirthdate): Promise<boolean>;
    getUserDescription(): Promise<AccountInformationDescription>;
    updateUserDescription(options: AccountInformationDescription): Promise<boolean>;
    getUserGender(): Promise<AccountInformationGender>;
    updateUserGender(options: AccountInformationGender): Promise<boolean>;
    getConsecutiveXboxLoginDays(): Promise<AccountInformationXboxConsecutiveLoginDays>;
    getMetaData(): Promise<AccountInformationMetaData>;
    getSelfPromotionChannels(): Promise<AccountInformationOwnPromotionChannels>;
    getUserPromotionChannels(options: UserIdOption): Promise<AccountInformationPromotionChannels>;
    updateUserPromotionChannels(options: AccountInformationOwnPromotionChannels): Promise<boolean>;
    removeStarCodeAffiliate(): Promise<boolean>;
    getStarCodeAffiliate(): Promise<AccountInformationStarCodeAffiliate>;
    addStarCodeAffiliate(options: AccountInformationAddStarCodeAffiliateOption): Promise<AccountInformationStarCodeAffiliate>;
    getRobloxBadges(options: UserIdOption): Promise<AccountInformationRobloxBadges>;
}
