import BaseAPI from "./BaseAPI";
import { AnyIdentifier } from "../../interfaces/GeneralInterfaces";
import { GeneralAPIGetAssetVersions } from "../../interfaces/APIInterfaces";
import Client from "../Client";


export declare type GetAssetVersionOptions = {
    id: AnyIdentifier;
    page: AnyIdentifier;
    placeId: AnyIdentifier;
};

export default class GeneralAPI extends BaseAPI {
    public client: Client;

    constructor (client: Client) {
        super({
            baseUrl: "https://api.roblox.com/",
            client
        });
        this.client = client;
    }

    getAssetVersions (options: GetAssetVersionOptions): Promise<GeneralAPIGetAssetVersions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `assets/${options.id}/versions`
            }
        });
    }
}
