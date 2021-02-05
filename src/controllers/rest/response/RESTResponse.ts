import RESTController from "../RESTController";
import RESTRequest from "../request";
import { BloxyHttpError } from "../../../util/errors/errors";
import { RESTResponseDataType } from "../../../interfaces/RESTInterfaces";


export default class RESTResponse {
    public controller: RESTController;
    public request: RESTRequest;
    public responseData: RESTResponseDataType;

    // Public options: RESTResponseOptions;

    constructor (controller: RESTController, request: RESTRequest, responseData: RESTResponseDataType) {
        this.controller = controller;
        this.request = request;
        this.responseData = responseData;
    }

    async process (): Promise<RESTResponseDataType> {
        const allProcessed = this.controller.responseHandlers.map(handler => handler(this));

        if (allProcessed.every(processed => processed === true)) {
            return this.responseData;
        } else {
            const error = allProcessed.find(processed => processed instanceof Error);

            if (error && error instanceof BloxyHttpError) {
                if (error.name === "BloxyHttpInvalidStatusCodeError" && error.statusCode === 403) {
                    // 1 attempt = 0 retries
                    if (this.request.attempts - 1 === this.controller.getXCSRFTokenRefreshMaxRetries()) {
                        throw error;
                    } else {
                        await this.controller.fetchXCSRFToken();
                        return this.request.send();
                    }
                }
            }

            throw error;
        }
    }
}
