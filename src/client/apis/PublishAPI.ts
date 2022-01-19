import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type PublishUploadAssetsOptions = {
  files: unknown;
};
export type PublishUploadAssets = {
  AssetDetails: {
    assetId: number;
    assetFileName: string;
    uploadAssetError: "None" | string;
  }[];
};
export type PublishAudioOptions = {
  name: string;
  file: unknown;
  groupId?: number;
  paymentSource: string;
};
export type PublishAudio = {
  Id: number;
  Name: string;
};
export type PublishVerifyAudioOptions = PublishAudioOptions;
export type PublishVerifyAudio = {
  price: number;
  canAfford: boolean;
};
export type PublishBadgeIconOptions = {
  badgeId: number;
  files: unknown;
};
export type PublishBadgeIcon = {
  targetId: number;
};
export type PublishGamePassIconOptions = {
  gamePassId: number;
  files: unknown;
};
export type PublishGamePassIcon = {
  targetId: number;
};
export type PublishUploadGameThumbnailOptions = {
  gameId: number;
  files: unknown;
};
export type PublishUploadGameThumbnail = {
  targetId: number;
};
export type PublishUploadPluginIconOptions = {
  pluginId: number;
  files: unknown;
};
export type PublishUploadPluginIcon = {
  targetId: number;
};

export class PublishAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://publish.roblox.com/"
    });
  }

  /**
   * @hidden
   */
  uploadAssets(
    options: PublishUploadAssetsOptions
  ): Promise<PublishUploadAssets> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/upload`,
        method: "POST",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }

  publishAudio(options: PublishAudioOptions): Promise<PublishAudio> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/audio`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  verifyAudio(options: PublishVerifyAudioOptions): Promise<PublishVerifyAudio> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/audio/verify`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  publishBadgeIcon(
    options: PublishBadgeIconOptions
  ): Promise<PublishBadgeIcon> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/badges/${options.badgeId}/icon`,
        method: "POST",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }

  /**
   * @hidden
   */
  publishGamePassIcon(
    options: PublishGamePassIconOptions
  ): Promise<PublishGamePassIcon> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/game-passes/${options.gamePassId}/icon`,
        method: "POST",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }

  uploadGameThumbnail(
    options: PublishUploadGameThumbnailOptions
  ): Promise<PublishUploadGameThumbnail> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/games/${options.gameId}/thumbnail/image`,
        method: "POST",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }

  uploadPluginIcon(
    options: PublishUploadPluginIconOptions
  ): Promise<PublishUploadPluginIcon> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/plugins/${options.pluginId}/icon`,
        method: "POST",
        body: options.files
      },
      json: true
    }).then((response) => response.body);
  }
}
