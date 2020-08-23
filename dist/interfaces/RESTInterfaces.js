"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultRESTControllerOptions = exports.DefaultCreateCookieOptions = exports.DefaultRESTRequestOptions = void 0;
const tslib_1 = require("tslib");
const got_1 = tslib_1.__importDefault(require("got"));
exports.DefaultRESTRequestOptions = {
    checks: {
        xcsrf: true,
        status: true,
        statusCode: true,
        body: true,
        captcha: true
    },
    headers: {},
    method: "GET"
};
exports.DefaultCreateCookieOptions = {
    domain: ".roblox.com",
    hostOnly: false,
    httpOnly: false
};
exports.DefaultRESTControllerOptions = {
    requester: got_1.default,
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    proxy: undefined,
    xcsrf: undefined,
    xcsrfSet: undefined
};
