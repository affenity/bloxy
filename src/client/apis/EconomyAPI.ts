import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { SubmitDeveloperExchangeOptions as BillingAPISubmitDeveloperExchangeOptions } from "./BillingAPI";


export type GetAssetResaleDataOptions = {
    assetId: number;
}
export type GetAssetResaleData = {
    assetStock: number;
    sales: number;
    numberRemaining: number;
    recentAveragePrice: number;
    originalPrice: number;
    priceDataPoints: {
        value: number;
        date: string;
    }[];
    volumeDataPoints: {
        value: number;
        date: string;
    }[];
}
export type GetAssetResellersOptions = {
    assetId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetAssetResellers = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        userAssetId: number;
        seller: {
            id: number;
            type: "User" | "Group";
            name: string;
        };
        price: number;
        serialNumber: number;
    }[];
}
export type GetUserResellableAssetCopiesOptions = {
    userId: number;
    assetId: number;
}
export type GetUserResellableAssetCopies = {
    data: GetAssetResellers["data"];
}
export type GetResaleTaxRate = {
    taxRate: number;
    minimumFee: number;
}
export type SetAssetCopiesOptions = {
    assetId: number;
    userAssetId: number;
    price: number;
}
export type SetAssetCopies = unknown
export type GetDeveloperExchangeAbility = {
    canCashOut: boolean;
    meetsPremiumRequirement: boolean;
    hasVerifiedEmail: boolean;
    isUserBlackListed: boolean;
    meetsMinimumCashOutBalance: boolean;
    hasCashedOutThisMonth: boolean;
    lastImbursementStatusIsValid: boolean;
}
export type GetDeveloperExchangeHelp = unknown;
export type GetDeveloperExchangeInfoOptions = {
    fromDevExPage: boolean;
}
export type GetDeveloperExchangeInfo = {
    hasCurrencyOperationError: boolean;
    currencyOperationErrorMessage: string;
    showOnlyExchangeRates: boolean;
    meetsMembershipRequirements: boolean;
    emailIsVerified: boolean;
    isImbursementBlacklistUser: boolean;
    canProceedToCashout: boolean;
    showProgressBar: boolean;
    percentRobux: number;
    minRobuxToCashOut: number;
    maxRobuxCanCashOut: number;
    lastImbursementStatus: string;
    lastImbursementSubmissionDate: string;
    conversionPercent: number;
}
export type SubmitDeveloperExchangeOptions = BillingAPISubmitDeveloperExchangeOptions;
export type SubmitDeveloperExchange = {
    submitted: boolean;
    cashOutAbility: {
        canCashOut: boolean;
        meetsPremiumRequirement: boolean;
        hasVerifiedEmail: boolean;
        isUserBlcakListed: boolean;
        meetsMinimumCashOutBalance: boolean;
        hasCashedOutThisMonth: boolean;
        lastImbursementStatusIsValid: boolean;
    };
    errors: unknown;
}
export type GetGroupCurrencyOptions = {
    groupId: number;
}
export type GetGroupCurrency = {
    robux: number;
}
export type GetSelfCurrencyOptions = {
    userId: number;
}
export type GetSelfCurrency = {
    robux: number;
}
export type GetGroupRevenueSummaryInTimeFrameOptions = {
    groupId: number;
    timeFrame: "Day" | "Week" | "Month" | "Year";
}
export type GetGroupRevenueSummaryInTimeFrame = {
    recurringRobuxStipend: number;
    itemSaleRobux: number;
    purchasedRoblox: number;
    tradeSystemRobux: number;
    pendingRobux: number;
    groupPayoutRobux: number;
}
export type GetSelfRevenueSummaryInTimeFrameOptions = Omit<GetGroupRevenueSummaryInTimeFrameOptions, "groupId"> & {
    userId: number;
}
export type GetSelfRevenueSummaryInTimeFrame = GetGroupRevenueSummaryInTimeFrame;
export type GetGroupTransactionsOptions = {
    groupId: number;
    transactionType: "Sale" | "Purchase" | "AffiliateSale" | "DevEx" | "GroupPayout" | "AdImpressionPayout";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetGroupTransactions = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        created: string;
        isPending: boolean;
        agent: {
            id: number;
            type: "User" | "Group";
            name: string;
        };
        details: unknown;
        currency: {
            amount: number;
            type: "Robux" | string;
        };
    }[];
}
export type GetSelfTransactionsOptions = Omit<GetGroupTransactionsOptions, "groupId"> & {
    userId: number;
}
export type GetSelfTransactions = GetGroupTransactions;

export default class EconomyAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://economy.roblox.com/"
        });
    }

    getAssetResaleData (options: GetAssetResaleDataOptions): Promise<GetAssetResaleData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/resale-data`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getAssetResellers (options: GetAssetResellersOptions): Promise<GetAssetResellers> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/resellers`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserResellableAssetCopies (options: GetUserResellableAssetCopiesOptions): Promise<GetUserResellableAssetCopies> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/assets/${options.assetId}/users/${options.userId}/resellable-copies`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getResaleTaxRate (): Promise<GetResaleTaxRate> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/resale-tax-rate`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    setAssetCopiesForSale (options: SetAssetCopiesOptions): Promise<SetAssetCopies> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/assets/${options.assetId}/resellable-copies/${options.userAssetId}`,
                method: "PATCH",
                json: {
                    price: options.price
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getDeveloperExchangeAbility (): Promise<GetDeveloperExchangeAbility> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/cashoutAbility`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getDeveloperExchangeHelp (): Promise<GetDeveloperExchangeHelp> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/help`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getDeveloperExchangeInfo (options: GetDeveloperExchangeInfoOptions): Promise<GetDeveloperExchangeInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/info`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    submitDeveloperExchange (options: SubmitDeveloperExchangeOptions): Promise<SubmitDeveloperExchange> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/developer-exchange/submit`,
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupCurrency (options: GetGroupCurrencyOptions): Promise<GetGroupCurrency> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/groups/${options.groupId}/currency`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfCurrency (options: GetSelfCurrencyOptions): Promise<GetSelfCurrency> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/currency`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupRevenueByTime (options: GetGroupRevenueSummaryInTimeFrameOptions): Promise<GetGroupRevenueSummaryInTimeFrame> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/revenue/summary/${options.timeFrame}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfRevenueSummaryByTIme (options: GetSelfRevenueSummaryInTimeFrameOptions): Promise<GetSelfRevenueSummaryInTimeFrame> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/revenue/summary/${options.timeFrame}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGroupTransactions (options: GetGroupTransactionsOptions): Promise<GetGroupTransactions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/groups/${options.groupId}/transactions`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSelfTransactions (options: GetSelfTransactionsOptions): Promise<GetSelfTransactions> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${options.userId}/transactions`,
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
