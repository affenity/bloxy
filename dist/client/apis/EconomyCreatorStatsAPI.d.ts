import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type EconomyCreatorStatsGetUniverseStatsOptions = {
    universeId: number;
    type: "PremiumUpsells" | "PremiumVisits";
    startTime: string;
    endTime: string;
};
export declare type EconomyCreatorStatsGetUniverseStats = {
    dataGranularity: "Hourly" | string;
    data: unknown;
};
export declare class EconomyCreatorStatsAPI extends BaseAPI {
    constructor(client: Client);
    getUniverseStats(options: EconomyCreatorStatsGetUniverseStatsOptions): Promise<EconomyCreatorStatsGetUniverseStats>;
}
