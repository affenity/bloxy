import { BaseAPIOptions } from "../../interfaces/APIInterfaces";
import { RESTRequestOptions, RESTResponseDataType } from "../../interfaces/RESTInterfaces";
import Client from "../Client";


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
    /**
     * If the response body is JSON
     */
    json?: boolean;
};

export default class BaseAPI {
    public client: Client;
    public options: BaseAPIOptions;

    constructor (options: BaseAPIOptions) {
        this.client = options.client;
        this.options = options;
    }

    request (options: BaseAPIRequestOptions): Promise<RESTResponseDataType> {
        if (options.requiresAuth) {
            if (!this.options.client.user) {
                throw new Error(`You must be authenticated in order to perform this request! API: ${(options.request.method || "GET").toUpperCase()} ${options.request.path ? this.options.baseUrl : ""}${options.request.path || options.request.url}`);
            }
        }
        if (!options.request.url && !options.request.path) {
            throw new Error(`Must provide a URL or path!`);
        } else if (options.request.path) {
            options.request.url = this.options.baseUrl + options.request.path;
            delete options.request.path;
        }

        return this.options.client.rest.request(options.request as RESTRequestOptions)
            .then(response => {
                if (options.json && !(response.body instanceof Object)) {
                    response.body = JSON.parse(response.body);
                }

                return response;
            });
    }
}
