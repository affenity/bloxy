import CollectibleAsset, { CollectibleAssetOptions } from "./CollectibleAsset";
import Client from "../../client";
import PartialUser from "../user/PartialUser";


export interface TradeOptions {
    id: number;
    offers: {
        user: {
            id: number;
            name: string;
            displayName: string;
        };
        userAssets: CollectibleAssetOptions[];
        robux: number;
    }[];
    user: {
        id: number;
        name: string;
        displayName: string;
    };
    created: string;
    isActive: boolean;
    status: "Completed" | string;
}


export default class Trade {
    public client: Client;
    public id: number;
    public offers: {
        user: PartialUser;
        assets: CollectibleAsset[];
        robux: number;
    }[];
    public sender: PartialUser;
    public created: Date;
    public active: boolean;
    public status: string;

    constructor (data: TradeOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.sender = new PartialUser({
            id: data.user.id,
            name: data.user.name
        }, client);
        this.created = new Date(data.created);
        this.active = data.isActive;
        this.status = data.status;
        this.offers = data.offers.map(offerData => ({
            robux: offerData.robux,
            user: new PartialUser({
                id: offerData.user.id,
                name: offerData.user.name
            }, client),
            assets: offerData.userAssets.map(assetData => new CollectibleAsset(assetData, client))
        }));
    }
}
