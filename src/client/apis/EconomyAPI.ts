import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { BillingSubmitDeveloperExchangeOptions } from "./BillingAPI";

export type EconomyGetAssetResaleDataOptions = {
  assetId: number;
};
export type EconomyGetAssetResaleData = {
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
export type EconomyGetAssetResellersOptions = {
  assetId: number;
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type EconomyGetAssetResellers = {
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
export type EconomyGetUserResellableAssetCopiesOptions = {
  userId: number;
  assetId: number;
};
export type EconomyGetUserResellableAssetCopies = {
  data: EconomyGetAssetResellers["data"];
};
export type EconomyGetResaleTaxRate = {
  taxRate: number;
  minimumFee: number;
};
export type EconomySetAssetCopiesOptions = {
  assetId: number;
  userAssetId: number;
  price: number;
};
export type EconomySetAssetCopies = unknown;
export type EconomyGetDeveloperExchangeAbility = {
  canCashOut: boolean;
  meetsPremiumRequirement: boolean;
  hasVerifiedEmail: boolean;
  isUserBlackListed: boolean;
  meetsMinimumCashOutBalance: boolean;
  hasCashedOutThisMonth: boolean;
  lastImbursementStatusIsValid: boolean;
};
export type EconomyGetDeveloperExchangeHelp = unknown;
export type EconomyGetDeveloperExchangeInfoOptions = {
  fromDevExPage: boolean;
};
export type EconomyGetDeveloperExchangeInfo = {
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
export type EconomySubmitDeveloperExchangeOptions =
  BillingSubmitDeveloperExchangeOptions;
export type EconomySubmitDeveloperExchange = {
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
export type EconomyGetGroupCurrencyOptions = {
  groupId: number;
};
export type EconomyGetGroupCurrency = {
  robux: number;
};
export type EconomyGetSelfCurrencyOptions = {
  userId: number;
};
export type EconomyGetSelfCurrency = {
  robux: number;
};
export type EconomyGetGroupRevenueSummaryInTimeFrameOptions = {
  groupId: number;
  timeFrame: "Day" | "Week" | "Month" | "Year";
};
export type EconomyGetGroupRevenueSummaryInTimeFrame = {
  recurringRobuxStipend: number;
  itemSaleRobux: number;
  purchasedRoblox: number;
  tradeSystemRobux: number;
  pendingRobux: number;
  groupPayoutRobux: number;
};
export type EconomyGetSelfRevenueSummaryInTimeFrameOptions = Omit<
  EconomyGetGroupRevenueSummaryInTimeFrameOptions,
  "groupId"
> & {
  userId: number;
};
export type EconomyGetSelfRevenueSummaryInTimeFrame =
  EconomyGetGroupRevenueSummaryInTimeFrame;
export type EconomyGetGroupTransactionsOptions = {
  groupId: number;
  transactionType:
    | "Sale"
    | "Purchase"
    | "AffiliateSale"
    | "DevEx"
    | "GroupPayout"
    | "AdImpressionPayout";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type EconomyGetGroupTransactions = {
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
export type EconomyGetSelfTransactionsOptions = Omit<
  EconomyGetGroupTransactionsOptions,
  "groupId"
> & {
  userId: number;
};
export type EconomyGetSelfTransactions = EconomyGetGroupTransactions;

export default class EconomyAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://economy.roblox.com/"
    });
  }

  getAssetResaleData(
    options: EconomyGetAssetResaleDataOptions
  ): Promise<EconomyGetAssetResaleData> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/${options.assetId}/resale-data`
      },
      json: true
    }).then((response) => response.body);
  }

  getAssetResellers(
    options: EconomyGetAssetResellersOptions
  ): Promise<EconomyGetAssetResellers> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/${options.assetId}/resellers`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserResellableAssetCopies(
    options: EconomyGetUserResellableAssetCopiesOptions
  ): Promise<EconomyGetUserResellableAssetCopies> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/assets/${options.assetId}/users/${options.userId}/resellable-copies`
      },
      json: true
    }).then((response) => response.body);
  }

  getResaleTaxRate(): Promise<EconomyGetResaleTaxRate> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/resale-tax-rate`
      },
      json: true
    }).then((response) => response.body);
  }

  setAssetCopiesForSale(
    options: EconomySetAssetCopiesOptions
  ): Promise<EconomySetAssetCopies> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/assets/${options.assetId}/resellable-copies/${options.userAssetId}`,
        method: "PATCH",
        json: {
          price: options.price
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getDeveloperExchangeAbility(): Promise<EconomyGetDeveloperExchangeAbility> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/developer-exchange/cashoutAbility`
      },
      json: true
    }).then((response) => response.body);
  }

  getDeveloperExchangeHelp(): Promise<EconomyGetDeveloperExchangeHelp> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/developer-exchange/help`
      },
      json: true
    }).then((response) => response.body);
  }

  getDeveloperExchangeInfo(
    options: EconomyGetDeveloperExchangeInfoOptions
  ): Promise<EconomyGetDeveloperExchangeInfo> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/developer-exchange/info`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  submitDeveloperExchange(
    options: EconomySubmitDeveloperExchangeOptions
  ): Promise<EconomySubmitDeveloperExchange> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/developer-exchange/submit`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupCurrency(
    options: EconomyGetGroupCurrencyOptions
  ): Promise<EconomyGetGroupCurrency> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/groups/${options.groupId}/currency`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfCurrency(
    options: EconomyGetSelfCurrencyOptions
  ): Promise<EconomyGetSelfCurrency> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/currency`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupRevenueByTime(
    options: EconomyGetGroupRevenueSummaryInTimeFrameOptions
  ): Promise<EconomyGetGroupRevenueSummaryInTimeFrame> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/revenue/summary/${options.timeFrame}`
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfRevenueSummaryByTIme(
    options: EconomyGetSelfRevenueSummaryInTimeFrameOptions
  ): Promise<EconomyGetSelfRevenueSummaryInTimeFrame> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/revenue/summary/${options.timeFrame}`
      },
      json: true
    }).then((response) => response.body);
  }

  getGroupTransactions(
    options: EconomyGetGroupTransactionsOptions
  ): Promise<EconomyGetGroupTransactions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/groups/${options.groupId}/transactions`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSelfTransactions(
    options: EconomyGetSelfTransactionsOptions
  ): Promise<EconomyGetSelfTransactions> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${options.userId}/transactions`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }
}
