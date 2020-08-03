"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetVersion = void 0;
const tslib_1 = require("tslib");
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGameUniverse_1 = tslib_1.__importDefault(require("../game/GameUniverse/PartialGameUniverse"));
class AssetVersion {
    constructor(data, client) {
        this.client = client;
        this.id = data.Id;
        this.assetId = data.AssetId;
        this.versionNumber = data.VersionNumber;
        this.parentAssetVersionId = data.ParentAssetVersionId;
        this.creatorType = data.CreatorType;
        this.creator = new PartialUser_1.default({
            id: data.CreatorTargetId
        }, this.client);
        this.createdForUniverse = data.CreatingUniverseId ? new PartialGameUniverse_1.default({
            id: data.CreatingUniverseId
        }, client) : null;
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
    }
}
exports.AssetVersion = AssetVersion;
