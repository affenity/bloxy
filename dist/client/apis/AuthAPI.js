"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class AuthAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://auth.roblox.com/"
        });
    }
    getAuthMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/auth/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then((response) => response.body);
    }
    login(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/login",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
    logout() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/logout",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then((response) => response.body);
    }
    getCredentialsVerificationStatus(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/credentials/verification",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    "request.credentialType": options.credentialType,
                    "request.credentialValue": options.credentialValue,
                    "request.password": options.password
                }
            }
        }).then((response) => response.body);
    }
    sendCredentialsVerificationMessage(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/credentials/verification/send",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
    getMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then((response) => response.body);
    }
    getCurrentUserPasswordStatus() {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/passwords/current-status",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then((response) => response.body);
    }
    getPasswordResetMetaData(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                path: "v2/auth/metadata",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
    getRecoveryMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/recovery/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        }).then((response) => response.body);
    }
    getRevertAccountInfo(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/revert/account",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
    getSAMLMetaData() {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/saml/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                path: "v2/twostepverification/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
    verifyTwoStepCode(options) {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/verify",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
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
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        }).then((response) => response.body);
    }
}
exports.default = AuthAPI;
