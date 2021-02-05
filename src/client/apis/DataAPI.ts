import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type UploadDataOptions = {
    assetId: number;
    data: unknown;
}
export type UploadDataResult = unknown;

export default class DataAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://data.roblox.com/"
        });
    }

    uploadData (options: UploadDataOptions): Promise<UploadDataResult> {
        return this.request({
            requiresAuth: true,
            json: true,
            request: {
                path: `Data/Upload.ashx?assetid=${options.assetId}`,
                method: "POST",
                headers: {
                    "User-Agent": "Roblox/WinInet",
                    Requester: "Client",
                    "Content-Type": "application/xml",
                    Accept: "application/json"
                }
            }
        })
            .then(response => response.body);
    }
}
