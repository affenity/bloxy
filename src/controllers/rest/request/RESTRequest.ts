import lodash from "lodash";
import {
    DefaultRESTRequestOptions,
    RESTRequestOptions,
    RESTResponseDataType
} from "../../../interfaces/RESTInterfaces";
import RESTController from "../RESTController";
import prepare from "./prepare";
import RESTResponse from "../response";


class RESTRequest {
    public controller: RESTController;
    /**
     * The options that will be used for sending the request
     */
    public requestOptions: RESTRequestOptions;

    constructor (controller: RESTController, options: RESTRequestOptions) {
        this.controller = controller;
        this.requestOptions = options;
    }

    setOptions (options: RESTRequestOptions): RESTRequestOptions {
        // As lodash overwrites all entries that are provided with each other, it also mutates the default
        // This way, it creates a clone of the default each time, so there's "new" default data each time
        this.requestOptions = lodash.merge(JSON.parse(JSON.stringify(DefaultRESTRequestOptions)), options || {});
        return this.requestOptions;
    }

    async send (options?: RESTRequestOptions): Promise<RESTResponseDataType> {
        await prepare(this, options || this.requestOptions);
        await Promise.all(this.controller.requestHandlers.map(handler => handler(this)));

        // Console.log(this.requestOptions);
        const responseData = await this.controller.requester(this.requestOptions);
        const response = new RESTResponse(this.controller, this, responseData);
        const processedResponse = await response.process();

        return processedResponse;
    }
}


export default RESTRequest;
