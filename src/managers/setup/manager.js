// Managers

const requestManager = require( "../request" );
const cacheManager   = require( "../cache"   );
const captchaManager = require( "../captcha" );
const xcsrfManager   = require( "../xcsrf"   );



class BloxySetup {

	constructor (identifier, client) {


		// - The jar for this setup
		this.request = new requestManager.RequestManager(this);

		// The xcsrf manager for this setup
		this.xcsrf = new xcsrfManager(this.request);

		this.request.setXcsrfManager(this.xcsrf);

		// This is the cache service
		this.cache   = cacheManager;
        
		// Captcha manager
		this.captchaManager = new captchaManager(this);

		// All the classes
		this.classes = require("../classes");

		// The identifier for this setup
		this._id     = identifier;

		// The client that this setup is connected to
		/**
         * @type {bloxyClient}
         */
		this._client = client;

		// If the user has signed in
		this.authorized = false;
        
		// --- Various variables stored inside here
         
		this.authTab = {

			// -- The value for either the username, phone number or email. (You can sign in with either)
			value      : null,

			// -- The password of the account
			password   : null,

			// --  What method to sign in with
			signinWith : null,

			// -- The API key for 2captcha.com
			captchaKey : null,


			// -- The setup for the 2FA system
			twostep       : {

				// - The current ticket
				ticket    : null,

				// - The user's username
				user      : null,

				// - The 2FA code
				code      : null,

				// - The login type (which is always login)
				actionType: "login",

				// - If 2FA is enabled after the user has signed in using username & password
				enabled   : false,

				// - What kind of service the 2FA code was sent with
				type      : null,

			}

		};

	}

}


// Exporting

module.exports = BloxySetup;