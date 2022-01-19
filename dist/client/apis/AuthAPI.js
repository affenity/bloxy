"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class AuthAPI extends BaseAPI_1.BaseAPI {
    constructor(client) {
        super({
            client,
            baseUrl: "https://auth.roblox.com/"
        });
    }
    unlockPin(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/account/pin/unlock",
                method: "POST",
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
    lockPin() {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/account/pin/lock",
                method: "POST"
            },
            json: true
        }).then((response) => response.body);
    }
    getAuthTicket() {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v1/authentication-ticket",
                method: "POST",
                headers: {
                    referer: "https://www.roblox.com/",
                    origin: "roblox.com"
                }
            }
        }).then((response) => ({
            authTicket: response.headers["rbx-authentication-ticket"]
        }));
    }
    getMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/metadata"
            }
        }).then((response) => ({
            isUpdateUsernameEnabled: response.body.isUpdateUsernameEnabled,
            ftuxAvatarAssetMap: response.body.ftuxAvatarAssetMap,
            isEmailUpsellAtLogoutEnabled: response.body.IsEmailUpsellAtLogoutEnabled,
            shouldFetchEmailUpsellIXPValuesAtLogout: response.body.ShouldFetchEmailUpsellIXPValuesAtLogout,
            isAccountRecoveryPromptEnabled: response.body.IsAccountRecoveryPromptEnabled,
            isContactMethodRequiredAtSignup: response.body.IsContactMethodRequiredAtSignup,
            isUserAgreementsSignupIntegrationEnabled: response.body.IsUserAgreementsSignupIntegrationEnabled,
            isRetypePasswordRequired: response.body.IsRetypePasswordRequired,
            arePasswordFieldsPlaintext: response.body.ArePasswordFieldsPlaintext,
            isKoreaIdVerificationEnabled: response.body.IsKoreaIdVerificationEnabled,
            isSignupButtonGreenColorEnabled: response.body.IsSignupButtonGreenColorEnabled
        }));
    }
    getCurrentUserPasswordStatus() {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/passwords/current-status"
            }
        }).then((response) => response.body);
    }
    getPasswordResetMetaData(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset",
                qs: {
                    "request.targetType": options.targetType,
                    "request.ticket": options.ticket
                }
            }
        }).then((response) => response.body);
    }
    resetPassword(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    validatePassword(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/validate",
                qs: {
                    "request.username": options.username,
                    "request.password": options.password
                }
            }
        }).then((response) => response.body);
    }
    sendPasswordReset(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset/send",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    verifyPasswordReset(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset/verify",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    changeUserPassword(options) {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/user/passwords/change",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    getRecoveryMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/recovery/metadata"
            }
        }).then((response) => response.body);
    }
    getRevertAccountInfo(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/revert/account",
                qs: {
                    ticket: options.ticket
                }
            }
        }).then((response) => response.body);
    }
    revertAccount(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/revert/account",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    getSAMLMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/saml/metadata"
            }
        }).then((response) => response.body);
    }
    samlAuthenticate() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/saml/login",
                method: "POST"
            }
        }).then((response) => response.body);
    }
    getTwoStepVerificationMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata"
            }
        }).then((response) => response.body);
    }
    resendTwoStepVerificationCode(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/resend",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    verifyTwoStepVerificationCode(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/verify",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    getExistingUsernames(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/usernames",
                qs: {
                    username: options.username
                }
            }
        }).then((response) => response.body);
    }
    validateUsername(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/usernames/validate",
                qs: {
                    "request.username": options.username,
                    "request.birthday": options.birthday,
                    "request.context": options.context
                }
            }
        }).then((response) => response.body);
    }
    recoverUsernames(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata",
                json: options
            }
        }).then((response) => response.body);
    }
    signUp(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
    changeUserUsername(options) {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/username",
                method: "POST",
                json: options
            }
        }).then((response) => response.body);
    }
}
exports.AuthAPI = AuthAPI;
