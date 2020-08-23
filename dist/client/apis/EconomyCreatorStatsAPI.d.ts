import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetUniverseStatsOptions = {
    universeId: number;
    type: "PremiumUpsells" | "PremiumVisits";
    startTime: string;
    endTime: string;
};
export declare type GetUniverseStats = {
    dataGranularity: "Hourly" | string;
    data: unknown;
};
export default class EconomyCreatorStatsAPI extends BaseAPI {
    constructor(client: Client);
    getUniverseStats(options: GetUniverseStatsOptions): Promise<GetUniverseStats>;
}
