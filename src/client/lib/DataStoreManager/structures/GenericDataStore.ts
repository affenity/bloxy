import * as querystring from "querystring";
import DataStoreManager from "../DataStoreManager";
import DataStoreHttpRequest from "./DataStoreHttpRequest";
import { DataStoreRequestType } from "../util/constants";
import { checkKey, checkName, checkPlaceId, checkScope } from "../util/checks";


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
        dataConverter?: (data: string) => DataType;
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
     * @param {(data: string) => DataType} converterFunction
     */
    public setDataConverter (converterFunction: (data: string) => DataType): void {
        this.advanced.dataConverter = converterFunction;
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
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : this.dataStoreType,
            scope: this.scope
        });

        return `${this.baseAPIUrl}getV2?${encodedQueryString}`;
    }

    buildSetUrl (key: string, valueLength: number): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : this.dataStoreType,
            scope: this.scope ? this.safeEncodeValue(this.scope) : undefined,
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength
        });

        if (this.legacy) {
            return `${this.baseAPIUrl}set?${encodedQueryString}`;
        } else {
            return `${this.baseAPIUrl}set?${encodedQueryString}`;
        }
    }

    buildSetIfUrl (key: string, valueLength: number, expectedValueLength: number): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : this.dataStoreType,
            scope: this.scope ? this.safeEncodeValue(this.scope) : undefined,
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            target: this.legacy ? "" : this.safeEncodeValue(key),
            valueLength,
            expectedValueLength
        });

        if (this.legacy) {
            return `${this.baseAPIUrl}set?${encodedQueryString}`;
        } else {
            return `${this.baseAPIUrl}set?${encodedQueryString}`;
        }
    }

    buildIncrementUrl (key: string, delta: number): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : this.dataStoreType,
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            scope: this.scope ? this.safeEncodeValue(this.scope) : undefined,
            target: this.legacy ? "" : this.safeEncodeValue(key),
            value: delta
        });

        if (this.legacy) {
            return `${this.baseAPIUrl}increment?${encodedQueryString}`;
        } else {
            return `${this.baseAPIUrl}increment?${encodedQueryString}`;
        }
    }

    buildRemoveUrl (key: string): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType === "GlobalDataStore" ? "standard" : this.dataStoreType,
            key: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name),
            scope: this.scope ? this.safeEncodeValue(this.scope) : undefined,
            target: this.legacy ? "" : this.safeEncodeValue(key)
        });

        if (this.legacy) {
            return `${this.baseAPIUrl}increment?${encodedQueryString}`;
        } else {
            return `${this.baseAPIUrl}increment?${encodedQueryString}`;
        }
    }

    public serializeData (data: any): [boolean, string] {
        let isJSON = true;
        let result = "";

        try {
            result = JSON.stringify(data);
        } catch {
            isJSON = false;
        }

        return [isJSON, result];
    }

    public deserializeData<Result extends any> (data: string): [boolean, Result | any] {
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

    public async getAsync (key: string): Promise<unknown> {
        if (!checkKey(key)) {

        }
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildGetUrl(),
            placeId: this.placeId,
            data: this.buildPostDataForKey(key),
            requestType: DataStoreRequestType.GET_ASYNC
        });

        const response = await createdRequest.send();

        const [parsedResponseSuccess, parsedResponse] = this.deserializeData<{
            data: {
                Key: DataStoreKey;
                Value: DataStoreValue;
            }[];
        }>(response.body);

        if (!parsedResponseSuccess || !parsedResponse) {
            throw new Error(`Failed to parse response from data stores!`);
        }

        if (parsedResponse.data && parsedResponse.data.length > 0) {
            return this.handleRawData(parsedResponse.data[0].Value);
        } else {
            return null;
        }
    }

    private performPreflightChecks (options: { key?: string; value?: DataType }) {
        checkScope(this.scope);
        checkName(this.name);
        checkPlaceId(this.placeId);

        if (options.key !== undefined) {
            checkKey(options.key);
        }
        if (options.value !== undefined) {
            this.isValueAllowed(options.value);
        }
    }

    private handleRawData (data: string): DataType {
        if (this.advanced.dataConverter) {
            return this.advanced.dataConverter(data);
        } else {
            return data as DataType;
        }
    }

    private isValueAllowed (data: DataType): boolean {
        const [serializedSuccess] = this.serializeData(data);

        if (!serializedSuccess) {
            throw new Error(`Invalid data, unable to serialize it!`);
        } else {
            return true;
        }
    }

    private safeEncodeValue (input: string) {
        return encodeURIComponent(input);
    }
}
