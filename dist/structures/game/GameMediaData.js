"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameMediaData {
    constructor(data, client) {
        this.client = client;
        this.assetTypeId = data.assetTypeId;
        this.assetType = data.assetType;
        this.imageId = data.imageId;
        this.videoHash = data.videoHash;
        this.videoTitle = data.videoTitle;
        this.approved = data.approved;
    }
}
exports.default = GameMediaData;
