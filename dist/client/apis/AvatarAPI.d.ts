import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type BodyScales = {
    height: number;
    width: number;
    head: number;
    depth: number;
    proportion: number;
    bodyType: number;
};
export declare type BodyColors = {
    headColorId: number;
    torsoColorId: number;
    rightArmColorId: number;
    leftArmColorId: number;
    rightLegColorId: number;
    leftLegColorId: number;
};
export declare type Scale = {
    min: number;
    max: number;
    increment: number;
};
export declare type ColorPalette = {
    brickColorId: number;
    hexColor: string;
    name: string;
};
export declare type UserAvatar = {
    scales: BodyScales;
    playerAvatarType: "R6" | "R15" | string;
    bodyColors: BodyColors;
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
export declare type GetAvatarMetadata = {
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
export declare type GetAvatarRules = {
    playerAvatarTypes: ("R6" | "R15" | string)[];
    scales: {
        height: Scale;
        width: Scale;
        head: Scale;
        bodyType: Scale;
    };
    wearableAssetTypes: {
        maxNumber: number;
        id: number;
        name: string;
    }[];
    bodyColorsPalette: ColorPalette[];
    basicBOdyColorsPalette: ColorPalette[];
    minimumDeltaEBodyColorDifference: number;
    proprtionsAndBodyTypeEnabledForUser: boolean;
    defaultClothingAssetLists: {
        defaultShirtAssetIds: number[];
        defaultPantAssetIds: number[];
    };
    bundlesEnabledForUser: boolean;
    emotesEnabledForUser: boolean;
};
export declare type GetUserAvatarOptions = {
    userId: number;
};
export declare type GetUserAvatar = UserAvatar;
export declare type GetUserCurrentlyWearingOptions = {
    userId: number;
};
export declare type GetUserCurrentlyWearing = {
    assetIds: number[];
};
export declare type GetUserOutfitsOptions = {
    userId: number;
    page?: number;
    itemsPerPage?: number;
    isEditable?: boolean;
};
export declare type GetUserOutfits = {
    filteredCount: number;
    data: {
        id: number;
        name: string;
        isEditable: boolean;
    }[];
    total: number;
};
export declare type RemoveAssetFromAvatarOptions = {
    assetId: number;
};
export declare type RemoveAssetFromAvatar = {
    success: boolean;
};
export declare type WearAssetOnAvatarOptions = {
    assetId: number;
};
export declare type WearAssetOnAvatar = {
    success: boolean;
};
export declare type RedrawThumbnail = {};
export declare type SetBodyColorsOptions = BodyColors;
export declare type SetBodyColors = {
    success: boolean;
};
export declare type SetPlayerAvatarTypeOptions = {
    playerAvatarType: "R6" | "R15" | string;
};
export declare type SetPlayerAvatarType = {
    success: boolean;
};
export declare type SetPlayerAvatarScalesOptions = BodyScales;
export declare type SetPlayerAvatarScales = {
    success: boolean;
};
export declare type SetPlayerAvatarWearingAssetsOptions = {
    assetIds: number[];
};
export declare type SetPlayerAvatarWearingAssets = {
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
export declare type GetOutfitOptions = {
    userOutfitId: number;
};
export declare type GetOutfit = {
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
    bodyColors: BodyColors;
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
export declare type DeleteOutfitOptions = {
    userOutfitId: number;
};
export declare type DeleteOutfit = {
    success: boolean;
};
export declare type UpdateOutfitOptions = Omit<GetOutfit, "isEditable">;
export declare type UpdateOutfit = {
    success: boolean;
};
export declare type WearOutfitOptions = {
    userOutfitId: number;
};
export declare type WearOutfit = SetPlayerAvatarWearingAssets;
export declare type CreateOutfitOptions = Omit<GetOutfit, "id" | "isEditable">;
export declare type CreateOutfit = {
    success: boolean;
};
export declare type GetRecentItemsOptions = {
    recentItemListType: "All" | "Clothing" | "BodyParts" | "AvatarAnimations" | "Accessories" | "Outfits" | "Gear" | string;
};
export declare type GetRecentItems = {
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
export default class AvatarAPI extends BaseAPI {
    constructor(client: Client);
    getSelfAvatar(): Promise<GetUserAvatar>;
    getAvatarMetaData(): Promise<GetAvatarMetadata>;
    getAvatarRules(): Promise<GetAvatarRules>;
    getUserAvatar(options: GetUserAvatarOptions): Promise<GetUserAvatar>;
    getUserCurrentlyWearing(options: GetUserCurrentlyWearingOptions): Promise<GetUserCurrentlyWearing>;
    getUserOutfits(options: GetUserOutfitsOptions): Promise<GetUserOutfits>;
    removeAssetFromAvatar(options: RemoveAssetFromAvatarOptions): Promise<RemoveAssetFromAvatar>;
    wearAssetOnAvatar(options: WearAssetOnAvatarOptions): Promise<WearAssetOnAvatar>;
    redrawThumbnail(): Promise<RedrawThumbnail>;
    setSelfAvatarBodyColors(options: SetBodyColorsOptions): Promise<SetBodyColors>;
    setSelfAvatarType(options: SetPlayerAvatarTypeOptions): Promise<SetPlayerAvatarType>;
    setSelfAvatarScales(options: SetPlayerAvatarScalesOptions): Promise<SetPlayerAvatarScales>;
    setSelfWearingAssets(options: SetPlayerAvatarWearingAssetsOptions): Promise<GetUserCurrentlyWearing>;
    getOutfit(options: GetOutfitOptions): Promise<GetOutfit>;
    deleteOutfit(options: DeleteOutfitOptions): Promise<DeleteOutfit>;
    updateOutfit(options: UpdateOutfitOptions): Promise<UpdateOutfit>;
    wearOutfit(options: WearOutfitOptions): Promise<WearOutfit>;
    createOutfit(options: CreateOutfitOptions): Promise<CreateOutfit>;
    getRecentlyUsed(options: GetRecentItemsOptions): Promise<GetRecentItems>;
}
