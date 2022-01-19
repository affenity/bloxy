import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type InventoryCanViewInventory = {
    canView: boolean;
};
export declare type InventoryItem = {
    name: string;
    displayName: string;
    filter: string;
    id: number;
    type: string;
    categoryType: string;
};
export declare type InventoryCategory = {
    name: string;
    displayName: string;
    categoryType: string;
    items: InventoryItem[];
};
export declare type InventoryCategories = {
    categories: InventoryCategory[];
};
export declare type InventoryGetPackageAssetsOptions = {
    packageId: number;
};
export declare type InventoryGetPackageAssets = {
    assetIds: number[];
};
export declare type InventoryGetUserCollectiblesOptions = {
    userId: number;
    assetType?: "Image" | "TShirt" | "Audio" | "Mesh" | "Lua" | "HTML" | "Text" | "Hat" | "Place" | "Model" | "Shirt" | "Pants" | "Decal" | "Avatar" | "Head" | "Face" | "Gear" | "Badge" | "GroupEmblem" | "Animation" | "Arms" | "Legs" | "Torso" | "RightArm" | "LeftArm" | "LeftLeg" | "RightLeg" | "Package" | "YouTubeVideo" | "GamePass" | "App" | "Code" | "Plugin" | "SolidModel" | "MeshPart" | "HairAccessory" | "NeckAccessory" | "ShoulderAccessory" | "FrontAccessory" | "BackAccessory" | "WaistAccessory" | "ClimbAnimation" | "DeathAnimation" | "FallAnimation" | "IdleAnimation" | "JumpAnimation" | "RunAnimation" | "SwimAnimation" | "WalkAnimation" | "PoseAnimation" | "LocalizationTableManifest" | "LocalizationTableTranslation" | "EmoteAnimation" | "Video" | "TexturePack";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type InventoryGetUserCollectibles = {
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
export declare type InventoryGetUserItemsByTypeAndTargetIdOptions = {
    userId: number;
    itemType: "Asset" | "GamePass" | "Badge" | "Bundle";
    itemTargetId: number;
};
export declare type InventoryGetUserItemsByTypeAndTargetId = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        Id: number;
        Name: string;
        Type: InventoryGetUserItemsByTypeAndTargetIdOptions["itemType"];
        InstanceId: number;
    }[];
};
export declare type InventoryGetAssetOwnersOptions = {
    assetId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type InventoryGetAssetOwners = {
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
export declare type InventoryGetUserInventoryOptions = {
    userId: number;
    assetTypes: InventoryGetUserCollectiblesOptions["assetType"][];
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
};
export declare type InventoryGetUserInventory = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
        assetType: InventoryGetUserCollectiblesOptions["assetType"];
        created: string;
    }[];
};
export declare type InventoryGetUserInventoryByAssetTypeIdOptions = Omit<InventoryGetUserInventoryOptions, "assetTypes"> & {
    assetTypeId: number;
};
export declare type InventoryGetUserInventoryByAssetTypeId = {
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
export declare class InventoryAPI extends BaseAPI {
    constructor(client: Client);
    getPackageAssets(options: InventoryGetPackageAssetsOptions): Promise<InventoryGetPackageAssets>;
    getUserCollectibles(options: InventoryGetUserCollectiblesOptions): Promise<InventoryGetUserCollectibles>;
    getUserItemsByTypeAndTargetId(options: InventoryGetUserItemsByTypeAndTargetIdOptions): Promise<InventoryGetUserItemsByTypeAndTargetId>;
    canViewInventory(options: {
        userId: number;
    }): Promise<InventoryCanViewInventory>;
    getCategories(options: {
        userId: number;
    }): Promise<InventoryCategories>;
    getCategoriesFavorites(options: {
        userId: number;
    }): Promise<InventoryCategories>;
    getAssetOwners(options: InventoryGetAssetOwnersOptions): Promise<InventoryGetAssetOwners>;
    getUserInventory(options: InventoryGetUserInventoryOptions): Promise<InventoryGetUserInventory>;
    getUserInventoryByAssetTypeId(options: InventoryGetUserInventoryByAssetTypeIdOptions): Promise<InventoryGetUserInventoryByAssetTypeId>;
}
