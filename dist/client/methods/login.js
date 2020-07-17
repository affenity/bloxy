"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function login(credentials) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!credentials.cookie && !credentials.username && !credentials.password) {
            throw new Error(`Must provide credentials to log in with!`);
        }
        // Perform the login
        if (credentials.cookie) {
            const createdCookie = this.rest.createCookie({
                key: ".ROBLOSECURITY",
                value: credentials.cookie,
                domain: "roblox.com",
                hostOnly: false,
                httpOnly: false
            });
            this.rest.addCookie(createdCookie, "https://roblox.com");
        }
        else {
            // Use credentials
            if (!credentials.username && !credentials.password) {
                throw new Error(`Must provide both username and password as credentials.`);
            }
            if ((!this.options.callbacks || !this.options.callbacks.getFunCaptchaToken) && !credentials.fcToken) {
                throw new Error(`Must provide a getFunCaptchaToken callback in order to log in with credentials.`);
            }
            if (!credentials.fcToken && this.options.callbacks && this.options.callbacks.getFunCaptchaToken) {
                credentials.fcToken = yield this.options.callbacks.getFunCaptchaToken("a", "b");
            }
            const requestBody = {
                cvalue: credentials.username,
                ctype: "Username",
                password: credentials.password,
                captchaToken: credentials.fcToken,
                captchaProvider: "PROVIDER_ARKOSE_LABS"
            };
            const loginResponse = yield this.rest.request({
                url: "https://auth.roblox.com/v2/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                json: requestBody
            })
                .then(response => {
                const body = response.body;
                if (response.statusCode !== 200 || body.errors) {
                    throw new Error(`An error occurred while logging in. Status code: ${response.statusCode}` +
                        `, status: ${response.status}. Body: ${body instanceof Object ? JSON.stringify(body) : body}`);
                }
                else {
                    return body;
                }
            })
                .catch(e => {
                throw e;
            });
            if (loginResponse.user) {
                if (loginResponse.twoStepVerificationData) {
                    throw new Error(`2SV is not suppported in bloxy yet!`);
                }
            }
            else {
                throw new Error(`Unexpected response when logging in!`);
            }
        }
        // Validate the login
        const authenticatedResponse = yield this.rest.request({
            url: "https://www.roblox.com/game/GetCurrentUser.ashx"
        });
        const authenticatedResponseBody = authenticatedResponse.body;
        if (!authenticatedResponse || !authenticatedResponseBody || authenticatedResponseBody.toLowerCase().includes("null")) {
            throw new Error(`Failed to validate login, response unsuccessful`);
        }
        this.user = new this.structures.ClientUser(this, {
            id: Number(authenticatedResponse.body)
        });
        this.emit("loggedIn");
        return this.user;
    });
}
exports.default = login;
