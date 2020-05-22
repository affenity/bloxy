import Client from "../Client";
import { RESTRequestOptions } from "../../interfaces/RESTInterfaces";
import lodash from "lodash";

export declare type BaseAPIOptions = {
    baseUrl: string;
    client: Client;
    disableAuth?: boolean;
    disableResponse?: boolean;
};

export declare interface BaseAPIRequestOptions extends RESTRequestOptions {
    // For adding the path onto the baseUrl
    path?: string;
    // For a "custom" url, ignoring the basePath
    url?: string;
}

export default class BaseAPI {
    public options: BaseAPIOptions;

    constructor (options: BaseAPIOptions) {
        this.options = this.getOptions(options);
    }

    request (options: RESTRequestOptions, overrideOptions?: BaseAPIOptions) {

    }

    getOptions (options: BaseAPIOptions) {
        return lodash.merge({
            disableAuth: false,
            disableResponse: false
        });
    }
}
