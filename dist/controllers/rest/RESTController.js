"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tough_cookie_1 = require("tough-cookie");
const RESTInterfaces_1 = require("../../interfaces/RESTInterfaces");
const updateXCSRFToken_1 = tslib_1.__importDefault(require("./lib/updateXCSRFToken"));
const request_1 = tslib_1.__importDefault(require("./request"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const got_1 = tslib_1.__importDefault(require("got"));
const handlers_1 = tslib_1.__importDefault(require("./response/handlers"));
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
        this.responseHandlers = [
            ...handlers_1.default
        ];
        /**
         * Functions to go through to modify the request
         */
        this.requestHandlers = [];
        /**
         * The function that's being used to perform the requests, can be modified
         */
        this.requester = (this.options.requester || got_1.default);
        this.init();
    }
    /**
     * Sends a request
     * @param {RequestOptions} options The options
     * @returns {Promise<RESTResponseDataType>}
     */
    request(options) {
        const request = new request_1.default(this, options);
        return request.send();
    }
    /**
     * Fetches a new XCSRF token
     */
    fetchXCSRFToken() {
        return updateXCSRFToken_1.default(this)
            .then(xcsrfToken => {
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
     * Gets the existing xcsrf token if it's not more than 5 minutes old,
     * otherwise, fetch a new one
     */
    getXCSRFToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.options.xcsrf || (Date.now() - (this.options.xcsrfSet || 0)) >= (5 * 60 * 1000)) {
                // Refresh token
                yield this.fetchXCSRFToken().then(token => {
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
     * @param {string} domain The domain to add it for
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
     * Sets the options for the RESTController
     * @param {RESTControllerOptions} options The options to use
     * @returns {RESTControllerOptions}
     */
    setOptions(options) {
        this.options = lodash_1.default.merge(RESTInterfaces_1.DefaultRESTControllerOptions, options || {});
        return this.options;
    }
    /**
     * Initiates the RESTController
     */
    init() {
        console.log("init called");
    }
}
exports.default = RESTController;
