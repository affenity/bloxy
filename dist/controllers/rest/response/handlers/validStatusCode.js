"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../../../util/errors/errors");
function validStatusCode(response) {
    var _a;
    const { request, responseData } = response;
    let isValid = true;
    const responseOptions = request.requestOptions.responseOptions || {};
    if (request.requestOptions.responseOptions && ((_a = request.requestOptions.checks) === null || _a === void 0 ? void 0 : _a.status)) {
        const allowedStatusCodes = responseOptions.allowedStatusCodes || [];
        const disallowedStatusCodes = responseOptions.disallowedStatusCodes || [];
        const isAllowed = allowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);
        const isDisallowed = disallowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);
        if (allowedStatusCodes.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        }
        else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        }
        else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length === 0) {
            // All status are allowed
        }
    }
    return isValid ? true : new errors_1.BloxyHttpError({
        status: responseData.status,
        statusCode: responseData.statusCode,
        message: `Invalid status code in response. Body: ${responseData.body instanceof Object ? JSON.stringify(responseData.body) : responseData.body}`,
        name: "BloxyHttpInvalidStatusCodeError",
        possibleReasons: []
    });
}
exports.default = validStatusCode;
