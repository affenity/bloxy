/// <reference types="node" />
import { EventEmitter } from "events";
import { RESTControllerOptions } from "../interfaces/RESTInterfaces";
import { Debugger } from "debug";
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
export declare class ClientBase extends EventEmitter {
    options: ClientOptions;
    debugger: {
        info: Debugger;
        warn: Debugger;
        error: Debugger;
    };
    constructor(options?: ClientOptions);
    updateOptions(options?: ClientOptions): ClientOptions;
    log(level: "info" | "warn" | "error", data: DebugData): void;
}
export {};
