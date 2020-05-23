import { BaseAPIOptions } from "../../interfaces/APIInterfaces";
import { RESTRequestOptions, RESTResponseDataType } from "../../interfaces/RESTInterfaces";


export declare type BaseAPIRequestOptions = {
    /**
     * The request options
     */
    request: Omit<RESTRequestOptions, "url"> & {
        url?: string;
        path?: string;
    };
    /**
     * If the client must be authenticated in order to send the request
     */
    requiresAuth: boolean;
};

export default class BaseAPI {
    public options: BaseAPIOptions;

    constructor (options: BaseAPIOptions) {
        this.options = options;
    }

    request (options: BaseAPIRequestOptions): Promise<RESTResponseDataType> {
        if (options.requiresAuth) {
            if (!this.options.client.user) {
                throw new Error(`You must be authenticated in order to perform this request!`);
            }
        }

        if (!options.request.url && !options.request.path) {
            throw new Error(`Must provide a URL or path!`);
        } else if (options.request.path) {
            options.request.url = this.options.baseUrl + options.request.path;
        }

        return this.options.client.rest.request(options.request as RESTRequestOptions);
    }
}
