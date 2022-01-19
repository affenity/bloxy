import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { Privacy } from "../../types/GenericTypes";
import { UserIdOption } from "../..";
export declare type AccountSettingsMetaData = {
    isAccountsRestrictionsSpamBugFixEnabled: boolean;
    maximumParentalControlsMonthlySpendLimitInUSD: number;
    isParentalMonthlyLimitInUIEnabled: boolean;
    isParentalNotificationSettingsInUIEnabled: boolean;
};
export declare type AccountSettingsGroup = {
    title: string;
    url: string;
    suffix: string;
};
export declare type AccountSettingsGroups = AccountSettingsGroup[];
export declare type AccountSettingsAppChatPrivacy = {
    appChatPrivacy: Omit<Privacy, "AllUsers" | "Followers" | "Following"> | "All";
};
export declare type AccountSettingsGameChatPrivacy = {
    gameChatPrivacy: Omit<Privacy, "Followers" | "Following" | "Friends">;
};
export declare type AccountSettingsInventoryPrivacy = {
    inventoryPrivacy: Privacy;
};
export declare type AccountSettingsPrivacy = {
    phoneDiscovery: Omit<Privacy, "Followers" | "Following" | "Friends">;
};
export declare type AccountSettingsPrivacyInfo = {
    isPhoneDiscoveryEnabled: boolean;
};
export declare type AccountSettingsPrivateMessagePrivacy = {
    privateMessagePrivacy: Privacy;
};
export declare type AccountSettingsVisibilityPrivacy = {
    visibilityPrivacy: number;
};
export declare class AccountSettingsAPI extends BaseAPI {
    constructor(client: Client);
    getMetaData(): Promise<AccountSettingsMetaData>;
    getSettingsGroups(): Promise<AccountSettingsGroups>;
    getAppChatPrivacy(): Promise<AccountSettingsAppChatPrivacy>;
    updateAppChatPrivacy(options: AccountSettingsAppChatPrivacy): Promise<boolean>;
    getGameChatPrivacy(): Promise<AccountSettingsGameChatPrivacy>;
    updateGameChatPrivacy(options: AccountSettingsGameChatPrivacy): Promise<boolean>;
    getInventoryPrivacy(): Promise<AccountSettingsInventoryPrivacy>;
    updateInventoryPrivacy(options: AccountSettingsInventoryPrivacy): Promise<boolean>;
    getUserPrivacy(): Promise<AccountSettingsPrivacy>;
    updateUserPrivacy(options: AccountSettingsPrivacy): Promise<boolean>;
    getUserPrivacySettingsInfo(): Promise<AccountSettingsPrivacyInfo>;
    getUserPrivateMessagePrivacy(): Promise<AccountSettingsPrivateMessagePrivacy>;
    updateUserPrivateMessagePrivacy(options: AccountSettingsPrivateMessagePrivacy): Promise<boolean>;
    blockUser(options: UserIdOption): Promise<boolean>;
    unblockUser(options: UserIdOption): Promise<boolean>;
}
