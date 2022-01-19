import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type EngagementPayoutsGetUniversePayoutHistoryOptions = {
  universeId: number;
  startDate: string;
  endDate: string;
};
export type EngagementPayoutsGetUniversePayoutHistory = unknown;

export class EngagementPayoutsAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://engagementpayouts.roblox.com/"
    });
  }

  getUniversePayoutHistory(
    options: EngagementPayoutsGetUniversePayoutHistoryOptions
  ): Promise<EngagementPayoutsGetUniversePayoutHistory> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/universe-payout-history`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }
}
