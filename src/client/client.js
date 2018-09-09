// Client class

const EventEmitter    = require('events');
const SetupManager    = require('./managers/setup');
const AccountManager  = require('./managers/account');
const Fetch           = require('./managers/fetch');
const Methods         = require('./methods');
const Connect         = require('./actions/connect');
const ClientFunctions = require('./ClientFunctions');


class BloxyClient extends ClientFunctions {

    /**
     * 
     * @param {BloxyClientOptions} [options] Credentials to sign in with 
     */
    constructor(options = {}) {
        super();
        

        this._setup = SetupManager.createSetup(this);

        this.account;
        updateOptions(this, options);

        super._client = this;
    }


    /**
     * 
     * @param {BloxyClientOptions} [options] 
     */
    async login ( options ) {
        updateOptions(this, options);
        let getOptions = this._setup;
        let attemptLogin = await AccountManager.login(getOptions).catch();
        if (!attemptLogin) throw new Error("Failed to login");
        // Make the login function handle twostep class etc.
        await this._setup._getXcsrf();
        let userId = attemptLogin.userId || attemptLogin.accountId;
        
        if (!userId) throw new Error("Failed to get user id after login");
        
        if (attemptLogin.twostepEnabled) {
            let twostep     = this._setup.authTab.TwoStep
            twostep.enabled = true;
            twostep.ticket  = attemptLogin.ticket;
            twostep.user    = attemptLogin.user;
        }
        new Connect(this);
        this.account        = await this._client.getUser(userId, 'userid');
        
        this.emit('ready');
    }


    

    // Private functions

    /**
 * Fetch function 
 * @param {String} url 
 * @param {Object} opts 
 * @param {String} opts.method 
 * @param {String} opts.form 
 * @param {Object} opts.body
 * @param {Object} opts.formData
 * @param {String} opts.verification
 * @param {String} opts.captchaUrl
 * @param {Boolean || Object} opts.json 

 */

    async _request (url, opts = {}) {
        return Fetch(url, Object.assign(opts, {_id: this._setup._id}))
    }

}


module.exports = BloxyClient;


function updateOptions ( self, options ) {
    options = options || {};
    if (!options || (!options.cookie && !options.password)) return false;
    if ( (!options.cookie && ( !options.type || !options.value || !options.password ) && ( !options.username || !options.password)) !== false) throw new Error(errorMessages.args);
    
    if ( options.CaptchaKey ) self._setup.authTab.CaptchaKey = options.CaptchaKey;

    if ( options.type ) options.type = options.type.toLowerCase();

    

    if ( options.cookie ) {
        self._setup.authTab.signinWith = 'cookie';
        // Sets the cookie 
        self._setup.authTab.cookie = options.cookie;
    } else if ( options.type && options.value && options.password ) {
        // Sets the way of signing in
        self._setup.authTab.signinWith = ( options.type === 'username' ? 'username' : options.type === 'phone' ? 'phone' : options.type === 'email' ? 'email' : null);
    } else if ( options.username && options.password ) {
        // Sets the way of signing in
        self._setup.authTab.signinWith = 'username'
    }

    if ( self._setup.authTab.signinWith !== 'cookie' ) self._setup.authTab.password = options.password;
    if ( self._setup.authTab.signinWith !== 'cookie' ) self._setup.authTab.value = options.username || options.value;

    return true;
}

const errorMessages = {
    args: `You need to provide 1) The type to sign in with (email, username, phone) 2) The value of the email/username/phone 3) The password of your account. OR you can log in with cookie`,
}

