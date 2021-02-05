import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetPackageAssetsOptions = {
    packageId: number;
}
export type GetPackageAssets = {
    assetIds: number[];
}
export type GetUserCollectiblesOptions = {
    userId: number;
    assetType?: "Image" | "TShirt" | "Audio" | "Mesh" | "Lua" | "HTML" | "Text" | "Hat" | "Place" | "Model" | "Shirt" | "Pants" | "Decal" | "Avatar" | "Head" | "Face" | "Gear" | "Badge" | "GroupEmblem" | "Animation" | "Arms" | "Legs" | "Torso" | "RightArm" | "LeftArm" | "LeftLeg" | "RightLeg" | "Package" | "YouTubeVideo" | "GamePass" | "App" | "Code" | "Plugin" | "SolidModel" | "MeshPart" | "HairAccessory" | "NeckAccessory" | "ShoulderAccessory" | "FrontAccessory" | "BackAccessory" | "WaistAccessory" | "ClimbAnimation" | "DeathAnimation" | "FallAnimation" | "IdleAnimation" | "JumpAnimation" | "RunAnimation" | "SwimAnimation" | "WalkAnimation" | "PoseAnimation" | "LocalizationTableManifest" | "LocalizationTableTranslation" | "EmoteAnimation" | "Video" | "TexturePack";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUserCollectibles = {
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
}
export type GetUserItemsByTypeAndTargetIdOptions = {
    userId: number;
    itemType: "Asset" | "GamePass" | "Badge" | "Bundle";
    itemTargetId: number;
}
export type GetUserItemsByTypeAndTargetId = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        Id: number;
        Name: string;
        Type: GetUserItemsByTypeAndTargetIdOptions["itemType"];
        InstanceId: number;
    }[];
}
export type GetAssetOwnersOptions = {
    assetId: number;
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetAssetOwners = {
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
}
export type GetUserInventoryOptions = {
    userId: number;
    assetTypes: GetUserCollectiblesOptions["assetType"][];
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
    sortOrder?: "Asc" | "Desc";
}
export type GetUserInventory = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        assetId: number;
        name: string;
        assetType: GetUserCollectiblesOptions["assetType"];
        created: string;
    }[];
}
export type GetUserInventoryByAssetTypeIdOptions = Omit<GetUserInventoryOptions, "assetTypes"> & {
    assetTypeId: number;
}
export type GetUserInventoryByAssetTypeId = {
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
}


export default class InventoryAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://inventory.roblox.com/"
        });
    }

    getPackageAssets (options: GetPackageAssetsOptions): Promise<GetPackageAssets> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/packages/${options.packageId}/assets`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserCollectibles (options: GetUserCollectiblesOptions): Promise<GetUserCollectibles> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/assets/collectibles`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserItemsByTypeAndTargetId (options: GetUserItemsByTypeAndTargetIdOptions): Promise<GetUserItemsByTypeAndTargetId> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/items/${options.itemType}/${options.itemTargetId}`
            },
            json: true
        })
            .then(response => response.body);
    }

    getAssetOwners (options: GetAssetOwnersOptions): Promise<GetAssetOwners> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/assets/${options.assetId}/owners`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserInventory (options: GetUserInventoryOptions): Promise<GetUserInventory> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserInventoryByAssetTypeId (options: GetUserInventoryByAssetTypeIdOptions): Promise<GetUserInventoryByAssetTypeId> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v2/users/${options.userId}/inventory/${options.assetTypeId}`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
