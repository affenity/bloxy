import { EventEmitter } from "events";
import { RESTControllerOptions } from "../interfaces/RESTInterfaces";
import debug, { Debugger } from "debug";
import { utilMergeDeep } from "../util/utilFunctions";


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
    debug: boolean;
}


export interface ClientOptions {
    credentials?: ClientCredentialsOptions;
    rest?: RESTControllerOptions;
    callbacks?: ClientCallbacks;
    setup?: ClientSetup;
}


interface DebugData {
    name: string;
    description: string;
}


export default class ClientBase extends EventEmitter {
    public options: ClientOptions;
    public debugger: {
        info: Debugger;
        warn: Debugger;
        error: Debugger;
    };


    constructor (options?: ClientOptions) {
        super();

        this.options = this.updateOptions(options);
        this.debugger = {
            info: debug("bloxy:info"),
            warn: debug("bloxy:warn"),
            error: debug("bloxy:error")
        };
    }

    public updateOptions (options?: ClientOptions): ClientOptions {
        this.options = utilMergeDeep({
            credentials: {},
            rest: {},
            setup: {},
            callbacks: {}
        } as ClientOptions, options || {}) as ClientOptions;

        return this.options;
    }

    public log (level: "info" | "warn" | "error", data: DebugData): void {
        const loggerToUse = level === "info" ? this.debugger.info : level === "error" ? this.debugger.error : this.debugger.warn;

        loggerToUse(`[${new Date().toISOString()}] ${data.name}: ${data.description}`);
    }
}
