import DataStoreManager from "../DataStoreManager";
import { RESTRequestOptions, RESTResponseDataType } from "../../../../interfaces/RESTInterfaces";
import { DataStoreRequestType } from "../util/constants";


type DataStoreHttpRequestOptions = RESTRequestOptions & {
    placeId: number;
    requestType: DataStoreRequestType;
    data: string;
};

export default class DataStoreHttpRequest {
    public initiator: DataStoreManager;
    public options: DataStoreHttpRequestOptions;

    constructor (manager: DataStoreManager, options: DataStoreHttpRequestOptions) {
        this.initiator = manager;
        this.options = options;

        // Adjusting the body
        this.options.body = this.options.data.length === 0 ? " " : this.options.data;

        // Always POST
        this.options.method = this.options.method || "POST";
        this.options.headers = this.options.headers || {};
        this.options.headers = {
            ...this.options.headers,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Roblox-Place-Id": this.options.placeId,
            Cookie: this.initiator.client.rest.getCookies("https://www.roblox.com/")
        };
    }

    send (): Promise<RESTResponseDataType> {
        return this.initiator.client.rest.request(this.options);
    }
}
