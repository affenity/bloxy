import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetNotificationsSettings = {
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
}
export type GetRealtimeNotificationsSettings = {
    primaryDomain: string;
    fallbackDomain: string;
}
export type AllowNotificationSourceOptions = {
    sourceType: string;
}
export type AllowNotificationSource = {}
export type DisallowNotificationSourceOptions = AllowNotificationSourceOptions;
export type DisallowNotificationSource = {}
export type AllowNotificationsDestinationOptions = {
    destinationType: string;
}
export type AllowNotificationsDestination = {}
export type DisallowNotificationsDestinationOptions = AllowNotificationsDestinationOptions;
export type DisallowNotificationsDestination = {}
export type UpdateNotificationDestinationOptions = {
    notificationSourceType: string;
    destinationId: number;
    isEnabled: boolean;
}
export type UpdateNotificationDestination = {}
export type UpdateNotificationSettingsOptions = {
    updatedSettings: {
        notificationSourceType: string;
        receiverDestination: string;
        isEnabled: boolean;
    }[];
}
export type UpdateNotificationSettings = {}
export type GetChromeNotificationsManifest = {
    name: string;
    gcm_sender_id: string;
}
export type GetCurrentNotificationDeviceDestination = {
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
}
export type GetNotificationDestinations = {
    destinations: GetCurrentNotificationDeviceDestination["destination"][];
    statusMessage: string;
}
export type GetNotificationsMetaDataOptions = {
    notificationToken: string;
    notificationId: number;
}
export type GetNotificationsMetaData = {
    metadata: {
        notificationId: string;
        type: string;
        detail: unknown;
        fallbackDelivered: boolean;
    };
    statusMessage: string;
}
export type GetNotificationIdsOptions = {
    notificationToken: string;
    limit: number;
    cursor?: string;
}
export type GetNotificationIds = {
    ids: string[];
    statusMessage: string;
}
export type DeregisterAllDevices = {
    statusMessage: string;
}
export type DeregisterCurrentDevice = {
    statusMessage: string;
}
export type MarkNotificationReadOptions = {
    platformType: string;
    notificationId: string;
}
export type MarkNotificationRead = {
    statusMessage: string;
}
export type MarkNotificationCategoryReadOptions = {
    notificationType: string;
    category: string;
    latestNotificationId: string;
}
export type MarkNotificationCategoryRead = {
    statusMessage: string;
}
export type MarkNotificationInteractionOptions = {
    platformType: string;
    notificationToken: string;
    notificationId: number;
    interactionType: string;
}
export type MarkNotificationInteraction = {
    statusMessage: string;
}
export type RegisterAmazonAndroidOptions = {
    notificationToken: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
}
export type RegisterAmazonAndroid = {
    registration: {
        userPushNotificationDestinationId: number;
        name: string;
        notificationToken: string;
        application: string;
        platform: string;
    };
    statusMessage: string;
}
export type RegisterAndroidNativeOptions = RegisterAmazonAndroidOptions;
export type RegisterAndroidNative = RegisterAmazonAndroid;
export type RegisterAndroidTencentServiceOptions = RegisterAmazonAndroidOptions;
export type RegisterAndroidTencentService = RegisterAmazonAndroid;
export type RegisterChromeOptions = {
    notificationToken: string;
    initiatedByUser: boolean;
}
export type RegisterChrome = RegisterAmazonAndroid;
export type RegisterFirefoxOptions = RegisterChromeOptions & {
    notificationEndpoint: string;
}
export type RegisterFirefox = RegisterAmazonAndroid;
export type RegisterIOSNativeOptions = {
    notificationToken: string;
    destinationIdentifier: string;
    authorizeForUser: boolean;
    oldNotificationToken: string;
    deviceName: string;
};
export type RegisterIOSNative = RegisterAmazonAndroid;
export type GetLatestUniversesUpdatesOptions = {
    universeIds: number[];
    sinceDateTime?: string;
}
export type GetLatestUniverseUpdates = {
    universeId: number;
    rootPlaceId: number;
    createdOn: string;
    createdOnKey: string;
    content: string;
    universeName: string;
}[];
export type GetStreamNotificationsPromptSettings = {
    hasUserInteractedWithNotificationsStream: boolean;
    showNotificationStreamPrompt: boolean;
}
export type GetRecentStreamNotificationsOptions = {
    startIndex?: number;
    maxRows?: number;
}
export type GetRecentStreamNotifications = {
    id: number;
    notificationSourceType: string;
    eventDate: string;
    isInteracted: boolean;
    metadataCollection: unknown[];
    eventCount: number;
}[];
export type GetStreamNotificationsMetaData = {
    bannerDismissTimeSpan: number;
    signalRDisconnectionResponseInMilliseconds: number;
    canLaunchGameFromGameUpdate: boolean;
    useFriendsApiForAjaxRequests: boolean;
}
export type GetStreamNotificationsUnreadCount = {
    unreadNotifications: number;
    statusMessage: string;
}
export type ClearUnreadStreamNotifications = {
    statusMessage: string;
}
export type SendGameUpdateNotificationInteractedOptions = {
    universeId: number;
    createdOnKey: string;
    interactioNType: string;
    currentUserId: number;
}
export type SendGameUpdateNotificationInteracted = {
    statusMessage: string;
}
export type SendGameUpdateNotificationReadOptions = {
    universeId: number;
    createdOn: string;
    currentUserId: number;
}
export type SendGameUpdateNotificationRead = {
    statusMessage: string;
}
export type MarkStreamNotificationInteractedOptions = {
    eventId: string;
}
export type MarkStreamNotificationInteracted = {
    statusMessage: string;

}
export type SuppressStreamNotificationsPrompt = {
    statusMessage: string;
}


export default class NotificationsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://notifications.roblox.com/"
        });
    }
}
