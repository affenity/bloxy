import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetAuthMetaData = {
    cookieLawNoticeTimeout: number;
};
export type LoginOptions = {
    ctype: "Email" | "Username" | string;
    cvalue: string;
    password: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export type Login = {
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
export type Logout = unknown;
export type GetCredentialsVerificationStatusOptions = {
    credentialType: "Email" | "Username" | "PhoneNumber";
    credentialValue: string;
    password: string;
}
export type GetCredentialsVerificationStatus = {
    canSend: boolean;
}
export type SendCredentialsVerificationMessageOptions = {
    credentialType: "Email" | "Username" | "PhoneNumber";
    credentialValue: string;
    password: string;
};
export type SendCredentialsVerificationMessage = unknown;
export type GetMetaData = {
    isUpdateUsernameEnabled: boolean;
    ftuxAvatarAssetMap: string;
};
export type GetCurrentPasswordStatus = {
    valid: boolean;

};
export type GetPasswordResetMetaDataOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
}
export type GetPasswordResetMetaData = {
    users: {
        userId: number;
        username: string;
        displayName: string;
    }[];
}
export type ResetPasswordOptions = {
    targetType: "Email" | "PhoneNumber";
    ticket: string;
    userId: number;
    password: string;
    passwordRepeated: string;
};
export type ResetPassword = Login;
export type ValidatePasswordOptions = {
    username: string;
    password: string;
}
export type ValidatePassword = {
    code: string;
    message: string;
}
export type SendPasswordResetOptions = {
    targetType: ResetPasswordOptions["targetType"];
    target: string;
    captchaToken: string;
    captchaProvider: "PROVIDER_ARKOSELABS" | string;
}
export type SendPasswordReset = {
    nonce: string;
    transmissionType: string;
}
export type VerifyPasswordResetOptions = {
    targetType: ResetPasswordOptions["targetType"];
    nonce: string;
    code: string;
}
export type VerifyPasswordReset = {
    userTickets: {
        user: {
            userId: number;
            username: string;
            displayName: string;
        };
        ticket: string;
    }[];
}
export type ChangeUserPasswordOptions = {
    currentPassword: string;
    newPassword: string;
}
export type ChangeUserPassword = unknown;
export type GetRecoveryMetaData = {
    isOnPhone: boolean;
    codeLength: number;
    isPhoneFeatureEnabledForUsername: boolean;
    isPhoneFeatureEnabledForPassword: boolean;
    isBedev2CaptchaEnabledForPasswordReset: boolean;
}
export type RevertAccountInfoOptions = {
    ticket: string;
}
export type RevertAccountInfo = {
    isTwoStepVerificationEnabled: boolean;
    isEmailVerified: boolean;
    isEmailChanged: boolean;
    userId: number;
    username: string;
    ticket: string;
}
export type RevertAccountOptions = {
    userId: number;
    newPassword: string;
    ticket: string;
}
export type RevertAccount = Login;
export type GetSAMLMetaData = unknown;
export type SAMLRequest = unknown
export type GetTwoStepVerificationMetaData = {
    codeLength: number;
    loadingImageUrl: string;
    supportUrl: string;
}
export type ResendTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    actionType: string;
}
export type ResendTwoStepVerification = RequestTwoStepVerification;
export type RequestTwoStepVerification = {
    mediaType: "Email" | "PhoneNumber" | string;
    ticket: string;
};
export type VerifyTwoStepVerificationOptions = {
    username: string;
    ticket: string;
    code: string;
    rememberDevice: boolean;
    actionType: string;
}
export type VerifyTwoStepVerification = unknown
export type GetExistingUsernamesOptions = {
    username: string;
}
export type GetExistingUsernames = {
    usernames: string[];
}
export type ValidateUsernameOptions = {
    username: string;
    birthday: string;
    context: "Unknown" | "Signup" | "UsernameChange" | string;
}
export type ValidateUsername = {
    code: string;
    message: string;
}
export type RecoverUsernamesOptions = {
    targetType: "Email" | string;
    target: string;
}
export type RecoverUsernames = {
    transmissionType: string;
};
export type SignUpOptions = {
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
}
export type SignUp = {
    userId: number;
    starterPlaceId: number;
}
export type ChangeUsernameOptions = {
    username: string;
    password: string;
}
export type ChangeUsername = unknown

export default class AuthAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://auth.roblox.com/"
        });
    }

    getAuthMetaData (): Promise<GetAuthMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/auth/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetAuthMetaData);
    }

    login (options: LoginOptions): Promise<Login> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/login",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as Login);
    }

    logout (): Promise<Logout> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/logout",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as Logout);
    }

    getCredentialsVerificationStatus (options: GetCredentialsVerificationStatusOptions): Promise<GetCredentialsVerificationStatus> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/credentials/verification",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    "request.credentialType": options.credentialType,
                    "request.credentialValue": options.credentialValue,
                    "request.password": options.password
                }
            }
        })
            .then(response => response.body as GetCredentialsVerificationStatus);
    }

    sendCredentialsVerificationMessage (options: SendCredentialsVerificationMessageOptions): Promise<SendCredentialsVerificationMessage> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/credentials/verification/send",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as SendCredentialsVerificationMessage);
    }

    getMetaData (): Promise<GetMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetMetaData);
    }

    getCurrentUserPasswordStatus (): Promise<GetCurrentPasswordStatus> {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/passwords/current-status",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetCurrentPasswordStatus);
    }

    getPasswordResetMetaData (options: GetPasswordResetMetaDataOptions): Promise<GetPasswordResetMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    "request.targetType": options.targetType,
                    "request.ticket": options.ticket
                }
            }
        })
            .then(response => response.body as GetPasswordResetMetaData);
    }

    resetPassword (options: ResetPasswordOptions): Promise<ResetPassword> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/auth/metadata",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as ResetPassword);
    }

    validatePassword (options: ValidatePasswordOptions): Promise<ValidatePassword> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/validate",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    "request.username": options.username,
                    "request.password": options.password
                }
            }
        })
            .then(response => response.body as ValidatePassword);
    }

    sendPasswordReset (options: SendPasswordResetOptions): Promise<SendPasswordReset> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset/send",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as SendPasswordReset);
    }

    verifyPasswordReset (options: VerifyPasswordResetOptions): Promise<VerifyPasswordReset> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/passwords/reset/verify",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as VerifyPasswordReset);
    }

    changeUserPassword (options: ChangeUserPasswordOptions): Promise<ChangeUserPassword> {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/user/passwords/change",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as ChangeUserPassword);
    }

    getRecoveryMetaData (): Promise<GetRecoveryMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/recovery/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetRecoveryMetaData);
    }

    getRevertAccountInfo (options: RevertAccountInfoOptions): Promise<RevertAccountInfo> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/revert/account",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    ticket: options.ticket
                }
            }
        })
            .then(response => response.body as RevertAccountInfo);
    }

    revertAccount (options: RevertAccountOptions): Promise<RevertAccount> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/revert/account",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as RevertAccount);
    }

    getSAMLMetaData (): Promise<GetSAMLMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/saml/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetSAMLMetaData);
    }

    samlAuthenticate (): Promise<SAMLRequest> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/saml/login",
                method: "POST"
            }
        })
            .then(response => response.body as SAMLRequest);
    }

    getTwoStepVerificationMetaData (): Promise<GetTwoStepVerificationMetaData> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            }
        })
            .then(response => response.body as GetTwoStepVerificationMetaData);
    }

    resendTwoStepVerificationCode (options: ResendTwoStepVerificationOptions): Promise<ResendTwoStepVerification> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/resend",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as ResendTwoStepVerification);
    }

    verifyTwoStepCode (options: VerifyTwoStepVerificationOptions): Promise<VerifyTwoStepVerification> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/verify",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as VerifyTwoStepVerification);
    }

    getExistingUsernames (options: GetExistingUsernamesOptions): Promise<GetExistingUsernames> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/usernames",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    username: options.username
                }
            }
        })
            .then(response => response.body as GetExistingUsernames);
    }

    validateUsername (options: ValidateUsernameOptions): Promise<ValidateUsername> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/usernames/validate",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    "request.username": options.username,
                    "request.birthday": options.birthday,
                    "request.context": options.context
                }
            }
        })
            .then(response => response.body as ValidateUsername);
    }

    recoverUsernames (options: RecoverUsernamesOptions): Promise<RecoverUsernames> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as RecoverUsernames);
    }

    signUp (options: SignUpOptions): Promise<SignUp> {
        return this.request({
            json: true,
            requiresAuth: false,
            request: {
                path: "v2/twostepverification/metadata",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as SignUp);
    }

    changeUserUsername (options: ChangeUsernameOptions): Promise<ChangeUsername> {
        return this.request({
            json: true,
            requiresAuth: true,
            request: {
                path: "v2/username",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            }
        })
            .then(response => response.body as ChangeUsername);
    }
}
