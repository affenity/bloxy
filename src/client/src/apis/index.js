module.exports = {
	AccountInformation: require("./AccountInformationAPI"),
	AccountSettings: require("./AccountSettingsAPI"),
	API: require("./API"),
	Auth: require("./AuthAPI"),
	Avatar: require("./AvatarAPI"),
	Badges: require("./BadgesAPI"),
	Billing: require("./BillingAPI"),
	Captcha: require("./CaptchaAPI"),
	Catalog: require("./CatalogAPI"),
	Chat: require("./ChatAPI"),
	Contacts: require("./ContactsAPI"),
	Develop: require("./DevelopAPI"),
	Economy: require("./EconomyAPI"),
	Followings: require("./FollowingsAPI"),
	Friends: require("./FriendsAPI"),
	GameInternationalization: require("./GameInternationalizationAPI"),
	Games: require("./GamesAPI"),
	Groups: require("./GroupsAPI"),
	Inventory: require("./InventoryAPI"),
	ItemConfiguration: require("./ItemConfigurationAPI"),
	Locale: require("./LocaleAPI"),
	Metrics: require("./MetricsAPI"),
	Notifications: require("./NotificationsAPI"),
	PremiumFeatures: require("./PremiumFeaturesAPI"),
	Presence: require("./PresenceAPI"),
	Publish: require("./PublishAPI"),
	Thumbnails: require("./ThumbnailsAPI"),
	TranslationRoles: require("./TranslationRolesAPI"),
	Users: require("./UsersAPI"),
	Other: require("./OtherAPI")
};
/*
Module.exports.init = apis => {
	const keys = Object.keys(module.exports);
	let initiatedAPIs = {};
	keys.map(k => {
		initiatedAPIs[k] = new module.exports[k](apis);
	});
	return initiatedAPIs;
};
*/
