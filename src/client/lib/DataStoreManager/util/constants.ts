export enum DataStoreRequestType {
    GET_ASYNC = 5,
    UPDATE_ASYNC = 6,
    SET_ASYNC = 7,
    INCREMENT_ASYNC = 8,
    GET_SORTED_ASYNC_PAGE = 9
}


const DataStoreManagerConstants = {
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

export default DataStoreManagerConstants;
