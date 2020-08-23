import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetUniversePayoutHistoryOptions = {
    universeId: number;
    startDate: string;
    endDate: string;
};
export declare type GetUniversePayoutHistory = unknown;
export default class EngagementPayoutsAPI extends BaseAPI {
    constructor(client: Client);
    getUniversePayoutHistory(options: GetUniversePayoutHistoryOptions): Promise<GetUniversePayoutHistory>;
}
