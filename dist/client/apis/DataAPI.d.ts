import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type DataUploadDataOptions = {
    assetId: number;
    data: unknown;
};
export declare type DataUploadDataResult = unknown;
export declare class DataAPI extends BaseAPI {
    constructor(client: Client);
    uploadData(options: DataUploadDataOptions): Promise<DataUploadDataResult>;
}
