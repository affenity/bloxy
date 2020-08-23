import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { UpdateUserPromotionChannelsOptions as AccountInformationUpdateUserPromotionChannelsOptions } from "./AccountInformationAPI";
export declare type GetSettingsGroups = {
    title: string;
    url: string;
    suffix: string;
}[];
export declare type GetAppChatPrivacy = {
    appChatPrivacy: string;
};
export declare type UpdateAppChatPrivacyOptions = {
    appChatPrivacy: string;
};
export declare type UpdateAppChatPrivacy = boolean;
export declare type GetGameChatPrivacy = {
    gameChatPrivacy: string;
};
export declare type UpdateGameChatPrivacyOptions = {
    gameChatPrivacy: string;
};
export declare type UpdateGameChatPrivacy = boolean;
export declare type GetInventoryPrivacy = {
    inventoryPrivacy: string;
};
export declare type UpdateInventoryPrivacyOptions = {
    inventoryPrivacy: string;
};
export declare type UpdateInventoryPrivacy = {
    inventoryPrivacy: string;
    tradePrivacy: string;
    privacySettingResponse: string;
};
export declare type GetUserPrivacy = {
    phoneDiscovery: string;
};
export declare type UpdateUserPrivacyOptions = {
    phoneDiscovery: string;
};
export declare type UpdateUserPrivacy = {
    phoneDiscovery: string;
};
export declare type GetUserPrivacySettingsInfo = {
    isPhoneDiscoveryEnabled: boolean;
};
export declare type GetUserPrivateMessagePrivacy = {
    privateMessagePrivacy: string;
};
export declare type UpdateUserPrivateMessagePrivacyOptions = {
    privateMessagePrivacy: string;
};
export declare type UpdateUserPrivateMessagePrivacy = boolean;
export declare type GetUserEmailStatus = {
    email: string;
    verified: boolean;
};
export declare type UpdateUserEmailOptions = {
    password: string;
    emailAddress: string;
};
export declare type UpdateUserEmail = boolean;
export declare type SendEmailVerification = boolean;
export declare type GetWebsiteTheme = {
    themeType: string;
};
export declare type UpdateWebsiteThemeOptions = {
    themeType: string;
};
export declare type UpdateWebsiteTheme = boolean;
export declare type GetWebsiteThemes = {
    data: string[];
};
export declare type GetUserTradePrivacy = {
    tradePrivacy: string;
};
export declare type UpdateUserTradePrivacyOptions = {
    tradePrivacy: string;
};
export declare type UpdateUserTradePrivacy = {
    tradePrivacy: string;
    inventoryPrivacy: string;
    privacySettingResponse: string;
};
export declare type GetUserTradeQualityFilter = {
    tradeValue: string;
};
export declare type UpdateUserTradeQualityFilterOptions = {
    tradeValue: string;
};
export declare type UpdateUserTradeQualityFilter = boolean;
export declare type GetTwoStepStatus = {
    enabled: boolean;
};
export declare type UpdateTwoStepStatusOptions = {
    enabled: boolean;
    password: string;
};
export declare type UpdateTwoStepStatus = {
    enabled: boolean;
    password: string;
};
export declare type GetContactUpsell = {
    upsellScreenType: string;
};
export declare type UpdateContactUpsellSuppressionOptions = {
    suppress: boolean;
};
export declare type UpdateContactUpsellSuppression = boolean;
export declare type GetIsXboxUsernameValidOptions = {
    authorization: string;
    signature: string;
    username: string;
};
export declare type GetIsXboxUsernameValid = {
    isValid: boolean;
    errorMessage?: string;
    errorCode?: string;
};
export declare type UpdateUserPromotionChannelsOptions = AccountInformationUpdateUserPromotionChannelsOptions;
export declare type UpdateUserPromotionChannels = boolean;
export default class AccountSettingsAPI extends BaseAPI {
    constructor(client: Client);
    getSettingsGroups(): Promise<GetSettingsGroups>;
    getAppChatPrivacy(): Promise<GetAppChatPrivacy>;
    updateAppChatPrivacy(options: UpdateAppChatPrivacyOptions): Promise<UpdateAppChatPrivacy>;
    getGameChatPrivacy(): Promise<GetGameChatPrivacy>;
    updateGameChatPrivacy(options: UpdateGameChatPrivacyOptions): Promise<UpdateGameChatPrivacy>;
    getInventoryPrivacy(): Promise<GetInventoryPrivacy>;
    updateInventoryPrivacy(options: UpdateInventoryPrivacyOptions): Promise<UpdateInventoryPrivacy>;
    getUserPrivacy(): Promise<GetUserPrivacy>;
    updateUserPrivacy(options: UpdateUserPrivacyOptions): Promise<UpdateUserPrivacy>;
    getUserPrivacySettingsInfo(): Promise<GetUserPrivacySettingsInfo>;
    getUserPrivateMessagePrivacy(): Promise<GetUserPrivateMessagePrivacy>;
    updateUserPrivateMessagePrivacy(options: UpdateUserPrivateMessagePrivacyOptions): Promise<UpdateUserPrivateMessagePrivacy>;
    getUserEmailStatus(): Promise<GetUserEmailStatus>;
    updateUserEmail(options: UpdateUserEmailOptions): Promise<UpdateUserEmail>;
    sendEmailVerification(): Promise<SendEmailVerification>;
    getWebsiteTheme(): Promise<GetWebsiteTheme>;
    updateWebsiteTheme(options: UpdateWebsiteThemeOptions): Promise<UpdateWebsiteTheme>;
    getWebsiteThemes(): Promise<GetWebsiteThemes>;
    getUserTradePrivacy(): Promise<GetUserTradePrivacy>;
    updateUserTradePrivacy(options: UpdateUserTradePrivacyOptions): Promise<UpdateUserTradePrivacy>;
    getUserTradeQualityFilter(): Promise<GetUserTradeQualityFilter>;
    updateUserTradeQualityFilter(options: UpdateUserTradeQualityFilterOptions): Promise<UpdateUserTradeQualityFilter>;
    getTwoStepStatus(): Promise<GetTwoStepStatus>;
    updateTwoStepStatus(options: UpdateTwoStepStatusOptions): Promise<UpdateTwoStepStatus>;
    getContactUpsell(): Promise<GetContactUpsell>;
    updateContactUpsellSuppression(options: UpdateContactUpsellSuppressionOptions): Promise<UpdateContactUpsellSuppression>;
    getIsXboxUsernameValid(options: GetIsXboxUsernameValidOptions): Promise<GetIsXboxUsernameValid>;
    updateUserPromotionChannels(options: UpdateUserPromotionChannelsOptions): Promise<UpdateUserPromotionChannels>;
}
