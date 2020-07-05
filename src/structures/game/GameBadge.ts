import PartialGameUniverse from "./PartialGameUniverse";
import Client from "../../client";


export interface GameBadgeOptions {
    id: number;
    name: string;
    description: string;
    displayName: string;
    displayDescription: string;
    enabled: boolean;
    iconImageId: number;
    displayIconImageId: number;
    created: string;
    updated: string;
    statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: {
        id: number;
        name: string;
        rootPlaceId: number;
    };
}

export default class GameBadge {
    public client: Client;
    public id: number;
    public name: string;
    public description: string;
    public displayedDescription: string;
    public displayedName: string;
    public enabled: boolean;
    public iconId: number;
    public displayedIconId: number;
    public created: Date;
    public updated: Date;
    public statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: PartialGameUniverse;

    constructor (data: GameBadgeOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.displayedName = data.displayName;
        this.displayedDescription = data.displayDescription;
        this.enabled = data.enabled;
        this.iconId = data.iconImageId;
        this.displayedIconId = data.displayIconImageId;
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
        this.statistics = {
            pastDayAwardedCount: data.statistics.pastDayAwardedCount,
            awardedCount: data.statistics.awardedCount,
            winRatePercentage: data.statistics.winRatePercentage
        };
        this.awardingUniverse = new PartialGameUniverse({
            id: data.awardingUniverse.id,
            rootPlace: {
                id: data.awardingUniverse.rootPlaceId
            },
            name: data.awardingUniverse.name
        }, client);
    }
}
