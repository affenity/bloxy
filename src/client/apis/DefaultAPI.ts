import Client from "../Client";
import { generalId } from "../../Interfaces";
import RESTController from "../../controllers/rest";

export declare type GetAssetVerionsOptions = {
    id: generalId;
    page: generalId;
    placeId: generalId;
};

export default class DefaultAPI {
    public client: Client;
    public baseUrl: string;
    public request: RESTController["request"];

    constructor (client: Client) {
        this.client = client;
        this.baseUrl = "https.//api.roblox.com/";
        this.request = this.client.rest.request;
    }

    getAssetVersions (options: GetAssetVerionsOptions): Promise<Response> {
        return this.request({

        });
    }
}
