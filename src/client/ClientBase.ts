import { EventEmitter } from "events";
import lodash from "lodash";
import { RESTControllerOptions } from "../interfaces/RESTInterfaces";


export interface ClientCredentialsOptions {
    cookie?: string;
}


export interface ClientCallbacks {
    getFunCaptchaToken?: (publicKey: string, targetUrl: string) => Promise<string>;
}


export interface ClientSetup {
    websocket?: {
        maxRetries: number;
    };
}


export interface ClientOptions {
    credentials?: ClientCredentialsOptions;
    rest?: RESTControllerOptions;
    callbacks?: ClientCallbacks;
    setup?: ClientSetup;
}


export default class ClientBase extends EventEmitter {
    public options: ClientOptions;


    constructor (options?: ClientOptions) {
        super();

        this.options = this.updateOptions(options);
    }

    updateOptions = (options?: ClientOptions): ClientOptions => {
        this.options = lodash.merge({
            credentials: {},
            rest: {}
        }, options || {});

        return this.options;
    };
}
