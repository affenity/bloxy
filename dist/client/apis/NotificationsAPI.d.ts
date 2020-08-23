import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetNotificationsSettings = {
    notificationBandSettings: {
        notificationSourceType: string;
        receiverDestinationType: string;
        isEnabled: boolean;
        isOverridable: boolean;
        isSetByReceiver: boolean;
        pushNotificationDestinationPreferences: [{
            name: string;
            platform: string;
            destinationId: 0;
            isEnabled: boolean;
            isSetByReceiver: boolean;
        }];
    }[];
    optedOutNotificationSourceTypes: string[];
    optedOutReceiverDestinationTypes: string[];
};
export declare type GetRealtimeNotificationsSettings = {
    primaryDomain: string;
    fallbackDomain: string;
};
export declare type AllowNotificationSourceOptions = {
    sourceType: string;
};
export declare type AllowNotificationSource = {};
export declare type DisallowNotificationSourceOptions = AllowNotificationSourceOptions;
export declare type DisallowNotificationSource = {};
export declare type AllowNotificationsDestinationOptions = {
    destinationType: string;
};
export declare type AllowNotificationsDestination = {};
export declare type DisallowNotificationsDestinationOptions = AllowNotificationsDestinationOptions;
export declare type DisallowNotificationsDestination = {};
export declare type UpdateNotificationDestinationSettingsOptions = {
    notificationSourceType: string;
    destinationId: number;
    isEnabled: boolean;
};
export declare type UpdateNotificationDestinationSettings = {};
export declare type UpdateNotificationSettingsOptions = {
    updatedSettings: {
        notificationSourceType: string;
        receiverDestination: string;
        isEnabled: boolean;
    }[];
};
export declare type UpdateNotificationSettings = {};
export declare type GetChromeNotificationsManifest = {
    name: string;
    gcm_sender_id: string;
};
export declare type GetCurrentNotificationDeviceDestination = {
    destination: {
        user: {
            name: string;
            userId: number;
        };
        name: string;
        notificationToken: string;
        supportsUpdateNotifications: boolean;
        userPushNotificationDestinationId: number;
        application: string;
        platform: string;
    };
    statusMessage: string;
};
export declare type GetNotificationDestinations = {
    destinations: GetCurrentNotificationDeviceDestination["destination"][];
    statusMessage: string;
};
export declare type GetNotificationsMetaDataOptions = {
    notificationToken: string;
    notificationId: number;
};
export declare type GetNotificationsMetaData = {
    metadata: {
        notificationId: string;
        type: string;
        detail: unknown;
        fallbackDelivered: boolean;
    };
    statusMessage: string;
};
export declare type GetNotificationIdsOptions = {
    notificationToken: string;
    limit: number;
    cursor?: string;
};
export declare type GetNotificationIds = {
    ids: string[];
    statusMessage: string;
};
export declare type DeregisterAllDevices = {
    statusMessage: string;
};
export declare type DeregisterCurrentDevice = {
    statusMessage: string;
};
export declare type MarkNotificationReadOptions = {
    platformType: string;
    notificationId: string;
};
export declare type MarkNotificationRead = {
    statusMessage: string;
};
export declare type MarkNotificationCategoryReadOptions = {
    notificationType: string;
    category: string;
    latestNotificationId: string;
};
export declare type MarkNotificationCategoryRead = {
    statusMessage: string;
};
export declare type MarkNotificationInteractionOptions = {
    platformType: string;
    notificationToken: string;
    notificationId: number;
    interactionType: string;
};
export declare type MarkNotificationInteraction = {
    statusMessage: string;
};
export declare type RegisterAmazonAndroidOptions = {
    notificationToken: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
};
export declare type RegisterAmazonAndroid = {
    registration: {
        userPushNotificationDestinationId: number;
        name: string;
        notificationToken: string;
        application: string;
        platform: string;
    };
    statusMessage: string;
};
export declare type RegisterAndroidNativeOptions = RegisterAmazonAndroidOptions;
export declare type RegisterAndroidNative = RegisterAmazonAndroid;
export declare type RegisterAndroidTencentServiceOptions = RegisterAmazonAndroidOptions;
export declare type RegisterAndroidTencentService = RegisterAmazonAndroid;
export declare type RegisterChromeOptions = {
    notificationToken: string;
    initiatedByUser: boolean;
};
export declare type RegisterChrome = RegisterAmazonAndroid;
export declare type RegisterFirefoxOptions = RegisterChromeOptions & {
    notificationEndpoint: string;
};
export declare type RegisterFirefox = RegisterAmazonAndroid;
export declare type RegisterIOSNativeOptions = {
    notificationToken: string;
    destinationIdentifier: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
};
export declare type RegisterIOSNative = RegisterAmazonAndroid;
export declare type GetLatestUniversesUpdatesOptions = {
    universeIds: number[];
    sinceDateTime?: string;
};
export declare type GetLatestUniverseUpdates = {
    universeId: number;
    rootPlaceId: number;
    createdOn: string;
    createdOnKey: string;
    content: string;
    universeName: string;
}[];
export declare type GetStreamNotificationsPromptSettings = {
    hasUserInteractedWithNotificationsStream: boolean;
    showNotificationStreamPrompt: boolean;
};
export declare type GetRecentStreamNotificationsOptions = {
    startIndex?: number;
    maxRows?: number;
};
export declare type GetRecentStreamNotifications = {
    id: number;
    notificationSourceType: string;
    eventDate: string;
    isInteracted: boolean;
    metadataCollection: unknown[];
    eventCount: number;
}[];
export declare type GetStreamNotificationsMetaData = {
    bannerDismissTimeSpan: number;
    signalRDisconnectionResponseInMilliseconds: number;
    canLaunchGameFromGameUpdate: boolean;
    useFriendsApiForAjaxRequests: boolean;
};
export declare type GetStreamNotificationsUnreadCount = {
    unreadNotifications: number;
    statusMessage: string;
};
export declare type ClearUnreadStreamNotifications = {
    statusMessage: string;
};
export declare type SendGameUpdateNotificationInteractedOptions = {
    universeId: number;
    createdOnKey: string;
    interactioNType: string;
    currentUserId: number;
};
export declare type SendGameUpdateNotificationInteracted = {
    statusMessage: string;
};
export declare type SendGameUpdateNotificationReadOptions = {
    universeId: number;
    createdOn: string;
    currentUserId: number;
};
export declare type SendGameUpdateNotificationRead = {
    statusMessage: string;
};
export declare type MarkStreamNotificationInteractedOptions = {
    eventId: string;
};
export declare type MarkStreamNotificationInteracted = {
    statusMessage: string;
};
export declare type SuppressStreamNotificationsPrompt = {
    statusMessage: string;
};
export default class NotificationsAPI extends BaseAPI {
    constructor(client: Client);
    getNotificationsSettings(): Promise<GetNotificationsSettings>;
    getRealtimeNotificationSettings(): Promise<GetRealtimeNotificationsSettings>;
    allowNotificationSource(options: AllowNotificationSourceOptions): Promise<AllowNotificationSource>;
    disallowNotificationSource(options: DisallowNotificationSourceOptions): Promise<DisallowNotificationSource>;
    allowNotificationDestination(options: AllowNotificationsDestinationOptions): Promise<AllowNotificationsDestination>;
    disallowNotificationDestination(options: DisallowNotificationsDestinationOptions): Promise<DisallowNotificationsDestination>;
    updateDestinationSetting(options: UpdateNotificationDestinationSettingsOptions): Promise<UpdateNotificationDestinationSettings>;
    updateNotificationSettings(options: UpdateNotificationSettingsOptions): Promise<UpdateNotificationSettings>;
    getChromeManifest(): Promise<GetChromeNotificationsManifest>;
    getCurrentDeviceDestination(): Promise<GetCurrentNotificationDeviceDestination>;
    getDestinations(): Promise<GetNotificationDestinations>;
    getPushNotificationsMetaData(): Promise<GetNotificationsMetaData>;
    getNotificationIds(options: GetNotificationIdsOptions): Promise<GetNotificationIds>;
    deregisterAllDevices(): Promise<DeregisterAllDevices>;
    deregisterCurrentDevice(): Promise<DeregisterCurrentDevice>;
    markNotificationRead(options: MarkNotificationReadOptions): Promise<MarkNotificationRead>;
    markNotificationCategoryRead(options: MarkNotificationCategoryReadOptions): Promise<MarkNotificationCategoryRead>;
    markNotificationInteraction(options: MarkNotificationInteractionOptions): Promise<MarkNotificationInteraction>;
    registerAndroidAmazon(options: RegisterAmazonAndroidOptions): Promise<RegisterAmazonAndroid>;
    registerAndroidNative(options: RegisterAndroidNativeOptions): Promise<RegisterAndroidNative>;
    registerAndroidTencentSerice(options: RegisterAndroidTencentServiceOptions): Promise<RegisterAndroidTencentService>;
    registerChrome(options: RegisterChromeOptions): Promise<RegisterChrome>;
    registerFirefox(options: RegisterFirefoxOptions): Promise<RegisterFirefox>;
    registerIOSNative(options: RegisterIOSNativeOptions): Promise<RegisterIOSNative>;
    getLatestUniversesUpdates(options: GetLatestUniversesUpdatesOptions): Promise<GetLatestUniverseUpdates>;
    getStreamNotificationsPromptSettings(): Promise<GetStreamNotificationsPromptSettings>;
    getRecentStreamNotifications(options: GetRecentStreamNotificationsOptions): Promise<GetRecentStreamNotifications>;
    getStreamNotificationsMetaData(): Promise<GetLatestUniverseUpdates>;
    getUnreadStreamNotificationsCount(): Promise<GetLatestUniverseUpdates>;
    clearUnreadStreamNotifications(): Promise<ClearUnreadStreamNotifications>;
    markGameUpdateNotificationInteracted(options: SendGameUpdateNotificationInteractedOptions): Promise<SendGameUpdateNotificationInteracted>;
    markGameUpdateNotificationRead(options: SendGameUpdateNotificationReadOptions): Promise<SendGameUpdateNotificationRead>;
    suppressStreamNotificationsPrompt(): Promise<SuppressStreamNotificationsPrompt>;
}
