import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type NotificationsGetNotificationsSettings = {
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
export type NotificationsGetRealtimeNotificationsSettings = {
  primaryDomain: string;
  fallbackDomain: string;
};
export type NotificationsAllowNotificationSourceOptions = {
  sourceType: string;
};
export type NotificationsAllowNotificationSource = unknown;
export type NotificationsDisallowNotificationSourceOptions =
  NotificationsAllowNotificationSourceOptions;
export type NotificationsDisallowNotificationSource = unknown;
export type NotificationsAllowNotificationsDestinationOptions = {
  destinationType: string;
};
export type NotificationsAllowNotificationsDestination = unknown;
export type NotificationsDisallowNotificationsDestinationOptions =
  NotificationsAllowNotificationsDestinationOptions;
export type NotificationsDisallowNotificationsDestination = unknown;
export type NotificationsUpdateNotificationDestinationSettingsOptions = {
  notificationSourceType: string;
  destinationId: number;
  isEnabled: boolean;
};
export type NotificationsUpdateNotificationDestinationSettings = unknown;
export type NotificationsUpdateNotificationSettingsOptions = {
  updatedSettings: {
    notificationSourceType: string;
    receiverDestination: string;
    isEnabled: boolean;
  }[];
};
export type NotificationsUpdateNotificationSettings = unknown;
export type NotificationsGetChromeNotificationsManifest = {
  name: string;
  gcm_sender_id: string;
};
export type NotificationsGetCurrentNotificationDeviceDestination = {
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
export type NotificationsGetNotificationDestinations = {
  destinations: NotificationsGetCurrentNotificationDeviceDestination["destination"][];
  statusMessage: string;
};
export type NotificationsGetNotificationsMetaDataOptions = {
  notificationToken: string;
  notificationId: number;
};
export type NotificationsGetNotificationsMetaData = {
  metadata: {
    notificationId: string;
    type: string;
    detail: unknown;
    fallbackDelivered: boolean;
  };
  statusMessage: string;
};
export type NotificationsGetNotificationIdsOptions = {
  notificationToken: string;
  limit: number;
  cursor?: string;
};
export type NotificationsGetNotificationIds = {
  ids: string[];
  statusMessage: string;
};
export type NotificationsDeregisterAllDevices = {
  statusMessage: string;
};
export type NotificationsDeregisterCurrentDevice = {
  statusMessage: string;
};
export type NotificationsMarkNotificationReadOptions = {
  platformType: string;
  notificationId: string;
};
export type NotificationsMarkNotificationRead = {
  statusMessage: string;
};
export type NotificationsMarkNotificationCategoryReadOptions = {
  notificationType: string;
  category: string;
  latestNotificationId: string;
};
export type NotificationsMarkNotificationCategoryRead = {
  statusMessage: string;
};
export type NotificationsMarkNotificationInteractionOptions = {
  platformType: string;
  notificationToken: string;
  notificationId: number;
  interactionType: string;
};
export type NotificationsMarkNotificationInteraction = {
  statusMessage: string;
};
export type NotificationsRegisterAmazonAndroidOptions = {
  notificationToken: string;
  authorizeForUser: boolean;
  oldNotificationToken: string;
  deviceName: string;
};
export type NotificationsRegisterAmazonAndroid = {
  registration: {
    userPushNotificationDestinationId: number;
    name: string;
    notificationToken: string;
    application: string;
    platform: string;
  };
  statusMessage: string;
};
export type NotificationsRegisterAndroidNativeOptions =
  NotificationsRegisterAmazonAndroidOptions;
export type NotificationsRegisterAndroidNative =
  NotificationsRegisterAmazonAndroid;
export type NotificationsRegisterAndroidTencentServiceOptions =
  NotificationsRegisterAmazonAndroidOptions;
export type NotificationsRegisterAndroidTencentService =
  NotificationsRegisterAmazonAndroid;
export type NotificationsRegisterChromeOptions = {
  notificationToken: string;
  initiatedByUser: boolean;
};
export type NotificationsRegisterChrome = NotificationsRegisterAmazonAndroid;
export type NotificationsRegisterFirefoxOptions =
  NotificationsRegisterChromeOptions & {
    notificationEndpoint: string;
  };
export type NotificationsRegisterFirefox = NotificationsRegisterAmazonAndroid;
export type NotificationsRegisterIOSNativeOptions = {
  notificationToken: string;
  destinationIdentifier: string;
  authorizeForUser: boolean;
  oldNotificationToken: string;
  deviceName: string;
};
export type NotificationsRegisterIOSNative = NotificationsRegisterAmazonAndroid;
export type NotificationsGetLatestUniversesUpdatesOptions = {
  universeIds: number[];
  sinceDateTime?: string;
};
export type NotificationsGetLatestUniverseUpdates = {
  universeId: number;
  rootPlaceId: number;
  createdOn: string;
  createdOnKey: string;
  content: string;
  universeName: string;
}[];
export type NotificationsGetStreamNotificationsPromptSettings = {
  hasUserInteractedWithNotificationsStream: boolean;
  showNotificationStreamPrompt: boolean;
};
export type NotificationsGetRecentStreamNotificationsOptions = {
  startIndex?: number;
  maxRows?: number;
};
export type NotificationsGetRecentStreamNotifications = {
  id: number;
  notificationSourceType: string;
  eventDate: string;
  isInteracted: boolean;
  metadataCollection: unknown[];
  eventCount: number;
}[];
export type NotificationsGetStreamNotificationsMetaData = {
  bannerDismissTimeSpan: number;
  signalRDisconnectionResponseInMilliseconds: number;
  canLaunchGameFromGameUpdate: boolean;
  useFriendsApiForAjaxRequests: boolean;
};
export type NotificationsGetStreamNotificationsUnreadCount = {
  unreadNotifications: number;
  statusMessage: string;
};
export type NotificationsClearUnreadStreamNotifications = {
  statusMessage: string;
};
export type NotificationsSendGameUpdateNotificationInteractedOptions = {
  universeId: number;
  createdOnKey: string;
  interactioNType: string;
  currentUserId: number;
};
export type NotificationsSendGameUpdateNotificationInteracted = {
  statusMessage: string;
};
export type NotificationsSendGameUpdateNotificationReadOptions = {
  universeId: number;
  createdOn: string;
  currentUserId: number;
};
export type NotificationsSendGameUpdateNotificationRead = {
  statusMessage: string;
};
export type NotificationsMarkStreamNotificationInteractedOptions = {
  eventId: string;
};
export type NotificationsMarkStreamNotificationInteracted = {
  statusMessage: string;
};
export type NotificationsSuppressStreamNotificationsPrompt = {
  statusMessage: string;
};

export class NotificationsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://notifications.roblox.com/"
    });
  }

  getNotificationsSettings(): Promise<NotificationsGetNotificationsSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/get-settings`
      },
      json: true
    }).then((response) => response.body);
  }

  getRealtimeNotificationSettings(): Promise<NotificationsGetRealtimeNotificationsSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/settings/realtime`
      },
      json: true
    }).then((response) => response.body);
  }

  allowNotificationSource(
    options: NotificationsAllowNotificationSourceOptions
  ): Promise<NotificationsAllowNotificationSource> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/notification-source-types/allow`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  disallowNotificationSource(
    options: NotificationsDisallowNotificationSourceOptions
  ): Promise<NotificationsDisallowNotificationSource> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/notification-source-types/opt-out`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  allowNotificationDestination(
    options: NotificationsAllowNotificationsDestinationOptions
  ): Promise<NotificationsAllowNotificationsDestination> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/receiver-destination-types/allow`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  disallowNotificationDestination(
    options: NotificationsDisallowNotificationsDestinationOptions
  ): Promise<NotificationsDisallowNotificationsDestination> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/receiver-destination-types/opt-out`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateDestinationSetting(
    options: NotificationsUpdateNotificationDestinationSettingsOptions
  ): Promise<NotificationsUpdateNotificationDestinationSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/update-destination-setting`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  updateNotificationSettings(
    options: NotificationsUpdateNotificationSettingsOptions
  ): Promise<NotificationsUpdateNotificationSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/notifications/update-notification-settings`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getChromeManifest(): Promise<NotificationsGetChromeNotificationsManifest> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/chrome-manifest`
      },
      json: true
    }).then((response) => response.body);
  }

  getCurrentDeviceDestination(): Promise<NotificationsGetCurrentNotificationDeviceDestination> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/get-current-device-destination`
      },
      json: true
    }).then((response) => response.body);
  }

  getDestinations(): Promise<NotificationsGetNotificationDestinations> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/get-destinations`
      },
      json: true
    }).then((response) => response.body);
  }

  getPushNotificationsMetaData(): Promise<NotificationsGetNotificationsMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getNotificationIds(
    options: NotificationsGetNotificationIdsOptions
  ): Promise<NotificationsGetNotificationIds> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/notification-ids`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  deregisterAllDevices(): Promise<NotificationsDeregisterAllDevices> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/deregister-all-devices`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  deregisterCurrentDevice(): Promise<NotificationsDeregisterCurrentDevice> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/deregister-current-device`
      },
      json: true
    }).then((response) => response.body);
  }

  markNotificationRead(
    options: NotificationsMarkNotificationReadOptions
  ): Promise<NotificationsMarkNotificationRead> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/mark-as-read`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markNotificationCategoryRead(
    options: NotificationsMarkNotificationCategoryReadOptions
  ): Promise<NotificationsMarkNotificationCategoryRead> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/mark-category-as-read`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markNotificationInteraction(
    options: NotificationsMarkNotificationInteractionOptions
  ): Promise<NotificationsMarkNotificationInteraction> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/mark-interaction`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerAndroidAmazon(
    options: NotificationsRegisterAmazonAndroidOptions
  ): Promise<NotificationsRegisterAmazonAndroid> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-android-amazon`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerAndroidNative(
    options: NotificationsRegisterAndroidNativeOptions
  ): Promise<NotificationsRegisterAndroidNative> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-android-native`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerAndroidTencentSerice(
    options: NotificationsRegisterAndroidTencentServiceOptions
  ): Promise<NotificationsRegisterAndroidTencentService> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-android-tencent-service`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerChrome(
    options: NotificationsRegisterChromeOptions
  ): Promise<NotificationsRegisterChrome> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-chrome`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerFirefox(
    options: NotificationsRegisterFirefoxOptions
  ): Promise<NotificationsRegisterFirefox> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-firefox`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  registerIOSNative(
    options: NotificationsRegisterIOSNativeOptions
  ): Promise<NotificationsRegisterIOSNative> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/push-notifications/register-ios-native`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getLatestUniversesUpdates(
    options: NotificationsGetLatestUniversesUpdatesOptions
  ): Promise<NotificationsGetLatestUniverseUpdates> {
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
    }).then((response) => response.body);
  }

  getStreamNotificationsPromptSettings(): Promise<NotificationsGetStreamNotificationsPromptSettings> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/get-prompt-settings`
      },
      json: true
    }).then((response) => response.body);
  }

  getRecentStreamNotifications(
    options: NotificationsGetRecentStreamNotificationsOptions
  ): Promise<NotificationsGetRecentStreamNotifications> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/get-recent`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getStreamNotificationsMetaData(): Promise<NotificationsGetLatestUniverseUpdates> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getUnreadStreamNotificationsCount(): Promise<NotificationsGetLatestUniverseUpdates> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/unread-count`
      },
      json: true
    }).then((response) => response.body);
  }

  clearUnreadStreamNotifications(): Promise<NotificationsClearUnreadStreamNotifications> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/clear-unread`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  markGameUpdateNotificationInteracted(
    options: NotificationsSendGameUpdateNotificationInteractedOptions
  ): Promise<NotificationsSendGameUpdateNotificationInteracted> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/game-update-notification-interacted`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  markGameUpdateNotificationRead(
    options: NotificationsSendGameUpdateNotificationReadOptions
  ): Promise<NotificationsSendGameUpdateNotificationRead> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/get-latest-game-updates`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  suppressStreamNotificationsPrompt(): Promise<NotificationsSuppressStreamNotificationsPrompt> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/stream-notifications/suppress-prompt`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }
}
