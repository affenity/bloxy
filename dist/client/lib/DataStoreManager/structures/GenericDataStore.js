"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericDataStore = void 0;
const tslib_1 = require("tslib");
const querystring = (0, tslib_1.__importStar)(require("querystring"));
const DataStoreHttpRequest_1 = require("./DataStoreHttpRequest");
const constants_1 = require("../util/constants");
const checks_1 = require("../util/checks");
class GenericDataStore {
    constructor(manager, dataStoreType, placeId, name, scope, legacy = false) {
        this.manager = manager;
        this.dataStoreType = dataStoreType;
        this.placeId = placeId;
        this.name = name;
        this.scope = scope || "global";
        this.legacy = legacy;
        this.baseAPIUrl = "https://gamepersistence.roblox.com/persistence/";
        this.advanced = {};
        // Making sure we started off properly by checking all the set values
        this.performPreflightChecks({});
    }
    /**
     * When data is retrieved from data stores, it will be returned unmodified
     * Using your own data converter will allow you to return it if you handle your data in a special way, such as
     * JSON parsing it etc.
     * @param {(data: string) => DataType} parseDataFunction
     * @param {(data: DataType) => string} serializeDataFunction
     */
    setDataConverters(parseDataFunction, serializeDataFunction) {
        this.advanced.parseData = parseDataFunction;
        this.advanced.serializeData = serializeDataFunction;
    }
    buildPostDataForKey(key, index = 0) {
        const encodedQueryString = querystring.encode({
            [`qkeys[${index}].scope`]: this.scope
                ? this.safeEncodeValue(this.scope)
                : "",
            [`qkeys[${index}].target`]: this.legacy ? "" : this.safeEncodeValue(key),
            [`qkeys[${index}].key`]: this.legacy
                ? this.safeEncodeValue(key)
                : this.safeEncodeValue(this.name)
        });
        return `&${encodedQueryString}`;
    }
    buildGetUrl() {
        const encodedQueryString = this.createQueryString({});
        return `${this.baseAPIUrl}getV2?${encodedQueryString}`;
    }
    buildSetUrl(key, valueLength) {
        const encodedQueryString = this.createQueryString({
            key: this.legacy
                ? this.safeEncodeValue(key)
                : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength
        });
        return `${this.baseAPIUrl}set?${encodedQueryString}`;
    }
    buildSetIfUrl(key, valueLength, expectedValueLength) {
        const encodedQueryString = this.createQueryString({
            key: this.legacy
                ? this.safeEncodeValue(key)
                : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength,
            expectedValueLength
        });
        return `${this.baseAPIUrl}set?${encodedQueryString}`;
    }
    buildIncrementUrl(key, delta) {
        const encodedQueryString = this.createQueryString({
            key: this.legacy
                ? this.safeEncodeValue(key)
                : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            value: delta
        });
        return `${this.baseAPIUrl}increment?${encodedQueryString}`;
    }
    buildRemoveUrl(key) {
        const encodedQueryString = this.createQueryString({
            key: this.legacy
                ? this.safeEncodeValue(key)
                : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key)
        });
        return `${this.baseAPIUrl}increment?${encodedQueryString}`;
    }
    parseRetrievedData(data) {
        let result = "";
        if (data.length === 0) {
            return [true, result];
        }
        try {
            result = JSON.parse(data);
        }
        catch (_a) {
            return [false, result];
        }
        return [true, result];
    }
    /**
     * Retrieves the value associated with the key (if any), otherwise returns null.
     * Equivalent of DataStoreService:GetDataStore("name"):GetAsync("key");
     * @param {string} key
     * @returns {Promise<unknown>}
     */
    getAsync(key) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.performPreflightChecks({
                key
            });
            const createdRequest = new DataStoreHttpRequest_1.DataStoreHttpRequest(this.manager, {
                url: this.buildGetUrl(),
                placeId: this.placeId,
                data: this.buildPostDataForKey(key),
                requestType: constants_1.DataStoreRequestType.GET_ASYNC
            });
            const response = yield createdRequest.send();
            const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData(response.body);
            if (!parsedResponseSuccess || !parsedResponse) {
                throw new Error(`Failed to parse response from data stores!`);
            }
            if (parsedResponse.data && parsedResponse.data.length > 0) {
                // Sending the returned data for internal processing
                return this.parseIncomingData(parsedResponse.data[0].Value);
            }
            else {
                return null;
            }
        });
    }
    /**
     * Sets a value in data stores to the given key.
     * Equivalent of DataStoreService:GetDataStore("name"):SetAsync("key", "value")
     * @param {string} key
     * @param {DataType} value
     * @returns {Promise<boolean>}
     */
    setAsync(key, value) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const serializedValue = this.serializeOutgoingData(value);
            this.performPreflightChecks({
                key,
                value: serializedValue
            });
            const createdRequest = new DataStoreHttpRequest_1.DataStoreHttpRequest(this.manager, {
                url: this.buildSetUrl(key, serializedValue.length),
                placeId: this.placeId,
                data: `value=${this.safeEncodeValue(serializedValue)}`,
                requestType: constants_1.DataStoreRequestType.SET_ASYNC
            });
            const response = yield createdRequest.send();
            const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData(response.body);
            if (!parsedResponseSuccess || !parsedResponse) {
                throw new Error(`Failed to parse response!`);
            }
            return this.parseIncomingData(parsedResponse.data);
        });
    }
    incrementAsync(key, delta = 1) {
        this.performPreflightChecks({
            key
        });
        const createdRequest = new DataStoreHttpRequest_1.DataStoreHttpRequest(this.manager, {
            url: this.buildIncrementUrl(key, delta),
            placeId: this.placeId,
            data: "",
            requestType: constants_1.DataStoreRequestType.INCREMENT_ASYNC
        });
        return createdRequest.send();
    }
    removeAsync(key) {
        this.performPreflightChecks({
            key
        });
        const createdRequest = new DataStoreHttpRequest_1.DataStoreHttpRequest(this.manager, {
            url: this.buildRemoveUrl(key),
            placeId: this.placeId,
            data: "",
            requestType: constants_1.DataStoreRequestType.SET_ASYNC
        });
        return createdRequest.send();
    }
    createQueryString(addition) {
        return querystring.encode(Object.assign({ placeId: this.placeId, type: this.dataStoreType === "GlobalDataStore" ? "standard" : "sorted", scope: this.safeEncodeValue(this.scope) }, addition));
    }
    /**
     * This will (possibly) use a custom provided converter function that turns string into DataType.
     * @param {string} data
     * @returns {DataType}
     * @private
     */
    parseIncomingData(data) {
        if (this.advanced.parseData) {
            return this.advanced.parseData(data);
        }
        else {
            return data;
        }
    }
    /**
     * This will (possibly) use a custom provided converter function that turns DataType into string so it can be saved
     * to data stores
     * @param {DataType} data
     * @returns {string}
     * @private
     */
    serializeOutgoingData(data) {
        let serializedStage1 = "";
        if (this.advanced.serializeData) {
            serializedStage1 = this.advanced.serializeData(data);
        }
        else {
            serializedStage1 = data;
        }
        let serializedFinal = "";
        try {
            serializedFinal = JSON.stringify(serializedStage1);
        }
        catch (_a) {
            serializedFinal = null;
        }
        if (!serializedFinal) {
            throw new Error(`Failed to serialize the data using JSON.stringify`);
        }
        return serializedFinal;
    }
    safeEncodeValue(input) {
        return encodeURIComponent(input);
    }
    /**
     * Performs various checks before sending any requests to make sure the requests are valid before sent
     * @param {{key?: string, value?: DataType}} options
     * @private
     */
    performPreflightChecks(options) {
        (0, checks_1.checkScope)(this.scope);
        (0, checks_1.checkName)(this.name);
        (0, checks_1.checkPlaceId)(this.placeId);
        if (options.key !== undefined) {
            (0, checks_1.checkKey)(options.key);
        }
        if (options.value !== undefined) {
            (0, checks_1.checkValue)(options.value);
        }
    }
}
exports.GenericDataStore = GenericDataStore;
