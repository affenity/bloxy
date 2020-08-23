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
export declare type CreateAssetAd = {};
export declare type CreateGamePassAd = {};
export declare type CreateGroupAd = {};
export default class AdsAPI extends BaseAPI {
    constructor(client: Client);
    createAssetAd(options: CreateAssetAdOptions): Promise<CreateAssetAd>;
    createGamePassAd(options: CreateGamePassAdOptions): Promise<CreateGamePassAd>;
    createGroupAd(options: CreateGroupAdOptions): Promise<CreateAssetAd>;
}
