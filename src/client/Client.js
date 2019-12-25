const ClientBase = require("./ClientBase");
const clientStructures = require("../structures").client;

/**
 * @type {Client}
 * @extends {ClientBase}
 */
class Client extends ClientBase {
	/**
	 * Creates a new bloxy client
	 * @param {ClientConstructorOptions} options
	 */
	constructor (options) {
		super(options);

		this.loggedIn = false;
		/**
		 * The user that is authenticated (only existent when authenticated)
		 * @type {UserPartial}
		 */
		this.user = null;
		this.debugEnabled = false;
		this.apis = {
			accountInformation: new clientStructures.AccountInformation(this),
			accountSettings: new clientStructures.AccountSettings(this),
			api: new clientStructures.API(this),
			auth: new clientStructures.Auth(this),
			avatar: new clientStructures.Avatar(this),
			badge: new clientStructures.Badge(this),
			billing: new clientStructures.Billing(this),
			captcha: new clientStructures.Captcha(this),
			catalog: new clientStructures.Catalog(this),
			chat: new clientStructures.Chat(this),
			contacts: new clientStructures.Contacts(this),
			develop: new clientStructures.Develop(this),
			economy: new clientStructures.Economy(this),
			followings: new clientStructures.Followings(this),
			friends: new clientStructures.Friends(this),
			gameInternationalization: new clientStructures.GameInternationalization(this),
			games: new clientStructures.Games(this),
			groups: new clientStructures.Groups(this),
			inventory: new clientStructures.Inventory(this),
			itemConfiguration: new clientStructures.ItemConfiguration(this),
			locale: new clientStructures.Locale(this),
			metrics: new clientStructures.Metrics(this),
			notifications: new clientStructures.Notifications(this),
			premiumFeatures: new clientStructures.PremiumFeatures(this),
			presence: new clientStructures.Presence(this),
			publish: new clientStructures.Publish(this),
			thumbnails: new clientStructures.Thumbnails(this),
			translationRoles: new clientStructures.TranslationRoles(this),
			users: new clientStructures.Users(this)
		};
	}
}

module.exports = Client;
