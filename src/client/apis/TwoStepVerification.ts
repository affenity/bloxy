import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetTwoStepVerificationMetaDataOptions = {
    userId: number;
    challengeId: string;
    actionType: string;
};
export type GetTwoStepVerificationMetaData = {
    twoStepVerificationEnabled: boolean;
    authenticatorEnabled: boolean;
    authenticatorQrCodeSize: string;
    emailCodeLength: number;
    authenticatorCodeLength: number;
};
export type GetTwoStepConfigurationOptions = GetTwoStepVerificationMetaDataOptions;
export type GetTwoStepConfiguration = {
    primaryMediaType: "Email" | string;
    methods: {
        mediaType: "Email" | string;
        enabled: boolean;
        updated: string;
    }[];
};
export type AuthenticatorVerifyOptions = {
    challengeId: string;
    actionType: string;
    code: string;
};
export type AuthenticatorVerify = {
    verificationToken: string;
};
export type AuthenticatorDisableOptions = {
    password: string;
};
export type AuthenticatorDisable = unknown;
export type AuthenticatorEnableOptions = {
    userId: number;
};
export type AuthenticatorEnable = {
    setupToken: string;
    qrCodeImageUrl: string;
    manualEntryKey: string;
};
export type AuthenticatorVerifySetupOptions = {
    setupToken: string;
    code: string;
};
export type AuthenticatorVerifySetup = unknown;
export type EmailSendCodeOptions = {
    challengeId: string;
    actionType: string;
};
export type EmailSendCode = {
    challengeId: string;
    actionType: string;
};
export type EmailVerifyOptions = {
    challengeId: string;
    actionType: string;
    code: string;
};
export type EmailVerify = {
    verificationToken: string;
};
export type EmailDisableOptions = {
    password: string;
}
export type EmailDisable = unknown;
export type EmailEnableOptions = {
    userId: number;
};
export type EmailEnable = unknown;

export default class TwoStepVerification extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://twostepverification.roblox.com/"
        });
    }

    getMetaData (options: GetTwoStepVerificationMetaDataOptions): Promise<GetTwoStepVerificationMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getConfiguration (options?: GetTwoStepConfigurationOptions): Promise<GetTwoStepVerificationMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration`,
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    verifyWithAuthenticator (options: AuthenticatorVerifyOptions): Promise<AuthenticatorVerify> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/challenges/authenticator/verify`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    disableAuthenticator (options: AuthenticatorDisableOptions): Promise<AuthenticatorDisable> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration/authenticator/disable`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    enableAuthenticator (options: AuthenticatorEnableOptions): Promise<AuthenticatorEnable> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration/authenticator/enable`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    verifyAuthenticatorSetup (options: AuthenticatorVerifySetupOptions): Promise<AuthenticatorVerifySetup> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration/authenticator/disable`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    sendEmailCode (options: EmailSendCodeOptions): Promise<EmailSendCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/challenges/email/send-code`,
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    verifyEmail (options: EmailVerifyOptions): Promise<EmailVerify> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/challenges/email/verify`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    disableEmail (options: EmailDisableOptions): Promise<EmailDisable> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration/email/disable`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    enableEmail (options: EmailEnableOptions): Promise<EmailEnable> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/users/${this.client.user!.id}/configuration/email/enable`,
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
