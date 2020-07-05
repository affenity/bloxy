import RESTController from "../RESTController";
import RESTRequest from "../request";
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.responseData.status = responseData.statusMessage;
    }

    process (): RESTResponseDataType {
        const allProcessed = this.controller.responseHandlers.map(handler => handler(this));

        if (allProcessed.every(processed => processed === true)) {
            return this.responseData;
        } else {
            throw allProcessed.find(processed => processed instanceof Error);
        }
    }
}
