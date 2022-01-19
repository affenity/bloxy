import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type NotificationsGetNotificationsSettings = {
    notificationBandSettings: {
        notificationSourceType: string;
        receiverDestinationType: string;
        isEnabled: boolean;
        isOverridable: boolean;
        isSetByReceiver: boolean;
        pushNotificationDestinationPreferences: [
            {
                name: string;
                platform: string;
                destinationId: 0;
                isEnabled: boolean;
                isSetByReceiver: boolean;
            }
        ];
    }[];
    optedOutNotificationSourceTypes: string[];
    optedOutReceiverDestinationTypes: string[];
};
export declare type NotificationsGetRealtimeNotificationsSettings = {
    primaryDomain: string;
    fallbackDomain: string;
};
export declare type NotificationsAllowNotificationSourceOptions = {
    sourceType: string;
};
export declare type NotificationsAllowNotificationSource = unknown;
export declare type NotificationsDisallowNotificationSourceOptions = NotificationsAllowNotificationSourceOptions;
export declare type NotificationsDisallowNotificationSource = unknown;
export declare type NotificationsAllowNotificationsDestinationOptions = {
    destinationType: string;
};
export declare type NotificationsAllowNotificationsDestination = unknown;
export declare type NotificationsDisallowNotificationsDestinationOptions = NotificationsAllowNotificationsDestinationOptions;
export declare type NotificationsDisallowNotificationsDestination = unknown;
export declare type NotificationsUpdateNotificationDestinationSettingsOptions = {
    notificationSourceType: string;
    destinationId: number;
    isEnabled: boolean;
};
export declare type NotificationsUpdateNotificationDestinationSettings = unknown;
export declare type NotificationsUpdateNotificationSettingsOptions = {
    updatedSettings: {
        notificationSourceType: string;
        receiverDestination: string;
        isEnabled: boolean;
    }[];
};
export declare type NotificationsUpdateNotificationSettings = unknown;
export declare type NotificationsGetChromeNotificationsManifest = {
    name: string;
    gcm_sender_id: string;
};
export declare type NotificationsGetCurrentNotificationDeviceDestination = {
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
export declare type NotificationsGetNotificationDestinations = {
    destinations: NotificationsGetCurrentNotificationDeviceDestination["destination"][];
    statusMessage: string;
};
export declare type NotificationsGetNotificationsMetaDataOptions = {
    notificationToken: string;
    notificationId: number;
};
export declare type NotificationsGetNotificationsMetaData = {
    metadata: {
        notificationId: string;
        type: string;
        detail: unknown;
        fallbackDelivered: boolean;
    };
    statusMessage: string;
};
export declare type NotificationsGetNotificationIdsOptions = {
    notificationToken: string;
    limit: number;
    cursor?: string;
};
export declare type NotificationsGetNotificationIds = {
    ids: string[];
    statusMessage: string;
};
export declare type NotificationsDeregisterAllDevices = {
    statusMessage: string;
};
export declare type NotificationsDeregisterCurrentDevice = {
    statusMessage: string;
};
export declare type NotificationsMarkNotificationReadOptions = {
    platformType: string;
    notificationId: string;
};
export declare type NotificationsMarkNotificationRead = {
    statusMessage: string;
};
export declare type NotificationsMarkNotificationCategoryReadOptions = {
    notificationType: string;
    category: string;
    latestNotificationId: string;
};
export declare type NotificationsMarkNotificationCategoryRead = {
    statusMessage: string;
};
export declare type NotificationsMarkNotificationInteractionOptions = {
    platformType: string;
    notificationToken: string;
    notificationId: number;
    interactionType: string;
};
export declare type NotificationsMarkNotificationInteraction = {
    statusMessage: string;
};
export declare type NotificationsRegisterAmazonAndroidOptions = {
    notificationToken: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
};
export declare type NotificationsRegisterAmazonAndroid = {
    registration: {
        userPushNotificationDestinationId: number;
        name: string;
        notificationToken: string;
        application: string;
        platform: string;
    };
    statusMessage: string;
};
export declare type NotificationsRegisterAndroidNativeOptions = NotificationsRegisterAmazonAndroidOptions;
export declare type NotificationsRegisterAndroidNative = NotificationsRegisterAmazonAndroid;
export declare type NotificationsRegisterAndroidTencentServiceOptions = NotificationsRegisterAmazonAndroidOptions;
export declare type NotificationsRegisterAndroidTencentService = NotificationsRegisterAmazonAndroid;
export declare type NotificationsRegisterChromeOptions = {
    notificationToken: string;
    initiatedByUser: boolean;
};
export declare type NotificationsRegisterChrome = NotificationsRegisterAmazonAndroid;
export declare type NotificationsRegisterFirefoxOptions = NotificationsRegisterChromeOptions & {
    notificationEndpoint: string;
};
export declare type NotificationsRegisterFirefox = NotificationsRegisterAmazonAndroid;
export declare type NotificationsRegisterIOSNativeOptions = {
    notificationToken: string;
    destinationIdentifier: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
};
export declare type NotificationsRegisterIOSNative = NotificationsRegisterAmazonAndroid;
export declare type NotificationsGetLatestUniversesUpdatesOptions = {
    universeIds: number[];
    sinceDateTime?: string;
};
export declare type NotificationsGetLatestUniverseUpdates = {
    universeId: number;
    rootPlaceId: number;
    createdOn: string;
    createdOnKey: string;
    content: string;
    universeName: string;
}[];
export declare type NotificationsGetStreamNotificationsPromptSettings = {
    hasUserInteractedWithNotificationsStream: boolean;
    showNotificationStreamPrompt: boolean;
};
export declare type NotificationsGetRecentStreamNotificationsOptions = {
    startIndex?: number;
    maxRows?: number;
};
export declare type NotificationsGetRecentStreamNotifications = {
    id: number;
    notificationSourceType: string;
    eventDate: string;
    isInteracted: boolean;
    metadataCollection: unknown[];
    eventCount: number;
}[];
export declare type NotificationsGetStreamNotificationsMetaData = {
    bannerDismissTimeSpan: number;
    signalRDisconnectionResponseInMilliseconds: number;
    canLaunchGameFromGameUpdate: boolean;
    useFriendsApiForAjaxRequests: boolean;
};
export declare type NotificationsGetStreamNotificationsUnreadCount = {
    unreadNotifications: number;
    statusMessage: string;
};
export declare type NotificationsClearUnreadStreamNotifications = {
    statusMessage: string;
};
export declare type NotificationsSendGameUpdateNotificationInteractedOptions = {
    universeId: number;
    createdOnKey: string;
    interactioNType: string;
    currentUserId: number;
};
export declare type NotificationsSendGameUpdateNotificationInteracted = {
    statusMessage: string;
};
export declare type NotificationsSendGameUpdateNotificationReadOptions = {
    universeId: number;
    createdOn: string;
    currentUserId: number;
};
export declare type NotificationsSendGameUpdateNotificationRead = {
    statusMessage: string;
};
export declare type NotificationsMarkStreamNotificationInteractedOptions = {
    eventId: string;
};
export declare type NotificationsMarkStreamNotificationInteracted = {
    statusMessage: string;
};
export declare type NotificationsSuppressStreamNotificationsPrompt = {
    statusMessage: string;
};
export declare class NotificationsAPI extends BaseAPI {
    constructor(client: Client);
    getNotificationsSettings(): Promise<NotificationsGetNotificationsSettings>;
    getRealtimeNotificationSettings(): Promise<NotificationsGetRealtimeNotificationsSettings>;
    allowNotificationSource(options: NotificationsAllowNotificationSourceOptions): Promise<NotificationsAllowNotificationSource>;
    disallowNotificationSource(options: NotificationsDisallowNotificationSourceOptions): Promise<NotificationsDisallowNotificationSource>;
    allowNotificationDestination(options: NotificationsAllowNotificationsDestinationOptions): Promise<NotificationsAllowNotificationsDestination>;
    disallowNotificationDestination(options: NotificationsDisallowNotificationsDestinationOptions): Promise<NotificationsDisallowNotificationsDestination>;
    updateDestinationSetting(options: NotificationsUpdateNotificationDestinationSettingsOptions): Promise<NotificationsUpdateNotificationDestinationSettings>;
    updateNotificationSettings(options: NotificationsUpdateNotificationSettingsOptions): Promise<NotificationsUpdateNotificationSettings>;
    getChromeManifest(): Promise<NotificationsGetChromeNotificationsManifest>;
    getCurrentDeviceDestination(): Promise<NotificationsGetCurrentNotificationDeviceDestination>;
    getDestinations(): Promise<NotificationsGetNotificationDestinations>;
    getPushNotificationsMetaData(): Promise<NotificationsGetNotificationsMetaData>;
    getNotificationIds(options: NotificationsGetNotificationIdsOptions): Promise<NotificationsGetNotificationIds>;
    deregisterAllDevices(): Promise<NotificationsDeregisterAllDevices>;
    deregisterCurrentDevice(): Promise<NotificationsDeregisterCurrentDevice>;
    markNotificationRead(options: NotificationsMarkNotificationReadOptions): Promise<NotificationsMarkNotificationRead>;
    markNotificationCategoryRead(options: NotificationsMarkNotificationCategoryReadOptions): Promise<NotificationsMarkNotificationCategoryRead>;
    markNotificationInteraction(options: NotificationsMarkNotificationInteractionOptions): Promise<NotificationsMarkNotificationInteraction>;
    registerAndroidAmazon(options: NotificationsRegisterAmazonAndroidOptions): Promise<NotificationsRegisterAmazonAndroid>;
    registerAndroidNative(options: NotificationsRegisterAndroidNativeOptions): Promise<NotificationsRegisterAndroidNative>;
    registerAndroidTencentSerice(options: NotificationsRegisterAndroidTencentServiceOptions): Promise<NotificationsRegisterAndroidTencentService>;
    registerChrome(options: NotificationsRegisterChromeOptions): Promise<NotificationsRegisterChrome>;
    registerFirefox(options: NotificationsRegisterFirefoxOptions): Promise<NotificationsRegisterFirefox>;
    registerIOSNative(options: NotificationsRegisterIOSNativeOptions): Promise<NotificationsRegisterIOSNative>;
    getLatestUniversesUpdates(options: NotificationsGetLatestUniversesUpdatesOptions): Promise<NotificationsGetLatestUniverseUpdates>;
    getStreamNotificationsPromptSettings(): Promise<NotificationsGetStreamNotificationsPromptSettings>;
    getRecentStreamNotifications(options: NotificationsGetRecentStreamNotificationsOptions): Promise<NotificationsGetRecentStreamNotifications>;
    getStreamNotificationsMetaData(): Promise<NotificationsGetLatestUniverseUpdates>;
    getUnreadStreamNotificationsCount(): Promise<NotificationsGetLatestUniverseUpdates>;
    clearUnreadStreamNotifications(): Promise<NotificationsClearUnreadStreamNotifications>;
    markGameUpdateNotificationInteracted(options: NotificationsSendGameUpdateNotificationInteractedOptions): Promise<NotificationsSendGameUpdateNotificationInteracted>;
    markGameUpdateNotificationRead(options: NotificationsSendGameUpdateNotificationReadOptions): Promise<NotificationsSendGameUpdateNotificationRead>;
    suppressStreamNotificationsPrompt(): Promise<NotificationsSuppressStreamNotificationsPrompt>;
}
