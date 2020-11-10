import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetDeveloperExchangeRate = {
    rate: number;
    "currency-code": string;
}
export type SubmitDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    robuxAmount: number;
}
export type SubmitDeveloperExchange = unknown
export type GetLuobuDeveloperExchangeBalance = {
    amount: number;
}
export type GetLuobuDeveloperExchangeEligibility = {
    eligibility?: "Eligible" | string;
    errors?: {
        code: number;
        message: string;
        userFacingMessage: string;
    };
}
export type GetLatestLuobuDeveloperExchangeStatus = {
    date?: string;
    status?: string;
    amount?: number;
}
export type SubmitLuobuDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
}
export type SubmitLuobuDeveloperExchange = unknown
export type GetUserPaymentsOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
}
export type GetUserPayments = {
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
}
export type PurchaseAmazonProductOptions = {
    receiptId: string;
    amazonUserId: string;
    isRetry: boolean;
}
export type PurchaseAmazonProduct = unknown
export type ValidateAmazonProductOptions = {
    productId: string;
    currency: string;
}
export type ValidateAmazonProduct = unknown
export type PurchaseAppleProductOptions = PurchaseAmazonProductOptions;
export type PurchaseAppleProduct = PurchaseAmazonProduct;
export type ValidateAppleProductOptions = ValidateAmazonProductOptions;
export type ValidateAppleProduct = ValidateAmazonProduct;
export type RedeemDigitalCodeOptions = {
    redemptionCode: string;
}
export type RedeemDigitalCode = unknown;
export type RedeemGameCardOptions = {
    pinCode: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
}
export type RedeemGameCard = {
    balance: string;
    successMsg: string;
    successSubText: string;
    bonusMsg: string;
    error: string;
    errorMsg: string;
}
export type ReverseGameCardOptions = {
    PinCode: string;
    UserId: number;
}
export type ReverseGameCard = unknown;
export type PurchaseGoogleProductOptions = {
    packageName: string;
    productId: string;
    token: string;
    isRetry: boolean;
    orderId: string;
};
export type PurchaseGoogleProduct = unknown
export type ValidateGoogleProductOptions = ValidateAmazonProductOptions;
export type ValidateGoogleProduct = ValidateAmazonProduct;
export type SendXsollaWebhookOptions = unknown;
export type SendXsollaWebhook = unknown;
export type GetXsollaIFrameTokenOptions = {
    mainProductId: number;
    upsellProductId: number;
    paymentProviderType: string;
    verifiedEmailOrPhone: boolean;
}
export type GetXsollaIFrameToken = {
    token: string;
    success: boolean;
    message: string;
}
export type IncrementCounterByAgentOptions = {
    counterPrefix: string;
}
export type IncrementCounterByAgent = unknown;
export type RedeemPromoCodeOptions = {
    code: string;
}
export type RedeemPromoCode = {
    success: boolean;
    errorMsg: string;
    successMsg: string;
}


export default class BillingAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://billing.roblox.com/"
        });
    }

    getDeveloperExchangeRate (): Promise<GetDeveloperExchangeRate> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-exchange-rate`,
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
                path: `v1/developer-exchange-rate`,
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

    getLuobuDeveloperExchangeBalance (): Promise<GetLuobuDeveloperExchangeBalance> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/balance`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getLuobuDeveloperExchangeEligibility (): Promise<GetLuobuDeveloperExchangeEligibility> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/eligibility`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getLuobuDeveloperExchangeLatestRequestStatus (): Promise<GetLatestLuobuDeveloperExchangeStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/luobu-developer-exchange/latest-request-status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    submitLuobuDeveloperExchange (options: SubmitLuobuDeveloperExchangeOptions): Promise<SubmitLuobuDeveloperExchange> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/developer-exchange-rate/request`,
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

    getUserPaymentsHistory (options: GetUserPaymentsOptions): Promise<GetUserPayments> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/user/payments`,
                qs: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    purchaseAmazonProduct (options: PurchaseAmazonProductOptions): Promise<PurchaseAmazonProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/amazon/purchase`,
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

    validateAmazonProduct (options: ValidateAmazonProductOptions): Promise<ValidateAmazonProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/amazon/validate`,
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

    purchaseAppleProduct (options: PurchaseAppleProductOptions): Promise<PurchaseAppleProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/apple/purchase`,
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

    validateAppleProduct (options: ValidateAppleProductOptions): Promise<ValidateAppleProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/apple/validate`,
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

    redeemDigitalCode (options: RedeemDigitalCodeOptions): Promise<RedeemDigitalCode> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/digital-codes/redeem`,
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

    redeemGameCard (options: RedeemGameCardOptions): Promise<RedeemGameCard> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gamecard/redeem`,
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

    reverseGameCard (options: ReverseGameCardOptions): Promise<ReverseGameCard> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/gamecard/reverse`,
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

    purchaseGoogleProduct (options: PurchaseGoogleProductOptions): Promise<PurchaseGoogleProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/google/purchase`,
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

    validateGoogleProduct (options: ValidateGoogleProductOptions): Promise<ValidateGoogleProduct> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/google/validate`,
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

    sendXsollaWebhook (options: SendXsollaWebhookOptions): Promise<SendXsollaWebhook> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/notifications/xsolla`,
                method: "POST",
                json: options as any,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getXsollaIFrameToken (options: GetXsollaIFrameTokenOptions): Promise<GetXsollaIFrameToken> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/payments/xsolla/iframe-token`,
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

    incrementCounterByAgent (options: IncrementCounterByAgentOptions): Promise<IncrementCounterByAgent> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/payments/xsolla/incrementcounterbyagent`,
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

    redeemPromoCode (options: RedeemPromoCodeOptions): Promise<RedeemPromoCode> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/promocodes/redeem`,
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
}
