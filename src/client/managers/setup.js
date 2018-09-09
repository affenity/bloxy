// Setup manager, gets/updates/deletes setups

// Some variables here :D
const setups        = {};
const request       = require('request');
const BloxyClient   = require('../client.js');
const AccountManger = require('./account');


// Some functions

const getXcsrf     = require('../actions/getXcsrf');


class BloxySetup {

    /**
     * Creates a new setup
     * @param {Number} identifier
     * @param {BloxyClient} client 
     */
    constructor (identifier, client) {

        this.jar     = request.jar();
        this.xcsrf   = null;
        this.ready   = false;

        this.authTab = {
            value      : null,
            password   : null,
            signinWith : null,

            TwoStep       : {
                ticket    : null,
                user      : null,
                code      : null,
                actionType: 'login',
                enabled   : false,
                type      : null,

                verify    : async function (code) {
                    if (!this.ticket) throw new Error("No ticket found");
                    if (!code) throw new Error("No code was provided");
                    let { res, jar } = await client._request('https://auth.roblox.com/v2/twostepverification/verify', {
                        method: "POST",
                        json: {
                            username: this.user,
                            ticket: this.ticket,
                            code: code,
                            rememberDevice: true,
                            actionType: 'Login'
                        }
                    })

                    if (res.statusCode !== 200) throw new Error(`Failed to verify 2FA code, status code: ${res.statusCode}, message: ${res.statusMessage}`);
                    client._setup.jar = jar;
                    return true;
                }
            },

            CaptchaKey : null
        },

        this.cache = require('./cache');

        this._id     = identifier;
        this._client = client;

        let self     = this;

        this.xcsrfInterval = setInterval( async () => {
            
            if (self && setups[self._id]) {
                let newXcsrf = await self._getXcsrf().catch();
                if (newXcsrf) self.xcsrf = newXcsrf;
            } else {
                clearInterval(self.xcsrfInterval);
            }

        }, 1000 * 60 * 5)
    }


    async _getXcsrf (jar) {
        if (jar) this.jar = jar;
        this.xcsrf = await getXcsrf(this.jar);
        return this.xcsrf;
    }
    
    async getVerification (url) {
        return AccountManger.getVerification(url, this._client);
    }

}








/**
 * Gets the setups
 */

exports.getSetups = function () {
    return setups;
}

/**
 * Gets a setup by its identifier
 * @param {Number} identifier 
 * @returns {BloxySetup}
 */
exports.getSetup = function (identifier) {
    return setups[identifier];
}

/**
 * @returns {BloxySetup}
 */
exports.createSetup = function (client) {
    let setup         = new BloxySetup(exports.getSuitableId(), client);
    setups[setup._id] = setup;
    return setup;
}

exports.getSuitableId = function () {
    return (Object.keys(setups).length+1);
}

exports.BloxySetup = BloxySetup;