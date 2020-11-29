import got from "got";
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
    /**
     * Refresh interval in ms for XCSRF token updating
     */
    xcsrfRefreshInterval?: number;
    /**
     * The amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     */
    xcsrfRefreshMaxRetries?: number;
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
    headers?: { [key: string]: unknown };
    /**
     * The JSON body
     */
    json?: unknown[] | { [key: string]: unknown } | string;
    body?: unknown;
    /**
     * The form body
     */
    form?: { [key: string]: unknown };
    /**
     * The form data body
     */
    formData?: { [key: string]: unknown };
    /**
     * Any query params?
     */
    qs?: { [key: string]: unknown };
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

export const DefaultRESTRequestOptions = {
    checks: {
        xcsrf: true,
        status: true,
        statusCode: true,
        body: true,
        captcha: true
    },
    headers: {},
    method: "GET"
};

export const DefaultCreateCookieOptions = {
    domain: ".roblox.com",
    hostOnly: false,
    httpOnly: false
};

export const DefaultRESTControllerOptions = {
    requester: got,
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
    proxy: undefined,
    xcsrf: undefined,
    xcsrfSet: undefined,
    xcsrfRefreshInterval: 5 * 60 * 1000,
    xcsrfRefreshMaxRetries: 4
};
