import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { SortOption } from "../..";

export type BillingGetDeveloperExchangeRate = {
  rate: number;
  "currency-code": string;
};
export type BillingSubmitDeveloperExchange = unknown;
export type BillingGetLuobuDeveloperExchangeBalance = {
  amount: number;
};
export type BillingGetLuobuDeveloperExchangeEligibility = {
  eligibility?: "Eligible" | string;
  errors?: {
    code: number;
    message: string;
    userFacingMessage: string;
  };
};
export type BillingGetLatestLuobuDeveloperExchangeStatus = {
  date?: string;
  status?: string;
  amount?: number;
};
export type BillingSubmitLuobuDeveloperExchange = unknown;
export type BillingGetUserPaymentsHistory = {
  previousPageCursor: string;
  nextPageCursor: string;
  data: {
    paymentDate: string;
    products: {
      name: string;
    }[];
    money: {
      Amount: number;
      USDAmount: number;
      Currency: {
        Id: number;
        CurrencyType: string;
        CurrencyName: string;
        CurrencySymbol: string;
      };
    };
    paymentProviderType: "AppleAppStore";
    creditCardType: string;
    cardNumber: string;
  };
};
export type BillingPurchaseAmazonProduct = unknown;
export type BillingValidateAmazonProduct = unknown;
export type BillingPurchaseAppleProduct = BillingPurchaseAmazonProduct;
export type BillingValidateAppleProduct = BillingValidateAmazonProduct;
export type BillingRedeemDigitalCode = unknown;
export type BillingRedeemGameCard = {
  balance: string;
  successMsg: string;
  successSubText: string;
  bonusMsg: string;
  error: string;
  errorMsg: string;
};
export type BillingReverseGameCard = unknown;
export type BillingPurchaseGoogleProduct = unknown;
export type BillingValidateGoogleProduct = BillingValidateAmazonProduct;
export type BillingSendXsollaWebhook = unknown;
export type BillingGetXsollaIFrameToken = {
  token: string;
  success: boolean;
  message: string;
};
export type BillingIncrementCounterByAgent = unknown;
export type BillingRedeemPromoCode = {
  success: boolean;
  errorMsg: string;
  successMsg: string;
};
export type BillingSubmitDeveloperExchangeOptions = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  robuxAmount: number;
};
export type BillingSubmitLuobuDeveloperExchangeOptions = {
  firstName: string;
  lastName: string;
  email: string;
  amount: number;
};
export type BillingGetUserPaymentsHistoryOptions = SortOption;
export type BillingPurchaseAmazonProductOptions = {
  receiptId: string;
  amazonUserId: string;
  isRetry: boolean;
};
export type BillingValidateAmazonProductOptions = {
  productId: string;
  currency: string;
};
export type BillingPurchaseAppleProductOptions = {
  receiptId: string;
  appleUserId: string;
  isRetry: boolean;
};
export type BillingValidateAppleProductOptions = {
  productId: string;
  currency: string;
};
export type BillingRedeemDigitalCodeOptions = {
  redemptionCode: string;
};
export type BillingRedeemGameCardOptions = {
  pinCode: string;
  captchaToken: string;
  captchaProvider: string;
};
export type BillingReverseGameCardOptions = {
  PinCode: number;
  UserId: number;
};
export type BillingPurchaseGoogleProductOptions = {
  packageName: string;
  productId: string;
  token: string;
  isRetry: boolean;
  orderId: string;
};
export type BillingValidateGoogleProductOptions = {
  productId: string;
  currency: string;
};
export type BillingGetXsollaIFrameTokenOptions = {
  mainProductId: number;
  upsellProductId: number;
  paymentProviderType: string;
  verifiedEmailOrPhone: boolean;
};
export type BillingIncrementCounterByAgentOptions = {
  counterPrefix: string;
};
export type BillingRedeemPromoCodeOptions = {
  code: string;
};

export class BillingAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://billing.roblox.com/"
    });
  }

  getDeveloperExchangeRate(): Promise<BillingGetDeveloperExchangeRate> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/developer-exchange-rate`
      },
      json: true
    }).then((response) => response.body);
  }

  submitDeveloperExchange(
    options: BillingSubmitDeveloperExchangeOptions
  ): Promise<BillingSubmitDeveloperExchange> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/developer-exchange-rate`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getLuobuDeveloperExchangeBalance(): Promise<BillingGetLuobuDeveloperExchangeBalance> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/luobu-developer-exchange/balance`
      },
      json: true
    }).then((response) => response.body);
  }

  getLuobuDeveloperExchangeEligibility(): Promise<BillingGetLuobuDeveloperExchangeEligibility> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/luobu-developer-exchange/eligibility`
      },
      json: true
    }).then((response) => response.body);
  }

  getLuobuDeveloperExchangeLatestRequestStatus(): Promise<BillingGetLatestLuobuDeveloperExchangeStatus> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/luobu-developer-exchange/latest-request-status`
      },
      json: true
    }).then((response) => response.body);
  }

  submitLuobuDeveloperExchange(
    options: BillingSubmitLuobuDeveloperExchangeOptions
  ): Promise<BillingSubmitLuobuDeveloperExchange> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/developer-exchange-rate/request`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getUserPaymentsHistory(
    options: BillingGetUserPaymentsHistoryOptions
  ): Promise<BillingGetUserPaymentsHistory> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/user/payments`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  purchaseAmazonProduct(
    options: BillingPurchaseAmazonProductOptions
  ): Promise<BillingPurchaseAmazonProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/amazon/purchase`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  validateAmazonProduct(
    options: BillingValidateAmazonProductOptions
  ): Promise<BillingValidateAmazonProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/amazon/validate`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  purchaseAppleProduct(
    options: BillingPurchaseAppleProductOptions
  ): Promise<BillingPurchaseAppleProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/apple/purchase`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  validateAppleProduct(
    options: BillingValidateAppleProductOptions
  ): Promise<BillingValidateAppleProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/apple/validate`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  redeemDigitalCode(
    options: BillingRedeemDigitalCodeOptions
  ): Promise<BillingRedeemDigitalCode> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/digital-codes/redeem`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  redeemGameCard(
    options: BillingRedeemGameCardOptions
  ): Promise<BillingRedeemGameCard> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gamecard/redeem`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  reverseGameCard(
    options: BillingReverseGameCardOptions
  ): Promise<BillingReverseGameCard> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/gamecard/reverse`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  purchaseGoogleProduct(
    options: BillingPurchaseGoogleProductOptions
  ): Promise<BillingPurchaseGoogleProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/google/purchase`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  validateGoogleProduct(
    options: BillingValidateGoogleProductOptions
  ): Promise<BillingValidateGoogleProduct> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/google/validate`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  sendXsollaWebhook(options: unknown): Promise<BillingSendXsollaWebhook> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/notifications/xsolla`,
        method: "POST",
        json: options as any
      },
      json: true
    }).then((response) => response.body);
  }

  getXsollaIFrameToken(
    options: BillingGetXsollaIFrameTokenOptions
  ): Promise<BillingGetXsollaIFrameToken> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/payments/xsolla/iframe-token`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  incrementCounterByAgent(
    options: BillingIncrementCounterByAgentOptions
  ): Promise<BillingIncrementCounterByAgent> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/payments/xsolla/incrementcounterbyagent`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  redeemPromoCode(
    options: BillingRedeemPromoCodeOptions
  ): Promise<BillingRedeemPromoCode> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/promocodes/redeem`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
