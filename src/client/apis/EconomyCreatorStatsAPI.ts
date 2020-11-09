import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetUniverseStatsOptions = {
    universeId: number;
    type: "PremiumUpsells" | "PremiumVisits";
    startTime: string;
    endTime: string;
}
export type GetUniverseStats = {
    dataGranularity: "Hourly" | string;
    data: unknown;
}

export default class EconomyCreatorStatsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://economycreatorstats.roblox.com/"
        });
    }

    getUniverseStats (options: GetUniverseStatsOptions): Promise<GetUniverseStats> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universes/${options.universeId}/stats`,
                qs: {
                    "request.type": options.type,
                    "request.startTime": options.startTime,
                    "request.endTime": options.endTime
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
