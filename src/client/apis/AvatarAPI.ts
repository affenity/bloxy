import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type BodyScales = {
    height: number;
    width: number;
    head: number;
    depth: number;
    proportion: number;
    bodyType: number;
}
export type BodyColors = {
    headColorId: number;
    torsoColorId: number;
    rightArmColorId: number;
    leftArmColorId: number;
    rightLegColorId: number;
    leftLegColorId: number;
};
export type Scale = {
    min: number;
    max: number;
    increment: number;
};
export type ColorPalette = {
    brickColorId: number;
    hexColor: string;
    name: string;
}

export type UserAvatar = {
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
}
export type GetAvatarMetadata = {
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
export type GetAvatarRules = {
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

}
export type GetUserAvatarOptions = {
    userId: number;
}
export type GetUserAvatar = UserAvatar;
export type GetUserCurrentlyWearingOptions = {
    userId: number;
}
export type GetUserCurrentlyWearing = {
    assetIds: number[];
};
export type GetUserOutfitsOptions = {
    userId: number;
    page?: number;
    itemsPerPage?: number;
    isEditable?: boolean;
}
export type GetUserOutfits = {
    filteredCount: number;
    data: {
        id: number;
        name: string;
        isEditable: boolean;
    }[];
    total: number;
};
export type RemoveAssetFromAvatarOptions = {
    assetId: number;
};
export type RemoveAssetFromAvatar = {
    success: boolean;
};
export type WearAssetOnAvatarOptions = {
    assetId: number;
};
export type WearAssetOnAvatar = {
    success: boolean;
};
export type RedrawThumbnail = {};
export type SetBodyColorsOptions = BodyColors;
export type SetBodyColors = {
    success: boolean;
}
export type SetPlayerAvatarTypeOptions = {
    playerAvatarType: "R6" | "R15" | string;
};
export type SetPlayerAvatarType = {
    success: boolean;
};
export type SetPlayerAvatarScalesOptions = BodyScales;
export type SetPlayerAvatarScales = {
    success: boolean;
}
export type SetPlayerAvatarWearingAssetsOptions = {
    assetIds: number[];
};
export type SetPlayerAvatarWearingAssets = {
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
}
export type GetOutfitOptions = {
    userOutfitId: number;
}
export type GetOutfit = {
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
export type DeleteOutfitOptions = {
    userOutfitId: number;
}
export type DeleteOutfit = {
    success: boolean;
}
export type UpdateOutfitOptions = Omit<GetOutfit, "isEditable" | "id">;
export type UpdateOutfit = {
    success: boolean;
}
export type WearOutfitOptions = {
    userOutfitId: number;
}
export type WearOutfit = SetPlayerAvatarWearingAssets;
export type CreateOutfitOptions = Omit<GetOutfit, "id" | "isEditable">
export type CreateOutfit = {
    success: boolean;
}
export type GetRecentItemsOptions = {
    recentItemListType: "All" | "Clothing" | "BodyParts" | "AvatarAnimations" | "Accessories" | "Outfits" | "Gear" | string;
}
export type GetRecentItems = {
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
}


export default class AvatarAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://avatar.roblox.com/"
        });
    }
}
