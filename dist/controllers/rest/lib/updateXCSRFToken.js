"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function updateXCSRFToken(restController) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return restController.request({
            url: "https://auth.roblox.com/v2/login",
            method: "POST",
            xcsrf: false,
            checks: {
                xcsrf: false
            }
        }).then(response => {
            const foundXcsrfToken = response.headers["x-csrf-token"];
            if (!foundXcsrfToken) {
                throw new Error(`x-csrf-token was not returned by Roblox. Unable to fetch the token!`);
            }
            else {
                return foundXcsrfToken;
            }
        });
    });
}
exports.default = updateXCSRFToken;
