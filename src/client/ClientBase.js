const EventEmitter = require("events");
const Controllers = require("../structures").controllers;

/**
 * @type {ClientBase}
 */
class ClientBase extends EventEmitter {
	/**
	 *
	 * @param {ClientConstructorOptions} options
	 */
	constructor (options) {
		super();

		/**
		 * The options the client was initiated with
		 * @type {ClientConstructorOptions}
		 */
		this.options = options;
		/**
		 * The rest controller for dealing with the (http) requests
		 * @type {RestController}
		 */
		this.rest = new Controllers.rest(this);
		/**
		 * The util controller for dealing with misc. stuff
		 * @type {UtilController}
		 */
		this.util = new Controllers.util(this);
		/**
		 * The debug controller to make it easier to handle logs
		 * @type {DebugController}
		 */
		this.debug = new Controllers.Debug(this);
	}
}

module.exports = ClientBase;
