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
export type AllowNotificationSource = unknown
export type DisallowNotificationSourceOptions = AllowNotificationSourceOptions;
export type DisallowNotificationSource = unknown
export type AllowNotificationsDestinationOptions = {
    destinationType: string;
}
export type AllowNotificationsDestination = unknown
export type DisallowNotificationsDestinationOptions = AllowNotificationsDestinationOptions;
export type DisallowNotificationsDestination = unknown
export type UpdateNotificationDestinationSettingsOptions = {
    notificationSourceType: string;
    destinationId: number;
    isEnabled: boolean;
}
export type UpdateNotificationDestinationSettings = unknown
export type UpdateNotificationSettingsOptions = {
    updatedSettings: {
        notificationSourceType: string;
        receiverDestination: string;
        isEnabled: boolean;
    }[];
}
export type UpdateNotificationSettings = unknown
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

    getNotificationsSettings (): Promise<GetNotificationsSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/get-settings`
            },
            json: true
        })
            .then(response => response.body);
    }

    getRealtimeNotificationSettings (): Promise<GetRealtimeNotificationsSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/settings/realtime`
            },
            json: true
        })
            .then(response => response.body);
    }

    allowNotificationSource (options: AllowNotificationSourceOptions): Promise<AllowNotificationSource> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/notification-source-types/allow`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    disallowNotificationSource (options: DisallowNotificationSourceOptions): Promise<DisallowNotificationSource> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/notification-source-types/opt-out`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    allowNotificationDestination (options: AllowNotificationsDestinationOptions): Promise<AllowNotificationsDestination> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/receiver-destination-types/allow`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    disallowNotificationDestination (options: DisallowNotificationsDestinationOptions): Promise<DisallowNotificationsDestination> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/receiver-destination-types/opt-out`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    updateDestinationSetting (options: UpdateNotificationDestinationSettingsOptions): Promise<UpdateNotificationDestinationSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/update-destination-setting`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    updateNotificationSettings (options: UpdateNotificationSettingsOptions): Promise<UpdateNotificationSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/update-notification-settings`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getChromeManifest (): Promise<GetChromeNotificationsManifest> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/chrome-manifest`
            },
            json: true
        })
            .then(response => response.body);
    }

    getCurrentDeviceDestination (): Promise<GetCurrentNotificationDeviceDestination> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/get-current-device-destination`
            },
            json: true
        })
            .then(response => response.body);
    }

    getDestinations (): Promise<GetNotificationDestinations> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/get-destinations`
            },
            json: true
        })
            .then(response => response.body);
    }

    getPushNotificationsMetaData (): Promise<GetNotificationsMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    getNotificationIds (options: GetNotificationIdsOptions): Promise<GetNotificationIds> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/notification-ids`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    deregisterAllDevices (): Promise<DeregisterAllDevices> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/deregister-all-devices`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    deregisterCurrentDevice (): Promise<DeregisterCurrentDevice> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/deregister-current-device`
            },
            json: true
        })
            .then(response => response.body);
    }

    markNotificationRead (options: MarkNotificationReadOptions): Promise<MarkNotificationRead> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-as-read`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    markNotificationCategoryRead (options: MarkNotificationCategoryReadOptions): Promise<MarkNotificationCategoryRead> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-category-as-read`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    markNotificationInteraction (options: MarkNotificationInteractionOptions): Promise<MarkNotificationInteraction> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-interaction`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerAndroidAmazon (options: RegisterAmazonAndroidOptions): Promise<RegisterAmazonAndroid> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-amazon`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerAndroidNative (options: RegisterAndroidNativeOptions): Promise<RegisterAndroidNative> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-native`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerAndroidTencentSerice (options: RegisterAndroidTencentServiceOptions): Promise<RegisterAndroidTencentService> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-tencent-service`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerChrome (options: RegisterChromeOptions): Promise<RegisterChrome> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-chrome`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerFirefox (options: RegisterFirefoxOptions): Promise<RegisterFirefox> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-firefox`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    registerIOSNative (options: RegisterIOSNativeOptions): Promise<RegisterIOSNative> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-ios-native`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getLatestUniversesUpdates (options: GetLatestUniversesUpdatesOptions): Promise<GetLatestUniverseUpdates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-latest-game-updates`,
                qs: {
                    ...options,
                    universeId: options.universeIds.join(",")
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getStreamNotificationsPromptSettings (): Promise<GetStreamNotificationsPromptSettings> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-prompt-settings`
            },
            json: true
        })
            .then(response => response.body);
    }

    getRecentStreamNotifications (options: GetRecentStreamNotificationsOptions): Promise<GetRecentStreamNotifications> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-recent`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getStreamNotificationsMetaData (): Promise<GetLatestUniverseUpdates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUnreadStreamNotificationsCount (): Promise<GetLatestUniverseUpdates> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/unread-count`
            },
            json: true
        })
            .then(response => response.body);
    }

    clearUnreadStreamNotifications (): Promise<ClearUnreadStreamNotifications> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/clear-unread`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    markGameUpdateNotificationInteracted (options: SendGameUpdateNotificationInteractedOptions): Promise<SendGameUpdateNotificationInteracted> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/game-update-notification-interacted`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    markGameUpdateNotificationRead (options: SendGameUpdateNotificationReadOptions): Promise<SendGameUpdateNotificationRead> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-latest-game-updates`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    suppressStreamNotificationsPrompt (): Promise<SuppressStreamNotificationsPrompt> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/suppress-prompt`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }
}
