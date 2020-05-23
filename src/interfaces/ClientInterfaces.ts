import { RESTControllerOptions } from "./RESTInterfaces";


export interface ClientCredentialsOptions {
    cookie?: string;
    username?: string;
    password?: string;
    fcToken?: string;
}

export interface ClientCallbacks {
    getFunCaptchaToken?: (publicKey: string, targetUrl: string) => Promise<string>;
}


export interface ClientOptions {
    credentials?: ClientCredentialsOptions;
    rest?: RESTControllerOptions;
    callbacks?: ClientCallbacks;
}