"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreHttpRequest = void 0;
class DataStoreHttpRequest {
    constructor(manager, options) {
        this.initiator = manager;
        this.options = options;
        // Adjusting the body
        this.options.body =
            this.options.data.length === 0 ? " " : this.options.data;
        // Always POST
        this.options.method = this.options.method || "POST";
        this.options.headers = this.options.headers || {};
        this.options.headers = Object.assign(Object.assign({}, this.options.headers), { "Cache-Control": "no-cache", "Content-Type": "application/x-www-form-urlencoded", "Roblox-Place-Id": this.options.placeId, Cookie: this.initiator.client.rest.getCookies("https://www.roblox.com/") });
    }
    send() {
        return this.initiator.client.rest.request(this.options);
    }
}
exports.DataStoreHttpRequest = DataStoreHttpRequest;
