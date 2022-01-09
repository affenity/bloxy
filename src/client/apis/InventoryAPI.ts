import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type InventoryCanViewInventory = {
  canView: boolean;
};
export type InventoryItem = {
  name: string;
  displayName: string;
  filter: string;
  id: number;
  type: string;
  categoryType: string;
};
export type InventoryCategory = {
  name: string;
  displayName: string;
  categoryType: string;
  items: InventoryItem[];
};
export type InventoryCategories = {
  categories: InventoryCategory[];
};
export type InventoryGetPackageAssetsOptions = {
  packageId: number;
};
export type InventoryGetPackageAssets = {
  assetIds: number[];
};
export type InventoryGetUserCollectiblesOptions = {
  userId: number;
  assetType?:
    | "Image"
    | "TShirt"
    | "Audio"
    | "Mesh"
    | "Lua"
    | "HTML"
    | "Text"
    | "Hat"
    | "Place"
    | "Model"
    | "Shirt"
    | "Pants"
    | "Decal"
    | "Avatar"
    | "Head"
    | "Face"
    | "Gear"
    | "Badge"
    | "GroupEmblem"
    | "Animation"
    | "Arms"
    | "Legs"
    | "Torso"
    | "RightArm"
    | "LeftArm"
    | "LeftLeg"
    | "RightLeg"
    | "Package"
    | "YouTubeVideo"
    | "GamePass"
    | "App"
    | "Code"
    | "Plugin"
    | "SolidModel"
    | "MeshPart"
    | "HairAccessory"
    | "NeckAccessory"
    | "ShoulderAccessory"
    | "FrontAccessory"
    | "BackAccessory"
    | "WaistAccessory"
    | "ClimbAnimation"
    | "DeathAnimation"
    | "FallAnimation"
    | "IdleAnimation"
    | "JumpAnimation"
    | "RunAnimation"
    | "SwimAnimation"
    | "WalkAnimation"
    | "PoseAnimation"
    | "LocalizationTableManifest"
    | "LocalizationTableTranslation"
    | "EmoteAnimation"
    | "Video"
    | "TexturePack";
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type InventoryGetUserCollectibles = {
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
export type InventoryGetUserItemsByTypeAndTargetIdOptions = {
  userId: number;
  itemType: "Asset" | "GamePass" | "Badge" | "Bundle";
  itemTargetId: number;
};
export type InventoryGetUserItemsByTypeAndTargetId = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    Id: number;
    Name: string;
    Type: InventoryGetUserItemsByTypeAndTargetIdOptions["itemType"];
    InstanceId: number;
  }[];
};
export type InventoryGetAssetOwnersOptions = {
  assetId: number;
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type InventoryGetAssetOwners = {
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
export type InventoryGetUserInventoryOptions = {
  userId: number;
  assetTypes: InventoryGetUserCollectiblesOptions["assetType"][];
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
  sortOrder?: "Asc" | "Desc";
};
export type InventoryGetUserInventory = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    assetId: number;
    name: string;
    assetType: InventoryGetUserCollectiblesOptions["assetType"];
    created: string;
  }[];
};
export type InventoryGetUserInventoryByAssetTypeIdOptions = Omit<
  InventoryGetUserInventoryOptions,
  "assetTypes"
> & {
  assetTypeId: number;
};
export type InventoryGetUserInventoryByAssetTypeId = {
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
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://inventory.roblox.com/"
    });
  }

  getPackageAssets(
    options: InventoryGetPackageAssetsOptions
  ): Promise<InventoryGetPackageAssets> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/packages/${options.packageId}/assets`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserCollectibles(
    options: InventoryGetUserCollectiblesOptions
  ): Promise<InventoryGetUserCollectibles> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/assets/collectibles`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserItemsByTypeAndTargetId(
    options: InventoryGetUserItemsByTypeAndTargetIdOptions
  ): Promise<InventoryGetUserItemsByTypeAndTargetId> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/items/${options.itemType}/${options.itemTargetId}`
      },
      json: true
    }).then((response) => response.body);
  }

  canViewInventory(options: {
    userId: number;
  }): Promise<InventoryCanViewInventory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/can-view-inventory`
      },
      json: true
    }).then((response) => response.body);
  }

  getCategories(options: { userId: number }): Promise<InventoryCategories> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/categories`
      },
      json: true
    }).then((response) => response.body);
  }

  getCategoriesFavorites(options: {
    userId: number;
  }): Promise<InventoryCategories> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/categories/favorites`
      },
      json: true
    }).then((response) => response.body);
  }

  getAssetOwners(
    options: InventoryGetAssetOwnersOptions
  ): Promise<InventoryGetAssetOwners> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/assets/${options.assetId}/owners`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserInventory(
    options: InventoryGetUserInventoryOptions
  ): Promise<InventoryGetUserInventory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/users/${options.userId}/inventory`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserInventoryByAssetTypeId(
    options: InventoryGetUserInventoryByAssetTypeIdOptions
  ): Promise<InventoryGetUserInventoryByAssetTypeId> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v2/users/${options.userId}/inventory/${options.assetTypeId}`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }
}
