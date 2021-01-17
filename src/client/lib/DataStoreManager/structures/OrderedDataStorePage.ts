import OrderedDataStore, { GetSortedUrlOptions, OrderedDataStoreResultType } from "./OrderedDataStore";


export default class OrderedDataStorePage<DataType extends any> {
    public orderedDataStore: OrderedDataStore<DataType>;
    public options: GetSortedUrlOptions;
    public data: { key: string; value: number }[];
    public startKey: string | null;

    constructor (orderedDataStore: OrderedDataStore<DataType>, data: { options: GetSortedUrlOptions; result: OrderedDataStoreResultType }) {
        this.orderedDataStore = orderedDataStore;
        this.options = data.options;
        this.data = data.result.data.Entries.map(x => ({
            key: x.Target,
            value: x.Value
        }));
        this.startKey = data.result.data.ExclusiveStartKey;
    }

    fetchNextPage (): Promise<OrderedDataStorePage<DataType>> {
        if (!this.startKey) {
            throw new Error(`There is no next page!`);
        }

        return this.orderedDataStore.getSortedAsync({
            ...this.options,
            startKey: this.startKey
        });
    }
}
