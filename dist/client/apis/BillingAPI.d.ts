import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetDeveloperExchangeRate = {
    rate: number;
    "currency-code": string;
};
export declare type SubmitDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    robuxAmount: number;
};
export declare type SubmitDeveloperExchange = {};
export declare type GetLuobuDeveloperExchangeBalance = {
    amount: number;
};
export declare type GetLuobuDeveloperExchangeEligibility = {
    eligibility?: "Eligible" | string;
    errors?: {
        code: number;
        message: string;
        userFacingMessage: string;
    };
};
export declare type GetLatestLuobuDeveloperExchangeStatus = {
    date?: string;
    status?: string;
    amount?: number;
};
export declare type SubmitLuobuDeveloperExchangeOptions = {
    firstName: string;
    lastName: string;
    email: string;
    amount: number;
};
export declare type SubmitLuobuDeveloperExchange = {};
export declare type GetUserPaymentsOptions = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type GetUserPayments = {
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
export declare type PurchaseAmazonProductOptions = {
    receiptId: string;
    amazonUserId: string;
    isRetry: boolean;
};
export declare type PurchaseAmazonProduct = {};
export declare type ValidateAmazonProductOptions = {
    productId: string;
    currency: string;
};
export declare type ValidateAmazonProduct = {};
export declare type PurchaseAppleProductOptions = PurchaseAmazonProductOptions;
export declare type PurchaseAppleProduct = PurchaseAmazonProduct;
export declare type ValidateAppleProductOptions = ValidateAmazonProductOptions;
export declare type ValidateAppleProduct = ValidateAmazonProduct;
export declare type RedeemDigitalCodeOptions = {
    redemptionCode: string;
};
export declare type RedeemDigitalCode = {};
export declare type RedeemGameCardOptions = {
    pinCode: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type RedeemGameCard = {
    balance: string;
    successMsg: string;
    successSubText: string;
    bonusMsg: string;
    error: string;
    errorMsg: string;
};
export declare type ReverseGameCardOptions = {
    PinCode: string;
    UserId: number;
};
export declare type ReverseGameCard = {};
export declare type PurchaseGoogleProductOptions = {
    packageName: string;
    productId: string;
    token: string;
    isRetry: boolean;
    orderId: string;
};
export declare type PurchaseGoogleProduct = {};
export declare type ValidateGoogleProductOptions = ValidateAmazonProductOptions;
export declare type ValidateGoogleProduct = ValidateAmazonProduct;
export declare type SendXsollaWebhookOptions = unknown;
export declare type SendXsollaWebhook = unknown;
export declare type GetXsollaIFrameTokenOptions = {
    mainProductId: number;
    upsellProductId: number;
    paymentProviderType: string;
    verifiedEmailOrPhone: boolean;
};
export declare type GetXsollaIFrameToken = {
    token: string;
    success: boolean;
    message: string;
};
export declare type IncrementCounterByAgentOptions = {
    counterPrefix: string;
};
export declare type IncrementCounterByAgent = unknown;
export declare type RedeemPromoCodeOptions = {
    code: string;
};
export declare type RedeemPromoCode = {
    success: boolean;
    errorMsg: ShadowRootInit;
    successMsg: string;
};
export default class BillingAPI extends BaseAPI {
    constructor(client: Client);
    getDeveloperExchangeRate(): Promise<GetDeveloperExchangeRate>;
    submitDeveloperExchange(options: SubmitDeveloperExchangeOptions): Promise<SubmitDeveloperExchange>;
    getLuobuDeveloperExchangeBalance(): Promise<GetLuobuDeveloperExchangeBalance>;
    getLuobuDeveloperExchangeEligibility(): Promise<GetLuobuDeveloperExchangeEligibility>;
    getLuobuDeveloperExchangeLatestRequestStatus(): Promise<GetLatestLuobuDeveloperExchangeStatus>;
    submitLuobuDeveloperExchange(options: SubmitLuobuDeveloperExchangeOptions): Promise<SubmitLuobuDeveloperExchange>;
    getUserPaymentsHistory(options: GetUserPaymentsOptions): Promise<GetUserPayments>;
    purchaseAmazonProduct(options: PurchaseAmazonProductOptions): Promise<PurchaseAmazonProduct>;
    validateAmazonProduct(options: ValidateAmazonProductOptions): Promise<ValidateAmazonProduct>;
    purchaseAppleProduct(options: PurchaseAppleProductOptions): Promise<PurchaseAppleProduct>;
    validateAppleProduct(options: ValidateAppleProductOptions): Promise<ValidateAppleProduct>;
    redeemDigitalCode(options: RedeemDigitalCodeOptions): Promise<RedeemDigitalCode>;
    redeemGameCard(options: RedeemGameCardOptions): Promise<RedeemGameCard>;
    reverseGameCard(options: ReverseGameCardOptions): Promise<ReverseGameCard>;
    purchaseGoogleProduct(options: PurchaseGoogleProductOptions): Promise<PurchaseGoogleProduct>;
    validateGoogleProduct(options: ValidateGoogleProductOptions): Promise<ValidateGoogleProduct>;
    sendXsollaWebhook(options: SendXsollaWebhookOptions): Promise<SendXsollaWebhook>;
    getXsollaIFrameToken(options: GetXsollaIFrameTokenOptions): Promise<GetXsollaIFrameToken>;
    incrementCounterByAgent(options: IncrementCounterByAgentOptions): Promise<IncrementCounterByAgent>;
    redeemPromoCode(options: RedeemPromoCodeOptions): Promise<RedeemPromoCode>;
}
