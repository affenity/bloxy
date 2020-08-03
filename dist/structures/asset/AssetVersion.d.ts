import Client from "../../client";
import { CreatorType } from "../../util/constants";
import PartialUser from "../user/PartialUser";
import PartialGameUniverse from "../game/GameUniverse/PartialGameUniverse";
export interface AssetVersionOptions {
    Id: number;
    AssetId: number;
    VersionNumber: number;
    ParentAssetVersionId: number;
    CreatorType: unknown;
    CreatingUniverseId: number | null;
    Created: string;
    Updated: string;
}
export declare class AssetVersion {
    client: Client;
    id: number;
    assetId: number;
    versionNumber: number;
    parentAssetVersionId: number | null;
    creatorType: CreatorType;
    createdForUniverse: PartialGameUniverse | null;
    creator: PartialUser;
    created: Date;
    updated: Date;
    constructor(data: any, client: Client);
}
