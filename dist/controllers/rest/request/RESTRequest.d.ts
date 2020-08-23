import { RESTRequestOptions, RESTResponseDataType } from "../../../interfaces/RESTInterfaces";
import RESTController from "../RESTController";
declare class RESTRequest {
    controller: RESTController;
    /**
     * The options that will be used for sending the request
     */
    requestOptions: RESTRequestOptions;
    constructor(controller: RESTController, options: RESTRequestOptions);
    setOptions(options: RESTRequestOptions): RESTRequestOptions;
    send(options?: RESTRequestOptions): Promise<RESTResponseDataType>;
}
export default RESTRequest;
