import Client from "../../client/Client";
import { Cookie, CookieJar } from "tough-cookie";
import {
    DefaultCreateCookieOptions,
    DefaultRESTControllerOptions,
    RESTControllerOptions,
    RESTCreateCookieOptions,
    RESTRequester,
    RESTRequestHandler,
    RESTRequestOptions,
    RESTResponseDataType,
    RESTResponseHandler
} from "../../interfaces/RESTInterfaces";
import updateXCSRFToken from "./lib/updateXCSRFToken";
import RESTRequest from "./request";
import lodash from "lodash";
import got from "got";
import responseHandlers from "./response/handlers";


class RESTController {
    public client: Client;
    public options: RESTControllerOptions;
    public requester: RESTRequester;
    public cookieJar: CookieJar;
    public responseHandlers: RESTResponseHandler[];
    public requestHandlers: RESTRequestHandler[];


    constructor (client: Client, options?: RESTControllerOptions) {
        /**
         * The client
         */
        this.client = client;
        /**
         * The options for this RESTController
         */
        this.options = this.setOptions(options || this.client.options.rest);
        /**
         * The cookie jar
         */
        this.cookieJar = new CookieJar();
        /**
         * Functions to go through to validate / modify the response
         */
        this.responseHandlers = [
            ...responseHandlers
        ];
        /**
         * Functions to go through to modify the request
         */
        this.requestHandlers = [];
        /**
         * The function that's being used to perform the requests, can be modified
         */
        this.requester = (this.options.requester || got) as RESTRequester;

        this.init();
    }

    /**
     * Sends a request
     * @param {RequestOptions} options The options
     * @returns {Promise<RESTResponseDataType>}
     */
    request (options: RESTRequestOptions): Promise<RESTResponseDataType> {
        const request = new RESTRequest(this, options);

        return request.send();
    }

    /**
     * Fetches a new XCSRF token
     */

    fetchXCSRFToken (): Promise<string> {
        return updateXCSRFToken(this)
            .then(xcsrfToken => {
                this.setXCSRFToken(xcsrfToken);
                return xcsrfToken;
            });
    }

    /**
     * Sets the XCSRF token
     * @param {string} token The xcsrf token to use in future requets
     */
    setXCSRFToken (token: string): void {
        this.options.xcsrf = token;
        this.options.xcsrfSet = Date.now();
    }

    /**
     * Gets the existing XCSRF token if it's not older than set refresh interval,
     * otherwise, fetch a new one
     */
    async getXCSRFToken (): Promise<string | undefined> {
        if (!this.options.xcsrf || (Date.now() - (this.options.xcsrfSet || 0)) >= (this.options.xcsrfRefreshInterval || DefaultRESTControllerOptions.xcsrfRefreshInterval)) {
            // Refresh token
            await this.fetchXCSRFToken()
                .then(token => {
                    this.setXCSRFToken(token);
                });
        }

        return this.options.xcsrf;
    }

    /**
     * Creates a new cookie and returns it, no side effects
     * @param {RESTCreateCookieOptions} cookieOptions The options to use
     * @returns {Cookie}
     */
    createCookie (cookieOptions: RESTCreateCookieOptions): Cookie {
        return new Cookie({
            ...DefaultCreateCookieOptions,
            ...cookieOptions
        });
    }

    /**
     * Adds a cookie to the cookie jar
     * @param {Cookie} cookie The cookie to add
     * @param {string} domain The domain to add it for
     * @param {Object} setCookieOptions Options for setting the cookie
     * @returns {Cookie}
     */
    addCookie (cookie: Cookie, domain: string, setCookieOptions?: any): Cookie {
        return this.cookieJar.setCookieSync(cookie, domain || "https://roblox.com", setCookieOptions || {});
    }

    /**
     * Gets the cookies for a given domain stored in the jar
     * @param {string} domain The domain to retrieve the cookies for
     * @returns {Cookie[]}
     */
    getCookies (domain: string): Cookie[] {
        return this.cookieJar.getCookiesSync(domain);
    }

    /**
     * Adds a response handler
     * @param {Function} handler The response handler
     */
    addResponseHandler (handler: RESTResponseHandler): void {
        this.responseHandlers.push(handler);
    }

    /**
     * Adds a request handler
     * @param {Function} handler The request handler
     */
    addRequestHandler (handler: RESTRequestHandler): void {
        this.requestHandlers.push(handler);
    }

    /**
     * Sets the proxy for the requests
     * @param {string} proxyURL The proxy URL
     */
    setProxy (proxyURL: string): void {
        this.options.proxy = proxyURL;
    }

    /**
     * Gets the proxy used
     * @returns {string | undefined}
     */
    getProxy (): string | undefined {
        return this.options.proxy;
    }

    /**
     * Sets the user agents for future requests
     * @param {string} userAgent The user agent to use
     */
    setUserAgent (userAgent: string): void {
        this.options.userAgent = userAgent;
    }

    /**
     * Gets the user agent
     * @returns {string | undefined}
     */
    getUserAgent (): string | undefined {
        return this.options.userAgent;
    }

    /**
     * Sets the XCSRF token refresh interval
     * @param {number} xcsrfRefreshInterval The time in ms to use
     */
    setXCSRFTokenRefreshInterval (xcsrfRefreshInterval: number): void {
        this.options.xcsrfRefreshInterval = xcsrfRefreshInterval;
    }

    /**
     * Gets the XCSRF token refresh interval
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshInterval (): number | undefined {
        return this.options.xcsrfRefreshInterval;
    }

    /**
     * Sets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @param {number} xcsrfRefreshMaxRetries Number of retries
     */
    setXCSRFTokenRefreshMaxRetries (xcsrfRefreshMaxRetries: number): void {
        this.options.xcsrfRefreshMaxRetries = xcsrfRefreshMaxRetries;
    }

    /**
     * Gets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshMaxRetries (): number | undefined {
        return this.options.xcsrfRefreshMaxRetries;
    }

    /**
     * Sets the options for the RESTController
     * @param {RESTControllerOptions} options The options to use
     * @returns {RESTControllerOptions}
     */
    setOptions (options?: RESTControllerOptions): RESTControllerOptions {
        this.options = lodash.merge(DefaultRESTControllerOptions, options || {}) as RESTControllerOptions;

        return this.options;
    }

    /**
     * Initiates the RESTController
     */
    init (): void {

    }
}


export default RESTController;
