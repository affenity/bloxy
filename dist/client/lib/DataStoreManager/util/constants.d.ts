export declare enum DataStoreRequestType {
    GET_ASYNC = 5,
    UPDATE_ASYNC = 6,
    SET_ASYNC = 7,
    INCREMENT_ASYNC = 8,
    GET_SORTED_ASYNC_PAGE = 9
}
export declare const DataStoreManagerConstants: {
    DFFlag: {
        UseNewDataStoreRequestSetTimestampBehaviour: boolean;
        GetGlobalDataStorePcallFix: boolean;
        UseUnstableDevGetAsyncUrl: boolean;
    };
    DFInt: {
        DataStoreMaxValueSize: number;
        DataStoreMaxPageSize: number;
        DataStoreKeyLengthLimit: number;
    };
};
