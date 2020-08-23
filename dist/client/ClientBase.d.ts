/// <reference types="node" />
import EventEmitter from "events";
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
    options: ClientOptions;
    constructor(options?: ClientOptions);
    updateOptions: (options?: ClientOptions | undefined) => ClientOptions;
}
