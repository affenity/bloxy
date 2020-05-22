import { RESTControllerOptions } from "./RESTInterfaces";


export interface ClientCredentialsOptions {
    cookie?: string;
    username?: string;
    password?: string;
    fcToken?: string;
}


export interface ClientOptions {
    credentials?: ClientCredentialsOptions;
    rest?: RESTControllerOptions;
}
