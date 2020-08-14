import RESTResponse from "../RESTResponse";
import { BloxyHttpError } from "../../../../util/errors/errors";


export default function validStatusCode (response: RESTResponse): boolean | Error {
    const { request, responseData } = response;
    let isValid = true;
    const responseOptions = request.requestOptions.responseOptions || {};

    if (request.requestOptions.responseOptions && request.requestOptions.checks?.status) {
        const allowedStatusCodes = responseOptions.allowedStatusCodes || [];
        const disallowedStatusCodes = responseOptions.disallowedStatusCodes || [];

        const isAllowed = allowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);
        const isDisallowed = disallowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);

        if (allowedStatusCodes.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        } else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        } else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length === 0) {
            // All status are allowed
        }
    }

    return isValid ? true : new BloxyHttpError({
        status: responseData.status,
        statusCode: responseData.statusCode,
        message: `Invalid status code in response. Body: ${responseData.body instanceof Object ? JSON.stringify(responseData.body) : responseData.body}`,
        name: "BloxyHttpInvalidStatusCodeError",
        possibleReasons: []
    });
}
