"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validStatusMessage = void 0;
const errors_1 = require("../../../../util/errors/errors");
function validStatusMessage(response) {
    var _a;
    const { request, responseData } = response;
    const responseOptions = request.requestOptions.responseOptions || {};
    let isValid = true;
    if (request.requestOptions.responseOptions &&
        ((_a = request.requestOptions.checks) === null || _a === void 0 ? void 0 : _a.statusMessage)) {
        const allowedStatusMessages = responseOptions.allowedStatusMessages || [];
        const disallowedStatusMessages = responseOptions.disallowedStatusMessages || [];
        const isAllowed = allowedStatusMessages.some((statusMessage) => responseData.statusMessage.toLowerCase().includes(statusMessage));
        const isDisallowed = disallowedStatusMessages.some((statusMessage) => responseData.statusMessage.toLowerCase().includes(statusMessage));
        if (allowedStatusMessages.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        }
        else if (allowedStatusMessages.length === 0 &&
            disallowedStatusMessages.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        }
        else if (allowedStatusMessages.length === 0 &&
            disallowedStatusMessages.length === 0) {
            // All status are allowed
        }
    }
    return isValid
        ? true
        : new errors_1.BloxyHttpError({
            statusCode: responseData.statusCode,
            statusMessage: responseData.statusMessage,
            message: `Invalid status message detected in response.`,
            name: "BloxyHttpInvalidStatusMessageError",
            possibleReasons: []
        });
}
exports.validStatusMessage = validStatusMessage;
