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
    client: Client;
    id: number;
    name: string;
    description: string;
    displayedDescription: string;
    displayedName: string;
    enabled: boolean;
    iconId: number;
    displayedIconId: number;
    created: Date;
    updated: Date;
    statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: PartialGameUniverse;
    constructor(data: GameBadgeOptions, client: Client);
}
