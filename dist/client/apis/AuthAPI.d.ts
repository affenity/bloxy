import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
import { UsernamePasswordOption } from "../../types/GenericOptionTypes";
export declare type AuthPin = {
    pin: string;
};
export declare type AuthUnlockPinOptions = AuthPin;
export declare type AuthUnlockPin = {
    unlockedUntil: number;
};
export declare type AuthLockPin = {
    success: boolean;
};
export declare type AuthMetaData = {
    isUpdateUsernameEnabled: boolean;
    ftuxAvatarAssetMap: string;
    isEmailUpsellAtLogoutEnabled: boolean;
    shouldFetchEmailUpsellIXPValuesAtLogout: boolean;
    isAccountRecoveryPromptEnabled: boolean;
    isContactMethodRequiredAtSignup: boolean;
    isUserAgreementsSignupIntegrationEnabled: boolean;
    isRetypePasswordRequired: boolean;
    arePasswordFieldsPlaintext: boolean;
    isKoreaIdVerificationEnabled: boolean;
    isSignupButtonGreenColorEnabled: boolean;
};
export declare type AuthTicket = {
    authTicket: string;
};
export declare type AuthEndpointMetaData = {
    cookieLawNoticeTimeout: number;
};
export declare type AuthLoginOptions = {
    ctype: "Email" | "Username" | string;
    cvalue: string;
    password: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type AuthLogin = {
    user: {
        id: number;
        name: string;
        displayName: string;
    };
    twoStepVerificationData?: {
        mediaType: "Email" | string;
        ticket: string;
    };
};
export declare type AuthCredentialsVerificationOptions = {
    credentialType: "Email" | "Username" | "PhoneNumber";
    credentialValue: string;
    password: string;
};
export declare type AuthGetCredentialsVerificationStatus = {
    canSend: boolean;
};
export declare type AuthGetCurrentPasswordStatus = {
    valid: boolean;
};
export declare type AuthGetPasswordResetMetaDataOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
};
export declare type AuthGetPasswordResetMetaData = {
    users: {
        userId: number;
        username: string;
        displayName: string;
    }[];
};
export declare type AuthResetPasswordOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
    userId: number;
    password: string;
    passwordRepeated: string;
};
export declare type AuthValidatePassword = {
    code: string;
    message: string;
};
export declare type AuthSendPasswordResetOptions = {
    targetType: AuthResetPasswordOptions["targetType"];
    target: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type AuthSendPasswordReset = {
    nonce: string;
    transmissionType: string;
};
export declare type AuthVerifyPasswordResetOptions = {
    targetType: AuthResetPasswordOptions["targetType"];
    nonce: string;
    code: string;
};
export declare type AuthVerifyPasswordReset = {
    userTickets: {
        user: {
            userId: number;
            username: string;
            displayName: string;
        };
        ticket: string;
    }[];
};
export declare type AuthChangeUserPasswordOptions = {
    currentPassword: string;
    newPassword: string;
};
export declare type AuthGetRecoveryMetaData = {
    isOnPhone: boolean;
    codeLength: number;
    isPhoneFeatureEnabledForUsername: boolean;
    isPhoneFeatureEnabledForPassword: boolean;
    isBedev2CaptchaEnabledForPasswordReset: boolean;
};
export declare type AuthRevertAccountInfoOptions = {
    ticket: string;
};
export declare type AuthRevertAccountInfo = {
    isTwoStepVerificationEnabled: boolean;
    isEmailVerified: boolean;
    isEmailChanged: boolean;
    userId: number;
    username: string;
    ticket: string;
};
export declare type AuthRevertAccountOptions = {
    userId: number;
    newPassword: string;
    ticket: string;
};
export declare type AuthGetSAMLMetaData = unknown;
export declare type AuthSAMLRequest = unknown;
export declare type AuthGetTwoStepVerificationMetaData = {
    codeLength: number;
    loadingImageUrl: string;
    supportUrl: string;
};
export declare type AuthResendTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    actionType: string;
};
export declare type AuthTwoStepVerification = {
    mediaType: "Email" | "PhoneNumber" | string;
    ticket: string;
};
export declare type AuthVerifyTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    code: string;
    rememberDevice: boolean;
    actionType: string;
};
export declare type AuthVerifyTwoStepVerification = unknown;
export declare type AuthGetExistingUsernamesOptions = {
    username: string;
};
export declare type AuthGetExistingUsernames = {
    usernames: string[];
};
export declare type AuthValidateUsernameOptions = {
    username: string;
    birthday: string;
    context: "Unknown" | "Signup" | "UsernameChange" | string;
};
export declare type AuthValidateUsername = {
    code: string;
    message: string;
};
export declare type AuthRecoverUsernamesOptions = {
    targetType: "Email" | string;
    target: string;
};
export declare type AuthRecoverUsernames = {
    transmissionType: string;
};
export declare type AuthSignUpOptions = {
    username: string;
    password: string;
    gender: "Unknown" | string;
    birthday: string;
    isTosAgreementBoxChecked: boolean;
    email: string;
    locale: string;
    assetIds: number[];
    bodyColorId: number;
    bodyTypeScale: number;
    headScale: number;
    heightScale: number;
    widthScale: number;
    proportionScale: number;
    captchaToken: string;
    captchaProvider: string;
};
export declare type AuthSignUp = {
    userId: number;
    starterPlaceId: number;
};
export declare type AuthChangeUsernameOptions = {
    username: string;
    password: string;
};
export declare type AuthChangeUsername = unknown;
export declare type AuthChangeUserPassword = unknown;
export declare type AuthResetPassword = AuthLogin & {
    identityVerificationLoginTicket: string;
    isBanned: boolean;
};
export declare type AuthRevertAccount = AuthResetPassword;
export declare class AuthAPI extends BaseAPI {
    constructor(client: Client);
    unlockPin(options: AuthUnlockPinOptions): Promise<AuthUnlockPin>;
    lockPin(): Promise<AuthLockPin>;
    getAuthTicket(): Promise<AuthTicket>;
    getMetaData(): Promise<AuthMetaData>;
    getCurrentUserPasswordStatus(): Promise<AuthGetCurrentPasswordStatus>;
    getPasswordResetMetaData(options: AuthGetPasswordResetMetaDataOptions): Promise<AuthGetPasswordResetMetaData>;
    resetPassword(options: AuthResetPasswordOptions): Promise<AuthResetPassword>;
    validatePassword(options: UsernamePasswordOption): Promise<AuthValidatePassword>;
    sendPasswordReset(options: AuthSendPasswordResetOptions): Promise<AuthSendPasswordReset>;
    verifyPasswordReset(options: AuthVerifyPasswordResetOptions): Promise<AuthVerifyPasswordReset>;
    changeUserPassword(options: AuthChangeUserPasswordOptions): Promise<AuthChangeUserPassword>;
    getRecoveryMetaData(): Promise<AuthGetRecoveryMetaData>;
    getRevertAccountInfo(options: AuthRevertAccountInfoOptions): Promise<AuthRevertAccountInfo>;
    revertAccount(options: AuthRevertAccountOptions): Promise<AuthRevertAccount>;
    getSAMLMetaData(): Promise<AuthGetSAMLMetaData>;
    samlAuthenticate(): Promise<AuthSAMLRequest>;
    getTwoStepVerificationMetaData(): Promise<AuthGetTwoStepVerificationMetaData>;
    resendTwoStepVerificationCode(options: AuthResendTwoStepVerificationOptions): Promise<AuthTwoStepVerification>;
    verifyTwoStepVerificationCode(options: AuthVerifyTwoStepVerificationOptions): Promise<AuthVerifyTwoStepVerification>;
    getExistingUsernames(options: AuthGetExistingUsernamesOptions): Promise<AuthGetExistingUsernames>;
    validateUsername(options: AuthValidateUsernameOptions): Promise<AuthValidateUsername>;
    recoverUsernames(options: AuthRecoverUsernamesOptions): Promise<AuthRecoverUsernames>;
    signUp(options: AuthSignUpOptions): Promise<AuthSignUp>;
    changeUserUsername(options: AuthChangeUsernameOptions): Promise<AuthChangeUsername>;
}
