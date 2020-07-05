import Client from "../../client";
import { CreatorType } from "../../util/constants";
import PartialUser from "../user/PartialUser";
import GameUniverse from "../game/GameUniverse";


export class AssetVersion {
    public client: Client;
    public id: number;
    public assetId: number;
    public versionNumber: number;
    public parentAssetVersionId: number | null;
    public creatorType: CreatorType;
    public createdForUniverse: GameUniverse | null;
    public creator: PartialUser;
    public created: Date;
    public updated: Date;

    constructor (data: any, client: Client) {
        this.client = client;
        this.id = data.Id;
        this.assetId = data.AssetId;
        this.versionNumber = data.VersionNumber;
        this.parentAssetVersionId = data.ParentAssetVersionId;
        this.creatorType = data.CreatorType;
        this.creator = new PartialUser({
            id: data.CreatorTargetId
        }, this.client);
        this.createdForUniverse = data.CreatingUniverseId ? new GameUniverse({
            id: data.CreatingUniverseId
        }, client) : null;
        this.created = new Date(data.Created);
        this.updated = new Date(data.Updated);
    }
}
