import { RESTRequestOptions } from "../../../interfaces/RESTInterfaces";
import lodash from "lodash";
import RESTRequest from "../Request";


export default async function prepare (this: RESTRequest, options: RESTRequestOptions): Promise<void> {
    this.setOptions(options);
    this.requestOptions = lodash.merge(this.options || {}, this.requestOptions || {}) as RESTRequestOptions;

    if (!this.options.url) {
        throw new Error("No url was provided when executing rest.request.prepare");
    } else {
        this.requestOptions.url = this.options.url;
    }

    if (this.options.headers) {
        this.requestOptions.headers = lodash.merge(this.requestOptions.headers, this.options.headers);
    }

    if (this.options.xcsrf) {
        this.requestOptions.headers = {
            ...this.options.headers,
            "X-CSRF-TOKEN": await this.controller.getXCSRFToken()
        };
    }

    if (this.options.followAllRedirects) {
        this.requestOptions.followAllRedirects = true;
    }

    if (!this.options.method) {
        this.requestOptions.method = "GET";
    }
}
