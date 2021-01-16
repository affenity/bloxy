import * as querystring from "querystring";
import DataStoreManager from "../DataStoreManager";
import DataStoreHttpRequest from "./DataStoreHttpRequest";
import { DataStoreRequestType } from "../util/constants";


type DataStoreType = "OrderedDataStore" | "GlobalDataStore";

export default class GenericDataStore {
    public manager: DataStoreManager;
    public name: string;
    public scope: string | null;
    public legacy: boolean;
    public baseAPIUrl: string;
    public placeId: number;
    public dataStoreType: DataStoreType;

    constructor (manager: DataStoreManager, dataStoreType: DataStoreType, placeId: number, name: string, scope: string | null, legacy = false) {
        this.manager = manager;
        this.dataStoreType = dataStoreType;
        this.placeId = placeId;
        this.name = name;
        this.scope = scope;
        this.legacy = legacy;
        this.baseAPIUrl = "https://gamepersistence.roblox.com/persistence/";
    }

    buildPostDataForKey (key: string, index = 0): string {
        const encodedQueryString = querystring.encode({
            [`qkeys[${index}].scope`]: this.scope ? this.safeEncodeValue(this.scope) : "",
            [`qkeys[${index}].target`]: this.legacy ? "" : this.safeEncodeValue(key),
            [`qkeys[${index}].key`]: this.legacy ? this.safeEncodeValue(key) : this.safeEncodeValue(this.name)
        });

        return `&${encodedQueryString};`;
    }

    buildGetUrl (): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType,
            scope: this.scope
        });

        return `${this.baseAPIUrl}?${encodedQueryString}`;
    }

    buildSetUrl (key: string, valueLength: number): string {
        const encodedQueryString = querystring.encode({
            placeId: this.placeId,
            type: this.dataStoreType,
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
            type: this.dataStoreType,
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
            type: this.dataStoreType,
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
            type: this.dataStoreType,
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

    public deserializeData (data: string): [boolean, unknown] {
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
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildGetUrl(),
            body: this.buildPostDataForKey(key),
            requestType: DataStoreRequestType.GET_ASYNC
        });

        const response = await createdRequest.send();
        console.log(response);

        return response;
    }

    private safeEncodeValue (input: string) {
        return encodeURIComponent(input);
    }
}
