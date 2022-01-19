"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsAPI = void 0;
const BaseAPI_1 = require("./BaseAPI");
class ContactsAPI extends BaseAPI_1.BaseAPI {
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
                path: `v1/contacts/metadata`
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
                json: options
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
                json: options
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
                json: options
            },
            json: true
        }).then((response) => response.body);
    }
}
exports.ContactsAPI = ContactsAPI;
