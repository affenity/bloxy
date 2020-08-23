"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const querystring_1 = tslib_1.__importDefault(require("querystring"));
function prepare(request, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        request.setOptions(options);
        if (!request.requestOptions.url) {
            throw new Error("No url was provided when executing rest.request.prepare");
        }
        if (!request.requestOptions.headers) {
            request.requestOptions.headers = {};
        }
        if (request.requestOptions.followAllRedirects !== false) {
            request.requestOptions.followAllRedirects = true;
        }
        if (!request.requestOptions.method) {
            request.requestOptions.method = "GET";
        }
        if (request.requestOptions.qs) {
            if (!request.requestOptions.url.includes("?")) {
                request.requestOptions.url += `?${querystring_1.default.stringify(request.requestOptions.qs)}`;
            }
        }
        if ((request.requestOptions.xcsrf !== false && request.requestOptions.method.toLowerCase() !== "get") || request.requestOptions.xcsrf === true) {
            request.requestOptions.headers = Object.assign(Object.assign({}, request.requestOptions.headers), { "X-CSRF-TOKEN": yield request.controller.getXCSRFToken() });
        }
        if (request.requestOptions.json) {
            request.requestOptions.body = typeof request.requestOptions.json === "string" ? request.requestOptions.json : JSON.stringify(request.requestOptions.json);
            request.requestOptions.headers["content-type"] = "application/json";
            delete request.requestOptions.json;
        }
        request.requestOptions.headers.Cookie = request.controller.cookieJar.getCookieStringSync(request.requestOptions.url);
        // Utilities
        request.requestOptions.throwHttpErrors = false;
    });
}
exports.default = prepare;
