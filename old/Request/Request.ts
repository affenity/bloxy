import RESTController from "../../oldSrc/controllers/rest/RESTController";
import { baseRequestOptions, RequestConstructor } from "../../oldSrc/controllers/rest/RESTInterfaces";
import Client from "../../oldSrc/client";


export default class Request {
    public controller: RESTController;
    public client: Client;
    public options: RequestConstructor | undefined;

    constructor (restController: RESTController) {
        this.controller = restController;
        this.client = this.controller.client;
        this.options = undefined;
    }

    setOptions (options: RequestConstructor): void {
        this.options = {
            ...baseRequestOptions,
            ...options
        };
    }

    async send (): Promise<{ [key: string]: unknown }> {
        if (!this.options) {
            throw new Error("Options must be provided when sending a request");
        }

        this.options.xcsrf = this.options.checks.xcsrf ? await this.controller.getXCSRFToken() : undefined;

        return {};
    }
}
