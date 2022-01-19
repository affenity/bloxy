import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { BillingSubmitDeveloperExchangeOptions } from "./BillingAPI";
export declare type EconomyGetAssetResaleDataOptions = {
    assetId: number;
};
export declare type EconomyGetAssetResaleData = {
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
};
export declare type EconomyGetAssetResellersOptions = {
    assetId: number;
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type EconomyGetAssetResellers = {
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
export declare type EconomyGetUserResellableAssetCopiesOptions = {
    userId: number;
    assetId: number;
};
export declare type EconomyGetUserResellableAssetCopies = {
    data: EconomyGetAssetResellers["data"];
};
export declare type EconomyGetResaleTaxRate = {
    taxRate: number;
    minimumFee: number;
};
export declare type EconomySetAssetCopiesOptions = {
    assetId: number;
    userAssetId: number;
    price: number;
};
export declare type EconomySetAssetCopies = unknown;
export declare type EconomyGetDeveloperExchangeAbility = {
    canCashOut: boolean;
    meetsPremiumRequirement: boolean;
    hasVerifiedEmail: boolean;
    isUserBlackListed: boolean;
    meetsMinimumCashOutBalance: boolean;
    hasCashedOutThisMonth: boolean;
    lastImbursementStatusIsValid: boolean;
};
export declare type EconomyGetDeveloperExchangeHelp = unknown;
export declare type EconomyGetDeveloperExchangeInfoOptions = {
    fromDevExPage: boolean;
};
export declare type EconomyGetDeveloperExchangeInfo = {
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
export declare type EconomySubmitDeveloperExchangeOptions = BillingSubmitDeveloperExchangeOptions;
export declare type EconomySubmitDeveloperExchange = {
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
export declare type EconomyGetGroupCurrencyOptions = {
    groupId: number;
};
export declare type EconomyGetGroupCurrency = {
    robux: number;
};
export declare type EconomyGetSelfCurrencyOptions = {
    userId: number;
};
export declare type EconomyGetSelfCurrency = {
    robux: number;
};
export declare type EconomyGetGroupRevenueSummaryInTimeFrameOptions = {
    groupId: number;
    timeFrame: "Day" | "Week" | "Month" | "Year";
};
export declare type EconomyGetGroupRevenueSummaryInTimeFrame = {
    recurringRobuxStipend: number;
    itemSaleRobux: number;
    purchasedRoblox: number;
    tradeSystemRobux: number;
    pendingRobux: number;
    groupPayoutRobux: number;
};
export declare type EconomyGetSelfRevenueSummaryInTimeFrameOptions = Omit<EconomyGetGroupRevenueSummaryInTimeFrameOptions, "groupId"> & {
    userId: number;
};
export declare type EconomyGetSelfRevenueSummaryInTimeFrame = EconomyGetGroupRevenueSummaryInTimeFrame;
export declare type EconomyGetGroupTransactionsOptions = {
    groupId: number;
    transactionType: "Sale" | "Purchase" | "AffiliateSale" | "DevEx" | "GroupPayout" | "AdImpressionPayout";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type EconomyGetGroupTransactions = {
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
};
export declare type EconomyGetSelfTransactionsOptions = Omit<EconomyGetGroupTransactionsOptions, "groupId"> & {
    userId: number;
};
export declare type EconomyGetSelfTransactions = EconomyGetGroupTransactions;
export declare class EconomyAPI extends BaseAPI {
    constructor(client: Client);
    getAssetResaleData(options: EconomyGetAssetResaleDataOptions): Promise<EconomyGetAssetResaleData>;
    getAssetResellers(options: EconomyGetAssetResellersOptions): Promise<EconomyGetAssetResellers>;
    getUserResellableAssetCopies(options: EconomyGetUserResellableAssetCopiesOptions): Promise<EconomyGetUserResellableAssetCopies>;
    getResaleTaxRate(): Promise<EconomyGetResaleTaxRate>;
    setAssetCopiesForSale(options: EconomySetAssetCopiesOptions): Promise<EconomySetAssetCopies>;
    getDeveloperExchangeAbility(): Promise<EconomyGetDeveloperExchangeAbility>;
    getDeveloperExchangeHelp(): Promise<EconomyGetDeveloperExchangeHelp>;
    getDeveloperExchangeInfo(options: EconomyGetDeveloperExchangeInfoOptions): Promise<EconomyGetDeveloperExchangeInfo>;
    submitDeveloperExchange(options: EconomySubmitDeveloperExchangeOptions): Promise<EconomySubmitDeveloperExchange>;
    getGroupCurrency(options: EconomyGetGroupCurrencyOptions): Promise<EconomyGetGroupCurrency>;
    getSelfCurrency(options: EconomyGetSelfCurrencyOptions): Promise<EconomyGetSelfCurrency>;
    getGroupRevenueByTime(options: EconomyGetGroupRevenueSummaryInTimeFrameOptions): Promise<EconomyGetGroupRevenueSummaryInTimeFrame>;
    getSelfRevenueSummaryByTIme(options: EconomyGetSelfRevenueSummaryInTimeFrameOptions): Promise<EconomyGetSelfRevenueSummaryInTimeFrame>;
    getGroupTransactions(options: EconomyGetGroupTransactionsOptions): Promise<EconomyGetGroupTransactions>;
    getSelfTransactions(options: EconomyGetSelfTransactionsOptions): Promise<EconomyGetSelfTransactions>;
}
