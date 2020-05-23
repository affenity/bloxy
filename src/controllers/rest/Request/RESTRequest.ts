import lodash from "lodash";
import {
    DefaultRESTRequestOptions,
    RESTRequestOptions,
    RESTResponseDataType
} from "../../../interfaces/RESTInterfaces";
import RESTController from "../RESTController";
import prepare from "./prepare";
import send from "./send";


class RESTRequest {
    public controller: RESTController;
    /**
     * Options for the request instance
     */
    public options: RESTRequestOptions;
    /**
     * The options that will be used for sending the request
     */
    public requestOptions?: RESTRequestOptions;

    constructor (controller: RESTController, options: RESTRequestOptions) {
        this.controller = controller;
        this.options = options;
    }

    setOptions (options: RESTRequestOptions): RESTRequestOptions {
        this.options = lodash.merge(
            DefaultRESTRequestOptions,
            options,
            {
                jar: this.controller.jar,
                cookieJar: this.controller.jar
            }
        );

        return this.options;
    }

    async prepare (options: RESTRequestOptions): Promise<void> {
        await prepare.bind(this)(options);
        await Promise.all(this.controller.requestHandlers.map(handler => handler(this)));
    }

    async send (options?: RESTRequestOptions): Promise<RESTResponseDataType> {
        await this.prepare(options || this.options);

        return send.bind(this)();
    }
}


export default RESTRequest;
