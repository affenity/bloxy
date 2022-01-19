import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { SortOption } from "../..";
export declare type BillingGetDeveloperExchangeRate = {
    rate: number;
    "currency-code": string;
};
export declare type BillingSubmitDeveloperExchange = unknown;
export declare type BillingGetLuobuDeveloperExchangeBalance = {
    amount: number;
};
export declare type BillingGetLuobuDeveloperExchangeEligibility = {
    eligibility?: "Eligible" | string;
    errors?: {
        code: number;
        message: string;
        userFacingMessage: string;
    };
};
export declare type BillingGetLatestLuobuDeveloperExchangeStatus = {
    date?: string;
    status?: string;
    amount?: number;
};
export declare type BillingSubmitLuobuDeveloperExchange = unknown;
export declare type BillingGetUserPaymentsHistory = {
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
export declare type BillingPurchaseAmazonProduct = unknown;
export declare type BillingValidateAmazonProduct = unknown;
export declare type BillingPurchaseAppleProduct = BillingPurchaseAmazonProduct;
export declare type BillingValidateAppleProduct = BillingValidateAmazonProduct;
export declare type BillingRedeemDigitalCode = unknown;
export declare type BillingRedeemGameCard = {
    balance: string;
    successMsg: string;
    successSubText: string;
    bonusMsg: string;
    error: string;
    errorMsg: string;
};
export declare type BillingReverseGameCard = unknown;
export declare type BillingPurchaseGoogleProduct = unknown;
export declare type BillingValidateGoogleProduct = BillingValidateAmazonProduct;
export declare type BillingSendXsollaWebhook = unknown;
export declare type BillingGetXsollaIFrameToken = {
    token: string;
    success: boolean;
    message: string;
};
export declare type BillingIncrementCounterByAgent = unknown;
export declare type BillingRedeemPromoCode = {
    success: boolean;
    errorMsg: string;
    successMsg: string;
};
export declare type BillingSubmitDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    robuxAmount: number;
};
export declare type BillingSubmitLuobuDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
};
export declare type BillingGetUserPaymentsHistoryOptions = SortOption;
export declare type BillingPurchaseAmazonProductOptions = {
    receiptId: string;
    amazonUserId: string;
    isRetry: boolean;
};
export declare type BillingValidateAmazonProductOptions = {
    productId: string;
    currency: string;
};
export declare type BillingPurchaseAppleProductOptions = {
    receiptId: string;
    appleUserId: string;
    isRetry: boolean;
};
export declare type BillingValidateAppleProductOptions = {
    productId: string;
    currency: string;
};
export declare type BillingRedeemDigitalCodeOptions = {
    redemptionCode: string;
};
export declare type BillingRedeemGameCardOptions = {
    pinCode: string;
    captchaToken: string;
    captchaProvider: string;
};
export declare type BillingReverseGameCardOptions = {
    PinCode: number;
    UserId: number;
};
export declare type BillingPurchaseGoogleProductOptions = {
    packageName: string;
    productId: string;
    token: string;
    isRetry: boolean;
    orderId: string;
};
export declare type BillingValidateGoogleProductOptions = {
    productId: string;
    currency: string;
};
export declare type BillingGetXsollaIFrameTokenOptions = {
    mainProductId: number;
    upsellProductId: number;
    paymentProviderType: string;
    verifiedEmailOrPhone: boolean;
};
export declare type BillingIncrementCounterByAgentOptions = {
    counterPrefix: string;
};
export declare type BillingRedeemPromoCodeOptions = {
    code: string;
};
export declare class BillingAPI extends BaseAPI {
    constructor(client: Client);
    getDeveloperExchangeRate(): Promise<BillingGetDeveloperExchangeRate>;
    submitDeveloperExchange(options: BillingSubmitDeveloperExchangeOptions): Promise<BillingSubmitDeveloperExchange>;
    getLuobuDeveloperExchangeBalance(): Promise<BillingGetLuobuDeveloperExchangeBalance>;
    getLuobuDeveloperExchangeEligibility(): Promise<BillingGetLuobuDeveloperExchangeEligibility>;
    getLuobuDeveloperExchangeLatestRequestStatus(): Promise<BillingGetLatestLuobuDeveloperExchangeStatus>;
    submitLuobuDeveloperExchange(options: BillingSubmitLuobuDeveloperExchangeOptions): Promise<BillingSubmitLuobuDeveloperExchange>;
    getUserPaymentsHistory(options: BillingGetUserPaymentsHistoryOptions): Promise<BillingGetUserPaymentsHistory>;
    purchaseAmazonProduct(options: BillingPurchaseAmazonProductOptions): Promise<BillingPurchaseAmazonProduct>;
    validateAmazonProduct(options: BillingValidateAmazonProductOptions): Promise<BillingValidateAmazonProduct>;
    purchaseAppleProduct(options: BillingPurchaseAppleProductOptions): Promise<BillingPurchaseAppleProduct>;
    validateAppleProduct(options: BillingValidateAppleProductOptions): Promise<BillingValidateAppleProduct>;
    redeemDigitalCode(options: BillingRedeemDigitalCodeOptions): Promise<BillingRedeemDigitalCode>;
    redeemGameCard(options: BillingRedeemGameCardOptions): Promise<BillingRedeemGameCard>;
    reverseGameCard(options: BillingReverseGameCardOptions): Promise<BillingReverseGameCard>;
    purchaseGoogleProduct(options: BillingPurchaseGoogleProductOptions): Promise<BillingPurchaseGoogleProduct>;
    validateGoogleProduct(options: BillingValidateGoogleProductOptions): Promise<BillingValidateGoogleProduct>;
    sendXsollaWebhook(options: unknown): Promise<BillingSendXsollaWebhook>;
    getXsollaIFrameToken(options: BillingGetXsollaIFrameTokenOptions): Promise<BillingGetXsollaIFrameToken>;
    incrementCounterByAgent(options: BillingIncrementCounterByAgentOptions): Promise<BillingIncrementCounterByAgent>;
    redeemPromoCode(options: BillingRedeemPromoCodeOptions): Promise<BillingRedeemPromoCode>;
}
