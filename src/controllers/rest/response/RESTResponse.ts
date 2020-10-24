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
        this.responseData.status = responseData.statusMessage;
    }

    async process (): Promise<RESTResponseDataType> {
        const allProcessed = this.controller.responseHandlers.map(handler => handler(this));
        const xcrfCheck = await allProcessed[0];

        if (xcrfCheck && xcrfCheck !== true && !(xcrfCheck instanceof Error)) {
            return xcrfCheck;
        } else {
            allProcessed.splice(0, 1);
        }

        if (allProcessed.every(processed => processed === true)) {
            return this.responseData;
        } else {
            throw allProcessed.find(processed => processed instanceof Error);
        }
    }
}
