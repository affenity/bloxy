import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { UpdateUserPromotionChannelsOptions as AccountInformationUpdateUserPromotionChannelsOptions } from "./AccountInformationAPI";


export type GetSettingsGroups = {
    title: string;
    url: string;
    suffix: string;
}[];
export type GetAppChatPrivacy = {
    appChatPrivacy: string;
}
export type UpdateAppChatPrivacyOptions = {
    appChatPrivacy: string;
};
export type UpdateAppChatPrivacy = boolean;
export type GetGameChatPrivacy = {
    gameChatPrivacy: string;
}
export type UpdateGameChatPrivacyOptions = {
    gameChatPrivacy: string;
};
export type UpdateGameChatPrivacy = boolean;
export type GetInventoryPrivacy = {
    inventoryPrivacy: string;
}
export type UpdateInventoryPrivacyOptions = {
    inventoryPrivacy: string;
};
export type UpdateInventoryPrivacy = {
    inventoryPrivacy: string;
    tradePrivacy: string;
    privacySettingResponse: string;
};
export type GetUserPrivacy = {
    phoneDiscovery: string;
}
export type UpdateUserPrivacyOptions = {
    phoneDiscovery: string;
};
export type UpdateUserPrivacy = {
    phoneDiscovery: string;
}
export type GetUserPrivacySettingsInfo = {
    isPhoneDiscoveryEnabled: boolean;
}
export type GetUserPrivateMessagePrivacy = {
    privateMessagePrivacy: string;
}
export type UpdateUserPrivateMessagePrivacyOptions = {
    privateMessagePrivacy: string;
};
export type UpdateUserPrivateMessagePrivacy = boolean;
export type GetUserEmailStatus = {
    email: string;
    verified: boolean;
}
export type UpdateUserEmailOptions = {
    password: string;
    emailAddress: string;
};
export type UpdateUserEmail = boolean;
export type SendEmailVerification = boolean;
export type GetWebsiteTheme = {
    themeType: string;
}
export type UpdateWebsiteThemeOptions = {
    themeType: string;
};
export type UpdateWebsiteTheme = boolean;
export type GetWebsiteThemes = {
    data: string[];
};
export type GetUserTradePrivacy = {
    tradePrivacy: string;
};
export type UpdateUserTradePrivacyOptions = {
    tradePrivacy: string;
};
export type UpdateUserTradePrivacy = {
    tradePrivacy: string;
    inventoryPrivacy: string;
    privacySettingResponse: string;
};
export type GetUserTradeQualityFilter = {
    tradeValue: string;
}
export type UpdateUserTradeQualityFilterOptions = {
    tradeValue: string;
};
export type UpdateUserTradeQualityFilter = boolean;
export type GetTwoStepStatus = {
    enabled: boolean;
}
export type UpdateTwoStepStatusOptions = {
    enabled: boolean;
    password: string;
};
export type UpdateTwoStepStatus = {
    enabled: boolean;
    password: string;
}
export type GetContactUpsell = {
    upsellScreenType: string;
}
export type UpdateContactUpsellSuppressionOptions = {
    suppress: boolean;
};
export type UpdateContactUpsellSuppression = boolean;
export type GetIsXboxUsernameValidOptions = {
    authorization: string;
    signature: string;
    username: string;
};
export type GetIsXboxUsernameValid = {
    isValid: boolean;
    errorMessage?: string;
    errorCode?: string;
}
export type UpdateUserPromotionChannelsOptions = AccountInformationUpdateUserPromotionChannelsOptions;
export type UpdateUserPromotionChannels = boolean;


export default class AccountSettingsAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            baseUrl: "https://accountsettings.roblox.com/",
            client
        });
    }

    getSettingsGroups (): Promise<GetSettingsGroups> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v1/account/settings/settings-groups",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body.map((val: any) => ({
                title: val.Title,
                url: val.Url,
                suffix: val.Suffix
            })));
    }

    getAppChatPrivacy (): Promise<GetAppChatPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateAppChatPrivacy (options: UpdateAppChatPrivacyOptions): Promise<UpdateAppChatPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/app-chat-privacy",
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

    getGameChatPrivacy (): Promise<GetGameChatPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGameChatPrivacy (options: UpdateGameChatPrivacyOptions): Promise<UpdateGameChatPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/game-chat-privacy",
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

    getInventoryPrivacy (): Promise<GetInventoryPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateInventoryPrivacy (options: UpdateInventoryPrivacyOptions): Promise<UpdateInventoryPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/inventory-privacy",
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

    getUserPrivacy (): Promise<GetUserPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateUserPrivacy (options: UpdateUserPrivacyOptions): Promise<UpdateUserPrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserPrivacySettingsInfo (): Promise<GetUserPrivacySettingsInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/privacy/info",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserPrivacySettingsInfo);
    }

    getUserPrivateMessagePrivacy (): Promise<GetUserPrivateMessagePrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserPrivateMessagePrivacy);
    }

    updateUserPrivateMessagePrivacy (options: UpdateUserPrivateMessagePrivacyOptions): Promise<UpdateUserPrivateMessagePrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/private-message-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(() => true as UpdateUserPrivateMessagePrivacy);
    }

    getUserEmailStatus (): Promise<GetUserEmailStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserEmailStatus);
    }

    updateUserEmail (options: UpdateUserEmailOptions): Promise<UpdateUserEmail> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(() => true);
    }

    sendEmailVerification (): Promise<SendEmailVerification> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email/verify",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(() => true);
    }

    getWebsiteTheme (): Promise<GetWebsiteTheme> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/themes/User/${this.client.user!.id}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetWebsiteTheme);
    }

    updateWebsiteTheme (options: UpdateWebsiteThemeOptions): Promise<UpdateWebsiteTheme> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/themes/User/${this.client.user!.id}`,
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: {
                    themeType: options.themeType
                }
            },
            json: true
        })
            .then(() => true);
    }

    getWebsiteThemes (): Promise<GetWebsiteThemes> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/themes/types",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetWebsiteThemes);
    }

    getUserTradePrivacy (): Promise<GetUserTradePrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-privacy",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserTradePrivacy);
    }

    updateUserTradePrivacy (options: UpdateUserTradePrivacyOptions): Promise<UpdateUserTradePrivacy> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-privacy",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body as UpdateUserTradePrivacy);
    }

    getUserTradeQualityFilter (): Promise<GetUserTradeQualityFilter> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-value",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetUserTradeQualityFilter);
    }

    updateUserTradeQualityFilter (options: UpdateUserTradeQualityFilterOptions): Promise<UpdateUserTradeQualityFilter> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/trade-value",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(() => true);
    }

    getTwoStepStatus (): Promise<GetTwoStepStatus> {
        throw new Error("This feature no longer works!");
    }

    updateTwoStepStatus (options: UpdateTwoStepStatusOptions): Promise<UpdateTwoStepStatus> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/email",
                method: "PATCH",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(response => response.body as UpdateTwoStepStatus);
    }

    getContactUpsell (): Promise<GetContactUpsell> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/user/screens/contact-upsell",
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body as GetContactUpsell);
    }

    updateContactUpsellSuppression (options: UpdateContactUpsellSuppressionOptions): Promise<UpdateContactUpsellSuppression> {
        return this.request({
            requiresAuth: true,
            request: {
                method: "POST",
                path: "v1/user/screens/contact-upsell/suppress",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(() => true as UpdateContactUpsellSuppression);
    }

    getIsXboxUsernameValid (options: GetIsXboxUsernameValidOptions): Promise<GetIsXboxUsernameValid> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/xbox/is-username-valid",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                qs: {
                    Authorization: options.authorization,
                    signature: options.signature,
                    "request.username": options.username
                }
            },
            json: true
        })
            .then(response => response.body as GetIsXboxUsernameValid);
    }

    updateUserPromotionChannels (options: UpdateUserPromotionChannelsOptions): Promise<UpdateUserPromotionChannels> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v1/promotion-channels",
                method: "POST",
                responseOptions: {
                    allowedStatusCodes: [200]
                },
                json: options
            },
            json: true
        })
            .then(() => true);
    }
}
