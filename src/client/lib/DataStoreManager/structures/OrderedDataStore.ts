import GenericDataStore from "./GenericDataStore";
import DataStoreManager from "../DataStoreManager";
import DataStoreHttpRequest from "./DataStoreHttpRequest";
import DataStoreManagerConstants, { DataStoreRequestType } from "../util/constants";
import OrderedDataStorePage from "./OrderedDataStorePage";


export type GetSortedUrlOptions = {
    ascending?: boolean;
    pageSize?: number;
    minValue?: number;
    maxValue?: number;
    startKey?: string;
};
export type OrderedDataStoreResultType = {
    data: {
        Entries: {
            Target: string;
            Value: number;
        }[];
        ExclusiveStartKey: string | null;
    }
};

export default class OrderedDataStore<DataType extends any> extends GenericDataStore<DataType> {
    constructor (manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean) {
        super(manager, "OrderedDataStore", placeId, name, scope || null, legacy || false);
    }

    public async getSortedAsync (options: GetSortedUrlOptions): Promise<OrderedDataStorePage<DataType>> {
        this.performPreflightChecks({});
        const createdRequest = new DataStoreHttpRequest(this.manager, {
            url: this.buildGetSortedUrl(options),
            placeId: this.placeId,
            data: "",
            requestType: DataStoreRequestType.GET_SORTED_ASYNC_PAGE
        });

        const response = await createdRequest.send();

        const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData(response.body);

        if (!parsedResponseSuccess) {
            throw new Error(`Failed to parse response!`);
        }

        return new OrderedDataStorePage<DataType>(this, {
            options,
            result: parsedResponse
        });
    }

    private buildGetSortedUrl (options: GetSortedUrlOptions) {
        const encodedQueryString = this.createQueryString({
            key: this.safeEncodeValue(this.name),
            pageSize: options.pageSize || DataStoreManagerConstants.DFInt.DataStoreMaxPageSize,
            ascending: options.ascending ? "True" : "False",
            inclusiveMinValue: options.minValue,
            inclusiveMaxValue: options.maxValue,
            exclusiveStartKey: options.startKey
        });

        return `${this.baseAPIUrl}getSortedValues?${encodedQueryString}`;
    }
}
