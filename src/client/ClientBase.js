const EventEmitter = require("events");
const structures = require("../structures");
const clientAPIs = require("./src/apis");
const lodash = require("lodash");
const controllers = require("../controllers");

/**
 * @type {ClientBase}
 */
class ClientBase extends EventEmitter {
	/**
	 * The ClientBase provides the apis instance with methods under the hood
	 * @param {ClientConstructorOptions} options The options used to initiate the apis with
	 */
	constructor (options) {
		super();

		/**
		 * The options the apis was initiated with
		 * @type {ClientConstructorOptions}
		 */
		this.options = options;
		this.updateOptions(options);

		/**
		 * The rest controller for dealing with the (http) requests
		 * @type {RestController}
		 */
		this.rest = new controllers.Rest(this);

		/**
		 * The util controller for dealing with misc. stuff
		 * @type {UtilController}
		 */
		this.util = new controllers.Util(this);

		/**
		 * The debug controller to make it easier to handle logs
		 * @type {DebugController}
		 */
		this.debug = new controllers.Debug(this);

		/**
		 * The structures for the module
		 * @type {Structures}
		 */
		this.structures = structures;

		/**
		 * All the APIs for the module
		 * @type {{auth: AuthAPI, catalog: CatalogAPI, inventory: InventoryAPI, locale: LocaleAPI, billing: BillingAPI, translationRoles: TranslationRolesAPI, accountInformation: AccountInformationAPI, captcha: CaptchaAPI, games: GamesAPI, api: API, presence: PresenceAPI, gameInternationalization: GameInternationalizationAPI, groups: ClientGroupsAPI, avatar: AvatarAPI, develop: ClientDevelopAPI, economy: EconomyAPI, premiumFeatures: PremiumFeaturesAPI, friends: FriendsAPI, users: UsersAPI, badges: BadgesAPI, itemConfiguration: ItemConfigurationAPI, followings: FollowingsAPI, chat: ChatAPI, publish: PublishAPI, metrics: MetricsAPI, thumbnails: ThumbnailsAPI, accountSettings: AccountSettingsAPI, contacts: ContactsAPI, notifications: NotificationsAPI}}
		 */
		this.apis = {
			accountInformation: new clientAPIs.AccountInformation(this),
			accountSettings: new clientAPIs.AccountSettings(this),
			api: new clientAPIs.API(this),
			auth: new clientAPIs.Auth(this),
			avatar: new clientAPIs.Avatar(this),
			badges: new clientAPIs.Badges(this),
			billing: new clientAPIs.Billing(this),
			captcha: new clientAPIs.Captcha(this),
			catalog: new clientAPIs.Catalog(this),
			chat: new clientAPIs.Chat(this),
			contacts: new clientAPIs.Contacts(this),
			develop: new clientAPIs.Develop(this),
			economy: new clientAPIs.Economy(this),
			followings: new clientAPIs.Followings(this),
			friends: new clientAPIs.Friends(this),
			gameInternationalization: new clientAPIs.GameInternationalization(this),
			games: new clientAPIs.Games(this),
			groups: new clientAPIs.Groups(this),
			inventory: new clientAPIs.Inventory(this),
			itemConfiguration: new clientAPIs.ItemConfiguration(this),
			locale: new clientAPIs.Locale(this),
			metrics: new clientAPIs.Metrics(this),
			notifications: new clientAPIs.Notifications(this),
			premiumFeatures: new clientAPIs.PremiumFeatures(this),
			presence: new clientAPIs.Presence(this),
			publish: new clientAPIs.Publish(this),
			thumbnails: new clientAPIs.Thumbnails(this),
			translationRoles: new clientAPIs.TranslationRoles(this),
			users: new clientAPIs.Users(this),
			other: new clientAPIs.Other(this)
		};

		this._validate = controllers.validator;
	}

	/**
	 * Updates this client's options
	 * @param {ClientConstructorOptions} options The options to update
	 */
	updateOptions (options) {
		this.options = lodash.merge({
			credentials: {},
			callbacks: {},
			setup: {
				proxy: null,
				userAgent: null,
				cache: {
					users: 1000,
					groups: 1000
				},
				requester: null,
				debugging: false
			}
		}, options);

		if (!this.options.setup.requester) {
			this.options.setup.requester = require("got");
		}
	}
}

module.exports = ClientBase;
