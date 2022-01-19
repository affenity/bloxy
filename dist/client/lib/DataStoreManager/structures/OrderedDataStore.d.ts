import { GenericDataStore } from "./GenericDataStore";
import { DataStoreManager } from "../DataStoreManager";
import { OrderedDataStorePage } from "./OrderedDataStorePage";
export declare type GetSortedUrlOptions = {
    ascending?: boolean;
    pageSize?: number;
    minValue?: number;
    maxValue?: number;
    startKey?: string;
};
export declare type OrderedDataStoreResultType = {
    data: {
        Entries: {
            Target: string;
            Value: number;
        }[];
        ExclusiveStartKey: string | null;
    };
};
export declare class OrderedDataStore<DataType> extends GenericDataStore<DataType> {
    constructor(manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean);
    getSortedAsync(options: GetSortedUrlOptions): Promise<OrderedDataStorePage<DataType>>;
    private buildGetSortedUrl;
}
