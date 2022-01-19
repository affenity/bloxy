import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import type {
  AssetIdOption,
  AssetIdsOption,
  SuccessResponse,
  UserIdOption
} from "../..";

export type AvatarBodyScales = {
  height: number;
  width: number;
  head: number;
  depth: number;
  proportion: number;
  bodyType: number;
};
export type AvatarBodyColors = {
  headColorId: number;
  torsoColorId: number;
  rightArmColorId: number;
  leftArmColorId: number;
  rightLegColorId: number;
  leftLegColorId: number;
};
export type AvatarScale = {
  min: number;
  max: number;
  increment: number;
};
export type AvatarColorPalette = {
  brickColorId: number;
  hexColor: string;
  name: string;
};

export type AvatarUserAvatar = {
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
export type AvatarGetMetaData = {
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
export type AvatarGetRules = {
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
export type AvatarGetUserOutfits = {
  filteredCount: number;
  data: {
    id: number;
    name: string;
    isEditable: boolean;
  }[];
  total: number;
};
export declare type AvatarRedrawThumbnail = unknown;
export type AvatarSetPlayerAvatarWearingAssets = {
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
export type AvatarGetOutfit = {
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
export type AvatarWearOutfit = AvatarSetPlayerAvatarWearingAssets;
export type AvatarGetRecentItems = {
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
export type AvatarGetUserOutfitsOptions = {
  userId: number;
  page?: number;
  itemsPerPage?: number;
  isEditable?: boolean;
};
export type AvatarSetSelfAvatarBodyColorsOptions = AvatarBodyColors;
export type AvatarSetSelfAvatarTypeOptions = {
  playerAvatarType: "R6" | "R15";
};
export type AvatarSetSelfAvatarScalesOptions = AvatarBodyScales;
export type AvatarGetOutfitOptions = {
  userOutfitId: number;
};
export type AvatarDeleteOutfitOptions = AvatarGetOutfitOptions;
export type AvatarUpdateOutfitOptions = Omit<AvatarGetOutfit, "isEditable">;
export type AvatarWearOutfitOptions = {
  userOutfitId: number;
};
export type AvatarCreateOutfitOptions = AvatarUpdateOutfitOptions;
export type AvatarGetRecentlyUsedOptions = {
  recentItemListType: string;
};

export class AvatarAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://avatar.roblox.com/"
    });
  }

  getSelfAvatar(): Promise<AvatarUserAvatar> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar"
      },
      json: true
    }).then((response) => response.body);
  }

  getAvatarMetaData(): Promise<AvatarGetMetaData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: "v1/avatar/metadata"
      },
      json: true
    }).then((response) => response.body);
  }

  getAvatarRules(): Promise<AvatarGetRules> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar-rules"
      },
      json: true
    }).then((response) => response.body);
  }

  getUserAvatar(options: UserIdOption): Promise<AvatarUserAvatar> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/avatar`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserCurrentlyWearing(options: UserIdOption): Promise<AssetIdsOption> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/currently-wearing`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserOutfits(
    options: AvatarGetUserOutfitsOptions
  ): Promise<AvatarGetUserOutfits> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/outfits`
      },
      json: true
    }).then((response) => response.body);
  }

  removeAssetFromAvatar(options: AssetIdOption): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/avatar/assets/${options.assetId}/remove`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  wearAssetOnAvatar(options: AssetIdOption): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/avatar/assets/${options.assetId}/wear`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  redrawThumbnail(): Promise<AvatarRedrawThumbnail> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar/redraw-thumbnail",
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  setSelfAvatarBodyColors(
    options: AvatarSetSelfAvatarBodyColorsOptions
  ): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar/set-body-colors",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setSelfAvatarType(
    options: AvatarSetSelfAvatarTypeOptions
  ): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar/set-player-avatar-type",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setSelfAvatarScales(
    options: AvatarSetSelfAvatarScalesOptions
  ): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar/set-scales",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  setSelfWearingAssets(options: AssetIdsOption): Promise<AssetIdsOption> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/avatar/set-swearing-assets",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getOutfit(options: AvatarGetOutfitOptions): Promise<AvatarGetOutfit> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/outfits/${options.userOutfitId}/details`
      },
      json: true
    }).then((response) => response.body);
  }

  deleteOutfit(options: AvatarDeleteOutfitOptions): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/outfits/${options.userOutfitId}/delete`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  updateOutfit(options: AvatarUpdateOutfitOptions): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/outfits/${options.id}/update`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  wearOutfit(options: AvatarWearOutfitOptions): Promise<AvatarWearOutfit> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/outfits/${options.userOutfitId}/wear`,
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  createOutfit(options: AvatarCreateOutfitOptions): Promise<SuccessResponse> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/outfits/create",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getRecentlyUsed(
    options: AvatarGetRecentlyUsedOptions
  ): Promise<AvatarGetRecentItems> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/recent-items/${options.recentItemListType}/list`
      },
      json: true
    }).then((response) => response.body);
  }
}
