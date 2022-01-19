import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import type { AssetIdOption, AssetIdsOption, SuccessResponse, UserIdOption } from "../..";
export declare type AvatarBodyScales = {
    height: number;
    width: number;
    head: number;
    depth: number;
    proportion: number;
    bodyType: number;
};
export declare type AvatarBodyColors = {
    headColorId: number;
    torsoColorId: number;
    rightArmColorId: number;
    leftArmColorId: number;
    rightLegColorId: number;
    leftLegColorId: number;
};
export declare type AvatarScale = {
    min: number;
    max: number;
    increment: number;
};
export declare type AvatarColorPalette = {
    brickColorId: number;
    hexColor: string;
    name: string;
};
export declare type AvatarUserAvatar = {
    scales: AvatarBodyScales;
    playerAvatarType: "R6" | "R15" | string;
    bodyColors: AvatarBodyColors;
    assets: {
        id: number;
        name: string;
        assetType: {
            id: number;
            name: string;
        };
    }[];
    defaultShirtApplied: boolean;
    defaultPantsApplied: boolean;
    emotes: {
        assetId: number;
        assetName: string;
        position: number;
    }[];
};
export declare type AvatarGetMetaData = {
    enableDefaultClothingMessage: boolean;
    isAvatarScaleEmbeddedInTab: boolean;
    isBodyTypeScaleOutOfTab: boolean;
    scaleHeightIncrement: number;
    scaleWidthIncrement: number;
    scaleHeadIncrement: number;
    scaleProportionIncrement: number;
    scaleBodyTypeIncrement: number;
    supportProportionAndBodyType: boolean;
    showDefaultClothingMessageOnPageLoad: boolean;
    areThreeDeeThumbsEnabled: boolean;
};
export declare type AvatarGetRules = {
    playerAvatarTypes: ("R6" | "R15" | string)[];
    scales: {
        height: AvatarScale;
        width: AvatarScale;
        head: AvatarScale;
        bodyType: AvatarScale;
    };
    wearableAssetTypes: {
        maxNumber: number;
        id: number;
        name: string;
    }[];
    bodyColorsPalette: AvatarColorPalette[];
    basicBodyColorsPalette: AvatarColorPalette[];
    minimumDeltaEBodyColorDifference: number;
    proportionsAndBodyTypeEnabledForUser: boolean;
    defaultClothingAssetLists: {
        defaultShirtAssetIds: number[];
        defaultPantAssetIds: number[];
    };
    bundlesEnabledForUser: boolean;
    emotesEnabledForUser: boolean;
};
export declare type AvatarGetUserOutfits = {
    filteredCount: number;
    data: {
        id: number;
        name: string;
        isEditable: boolean;
    }[];
    total: number;
};
export declare type AvatarRedrawThumbnail = unknown;
export declare type AvatarSetPlayerAvatarWearingAssets = {
    invalidAssets?: {
        id: number;
        name: string;
        assetType: {
            id: number;
            name: string;
        };
    }[];
    invalidAssetIds?: number[];
    success: boolean;
};
export declare type AvatarGetOutfit = {
    id: number;
    name: string;
    assets: {
        id: number;
        name: string;
        assetType: {
            id: number;
            name: string;
        };
    }[];
    bodyColors: AvatarBodyColors;
    scale: {
        height: number;
        width: number;
        head: number;
        depth: number;
        proportion: number;
        bodyType: number;
    };
    playerAvatarType: string;
    isEditable: boolean;
};
export declare type AvatarWearOutfit = AvatarSetPlayerAvatarWearingAssets;
export declare type AvatarGetRecentItems = {
    data: {
        id: number;
        name: string;
        type: string;
        assetType: {
            id: number;
            name: string;
        };
        isEditable: boolean;
    }[];
    total: number;
};
export declare type AvatarGetUserOutfitsOptions = {
    userId: number;
    page?: number;
    itemsPerPage?: number;
    isEditable?: boolean;
};
export declare type AvatarSetSelfAvatarBodyColorsOptions = AvatarBodyColors;
export declare type AvatarSetSelfAvatarTypeOptions = {
    playerAvatarType: "R6" | "R15";
};
export declare type AvatarSetSelfAvatarScalesOptions = AvatarBodyScales;
export declare type AvatarGetOutfitOptions = {
    userOutfitId: number;
};
export declare type AvatarDeleteOutfitOptions = AvatarGetOutfitOptions;
export declare type AvatarUpdateOutfitOptions = Omit<AvatarGetOutfit, "isEditable">;
export declare type AvatarWearOutfitOptions = {
    userOutfitId: number;
};
export declare type AvatarCreateOutfitOptions = AvatarUpdateOutfitOptions;
export declare type AvatarGetRecentlyUsedOptions = {
    recentItemListType: string;
};
export declare class AvatarAPI extends BaseAPI {
    constructor(client: Client);
    getSelfAvatar(): Promise<AvatarUserAvatar>;
    getAvatarMetaData(): Promise<AvatarGetMetaData>;
    getAvatarRules(): Promise<AvatarGetRules>;
    getUserAvatar(options: UserIdOption): Promise<AvatarUserAvatar>;
    getUserCurrentlyWearing(options: UserIdOption): Promise<AssetIdsOption>;
    getUserOutfits(options: AvatarGetUserOutfitsOptions): Promise<AvatarGetUserOutfits>;
    removeAssetFromAvatar(options: AssetIdOption): Promise<SuccessResponse>;
    wearAssetOnAvatar(options: AssetIdOption): Promise<SuccessResponse>;
    redrawThumbnail(): Promise<AvatarRedrawThumbnail>;
    setSelfAvatarBodyColors(options: AvatarSetSelfAvatarBodyColorsOptions): Promise<SuccessResponse>;
    setSelfAvatarType(options: AvatarSetSelfAvatarTypeOptions): Promise<SuccessResponse>;
    setSelfAvatarScales(options: AvatarSetSelfAvatarScalesOptions): Promise<SuccessResponse>;
    setSelfWearingAssets(options: AssetIdsOption): Promise<AssetIdsOption>;
    getOutfit(options: AvatarGetOutfitOptions): Promise<AvatarGetOutfit>;
    deleteOutfit(options: AvatarDeleteOutfitOptions): Promise<SuccessResponse>;
    updateOutfit(options: AvatarUpdateOutfitOptions): Promise<SuccessResponse>;
    wearOutfit(options: AvatarWearOutfitOptions): Promise<AvatarWearOutfit>;
    createOutfit(options: AvatarCreateOutfitOptions): Promise<SuccessResponse>;
    getRecentlyUsed(options: AvatarGetRecentlyUsedOptions): Promise<AvatarGetRecentItems>;
}
