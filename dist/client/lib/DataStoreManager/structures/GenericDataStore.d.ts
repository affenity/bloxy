import { DataStoreManager } from "../DataStoreManager";
import { RESTResponseDataType } from "../../../../interfaces/RESTInterfaces";
declare type DataStoreType = "OrderedDataStore" | "GlobalDataStore";
export declare class GenericDataStore<DataType> {
    manager: DataStoreManager;
    name: string;
    scope: string;
    legacy: boolean;
    baseAPIUrl: string;
    placeId: number;
    dataStoreType: DataStoreType;
    advanced: {
        parseData?: (data: string) => DataType;
        serializeData?: (data: DataType) => string;
    };
    constructor(manager: DataStoreManager, dataStoreType: DataStoreType, placeId: number, name: string, scope: string | null, legacy?: boolean);
    /**
     * When data is retrieved from data stores, it will be returned unmodified
     * Using your own data converter will allow you to return it if you handle your data in a special way, such as
     * JSON parsing it etc.
     * @param {(data: string) => DataType} parseDataFunction
     * @param {(data: DataType) => string} serializeDataFunction
     */
    setDataConverters(parseDataFunction: (data: string) => DataType, serializeDataFunction: (data: DataType) => string): void;
    buildPostDataForKey(key: string, index?: number): string;
    buildGetUrl(): string;
    buildSetUrl(key: string, valueLength: number): string;
    buildSetIfUrl(key: string, valueLength: number, expectedValueLength: number): string;
    buildIncrementUrl(key: string, delta: number): string;
    buildRemoveUrl(key: string): string;
    parseRetrievedData<Result>(data: string): [boolean, Result | any];
    /**
     * Retrieves the value associated with the key (if any), otherwise returns null.
     * Equivalent of DataStoreService:GetDataStore("name"):GetAsync("key");
     * @param {string} key
     * @returns {Promise<unknown>}
     */
    getAsync(key: string): Promise<unknown>;
    /**
     * Sets a value in data stores to the given key.
     * Equivalent of DataStoreService:GetDataStore("name"):SetAsync("key", "value")
     * @param {string} key
     * @param {DataType} value
     * @returns {Promise<boolean>}
     */
    setAsync(key: string, value: DataType): Promise<DataType>;
    incrementAsync(key: string, delta?: number): Promise<RESTResponseDataType>;
    removeAsync(key: string): Promise<RESTResponseDataType>;
    createQueryString(addition: Record<string, unknown>): string;
    /**
     * This will (possibly) use a custom provided converter function that turns string into DataType.
     * @param {string} data
     * @returns {DataType}
     * @private
     */
    parseIncomingData(data: string): DataType;
    /**
     * This will (possibly) use a custom provided converter function that turns DataType into string so it can be saved
     * to data stores
     * @param {DataType} data
     * @returns {string}
     * @private
     */
    serializeOutgoingData(data: DataType): string;
    safeEncodeValue(input: string): string;
    /**
     * Performs various checks before sending any requests to make sure the requests are valid before sent
     * @param {{key?: string, value?: DataType}} options
     * @private
     */
    performPreflightChecks(options: {
        key?: string;
        value?: string;
    }): void;
}
export {};
