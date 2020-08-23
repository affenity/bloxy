import RESTRequest from "../controllers/rest/request";
import RESTResponse from "../controllers/rest/response";
export declare type RESTRequester = (requestOptions: RESTRequestOptions) => Promise<RESTResponseDataType>;
export declare type RESTRequestHandler = (request: RESTRequest) => boolean | Error;
export declare type RESTResponseHandler = (response: RESTResponse) => boolean | Error;
export declare type RESTControllerOptions = {
    requester: (requestOptions: RESTRequestOptions) => Promise<unknown>;
    /**
     * If specified, the user agent that will be used for the requests
     */
    userAgent?: string;
    /**
     * If specified, the url which the request will be proxied through
     */
    proxy?: string;
    /**
     * The current XCSRF token
     */
    xcsrf?: string;
    /**
     * The time in ms when the xcsrf was last set
     */
    xcsrfSet?: number;
};
export declare type RESTCreateCookieOptions = {
    key: string;
    value: string;
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
};
export declare type RESTRequestOptions = {
    /**
     * The URL to send the request to
     */
    url: string;
    /**
     * The request method to use
     */
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | string;
    /**
     * The proxy to use
     */
    proxy?: string;
    /**
     * If the request should follow all redirects
     */
    followAllRedirects?: boolean;
    /**
     * Roblox's "old" verification system with general verification tokens
     */
    verification?: string;
    /**
     * An "overriding" user agent for the request
     */
    userAgent?: string;
    /**
     * Add some custom headers that will override / merge with the "base" headers
     */
    headers?: {
        [key: string]: unknown;
    };
    /**
     * The JSON body
     */
    json?: Array<unknown> | {
        [key: string]: unknown;
    } | string;
    body?: unknown;
    /**
     * The form body
     */
    form?: {
        [key: string]: unknown;
    };
    /**
     * The form data body
     */
    formData?: {
        [key: string]: unknown;
    };
    /**
     * Any query params?
     */
    qs?: {
        [key: string]: unknown;
    };
    /**
     * Sets the state of any checks
     */
    checks?: RESTResponseOptions["checks"];
    /**
     * If you want to use a "custom" xcsrf token
     */
    xcsrf?: string | boolean;
    /**
     * The optional response options
     */
    responseOptions?: RESTResponseOptions;
    /**
     * If it should throw http errors if the statuscode is != 200
     */
    throwHttpErrors?: boolean;
};
export declare type RESTResponseOptions = {
    allowedStatusCodes?: number[];
    disallowedStatusCodes?: number[];
    allowedStatuses?: string[];
    disallowedStatuses?: string[];
    onlyJSON?: boolean;
    checks?: {
        xcsrf?: boolean;
        status?: boolean;
        statusCode?: boolean;
        body?: boolean;
        captcha?: boolean;
    };
};
export declare type RESTResponseDataType = {
    body: any;
    url: string;
    requestUrl: string;
    status: string;
    statusCode: number;
    headers: Record<string, string>;
};
export declare const DefaultRESTRequestOptions: {
    checks: {
        xcsrf: boolean;
        status: boolean;
        statusCode: boolean;
        body: boolean;
        captcha: boolean;
    };
    headers: {};
    method: string;
};
export declare const DefaultCreateCookieOptions: {
    domain: string;
    hostOnly: boolean;
    httpOnly: boolean;
};
export declare const DefaultRESTControllerOptions: {
    requester: import("got/dist/source").Got;
    userAgent: string;
    proxy: undefined;
    xcsrf: undefined;
    xcsrfSet: undefined;
};
