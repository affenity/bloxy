"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTController = void 0;
const tslib_1 = require("tslib");
const tough_cookie_1 = require("tough-cookie");
const RESTInterfaces_1 = require("../../interfaces/RESTInterfaces");
const updateXCSRFToken_1 = require("./lib/updateXCSRFToken");
const request_1 = require("./request");
const handlers_1 = require("./response/handlers");
const getRequester_1 = require("./lib/getRequester");
const utilFunctions_1 = require("../../util/utilFunctions");
class RESTController {
    constructor(client, options) {
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
        this.cookieJar = new tough_cookie_1.CookieJar();
        /**
         * Functions to go through to validate / modify the response
         */
        this.responseHandlers = [...handlers_1.responseHandlers];
        /**
         * Functions to go through to modify the request
         */
        this.requestHandlers = [];
        /**
         * The function that's being used to perform the requests, can be modified
         */
        this.requester = (0, getRequester_1.getRequester)(this, this.options.requester || undefined);
    }
    /**
     * Sends a request
     * @param {RequestOptions} options The options
     * @returns {Promise<RESTResponseDataType>}
     */
    request(options) {
        const request = new request_1.RESTRequest(this, options);
        return request.send();
    }
    /**
     * Fetches a new XCSRF token
     */
    fetchXCSRFToken() {
        return (0, updateXCSRFToken_1.updateXCSRFToken)(this).then((xcsrfToken) => {
            this.setXCSRFToken(xcsrfToken);
            return xcsrfToken;
        });
    }
    /**
     * Sets the XCSRF token
     * @param {string} token The xcsrf token to use in future requets
     */
    setXCSRFToken(token) {
        this.options.xcsrf = token;
        this.options.xcsrfSet = Date.now();
    }
    /**
     * Gets the existing XCSRF token if it's not older than set refresh interval,
     * otherwise, fetch a new one
     */
    getXCSRFToken() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (!this.options.xcsrf ||
                Date.now() - (this.options.xcsrfSet || 0) >=
                    (this.options.xcsrfRefreshInterval ||
                        RESTInterfaces_1.DefaultRESTControllerOptions.xcsrfRefreshInterval)) {
                // Refresh token
                yield this.fetchXCSRFToken().then((token) => {
                    this.setXCSRFToken(token);
                });
            }
            return this.options.xcsrf;
        });
    }
    /**
     * Creates a new cookie and returns it, no side effects
     * @param {RESTCreateCookieOptions} cookieOptions The options to use
     * @returns {Cookie}
     */
    createCookie(cookieOptions) {
        return new tough_cookie_1.Cookie(Object.assign(Object.assign({}, RESTInterfaces_1.DefaultCreateCookieOptions), cookieOptions));
    }
    /**
     * Adds a cookie to the cookie jar
     * @param {Cookie} cookie The cookie to add
     * @param {?string} domain The domain to add it for
     * @param {Object} setCookieOptions Options for setting the cookie
     * @returns {Cookie}
     */
    addCookie(cookie, domain, setCookieOptions) {
        return this.cookieJar.setCookieSync(cookie, domain || "https://roblox.com", setCookieOptions || {});
    }
    /**
     * Gets the cookies for a given domain stored in the jar
     * @param {string} domain The domain to retrieve the cookies for
     * @returns {Cookie[]}
     */
    getCookies(domain) {
        return this.cookieJar.getCookiesSync(domain);
    }
    /**
     * Adds a response handler
     * @param {Function} handler The response handler
     */
    addResponseHandler(handler) {
        this.responseHandlers.push(handler);
    }
    /**
     * Adds a request handler
     * @param {Function} handler The request handler
     */
    addRequestHandler(handler) {
        this.requestHandlers.push(handler);
    }
    /**
     * Sets the proxy for the requests
     * @param {string} proxyURL The proxy URL
     */
    setProxy(proxyURL) {
        this.options.proxy = proxyURL;
    }
    /**
     * Gets the proxy used
     * @returns {string | undefined}
     */
    getProxy() {
        return this.options.proxy;
    }
    /**
     * Sets the user agents for future requests
     * @param {string} userAgent The user agent to use
     */
    setUserAgent(userAgent) {
        this.options.userAgent = userAgent;
    }
    /**
     * Gets the user agent
     * @returns {string | undefined}
     */
    getUserAgent() {
        return this.options.userAgent;
    }
    /**
     * Sets the XCSRF token refresh interval
     * @param {number} xcsrfRefreshInterval The time in ms to use
     */
    setXCSRFTokenRefreshInterval(xcsrfRefreshInterval) {
        this.options.xcsrfRefreshInterval = xcsrfRefreshInterval;
    }
    /**
     * Gets the XCSRF token refresh interval
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshInterval() {
        return this.options.xcsrfRefreshInterval;
    }
    /**
     * Sets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @param {number} xcsrfRefreshMaxRetries Number of retries
     */
    setXCSRFTokenRefreshMaxRetries(xcsrfRefreshMaxRetries) {
        this.options.xcsrfRefreshMaxRetries = xcsrfRefreshMaxRetries;
    }
    /**
     * Gets the amount of retries to be made to refresh XCSRF
     * tokens on Token Validation errors
     * @returns {number | undefined}
     */
    getXCSRFTokenRefreshMaxRetries() {
        return this.options.xcsrfRefreshMaxRetries;
    }
    /**
     * Sets the options for the RESTController
     * @param {RESTControllerOptions} options The options to use
     * @returns {RESTControllerOptions}
     */
    setOptions(options) {
        this.options = (0, utilFunctions_1.utilMergeDeep)(RESTInterfaces_1.DefaultRESTControllerOptions, options || {});
        return this.options;
    }
}
exports.RESTController = RESTController;
