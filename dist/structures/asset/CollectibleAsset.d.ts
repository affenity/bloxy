import Client from "../../client";
export interface CollectibleAssetOptions {
    userAssetId: number;
    serialNumber: number | null;
    assetId: number;
    name: string;
    recentAveragePrice: number | null;
    originalPrice: number | null;
    assetStock: number | null;
    buildersClubMembershipType: number;
}
export default class CollectibleAsset {
    client: Client;
    assetId: number;
    userAssetId: number;
    name: string;
    recentAveragePrice: number | null;
    originalPrice: number | null;
    assetStock: number | null;
    buildersClubMembershipType: number;
    constructor(data: CollectibleAssetOptions, client: Client);
}
