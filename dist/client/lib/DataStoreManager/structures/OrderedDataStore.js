"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderedDataStore = void 0;
const tslib_1 = require("tslib");
const GenericDataStore_1 = require("./GenericDataStore");
const DataStoreHttpRequest_1 = require("./DataStoreHttpRequest");
const constants_1 = require("../util/constants");
const OrderedDataStorePage_1 = require("./OrderedDataStorePage");
class OrderedDataStore extends GenericDataStore_1.GenericDataStore {
    constructor(manager, placeId, name, scope, legacy) {
        super(manager, "OrderedDataStore", placeId, name, scope || null, legacy || false);
    }
    getSortedAsync(options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.performPreflightChecks({});
            const createdRequest = new DataStoreHttpRequest_1.DataStoreHttpRequest(this.manager, {
                url: this.buildGetSortedUrl(options),
                placeId: this.placeId,
                data: "",
                requestType: constants_1.DataStoreRequestType.GET_SORTED_ASYNC_PAGE
            });
            const response = yield createdRequest.send();
            const [parsedResponseSuccess, parsedResponse] = this.parseRetrievedData(response.body);
            if (!parsedResponseSuccess) {
                throw new Error(`Failed to parse response!`);
            }
            return new OrderedDataStorePage_1.OrderedDataStorePage(this, {
                options,
                result: parsedResponse
            });
        });
    }
    buildGetSortedUrl(options) {
        const encodedQueryString = this.createQueryString({
            key: this.safeEncodeValue(this.name),
            pageSize: options.pageSize ||
                constants_1.DataStoreManagerConstants.DFInt.DataStoreMaxPageSize,
            ascending: options.ascending ? "True" : "False",
            inclusiveMinValue: options.minValue,
            inclusiveMaxValue: options.maxValue,
            exclusiveStartKey: options.startKey
        });
        return `${this.baseAPIUrl}getSortedValues?${encodedQueryString}`;
    }
}
exports.OrderedDataStore = OrderedDataStore;
