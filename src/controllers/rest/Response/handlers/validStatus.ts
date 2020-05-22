import RESTResponse from "../RESTResponse";


export default function validStatus (response: RESTResponse): boolean | Error {
    const { request, responseData } = response;
    const returnData: { error: Error | undefined } = {
        error: undefined
    };

    if (request.options.responseOptions && request.options.checks?.status) {
        const { allowedStatuses, disallowedStatuses } = request.options.responseOptions;

        const isAllowed = allowedStatuses.some(status => responseData.status.toLowerCase().includes(status));
        const isDisallowed = disallowedStatuses.some(status => responseData.status.toLowerCase().includes(status));

        if (allowedStatuses.length > 0) {
            // Only these are allowed
            if (!isAllowed) {
                returnData.error = new Error(`Found invalid status in response.`);
            }
        } else if (allowedStatuses.length === 0 && disallowedStatuses.length > 0) {
            // Only these are disallowed
            if (isDisallowed) {
                returnData.error = new Error(`Got disallowed status in response`);
            }
        } else if (allowedStatuses.length === 0 && disallowedStatuses.length === 0) {
            // All status are allowed
        }
    }

    return !returnData.error ? true : returnData.error;
}
