const EventEmitter = require("events");
const Controllers = require("../structures").controllers;
const lodash = require("lodash");

/**
 * @type {ClientBase}
 */
class ClientBase extends EventEmitter {
	/**
	 * The ClientBase provides the client instance with methods under the hood
	 * @param {ClientConstructorOptions} options The options used to initiate the client with
	 */
	constructor (options) {
		super();

		/**
		 * The options the client was initiated with
		 * @type {ClientConstructorOptions}
		 */
		this.options = options;
		this.updateOptions(options);

		/**
		 * The rest controller for dealing with the (http) requests
		 * @type {RestController}
		 */
		this.rest = new Controllers.Rest(this);
		/**
		 * The util controller for dealing with misc. stuff
		 * @type {UtilController}
		 */
		this.util = new Controllers.Util(this);
		/**
		 * The debug controller to make it easier to handle logs
		 * @type {DebugController}
		 */
		this.debug = new Controllers.Debug(this);
	}

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
