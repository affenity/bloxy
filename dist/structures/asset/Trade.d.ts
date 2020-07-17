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
    client: Client;
    id: number;
    offers: {
        user: PartialUser;
        assets: CollectibleAsset[];
        robux: number;
    }[];
    sender: PartialUser;
    created: Date;
    active: boolean;
    status: string;
    constructor(data: TradeOptions, client: Client);
}
