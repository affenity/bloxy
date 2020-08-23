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
    client: Client;
    options: BaseAPIOptions;
    constructor(options: BaseAPIOptions);
    request(options: BaseAPIRequestOptions): Promise<RESTResponseDataType>;
}
