import RESTResponse from "../RESTResponse";
import { BloxyHttpError } from "../../../../util/errors/errors";


export default function validStatusMessage (response: RESTResponse): boolean | Error {
    const { request, responseData } = response;
    const responseOptions = request.requestOptions.responseOptions || {};
    let isValid = true;

    if (request.requestOptions.responseOptions && request.requestOptions.checks?.statusMessage) {
        const allowedStatusMessages = responseOptions.allowedStatusMessages || [];
        const disallowedStatusMessages = responseOptions.disallowedStatusMessages || [];

        const isAllowed = allowedStatusMessages.some(statusMessage => responseData.statusMessage.toLowerCase()
            .includes(statusMessage));
        const isDisallowed = disallowedStatusMessages.some(statusMessage => responseData.statusMessage
            .toLowerCase().includes(statusMessage));

        if (allowedStatusMessages.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        } else if (allowedStatusMessages.length === 0 && disallowedStatusMessages.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        } else if (allowedStatusMessages.length === 0 && disallowedStatusMessages.length === 0) {
            // All status are allowed
        }
    }

    return isValid ? true : new BloxyHttpError({
        statusCode: responseData.statusCode,
        statusMessage: responseData.statusMessage,
        message: `Invalid status message detected in response.`,
        name: "BloxyHttpInvalidStatusMessageError",
        possibleReasons: []
    });
}

