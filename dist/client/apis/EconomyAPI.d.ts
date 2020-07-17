import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { SubmitDeveloperExchangeOptions as BillingAPISubmitDeveloperExchangeOptions } from "./BillingAPI";
export declare type GetAssetResaleDataOptions = {
    assetId: number;
};
export declare type GetAssetResaleData = {
    assetStock: number;
    sales: number;
    numberRemaining: number;
    recentAveragePrice: number;
    originalPirce: number;
    priceDataPoints: {
        value: number;
        date: string;
    }[];
    volumeDataPoints: {
        value: number;
        date: string;
    }[];
};
export declare type GetAssetResellersOptions = {
    assetId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetAssetResellers = {
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
};
export declare type GetUserResellableAssetCopiesOptions = {
    userId: number;
    assetId: number;
};
export declare type GetUserResellableAssetCopies = {
    data: GetAssetResellers["data"];
};
export declare type GetResaleTaxRate = {
    taxRate: number;
    minimumFee: number;
};
export declare type SetAssetCopiesOptions = {
    assetId: number;
    userAssetId: number;
    price: number;
};
export declare type SetAssetCopies = {};
export declare type GetDeveloperExchangeAbility = {
    canCashOut: boolean;
    meetsPremiumRequirement: boolean;
    hasVerifiedEmail: boolean;
    isUserBlackListed: boolean;
    meetsMinimumCashOutBalance: boolean;
    hasCashedOutThisMonth: boolean;
    lastImbursementStatusIsValid: boolean;
};
export declare type GetDeveloperExchangeHelp = unknown;
export declare type GetDeveloperExchangeInfoOptions = {
    fromDevExPage: boolean;
};
export declare type GetDeveloperExchangeInfo = {
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
};
export declare type SubmitDeveloperExchangeOptions = BillingAPISubmitDeveloperExchangeOptions;
export declare type SubmitDeveloperExchange = {
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
};
export declare type GetGroupCurrencyOptions = {
    groupId: number;
};
export declare type GetGroupCurrency = {
    robux: number;
};
export declare type GetSelfCurrencyOptions = {
    userId: number;
};
export declare type GetSelfCurrency = {
    robux: number;
};
export declare type GetGroupRevenueSummaryInTimeFrameOptions = {
    groupId: number;
    timeFrame: "Day" | "Week" | "Month" | "Year";
};
export declare type GetGroupRevenueSummaryInTimeFrame = {
    recurringRobuxStipend: number;
    itemSaleRobux: number;
    purchasedRoblox: number;
    tradeSystemRobux: number;
    pendingRobux: number;
    groupPayoutRobux: number;
};
export declare type GetSelfRevenueSummaryInTimeFrameOptions = Omit<GetGroupRevenueSummaryInTimeFrameOptions, "groupId"> & {
    userId: number;
};
export declare type GetSelfRevenueSummaryInTimeFrame = GetGroupRevenueSummaryInTimeFrame;
export declare type GetGroupTransactionsOptions = {
    groupId: number;
    transactionType: "Sale" | "Purchase" | "AffiliateSale" | "DevEx" | "GroupPayout" | "AdImpressionPayout";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetGroupTransactions = {
    previousPageCursor: string;
    nextPageCursor: string;
    data: {
        created: string;
        isPending: boolean;
        agent: {
            id: number;
            type: "User" | string;
            name: string;
        };
        details: unknown;
        currency: {
            amount: number;
            type: "Robux" | string;
        };
    }[];
};
export declare type GetSelfTransactionsOptions = Omit<GetGroupTransactionsOptions, "groupId"> & {
    userId: number;
};
export declare type GetSelfTransactions = GetGroupTransactions;
export default class EconomyAPI extends BaseAPI {
    constructor(client: Client);
    getAssetResaleData(options: GetAssetResaleDataOptions): Promise<GetAssetResaleData>;
    getAssetResellers(options: GetAssetResellersOptions): Promise<GetAssetResellers>;
    getUserResellableAssetCopies(options: GetUserResellableAssetCopiesOptions): Promise<GetUserResellableAssetCopies>;
    getResaleTaxRate(): Promise<GetResaleTaxRate>;
    setAssetCopiesForSale(options: SetAssetCopiesOptions): Promise<SetAssetCopies>;
    getDeveloperExchangeAbility(): Promise<GetDeveloperExchangeAbility>;
    getDeveloperExchangeHelp(): Promise<GetDeveloperExchangeHelp>;
    getDeveloperExchangeInfo(options: GetDeveloperExchangeInfoOptions): Promise<GetDeveloperExchangeInfo>;
    submitDeveloperExchange(options: SubmitDeveloperExchangeOptions): Promise<SubmitDeveloperExchange>;
    getGroupCurrency(options: GetGroupCurrencyOptions): Promise<GetGroupCurrency>;
    getSelfCurrency(options: GetSelfCurrencyOptions): Promise<GetSelfCurrency>;
    getGroupRevenueByTime(options: GetGroupRevenueSummaryInTimeFrameOptions): Promise<GetGroupRevenueSummaryInTimeFrame>;
    getSelfRevenueSummaryByTIme(options: GetSelfRevenueSummaryInTimeFrameOptions): Promise<GetSelfRevenueSummaryInTimeFrame>;
    getGroupTransactions(options: GetGroupTransactionsOptions): Promise<GetGroupTransactions>;
    getSelfTransactions(options: GetSelfTransactionsOptions): Promise<GetSelfTransactions>;
}
