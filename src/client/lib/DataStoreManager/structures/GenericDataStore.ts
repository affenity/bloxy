import * as querystring from "querystring";
import DataStoreManager from "../DataStoreManager";
import DataStoreHttpRequest from "./DataStoreHttpRequest";
import { DataStoreRequestType } from "../util/constants";
import { checkKey, checkName, checkPlaceId, checkScope, checkValue } from "../util/checks";
import { RESTResponseDataType } from "../../../../interfaces/RESTInterfaces";


type DataStoreType = "OrderedDataStore" | "GlobalDataStore";
type DataStoreKey = {
    Scope: "global" | string;
    Target: string;
    Key: string;
};
type DataStoreValue = string;

export default class GenericDataStore<DataType extends any> {
    public manager: DataStoreManager;
    public name: string;
    public scope: string;
    public legacy: boolean;
    public baseAPIUrl: string;
    public placeId: number;
    public dataStoreType: DataStoreType;
    public advanced: {
        parseData?: (data: string) => DataType;
        serializeData?: (data: DataType) => string;
    };

    constructor (manager: DataStoreManager, dataStoreType: DataStoreType, placeId: number, name: string, scope: string | null, legacy = false) {
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
    public setDataConverters (parseDataFunction: (data: string) => DataType, serializeDataFunction: (data: DataType) => string): void {
        this.advanced.parseData = parseDataFunction;
        this.advanced.serializeData = serializeDataFunction;
    }

    buildPostDataForKey (key: string, index = 0): string {
        const encodedQueryString = querystring.encode({
            [`qkeys[${index}].scope`]: this.scope ? this.safeEncodeValue(this.scope) : "",
            [`qkeys[${index}].target`]: this.legacy ? "" : this.safeEncodeValue(key),
            [`qkeys[${index}].key`]: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name)
        });

        return `&${encodedQueryString}`;
    }

    buildGetUrl (): string {
        const encodedQueryString = this.createQueryString({});

        return `${this.baseAPIUrl}getV2?${encodedQueryString}`;
    }

    buildSetUrl (key: string, valueLength: number): string {
        const encodedQueryString = this.createQueryString({
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength
        });

        return `${this.baseAPIUrl}set?${encodedQueryString}`;
    }

    buildSetIfUrl (key: string, valueLength: number, expectedValueLength: number): string {
        const encodedQueryString = this.createQueryString({
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength,
            expectedValueLength
        });

        return `${this.baseAPIUrl}set?${encodedQueryString}`;
    }

    buildIncrementUrl (key: string, delta: number): string {
        const encodedQueryString = this.createQueryString({
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            value: delta
        });

        return `${this.baseAPIUrl}increment?${encodedQueryString}`;
    }

    buildRemoveUrl (key: string): string {
        const encodedQueryString = this.createQueryString({
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key)
        });

        return `${this.baseAPIUrl}increment?${encodedQueryString}`;
    }

    public parseRetrievedData<Result extends any> (data: string): [boolean, Result | any] {
        let result = "";

        if (data.length === 0) {
            return [true, result];
        }

        try {
            result = JSON.parse(data);
        } catch {
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
    public async getAsync (key: string): Promise<unknown> {
        this.performPreflightChecks({
            key
        });

        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildGetUrl(),
            placeId: this.placeId,
            data: this.buildPostDataForKey(key),
            requestType: DataStoreRequestType.GET_ASYNC
        });

        const response = await createdRequest.send();
        const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData<{
            data: {
                Key: DataStoreKey;
                Value: DataStoreValue;
            }[];
        }>(response.body);

        if (!parsedResponseSuccess || !parsedResponse) {
            throw new Error(`Failed to parse response from data stores!`);
        }

        if (parsedResponse.data && parsedResponse.data.length > 0) {
            // Sending the returned data for internal processing
            return this.parseIncomingData(parsedResponse.data[0].Value);
        } else {
            return null;
        }
    }

    /**
     * Sets a value in data stores to the given key.
     * Equivalent of DataStoreService:GetDataStore("name"):SetAsync("key", "value")
     * @param {string} key
     * @param {DataType} value
     * @returns {Promise<boolean>}
     */
    public async setAsync (key: string, value: DataType): Promise<DataType> {
        const serializedValue = this.serializeOutgoingData(value);
        this.performPreflightChecks({
            key,
            value: serializedValue
        });
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildSetUrl(key, serializedValue.length),
            placeId: this.placeId,
            data: `value=${this.safeEncodeValue(serializedValue)}`,
            requestType: DataStoreRequestType.SET_ASYNC
        });

        const response = await createdRequest.send();
        const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData<{ data: string }>(response.body);

        if (!parsedResponseSuccess || !parsedResponse) {
            throw new Error(`Failed to parse response!`);
        }

        return this.parseIncomingData(parsedResponse.data as string);
    }

    public incrementAsync (key: string, delta = 1): Promise<RESTResponseDataType> {
        this.performPreflightChecks({
            key
        });
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildIncrementUrl(key, delta),
            placeId: this.placeId,
            data: "",
            requestType: DataStoreRequestType.INCREMENT_ASYNC
        });

        return createdRequest.send();
    }

    public removeAsync (key: string): Promise<RESTResponseDataType> {
        this.performPreflightChecks({
            key
        });
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildRemoveUrl(key),
            placeId: this.placeId,
            data: "",
            requestType: DataStoreRequestType.SET_ASYNC
        });

        return createdRequest.send();
    }

    public createQueryString (addition: Record<string, unknown>) {
        return querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : "sorted",
            scope: this.safeEncodeValue(this.scope),
            ...addition
        });
    }

    /**
     * This will (possibly) use a custom provided converter function that turns string into DataType.
     * @param {string} data
     * @returns {DataType}
     * @private
     */
    parseIncomingData (data: string): DataType {
        if (this.advanced.parseData) {
            return this.advanced.parseData(data);
        } else {
            return data as DataType;
        }
    }

    /**
     * This will (possibly) use a custom provided converter function that turns DataType into string so it can be saved
     * to data stores
     * @param {DataType} data
     * @returns {string}
     * @private
     */
    serializeOutgoingData (data: DataType): string {
        let serializedStage1: string | DataType = "";

        if (this.advanced.serializeData) {
            serializedStage1 = this.advanced.serializeData(data);
        } else {
            serializedStage1 = data;
        }

        let serializedFinal: string | null = "";

        try {
            serializedFinal = JSON.stringify(serializedStage1);
        } catch {
            serializedFinal = null;
        }

        if (!serializedFinal) {
            throw new Error(`Failed to serialize the data using JSON.stringify`);
        }

        return serializedFinal;
    }

    safeEncodeValue (input: string) {
        return encodeURIComponent(input);
    }

    /**
     * Performs various checks before sending any requests to make sure the requests are valid before sent
     * @param {{key?: string, value?: DataType}} options
     * @private
     */
    performPreflightChecks (options: { key?: string; value?: string }) {
        checkScope(this.scope);
        checkName(this.name);
        checkPlaceId(this.placeId);

        if (options.key !== undefined) {
            checkKey(options.key);
        }
        if (options.value !== undefined) {
            checkValue(options.value);
        }
    }
}
