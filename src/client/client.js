const managers = require("../managers");
const ClientFunctions = require("./ClientFunctions");

class BloxyClient extends ClientFunctions {

	/**
     * @param {BloxyClientOptions} [options]
     */

	constructor (options = {}) {
		super();

		this._setup = managers.setup.createSetup(this);
		this.misc   = require("./lib/misc")(this);

		this.userId = null;

		updateOptions(this, options);

		this.commitDie = this.logout;
	}


	/**
     * 
     * @param {BloxyClientOptions} [options] 
     */

	async login (options = {}) {

		// -- Updates the options for the client (if any provided)
		updateOptions(this, options);


		let loginResponse = await require("./lib/login").bind(this)();
		this.userId = loginResponse.userId;

		if (loginResponse.twostep === true) {

			this._setup.authTab.twostep.ticket  = loginResponse.ticket;
			this._setup.authTab.twostep.type    = loginResponse.twostepType;
			this._setup.authTab.twostep.enabled = true;
			this._setup.authTab.twostep.user    = loginResponse.username;
			this.emit("2fa", this.misc.verifyCode.bind(this));

		} else {
			
			await this._setup.xcsrf.refresh();
			this._setup.xcsrf.startInterval();
			this._setup.authorized = true;
			this.emit("ready");

		}
	}


	async logout () {

		this._setup.authTab = {};
		this._setup.cache.deleteGroupCache();
		this._setup.cache.deleteUserCache();
		this._setup.request.setProxy(null);
		this._setup.request.setXcsrfManager(null);
		this._setup.request.jar = this._setup.request.module.jar();
		this._setup.xcsrf.stopInterval();
		this._setup.xcsrf.token = null;

	}
}


/**
 * 
 * @param {BloxyClient} self 
 * @param {Object} options 
 */
function updateOptions ( self, options ) {

	if (options.proxy) self._setup.request.proxy = options.proxy;
	if (options.captchaKey) self._setup.authTab.captchaKey = options.captchaKey;

	if (!options || (!options.cookie && !options.password)) return false;
	if ( (!options.cookie && ( !options.type || !options.value || !options.password ) && ( !options.username || !options.password)) !== false) {
		throw new Error("Please login with proper credentials. If you're unsure on how to supply them, check out the bloxy wiki.");
	}

	if (options.type) options.type = options.type.toLowerCase();


	if (options.cookie) {

		// -- Sets the authentication method to cookie and setting the cookie
		self._setup.authTab.signinWith = "cookie";
		self._setup.authTab.cookie = options.cookie;

	} else if (options.type && options.value && options.password) {
		self._setup.authTab.signinWith = ( options.type === "username" ? "username" : options.type === "phone" ? "phone" : options.type === "email" ? "email" : null);
	} else if (options.username && options.password) {
		self._setup.authTab.signinWith = "username";
	}

	if ( self._setup.authTab.signinWith !== "cookie" ) self._setup.authTab.password = options.password;
	if ( self._setup.authTab.signinWith !== "cookie" ) self._setup.authTab.value = options.username || options.value;

	return true;
}


module.exports = BloxyClient;