import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetTradeOptions = {
    tradeId: number;
}
export type GetTrade = {
    offers: {
        user: {
            id: number;
            name: string;
            displayName: string;
        };
        userAssets: {
            id: number;
            serialNumber: number;
            assetId: number;
            name: string;
            recentAveragePrice: number;
            originalPrice: number;
            assetStock: number;
            membershipType: "None" | string;
        }[];
        robux: number;
    }[];
    id: number;
    user: {
        id: number;
        name: string;
        displayName: string;
    };
    created: string;
    expiration: string;
    isActive: boolean;
    status: string;
}
export type GetTradesByStatusTypeOptions = {
    tradeStatusType: "Inbound" | "Outbound" | "Completed" | "Inactive";
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetTradesByStatusType = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        id: number;
        user: {
            id: number;
            name: string;
            displayName: string;
        };
        created: string;
        expiration: string;
        isActive: boolean;
        status: string;
    }[];
}
export type GetTradesCountByStatusTypeOptions = {
    tradeStatusType: GetTradesByStatusTypeOptions["tradeStatusType"];
}
export type GetTradesCountByStatusType = {
    count: number;
}
export type GetTradesMetaData = {
    maxItemsPerSide: number;
    minValueRatio: number;
    tradeSystemMaxRobuxPercent: number;
    tradeSystemRobuxFee: number;
}
export type CanSelfTradeWithUserOptions = {
    userId: number;
}
export type CanSelfTradeWithUser = {
    canTrade: boolean;
    status: string;
}
export type AcceptTradeOptions = {
    tradeId: number;
}
export type AcceptTrade = unknown
export type CounterTradeOptions = {
    tradeId: number;
    offers: {
        userId: number;
        userAssetIds: number[];
        robux: number;
    }[];
}
export type CounterTrade = {
    id: number;
}
export type DeclineTradeOptions = {
    tradeId: number;
}
export type DeclineTrade = unknown
export type SendTradeOptions = Omit<CounterTradeOptions, "tradeId">;
export type SendTrade = {
    id: number;
}


export default class TradesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://thumbnails.roblox.com/"
        });
    }

    getTrade (options: GetTradeOptions): Promise<GetTrade> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}`
            },
            json: true
        })
            .then(response => response.body);
    }

    getTradesByStatusType (options: GetTradesByStatusTypeOptions): Promise<GetTradesByStatusType> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeStatusType}`
            },
            json: true
        })
            .then(response => response.body);
    }

    getTradesCountByStatusType (options: GetTradesCountByStatusTypeOptions): Promise<GetTradesCountByStatusType> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeStatusType}/count`
            },
            json: true
        })
            .then(response => response.body);
    }

    getTradesMetaData (): Promise<GetTradesMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/metadata`
            },
            json: true
        })
            .then(response => response.body);
    }

    canTradeWith (options: CanSelfTradeWithUserOptions): Promise<CanSelfTradeWithUser> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/can-trade-with`
            },
            json: true
        })
            .then(response => response.body);
    }

    acceptTrade (options: AcceptTradeOptions): Promise<AcceptTrade> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/accept`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    counterTrade (options: CounterTradeOptions): Promise<CounterTrade> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/counter`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    declineTrade (options: DeclineTradeOptions): Promise<DeclineTrade> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/${options.tradeId}/decline`,
                method: "POST"
            },
            json: true
        })
            .then(response => response.body);
    }

    sendTrade (options: SendTradeOptions): Promise<SendTrade> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/trades/send`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
