import BaseAPI from "./BaseAPI";
import Client from "../Client";


export declare type CreateAssetAdOptions = {
    assetId: number;
    name: string;
    file: unknown;
};
export declare type CreateGamePassAdOptions = {
    gamePassId: number;
    name: string;
    file: unknown;
};
export declare type CreateGroupAdOptions = {
    groupId: number;
    name: string;
    file: unknown;
};

export declare type CreateAssetAd = unknown;
export declare type CreateGamePassAd = unknown;
export declare type CreateGroupAd = unknown;


export default class AdsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            baseUrl: "https://ads.roblox.com/",
            client
        });
    }

    createAssetAd (options: CreateAssetAdOptions): Promise<CreateAssetAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/assets/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    assetId: options.assetId
                }
            }
        })
            .then(response => response.body as CreateAssetAd);
    }

    createGamePassAd (options: CreateGamePassAdOptions): Promise<CreateGamePassAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/game-pass/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    gamePassId: options.gamePassId
                }
            }
        })
            .then(response => response.body as CreateGamePassAd);
    }

    createGroupAd (options: CreateGroupAdOptions): Promise<CreateAssetAd> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user-ads/groups/create",
                method: "POST",
                formData: {
                    name: options.name,
                    files: options.file
                },
                qs: {
                    groupId: options.groupId
                }
            }
        })
            .then(response => response.body as CreateGroupAd);
    }
}
