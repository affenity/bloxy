"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseAPI {
    constructor(options) {
        this.client = options.client;
        this.options = options;
    }
    request(options) {
        if (options.requiresAuth) {
            if (!this.options.client.user) {
                throw new Error(`You must be authenticated in order to perform this request! API: ${(options.request.method || "GET").toUpperCase()} ${options.request.path ? this.options.baseUrl : ""}${options.request.path || options.request.url}`);
            }
        }
        if (!options.request.url && !options.request.path) {
            throw new Error(`Must provide a URL or path!`);
        }
        else if (options.request.path) {
            options.request.url = this.options.baseUrl + options.request.path;
            delete options.request.path;
        }
        return this.options.client.rest.request(options.request)
            .then(response => {
            if (options.json && !(response.body instanceof Object)) {
                response.body = JSON.parse(response.body);
            }
            return response;
        });
    }
}
exports.default = BaseAPI;
