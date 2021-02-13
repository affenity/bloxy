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
            const error = allProcessed.find(error => error instanceof BloxyHttpError && error.name ===
                "BloxyInvalidStatusMessageError" && error.statusMessage.includes("Token Validation Failed"));

            if (error) {
                // 1 attempt = 0 retries
                if (this.request.attempts - 1 === this.controller.getXCSRFTokenRefreshMaxRetries()) {
                    throw error;
                } else {
                    this.controller.options.xcsrf = undefined;
                    return this.request.send();
                }
            }

            throw allProcessed.find(error => error instanceof Error);
        }
    }
}
