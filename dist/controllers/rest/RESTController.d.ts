import { Client } from "../../client/Client";
import { Cookie, CookieJar } from "tough-cookie";
import { RESTControllerOptions, RESTCreateCookieOptions, RESTRequester, RESTRequestHandler, RESTRequestOptions, RESTResponseDataType, RESTResponseHandler } from "../../interfaces/RESTInterfaces";
export declare class RESTController {
    client: Client;
    options: RESTControllerOptions;
    requester: RESTRequester;
    cookieJar: CookieJar;
    responseHandlers: RESTResponseHandler[];
    requestHandlers: RESTRequestHandler[];
    constructor(client: Client, options?: RESTControllerOptions);
    /**
     * Sends a request
     * @param {RequestOptions} options The options
     * @returns {Promise<RESTResponseDataType>}
     */
    request(options: RESTRequestOptions): Promise<RESTResponseDataType>;
    /**
     * Fetches a new XCSRF token
     */
    fetchXCSRFToken(): Promise<string>;
    /**
     * Sets the XCSRF token
     * @param {string} token The xcsrf token to use in future requets
     */
    setXCSRFToken(token: string): void;
    /**
     * Gets the existing XCSRF token if it's not older than set refresh interval,
     * otherwise, fetch a new one
     */
    getXCSRFToken(): Promise<string | undefined>;
    /**
     * Creates a new cookie and returns it, no side effects
     * @param {RESTCreateCookieOptions} cookieOptions The options to use
     * @returns {Cookie}
     */
    createCookie(cookieOptions: RESTCreateCookieOptions): Cookie;
    /**
     * Adds a cookie to the cookie jar
     * @param {Cookie} cookie The cookie to add
     * @param {?string} domain The domain to add it for
     * @param {Object} setCookieOptions Options for setting the cookie
     * @returns {Cookie}
     */
    addCookie(cookie: Cookie, domain?: string, setCookieOptions?: any): Cookie;
    /**
     * Gets the cookies for a given domain stored in the jar
     * @param {string} domain The domain to retrieve the cookies for
     * @returns {Cookie[]}
     */
    getCookies(domain: string): Cookie[];
    /**
     * Adds a response handler
     * @param {Function} handler The response handler
     */
    addResponseHandler(handler: RESTResponseHandler): void;
    /**
     * Adds a request handler
     * @param {Function} handler The request handler
     */
    addRequestHandler(handler: RESTRequestHandler): void;
    /**
     * Sets the proxy for the requests
     * @param {string} proxyURL The proxy URL
     */
    setProxy(proxyURL: string): void;
    /**
     * Gets the proxy used
     * @returns {string | undefined}
     */
    getProxy(): string | undefined;
    /**
     * Sets the user agents for future requests
     * @param {string} userAgent The user agent to use
     */
    setUserAgent(userAgent: string): void;
    /**
     * Gets the user agent
     * @returns {string | undefined}
     */
    getUserAgent(): string | undefined;
    /**
     * Sets the XCSRF token refresh interval
     * @param {number} xcsrfRefreshInterval The time in ms to use
     */
    setXCSRFTokenRefreshInterval(xcsrfRefreshInterval: number): void;
    /**
     * Gets the XCSRF token refresh interval
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshInterval(): number | undefined;
    /**
     * Sets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @param {number} xcsrfRefreshMaxRetries Number of retries
     */
    setXCSRFTokenRefreshMaxRetries(xcsrfRefreshMaxRetries: number): void;
    /**
     * Gets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshMaxRetries(): number | undefined;
    /**
     * Sets the options for the RESTController
     * @param {RESTControllerOptions} options The options to use
     * @returns {RESTControllerOptions}
     */
    setOptions(options?: RESTControllerOptions): RESTControllerOptions;
}
