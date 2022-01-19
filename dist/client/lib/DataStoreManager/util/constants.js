"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreManagerConstants = exports.DataStoreRequestType = void 0;
var DataStoreRequestType;
(function (DataStoreRequestType) {
    DataStoreRequestType[DataStoreRequestType["GET_ASYNC"] = 5] = "GET_ASYNC";
    DataStoreRequestType[DataStoreRequestType["UPDATE_ASYNC"] = 6] = "UPDATE_ASYNC";
    DataStoreRequestType[DataStoreRequestType["SET_ASYNC"] = 7] = "SET_ASYNC";
    DataStoreRequestType[DataStoreRequestType["INCREMENT_ASYNC"] = 8] = "INCREMENT_ASYNC";
    DataStoreRequestType[DataStoreRequestType["GET_SORTED_ASYNC_PAGE"] = 9] = "GET_SORTED_ASYNC_PAGE";
})(DataStoreRequestType = exports.DataStoreRequestType || (exports.DataStoreRequestType = {}));
exports.DataStoreManagerConstants = {
    DFFlag: {
        UseNewDataStoreRequestSetTimestampBehaviour: false,
        GetGlobalDataStorePcallFix: false,
        UseUnstableDevGetAsyncUrl: false
    },
    DFInt: {
        DataStoreMaxValueSize: 64 * 1024,
        DataStoreMaxPageSize: 100,
        DataStoreKeyLengthLimit: 50
    }
};
