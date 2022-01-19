"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateXCSRFToken = void 0;
function updateXCSRFToken(restController) {
    return restController
        .request({
        url: "https://auth.roblox.com/v2/login",
        method: "POST",
        xcsrf: false,
        checks: {
            xcsrf: false
        },
        responseOptions: {
            allowedStatusCodes: [403]
        }
    })
        .then((response) => {
        const foundXcsrfToken = response.headers["x-csrf-token"];
        if (!foundXcsrfToken) {
            throw new Error(`x-csrf-token was not returned by Roblox. Unable to fetch the token!`);
        }
        else {
            return foundXcsrfToken;
        }
    });
}
exports.updateXCSRFToken = updateXCSRFToken;
