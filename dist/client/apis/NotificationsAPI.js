"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class NotificationsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://notifications.roblox.com/"
        });
    }
    getNotificationsSettings() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/get-settings`
            },
            json: true
        }).then(response => response.body);
    }
    getRealtimeNotificationSettings() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/settings/realtime`
            },
            json: true
        }).then(response => response.body);
    }
    allowNotificationSource(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/notification-source-types/allow`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    disallowNotificationSource(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/notification-source-types/opt-out`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    allowNotificationDestination(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/receiver-destination-types/allow`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    disallowNotificationDestination(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/receiver-destination-types/opt-out`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    updateDestinationSetting(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/update-destination-setting`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    updateNotificationSettings(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/notifications/update-notification-settings`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getChromeManifest() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/chrome-manifest`
            },
            json: true
        }).then(response => response.body);
    }
    getCurrentDeviceDestination() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/get-current-device-destination`
            },
            json: true
        }).then(response => response.body);
    }
    getDestinations() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/get-destinations`
            },
            json: true
        }).then(response => response.body);
    }
    getPushNotificationsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/metadata`
            },
            json: true
        }).then(response => response.body);
    }
    getNotificationIds(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/notification-ids`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    deregisterAllDevices() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/deregister-all-devices`,
                method: "POST"
            },
            json: true
        }).then(response => response.body);
    }
    deregisterCurrentDevice() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/deregister-current-device`
            },
            json: true
        }).then(response => response.body);
    }
    markNotificationRead(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-as-read`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    markNotificationCategoryRead(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-category-as-read`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    markNotificationInteraction(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/mark-interaction`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerAndroidAmazon(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-amazon`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerAndroidNative(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-native`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerAndroidTencentSerice(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-android-tencent-service`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerChrome(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-chrome`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerFirefox(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-firefox`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    registerIOSNative(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/push-notifications/register-ios-native`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    getLatestUniversesUpdates(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-latest-game-updates`,
                qs: Object.assign(Object.assign({}, options), { universeId: options.universeIds.join(",") })
            },
            json: true
        }).then(response => response.body);
    }
    getStreamNotificationsPromptSettings() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-prompt-settings`
            },
            json: true
        }).then(response => response.body);
    }
    getRecentStreamNotifications(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-recent`,
                qs: options
            },
            json: true
        }).then(response => response.body);
    }
    getStreamNotificationsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/metadata`
            },
            json: true
        }).then(response => response.body);
    }
    getUnreadStreamNotificationsCount() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/unread-count`
            },
            json: true
        }).then(response => response.body);
    }
    clearUnreadStreamNotifications() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/clear-unread`,
                method: "POST"
            },
            json: true
        }).then(response => response.body);
    }
    markGameUpdateNotificationInteracted(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/game-update-notification-interacted`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    markGameUpdateNotificationRead(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/get-latest-game-updates`,
                method: "POST",
                json: options
            },
            json: true
        }).then(response => response.body);
    }
    suppressStreamNotificationsPrompt() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/stream-notifications/suppress-prompt`,
                method: "POST"
            },
            json: true
        }).then(response => response.body);
    }
}
exports.default = NotificationsAPI;
