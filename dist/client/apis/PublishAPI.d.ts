import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type PublishUploadAssetsOptions = {
    files: unknown;
};
export declare type PublishUploadAssets = {
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
export declare type PublishVerifyAudioOptions = PublishAudioOptions;
export declare type PublishVerifyAudio = {
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
export declare type PublishUploadGameThumbnailOptions = {
    gameId: number;
    files: unknown;
};
export declare type PublishUploadGameThumbnail = {
    targetId: number;
};
export declare type PublishUploadPluginIconOptions = {
    pluginId: number;
    files: unknown;
};
export declare type PublishUploadPluginIcon = {
    targetId: number;
};
export declare class PublishAPI extends BaseAPI {
    constructor(client: Client);
    /**
     * @hidden
     */
    uploadAssets(options: PublishUploadAssetsOptions): Promise<PublishUploadAssets>;
    publishAudio(options: PublishAudioOptions): Promise<PublishAudio>;
    verifyAudio(options: PublishVerifyAudioOptions): Promise<PublishVerifyAudio>;
    publishBadgeIcon(options: PublishBadgeIconOptions): Promise<PublishBadgeIcon>;
    /**
     * @hidden
     */
    publishGamePassIcon(options: PublishGamePassIconOptions): Promise<PublishGamePassIcon>;
    uploadGameThumbnail(options: PublishUploadGameThumbnailOptions): Promise<PublishUploadGameThumbnail>;
    uploadPluginIcon(options: PublishUploadPluginIconOptions): Promise<PublishUploadPluginIcon>;
}
