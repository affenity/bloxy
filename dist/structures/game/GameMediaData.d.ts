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
    client: Client;
    assetTypeId: number;
    assetType: "Video" | "Image" | string;
    imageId: number | null;
    videoHash: string | null;
    videoTitle: string | null;
    approved: boolean;
    constructor(data: GameMediaDataOptions, client: Client);
}
