import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type UploadAssetsOptions = {
    files: unknown;
}
export type UploadAssets = {
    AssetDetails: {
        assetId: number;
        assetFileName: string;
        uploadAssetError: "None" | string;
    }[];
}
export type PublishAudioOptions = {
    name: string;
    file: unknown;
    groupId?: number;
    paymentSource: string;
}
export type PublishAudio = {
    Id: number;
    Name: string;
}
export type VerifyAudioOptions = PublishAudioOptions;
export type VerifyAudio = {
    price: number;
    canAfford: boolean;
}
export type PublishBadgeIconOptions = {
    badgeId: number;
    files: unknown;
}
export type PublishBadgeIcon = {
    targetId: number;
}
export type PublishGamePassIconOptions = {
    gamePassId: number;
    files: unknown;
}
export type PublishGamePassIcon = {
    targetId: number;
}
export type UploadGameThumbnailOptions = {
    gameId: number;
    files: unknown;
}
export type UploadGameThumbnail = {
    targetId: number;
}
export type UploadPluginIconOptions = {
    pluginId: number;
    files: unknown;
}
export type UploadPluginIcon = {
    targetId: number;
}

export default class PublishAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://publish.roblox.com/"
        });
    }

    uploadAssets (options: UploadAssetsOptions): Promise<UploadAssets> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/upload`,
                method: "POST",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }

    publishAudio (options: PublishAudioOptions): Promise<PublishAudio> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/audio`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    verifyAudio (options: VerifyAudioOptions): Promise<VerifyAudio> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/audio/verify`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    publishBadgeIcon (options: PublishBadgeIconOptions): Promise<PublishBadgeIcon> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/badges/${options.badgeId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }

    publishGamePassIcon (options: PublishGamePassIconOptions): Promise<PublishGamePassIcon> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/game-passes/${options.gamePassId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }

    uploadGameThumbnail (options: UploadGameThumbnailOptions): Promise<UploadGameThumbnail> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/games/${options.gameId}/thumbnail/image`,
                method: "POST",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }

    uploadPluginIcon (options: UploadPluginIconOptions): Promise<UploadPluginIcon> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/plugins/${options.pluginId}/icon`,
                method: "POST",
                body: options.files
            },
            json: true
        })
            .then(response => response.body);
    }
}
