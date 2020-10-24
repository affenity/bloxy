import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetUniversePayoutHistoryOptions = {
    universeId: number;
    startDate: string;
    endDate: string;
}
export type GetUniversePayoutHistory = unknown;


export default class EngagementPayoutsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://engagementpayouts.roblox.com/"
        });
    }

    getUniversePayoutHistory (options: GetUniversePayoutHistoryOptions): Promise<GetUniversePayoutHistory> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/universe-payout-history`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
