"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../../../util/errors/errors");
function validStatus(response) {
    var _a;
    const { request, responseData } = response;
    const responseOptions = request.requestOptions.responseOptions || {};
    let isValid = true;
    if (request.requestOptions.responseOptions && ((_a = request.requestOptions.checks) === null || _a === void 0 ? void 0 : _a.status)) {
        const allowedStatuses = responseOptions.allowedStatuses || [];
        const disallowedStatuses = responseOptions.disallowedStatuses || [];
        const isAllowed = allowedStatuses.some(status => responseData.status.toLowerCase().includes(status));
        const isDisallowed = disallowedStatuses.some(status => responseData.status.toLowerCase().includes(status));
        if (allowedStatuses.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        }
        else if (allowedStatuses.length === 0 && disallowedStatuses.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        }
        else if (allowedStatuses.length === 0 && disallowedStatuses.length === 0) {
            // All status are allowed
        }
    }
    return isValid ? true : new errors_1.BloxyHttpError({
        statusCode: responseData.statusCode,
        status: responseData.status,
        message: `Invalid status detected in response.`,
        name: "BloxyHttpInvalidStatusError",
        possibleReasons: []
    });
}
exports.default = validStatus;
