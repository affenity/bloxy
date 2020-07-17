import Client from "../../client";
import { CreatorType } from "../../util/constants";
import PartialUser from "../user/PartialUser";
import GameUniverse from "../game/GameUniverse";
export declare class AssetVersion {
    client: Client;
    id: number;
    assetId: number;
    versionNumber: number;
    parentAssetVersionId: number | null;
    creatorType: CreatorType;
    createdForUniverse: GameUniverse | null;
    creator: PartialUser;
    created: Date;
    updated: Date;
    constructor(data: any, client: Client);
}
