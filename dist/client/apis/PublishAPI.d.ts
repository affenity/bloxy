import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type UploadAssetsOptions = {
    files: unknown;
};
export declare type UploadAssets = {
    AssetDetails: {
        assetId: number;
        assetFileName: string;
        uploadAssetError: "None" | string;
    }[];
};
export declare type PublishAudioOptions = {
    name: string;
    file: unknown;
    groupId?: number;
    paymentSource: string;
};
export declare type PublishAudio = {
    Id: number;
    Name: string;
};
export declare type VerifyAudioOptions = PublishAudioOptions;
export declare type VerifyAudio = {
    price: number;
    canAfford: boolean;
};
export declare type PublishBadgeIconOptions = {
    badgeId: number;
    files: unknown;
};
export declare type PublishBadgeIcon = {
    targetId: number;
};
export declare type PublishGamePassIconOptions = {
    gamePassId: number;
    files: unknown;
};
export declare type PublishGamePassIcon = {
    targetId: number;
};
export declare type UploadGameThumbnailOptions = {
    gameId: number;
    files: unknown;
};
export declare type UploadGameThumbnail = {
    targetId: number;
};
export declare type UploadPluginIconOptions = {
    pluginId: number;
    files: unknown;
};
export declare type UploadPluginIcon = {
    targetId: number;
};
export default class PublishAPI extends BaseAPI {
    constructor(client: Client);
    uploadAssets(options: UploadAssetsOptions): Promise<UploadAssets>;
    publishAudio(options: PublishAudioOptions): Promise<PublishAudio>;
    verifyAudio(options: VerifyAudioOptions): Promise<VerifyAudio>;
    publishBadgeIcon(options: PublishBadgeIconOptions): Promise<PublishBadgeIcon>;
    publishGamePassIcon(options: PublishGamePassIconOptions): Promise<PublishGamePassIcon>;
    uploadGameThumbnail(options: UploadGameThumbnailOptions): Promise<UploadGameThumbnail>;
    uploadPluginIcon(options: UploadPluginIconOptions): Promise<UploadPluginIcon>;
}
