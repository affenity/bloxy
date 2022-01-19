"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedDataStorePage = void 0;
class OrderedDataStorePage {
    constructor(orderedDataStore, data) {
        this.orderedDataStore = orderedDataStore;
        this.options = data.options;
        this.data = data.result.data.Entries.map((x) => ({
            key: x.Target,
            value: x.Value
        }));
        this.startKey = data.result.data.ExclusiveStartKey;
    }
    fetchNextPage() {
        if (!this.startKey) {
            throw new Error(`There is no next page!`);
        }
        return this.orderedDataStore.getSortedAsync(Object.assign(Object.assign({}, this.options), { startKey: this.startKey }));
    }
}
exports.OrderedDataStorePage = OrderedDataStorePage;
