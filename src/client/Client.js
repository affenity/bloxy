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
			/**
			 * @type {ClientDevelopAPI}
			 */
			develop: new clientStructures.ClientDevelopAPI(this),
			/**
			 * @type {ClientGroupsAPI}
			 */
			groups: new clientStructures.GroupsAPI(this)
		};
	}
}

module.exports = Client;
