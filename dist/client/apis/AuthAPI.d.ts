import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetAuthMetaData = {
    cookieLawNoticeTimeout: number;
};
export declare type LoginOptions = {
    ctype: "Email" | "Username" | string;
    cvalue: string;
    password: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type Login = {
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
export declare type Logout = {};
export declare type GetCredentialsVerificationStatusOptions = {
    credentialType: "Email" | "Username" | "PhoneNumber";
    credentialValue: string;
    password: string;
};
export declare type GetCredentialsVerificationStatus = {
    canSend: boolean;
};
export declare type SendCredentialsVerificationMessageOptions = {
    credentialType: "Email" | "Username" | "PhoneNumber";
    credentialValue: string;
    password: string;
};
export declare type SendCredentialsVerificationMessage = {};
export declare type GetMetaData = {
    isUpdateUsernameEnabled: boolean;
    ftuxAvatarAssetMap: string;
};
export declare type GetCurrentPasswordStatus = {
    valid: boolean;
};
export declare type GetPasswordResetMetaDataOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
};
export declare type GetPasswordResetMetaData = {
    users: {
        userId: number;
        username: string;
        displayName: string;
    }[];
};
export declare type ResetPasswordOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
    userId: number;
    password: string;
    passwordRepeated: string;
};
export declare type ResetPassword = Login;
export declare type ValidatePasswordOptions = {
    username: string;
    password: string;
};
export declare type ValidatePassword = {
    code: string;
    message: string;
};
export declare type SendPasswordResetOptions = {
    targetType: ResetPasswordOptions["targetType"];
    target: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export declare type SendPasswordReset = {
    nonce: string;
    transmissionType: string;
};
export declare type VerifyPasswordResetOptions = {
    targetType: ResetPasswordOptions["targetType"];
    nonce: string;
    code: string;
};
export declare type VerifyPasswordReset = {
    userTickets: {
        user: {
            userId: number;
            username: string;
            displayName: string;
        };
        ticket: string;
    }[];
};
export declare type ChangeUserPasswordOptions = {
    currentPassword: string;
    newPassword: string;
};
export declare type ChangeUserPassword = {};
export declare type GetRecoveryMetaData = {
    isOnPhone: boolean;
    codeLength: number;
    isPhoneFeatureEnabledForUsername: boolean;
    isPhoneFeatureEnabledForPassword: boolean;
    isBedev2CaptchaEnabledForPasswordReset: boolean;
};
export declare type RevertAccountInfoOptions = {
    ticket: string;
};
export declare type RevertAccountInfo = {
    isTwoStepVerificationEnabled: boolean;
    isEmailVerified: boolean;
    isEmailChanged: boolean;
    userId: number;
    username: string;
    ticket: string;
};
export declare type RevertAccountOptions = {
    userId: number;
    newPassword: string;
    ticket: string;
};
export declare type RevertAccount = Login;
export declare type GetSAMLMetaData = unknown;
export declare type SAMLRequest = {};
export declare type GetTwoStepVerificationMetaData = {
    codeLength: number;
    loadingImageUrl: string;
    supportUrl: string;
};
export declare type ResendTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    actionType: string;
};
export declare type ResendTwoStepVerification = RequestTwoStepVerification;
export declare type RequestTwoStepVerification = {
    mediaType: "Email" | "PhoneNumber" | string;
    ticket: string;
};
export declare type VerifyTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    code: string;
    rememberDevice: boolean;
    actionType: string;
};
export declare type VerifyTwoStepVerification = {};
export declare type GetExistingUsernamesOptions = {
    username: string;
};
export declare type GetExistingUsernames = {
    usernames: string[];
};
export declare type ValidateUsernameOptions = {
    username: string;
    birthday: string;
    context: "Unknown" | "Signup" | "UsernameChange" | string;
};
export declare type ValidateUsername = {
    code: string;
    message: string;
};
export declare type RecoverUsernamesOptions = {
    targetType: "Email" | string;
    target: string;
};
export declare type RecoverUsernames = {
    transmissionType: string;
};
export declare type SignUpOptions = {
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
export declare type SignUp = {
    userId: number;
    starterPlaceId: number;
};
export declare type ChangeUsernameOptions = {
    username: string;
    password: string;
};
export declare type ChangeUsername = {};
export default class AuthAPI extends BaseAPI {
    constructor(client: Client);
    getAuthMetaData(): Promise<GetAuthMetaData>;
    login(options: LoginOptions): Promise<Login>;
    logout(): Promise<Logout>;
    getCredentialsVerificationStatus(options: GetCredentialsVerificationStatusOptions): Promise<GetCredentialsVerificationStatus>;
    sendCredentialsVerificationMessage(options: SendCredentialsVerificationMessageOptions): Promise<SendCredentialsVerificationMessage>;
    getMetaData(): Promise<GetMetaData>;
    getCurrentUserPasswordStatus(): Promise<GetCurrentPasswordStatus>;
    getPasswordResetMetaData(options: GetPasswordResetMetaDataOptions): Promise<GetPasswordResetMetaData>;
    resetPassword(options: ResetPasswordOptions): Promise<ResetPassword>;
    validatePassword(options: ValidatePasswordOptions): Promise<ValidatePassword>;
    sendPasswordReset(options: SendPasswordResetOptions): Promise<SendPasswordReset>;
    verifyPasswordReset(options: VerifyPasswordResetOptions): Promise<VerifyPasswordReset>;
    changeUserPassword(options: ChangeUserPasswordOptions): Promise<ChangeUserPassword>;
    getRecoveryMetaData(): Promise<GetRecoveryMetaData>;
    getRevertAccountInfo(options: RevertAccountInfoOptions): Promise<RevertAccountInfo>;
    revertAccount(options: RevertAccountOptions): Promise<RevertAccount>;
    getSAMLMetaData(): Promise<GetSAMLMetaData>;
    samlAuthenticate(): Promise<SAMLRequest>;
    getTwoStepVerificationMetaData(): Promise<GetTwoStepVerificationMetaData>;
    resendTwoStepVerificationCode(options: ResendTwoStepVerificationOptions): Promise<ResendTwoStepVerification>;
    verifyTwoStepCode(options: VerifyTwoStepVerificationOptions): Promise<VerifyTwoStepVerification>;
    getExistingUsernames(options: GetExistingUsernamesOptions): Promise<GetExistingUsernames>;
    validateUsername(options: ValidateUsernameOptions): Promise<ValidateUsername>;
    recoverUsernames(options: RecoverUsernamesOptions): Promise<RecoverUsernames>;
    signUp(options: SignUpOptions): Promise<SignUp>;
    changeUserUsername(options: ChangeUsernameOptions): Promise<ChangeUsername>;
}
