import { RESTController } from "../RESTController";
import { RESTRequest } from "../request";
import { RESTResponseDataType } from "../../../interfaces/RESTInterfaces";
export declare class RESTResponse {
    controller: RESTController;
    request: RESTRequest;
    responseData: RESTResponseDataType;
    constructor(controller: RESTController, request: RESTRequest, responseData: RESTResponseDataType);
    process(): Promise<RESTResponseDataType>;
}
