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
    emotes: {
        assetId: number;
        assetName: string;
        position: number;
    }[];
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
    basicBodyColorsPalette: ColorPalette[];
    minimumDeltaEBodyColorDifference: number;
    proportionsAndBodyTypeEnabledForUser: boolean;
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
export declare type RedrawThumbnail = unknown;
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
export type UpdateOutfitOptions = Omit<GetOutfit, "isEditable">;
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

    getSelfAvatar (): Promise<GetUserAvatar> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAvatarMetaData (): Promise<GetAvatarMetadata> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/avatar/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAvatarRules (): Promise<GetAvatarRules> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar-rules",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserAvatar (options: GetUserAvatarOptions): Promise<GetUserAvatar> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/avatar`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserCurrentlyWearing (options: GetUserCurrentlyWearingOptions): Promise<GetUserCurrentlyWearing> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/currently-wearing`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserOutfits (options: GetUserOutfitsOptions): Promise<GetUserOutfits> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/outfits`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    removeAssetFromAvatar (options: RemoveAssetFromAvatarOptions): Promise<RemoveAssetFromAvatar> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/remove`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    wearAssetOnAvatar (options: WearAssetOnAvatarOptions): Promise<WearAssetOnAvatar> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/avatar/assets/${options.assetId}/wear`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    redrawThumbnail (): Promise<RedrawThumbnail> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/redraw-thumbnail",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setSelfAvatarBodyColors (options: SetBodyColorsOptions): Promise<SetBodyColors> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-body-colors",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setSelfAvatarType (options: SetPlayerAvatarTypeOptions): Promise<SetPlayerAvatarType> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-player-avatar-type",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setSelfAvatarScales (options: SetPlayerAvatarScalesOptions): Promise<SetPlayerAvatarScales> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-scales",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setSelfWearingAssets (options: SetPlayerAvatarWearingAssetsOptions): Promise<GetUserCurrentlyWearing> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/avatar/set-swearing-assets",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getOutfit (options: GetOutfitOptions): Promise<GetOutfit> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/details`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    deleteOutfit (options: DeleteOutfitOptions): Promise<DeleteOutfit> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/delete`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateOutfit (options: UpdateOutfitOptions): Promise<UpdateOutfit> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.id}/update`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    wearOutfit (options: WearOutfitOptions): Promise<WearOutfit> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/outfits/${options.userOutfitId}/wear`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    createOutfit (options: CreateOutfitOptions): Promise<CreateOutfit> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/outfits/create",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getRecentlyUsed (options: GetRecentItemsOptions): Promise<GetRecentItems> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/recent-items/${options.recentItemListType}/list`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
