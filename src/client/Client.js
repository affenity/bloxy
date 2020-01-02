const ClientBase = require("./ClientBase");


/**
 * @type {Client}
 * @extends {ClientBase}
 */
class Client extends ClientBase {
	/**
	 * Creates a new bloxy apis
	 * @param {ClientConstructorOptions} options The options used to initiate a apis with
	 */
	constructor (options) {
		super(options);

		this.loggedIn = false;
		/**
		 * The user that is authenticated (only existent when authenticated)
		 * @type {UserPartial}
		 */
		this.user = null;
		this.login = require("./src/login").bind(this, this);
		this.connect = require("./src/websocket").bind(this, this);
	}
}

module.exports = Client;
