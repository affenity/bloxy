import BaseAPI from "./BaseAPI";
import Client from "../Client";


export declare type UpdateUserBirthdateOptions = GetUserBirthdate;
export declare type UpdateUserDescriptionOptions = {
    description: string;
};
export declare type UpdateUserGenderOptions = {
    gender: number;
}
export declare type SetPhoneNumberOptions = {
    countryCode: string;
    prefix: string;
    phone: string;
    password: string;
};
export declare type DeletePhoneOptions = SetPhoneNumberOptions;
export declare type ResendPhoneCodeOptions = SetPhoneNumberOptions;
export declare type VerifyPhoneOptions = SetPhoneNumberOptions;
export declare type AddStarCodeAffiliateOptions = {
    code: string;
};
export declare type UpdateUserPromotionChannelsOptions = {
    facebook: string;
    twitter: string;
    youtube: string;
    twitch: string;
    promotionChannelsVisibilityPrivacy: string;
};

export declare type GetUserBirthdate = {
    birthMonth: number;
    birthDay: number;
    birthYear: number;
};
export declare type UpdateUserBirthdate = boolean;
export declare type GetUserDescription = {
    description: string;
};
export declare type UpdateUserDescription = boolean;
export declare type GetUserGender = {
    gender: number;
}
export declare type UpdateUserGender = unknown
export declare type GetConsecutiveXboxLoginDays = {
    count: number;
};
export declare type GetMetaData = {
    isAllowedNotificationsEndpointDisabled: boolean;
    isAccountSettingsPolicyEnabled: boolean;
    isPhoneNumberEnabled: boolean;
}
export declare type GetVerifiedPhoneNumber = SetPhoneNumberOptions;
export declare type SetPhoneNumber = unknown;
export declare type DeletePhone = unknown;
export declare type ResendPhoneCode = unknown;
export declare type VerifyPhone = unknown;
export declare type GetSelfPromotionChannels = UpdateUserPromotionChannelsOptions;
export declare type GetUserPromotionChannelsOptions = { userId: number }
export declare type GetUserPromotionChannels = Omit<GetSelfPromotionChannels, "promotionChannelsVisibilityPrivacy">;
export declare type UpdateUserPromotionChannels = unknown
export declare type RemoveStarCodeAffiliate = unknown
export declare type GetStarCodeAffiliate = {
    userId: number;
    name: string;
    code: string;
}
export declare type AddStarCodeAffiliate = GetStarCodeAffiliate;

export default class AccountInformationAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            baseUrl: "https://accountinformation.roblox.com/",
            client
        });
    }

    getUserBirthdate (): Promise<GetUserBirthdate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate"
            },
            json: true
        })
            .then(response => response.body as GetUserBirthdate);
    }

    updateUserBirthdate (options: UpdateUserBirthdateOptions): Promise<UpdateUserBirthdate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/birthdate",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as UpdateUserBirthdate);
    }

    getUserDescription (): Promise<GetUserDescription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserDescription);
    }

    updateUserDescription (options: UpdateUserDescriptionOptions): Promise<UpdateUserDescription> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/description",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as UpdateUserDescription);
    }

    getUserGender (): Promise<GetUserGender> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserGender);
    }

    updateUserGender (options: UpdateUserGenderOptions): Promise<UpdateUserGender> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/gender",
                method: "POST",
                json: options
            },
            json: true
        })
            .then(() => true as UpdateUserGender);
    }

    getConsecutiveXboxLoginDays (): Promise<GetConsecutiveXboxLoginDays> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/xbox-live/consecutive-login-days",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetConsecutiveXboxLoginDays);
    }

    getMetaData () {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/metadata",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetMetaData);
    }

    getVerifiedPhoneNumber (): Promise<GetVerifiedPhoneNumber> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetVerifiedPhoneNumber);
    }

    setPhoneNumber (options: SetPhoneNumberOptions): Promise<SetPhoneNumber> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone",
                method: "POST",
                json: options
            },
            json: true
        })
            .then(() => true as SetPhoneNumber);
    }

    deletePhone (options: DeletePhoneOptions): Promise<DeletePhone> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/delete",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as DeletePhone);
    }

    resendPhoneCode (options: ResendPhoneCodeOptions): Promise<ResendPhoneCode> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/resend",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as ResendPhoneCode);
    }

    verifyPhone (options: VerifyPhoneOptions): Promise<VerifyPhone> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/phone/verify",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as VerifyPhone);
    }

    getSelfPromotionChannels (): Promise<GetSelfPromotionChannels> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetSelfPromotionChannels);
    }

    getUserPromotionChannels (options: GetUserPromotionChannelsOptions): Promise<GetUserPromotionChannels> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/promotion-channels`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUserPromotionChannels (options: UpdateUserPromotionChannelsOptions): Promise<UpdateUserPromotionChannels> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as UpdateUserPromotionChannels);
    }

    removeStarCodeAffiliate (): Promise<RemoveStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "DELETE",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true as RemoveStarCodeAffiliate);
    }

    getStarCodeAffiliate (): Promise<GetStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetStarCodeAffiliate);
    }

    addStarCodeAffiliate (options: AddStarCodeAffiliateOptions): Promise<AddStarCodeAffiliate> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/star-code-affiliates",
                method: "POST",
                json: options,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as AddStarCodeAffiliate);
    }
}
