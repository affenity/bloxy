import DataStoreManager from "../DataStoreManager";
import { RESTRequestOptions, RESTResponseDataType } from "../../../../interfaces/RESTInterfaces";
import { DataStoreRequestType } from "../util/constants";


type DataStoreHttpRequestOptions = RESTRequestOptions & {
    requestType: DataStoreRequestType
};

export default class DataStoreHttpRequest {
    public initiator: DataStoreManager;
    public options: DataStoreHttpRequestOptions;

    constructor (manager: DataStoreManager, options: DataStoreHttpRequestOptions) {
        this.initiator = manager;
        this.options = options;
    }

    send (): Promise<RESTResponseDataType> {
        return this.initiator.client.rest.request(this.options);
    }
}
