import RESTResponse from "../RESTResponse";
import { BloxyHttpError } from "../../../../util/errors/errors";


export default function validStatus (response: RESTResponse): boolean | Error {
    const { request, responseData } = response;
    const responseOptions = request.requestOptions.responseOptions || {};
    let isValid = true;

    if (request.requestOptions.responseOptions && request.requestOptions.checks?.status) {
        const allowedStatuses = responseOptions.allowedStatuses || [];
        const disallowedStatuses = responseOptions.disallowedStatuses || [];

        const isAllowed = allowedStatuses.some(status => responseData.status.toLowerCase()
            .includes(status));
        const isDisallowed = disallowedStatuses.some(status => responseData.status.toLowerCase()
            .includes(status));

        if (allowedStatuses.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                isValid = false;
            }
        } else if (allowedStatuses.length === 0 && disallowedStatuses.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                isValid = false;
            }
        } else if (allowedStatuses.length === 0 && disallowedStatuses.length === 0) {
            // All status are allowed
        }
    }

    return isValid ? true : new BloxyHttpError({
        statusCode: responseData.statusCode,
        status: responseData.status,
        message: `Invalid status detected in response.`,
        name: "BloxyHttpInvalidStatusError",
        possibleReasons: []
    });
}

