import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type TwoStepVerificationGetMetaDataOptions = {
    userId: number;
    challengeId: string;
    actionType: string;
};
export declare type TwoStepVerificationGetMetaData = {
    twoStepVerificationEnabled: boolean;
    authenticatorEnabled: boolean;
    authenticatorQrCodeSize: string;
    emailCodeLength: number;
    authenticatorCodeLength: number;
};
export declare type TwoStepVerificationGetConfigurationOptions = TwoStepVerificationGetMetaDataOptions;
export declare type TwoStepVerificationGetConfiguration = {
    primaryMediaType: "Email" | string;
    methods: {
        mediaType: "Email" | string;
        enabled: boolean;
        updated: string;
    }[];
};
export declare type TwoStepVerificationAuthenticatorVerifyOptions = {
    challengeId: string;
    actionType: string;
    code: string;
};
export declare type TwoStepVerificationAuthenticatorVerify = {
    verificationToken: string;
};
export declare type TwoStepVerificationAuthenticatorDisableOptions = {
    password: string;
};
export declare type TwoStepVerificationAuthenticatorDisable = unknown;
export declare type TwoStepVerificationAuthenticatorEnableOptions = {
    userId: number;
};
export declare type TwoStepVerificationAuthenticatorEnable = {
    setupToken: string;
    qrCodeImageUrl: string;
    manualEntryKey: string;
};
export declare type TwoStepVerificationAuthenticatorVerifySetupOptions = {
    setupToken: string;
    code: string;
};
export declare type TwoStepVerificationAuthenticatorVerifySetup = unknown;
export declare type TwoStepVerificationEmailSendCodeOptions = {
    challengeId: string;
    actionType: string;
};
export declare type TwoStepVerificationEmailSendCode = {
    challengeId: string;
    actionType: string;
};
export declare type TwoStepVerificationEmailVerifyOptions = {
    challengeId: string;
    actionType: string;
    code: string;
};
export declare type TwoStepVerificationEmailVerify = {
    verificationToken: string;
};
export declare type TwoStepVerificationEmailDisableOptions = {
    password: string;
};
export declare type TwoStepVerificationEmailDisable = unknown;
export declare type TwoStepVerificationEmailEnableOptions = {
    userId: number;
};
export declare type TwoStepVerificationEmailEnable = unknown;
export declare class TwoStepVerificationAPI extends BaseAPI {
    constructor(client: Client);
    getMetaData(options: TwoStepVerificationGetMetaDataOptions): Promise<TwoStepVerificationGetMetaData>;
    getConfiguration(options?: TwoStepVerificationGetConfigurationOptions): Promise<TwoStepVerificationGetMetaData>;
    verifyWithAuthenticator(options: TwoStepVerificationAuthenticatorVerifyOptions): Promise<TwoStepVerificationAuthenticatorVerify>;
    disableAuthenticator(options: TwoStepVerificationAuthenticatorDisableOptions): Promise<TwoStepVerificationAuthenticatorDisable>;
    enableAuthenticator(options: TwoStepVerificationAuthenticatorEnableOptions): Promise<TwoStepVerificationAuthenticatorEnable>;
    verifyAuthenticatorSetup(options: TwoStepVerificationAuthenticatorVerifySetupOptions): Promise<TwoStepVerificationAuthenticatorVerifySetup>;
    sendEmailCode(options: TwoStepVerificationEmailSendCodeOptions): Promise<TwoStepVerificationEmailSendCode>;
    verifyEmail(options: TwoStepVerificationEmailVerifyOptions): Promise<TwoStepVerificationEmailVerify>;
    disableEmail(options: TwoStepVerificationEmailDisableOptions): Promise<TwoStepVerificationEmailDisable>;
    enableEmail(options: TwoStepVerificationEmailEnableOptions): Promise<TwoStepVerificationEmailEnable>;
}
