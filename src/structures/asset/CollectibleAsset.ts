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
    public client: Client;
    public assetId: number;
    public userAssetId: number;
    public name: string;
    public recentAveragePrice: number | null;
    public originalPrice: number | null;
    public assetStock: number | null;
    public buildersClubMembershipType: number;

    constructor (data: CollectibleAssetOptions, client: Client) {
        this.client = client;
        this.assetId = data.assetId;
        this.userAssetId = data.userAssetId;
        this.name = data.name;
        this.recentAveragePrice = data.recentAveragePrice;
        this.originalPrice = data.originalPrice;
        this.assetStock = data.assetStock;
        this.buildersClubMembershipType = data.buildersClubMembershipType;
    }
}
