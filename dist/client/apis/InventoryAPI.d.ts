import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetPackageAssetsOptions = {
    packageId: number;
};
export declare type GetPackageAssets = {
    assetIds: number[];
};
export declare type GetUserCollectiblesOptions = {
    userId: number;
    assetType?: "Image" | "TShirt" | "Audio" | "Mesh" | "Lua" | "HTML" | "Text" | "Hat" | "Place" | "Model" | "Shirt" | "Pants" | "Decal" | "Avatar" | "Head" | "Face" | "Gear" | "Badge" | "GroupEmblem" | "Animation" | "Arms" | "Legs" | "Torso" | "RightArm" | "LeftArm" | "LeftLeg" | "RightLeg" | "Package" | "YouTubeVideo" | "GamePass" | "App" | "Code" | "Plugin" | "SolidModel" | "MeshPart" | "HairAccessory" | "NeckAccessory" | "ShoulderAccessory" | "FrontAccessory" | "BackAccessory" | "WaistAccessory" | "ClimbAnimation" | "DeathAnimation" | "FallAnimation" | "IdleAnimation" | "JumpAnimation" | "RunAnimation" | "SwimAnimation" | "WalkAnimation" | "PoseAnimation" | "LocalizationTableManifest" | "LocalizationTableTranslation" | "EmoteAnimation" | "Video" | "TexturePack";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUserCollectibles = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        userAssetId: number;
        serialNumber: number;
        assetId: number;
        name: string;
        recentAveragePrice: number;
        originalPrice: number;
        assetStock: number;
        buildersClubMembershipType: "None" | string;
    }[];
};
export declare type GetUserItemsByTypeAndTargetIdOptions = {
    userId: number;
    itemType: "Asset" | "GamePass" | "Badge" | "Bundle";
    itemTargetId: number;
};
export declare type GetUserItemsByTypeAndTargetId = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        Id: number;
        Name: string;
        Type: GetUserItemsByTypeAndTargetIdOptions["itemType"];
        InstanceId: number;
    }[];
};
export declare type GetAssetOwnersOptions = {
    assetId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetAssetOwners = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        id: number;
        serialNumber: number;
        owner: {
            id: number;
            type: "User" | string;
            name: string;
        };
        created: string;
        updated: string;
    };
};
export declare type GetUserInventoryOptions = {
    userId: number;
    assetTypes: GetUserCollectiblesOptions["assetType"][];
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
export declare type GetUserInventory = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
        assetType: GetUserCollectiblesOptions["assetType"];
        created: string;
    }[];
};
export declare type GetUserInventoryByAssetTypeIdOptions = Omit<GetUserInventoryOptions, "assetTypes"> & {
    assetTypeId: number;
};
export declare type GetUserInventoryByAssetTypeId = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetName: string;
        userAssetId: number;
        assetId: number;
        serialNumber: number;
        owner: {
            userId: number;
            username: string;
            buildersClubMembershipType: "None" | string;
        };
        created: string;
        updated: string;
    }[];
};
export default class InventoryAPI extends BaseAPI {
    constructor(client: Client);
    getPackageAssets(options: GetPackageAssetsOptions): Promise<GetPackageAssets>;
    getUserCollectibles(options: GetUserCollectiblesOptions): Promise<GetUserCollectibles>;
    getUserItemsByTypeAndTargetId(options: GetUserItemsByTypeAndTargetIdOptions): Promise<GetUserItemsByTypeAndTargetId>;
    getAssetOwners(options: GetAssetOwnersOptions): Promise<GetAssetOwners>;
    getUserInventory(options: GetUserInventoryOptions): Promise<GetUserInventory>;
    getUserInventoryByAssetTypeId(options: GetUserInventoryByAssetTypeIdOptions): Promise<GetUserInventoryByAssetTypeId>;
}
