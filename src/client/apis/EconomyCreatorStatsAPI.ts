import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type EconomyCreatorStatsGetUniverseStatsOptions = {
  universeId: number;
  type: "PremiumUpsells" | "PremiumVisits";
  startTime: string;
  endTime: string;
};
export type EconomyCreatorStatsGetUniverseStats = {
  dataGranularity: "Hourly" | string;
  data: unknown;
};

export class EconomyCreatorStatsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://economycreatorstats.roblox.com/"
    });
  }

  getUniverseStats(
    options: EconomyCreatorStatsGetUniverseStatsOptions
  ): Promise<EconomyCreatorStatsGetUniverseStats> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universes/${options.universeId}/stats`,
        qs: {
          "request.type": options.type,
          "request.startTime": options.startTime,
          "request.endTime": options.endTime
        }
      },
      json: true
    }).then((response) => response.body);
  }
}
