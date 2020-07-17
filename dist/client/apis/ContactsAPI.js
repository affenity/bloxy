"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseAPI_1 = tslib_1.__importDefault(require("./BaseAPI"));
class ContactsAPI extends BaseAPI_1.default {
    constructor(client) {
        super({
            client,
            baseUrl: "https://contacts.roblox.com/"
        });
    }
    getContactsMetaData() {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/contacts/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    matchContacts(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/contacts/match`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    updateContacts(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `1/contacts/update`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    getUsersTags(options) {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/user/get-tags`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    setPendingUserTag(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/set-pending-tag`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
    setUserTag(options) {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/tag`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.default = ContactsAPI;
