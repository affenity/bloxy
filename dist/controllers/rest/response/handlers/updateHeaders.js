"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHeaders = void 0;
const tough_cookie_1 = require("tough-cookie");
function updateHeaders(response) {
    if (response.responseData.headers["set-cookie"]) {
        const setCookieHeader = response.responseData.headers["set-cookie"];
        if (Array.isArray(setCookieHeader)) {
            setCookieHeader.forEach((toSetCookie) => {
                const parsedCookie = tough_cookie_1.Cookie.parse(toSetCookie);
                if (parsedCookie) {
                    response.controller.addCookie(parsedCookie);
                }
            });
        }
        else {
            const parsedCookie = tough_cookie_1.Cookie.parse(setCookieHeader);
            if (parsedCookie) {
                response.controller.addCookie(parsedCookie);
            }
        }
    }
    return true;
}
exports.updateHeaders = updateHeaders;
