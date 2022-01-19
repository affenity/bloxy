import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type EngagementPayoutsGetUniversePayoutHistoryOptions = {
    universeId: number;
    startDate: string;
    endDate: string;
};
export declare type EngagementPayoutsGetUniversePayoutHistory = unknown;
export declare class EngagementPayoutsAPI extends BaseAPI {
    constructor(client: Client);
    getUniversePayoutHistory(options: EngagementPayoutsGetUniversePayoutHistoryOptions): Promise<EngagementPayoutsGetUniversePayoutHistory>;
}
