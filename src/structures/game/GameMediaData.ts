import Client from "../../client";


export interface GameMediaDataOptions {
    assetTypeId: number;
    assetType: "Video" | "Image" | string;
    imageId: number | null;
    videoHash: string | null;
    videoTitle: string | null;
    approved: boolean;
}

export default class GameMediaData {
    public client: Client;
    public assetTypeId: number;
    public assetType: "Video" | "Image" | string;
    public imageId: number | null;
    public videoHash: string | null;
    public videoTitle: string | null;
    public approved: boolean;

    constructor (data: GameMediaDataOptions, client: Client) {
        this.client = client;
        this.assetTypeId = data.assetTypeId;
        this.assetType = data.assetType;
        this.imageId = data.imageId;
        this.videoHash = data.videoHash;
        this.videoTitle = data.videoTitle;
        this.approved = data.approved;
    }
}
