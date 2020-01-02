class NotificationsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://notifications.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getSelfNotificationSettings () {
		return this.request({
			url: "v2/notifications/get-settings"
		});
	}

	getRealtimeSettings () {
		return this.request({
			url: "v2/notifications/settings/realtime"
		});
	}

	allowNotificationSource (sourceType) {
		return this.request({
			url: "v2/notifications/notification-source-types/allow",
			method: "POST",
			json: {
				sourceType
			}
		});
	}

	optOutFromNotificationSource (sourceType) {
		return this.request({
			url: "v2/notifications/notification-source-types/opt-out",
			method: "POST",
			json: {
				sourceType
			}
		});
	}

	allowNotificationDestination (destinationType) {
		return this.request({
			url: "v2/notifications/receiver-destination-type/allow",
			method: "POST",
			json: {
				destinationType
			}
		});
	}

	optOutFromNotificationDestination (destinationType) {
		return this.request({
			url: "v2/notifications/receiver-destination-type/opt-out",
			method: "POST",
			json: {
				destinationType
			}
		});
	}

	updateNotificationDestinationSettings (settings) {
		return this.request({
			url: "v2/notifications/update-destination-setting",
			method: "POST",
			json: settings
		});
	}

	updateNotificationBandSettings (setting) {
		return this.request({
			url: "v2/notifications/receiver-destination-type/allow",
			method: "POST",
			json: setting
		});
	}

	getPushNotificationChromeManifest () {
		return this.request({
			url: "v2/push-notification/chrome-manifest"
		});
	}

	getPushNotificationCurrentDeviceDestination () {
		return this.request({
			url: "v2/push-notification/get-current-device-destination"
		});
	}

	getPushNotificationMetadata () {
		return this.request({
			url: "v2/push-notification/metadata"
		});
	}

	getPushNotificationIds ({ token, limit, cursor }) {
		return this.request({
			url: "v2/push-notification/notification-ids",
			qs: {
				notificationToken: token,
				limit,
				cursor
			}
		});
	}

	deregisterAllPushNotificationDevices () {
		return this.request({
			url: "v2/push-notification/deregister-all-devices",
			method: "POST"
		});
	}

	deregisterCurrentPushNotificationDevice () {
		return this.request({
			url: "v2/push-notification/",
			method: "POST"
		});
	}

	markPushNotificationRead ({ platformType, notificationId }) {
		return this.request({
			url: "v2/push-notification/mark-as-read",
			method: "POST",
			json: {
				platformType,
				notificationId
			}
		});
	}

	markPushNotificationCategoryRead ({ notificationType, category, notificationId }) {
		return this.request({
			url: "v2/push-notification/mark-category-as-read",
			method: "POST",
			json: {
				notificationType,
				category,
				latestNotificationId: notificationId
			}
		});
	}

	markPushNotificationInteraction ({ platformType, token, notificationId, interactionType }) {
		return this.request({
			url: "v2/push-notification/mark-interaction",
			method: "POST",
			json: {
				platformType,
				notificationToken: token,
				notificationId,
				interactionType
			}
		});
	}

	registerPushNotificationAndroidAmazon (data) {
		return this.request({
			url: "v2/push-notification/register-android-amazon",
			method: "POST",
			json: data
		});
	}

	registerPushNotificationAndroidNative (data) {
		return this.request({
			url: "v2/push-notification/register-android-native",
			method: "POST",
			json: data
		});
	}

	registerPushNotificationChrome (data) {
		return this.request({
			url: "v2/push-notification/register-chrome",
			method: "POST",
			json: data
		});
	}

	registerPushNotificationFirefox (data) {
		return this.request({
			url: "v2/push-notification/register-firefox",
			method: "POST",
			json: data
		});
	}

	registerPushNotificationIOS (data) {
		return this.request({
			url: "v2/push-notification/register-ios-native",
			method: "POST",
			json: data
		});
	}

	getLatestGameUpdatesFromStreamNotifications ({ universeIds, sinceDateTime }) {
		return this.request({
			url: "v2/stream-notifications/get-latest-game-updates",
			qs: {
				universeIds: universeIds.join("\n"),
				sinceDateTime
			}
		});
	}

	getPromptSettingsFromStreamNotifications () {
		return this.request({
			url: "v2/stream-notifications/get-prompt-settings"
		});
	}

	getRecentStreamNotifications ({ start, amount }) {
		return this.request({
			url: "v2/stream-notifications/get-recent",
			qs: {
				startIndex: start,
				maxRows: amount
			}
		});
	}

	getStreamNotificationsMetadata () {
		return this.request({
			url: "v2/stream-notifications/metadata"
		});
	}

	getUnreadStreamNotificationsCount () {
		return this.request({
			url: "v2/stream-notifications/unread-count"
		});
	}

	clearUnreadStreamNotifications () {
		return this.request({
			url: "v2/stream-notifications/clear-unread",
			method: "POST"
		});
	}

	markGameUpdateNotificationInteracted (data) {
		return this.request({
			url: "v2/stream-notifications/game-update-notification-interacted",
			method: "POST",
			json: data
		});
	}

	markGameUpdateNotificationRead ({ universeId, createdOn, userId }) {
		return this.request({
			url: "v2/stream-notifications/game-update-notification-read",
			method: "POST",
			json: {
				universeId,
				createdOn,
				currentUserId: userId
			}
		});
	}

	markNotificationStreamInteracted (eventId) {
		return this.request({
			url: "v2/stream-notifications/mark-interacted",
			method: "POST",
			json: {
				eventId
			}
		});
	}

	suppressStreamNotificationPrompt () {
		return this.request({
			url: "v2/stream-notifications/suppress-prompt",
			method: "POST"
		});
	}
}

module.exports = NotificationsAPI;
