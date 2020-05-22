import RESTResponse from "../RESTResponse";


export default function validStatusCode (response: RESTResponse): boolean | Error {
    const { request, responseData } = response;
    const returnData: { error: Error | undefined } = {
        error: undefined
    };

    if (request.options.responseOptions && request.options.checks?.status) {
        const { allowedStatusCodes, disallowedStatusCodes } = request.options.responseOptions;

        const isAllowed = allowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);
        const isDisallowed = disallowedStatusCodes.some(statusCode => responseData.statusCode === statusCode);

        if (allowedStatusCodes.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                returnData.error = new Error(`Found invalid status in response.`);
            }
        } else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                returnData.error = new Error(`Got disallowed status in response`);
            }
        } else if (allowedStatusCodes.length === 0 && disallowedStatusCodes.length === 0) {
            // All status are allowed
        }
    }

    return !returnData.error ? true : returnData.error;
}
