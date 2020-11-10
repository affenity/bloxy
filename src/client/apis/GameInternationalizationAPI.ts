import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetGameInfoOptions = {
    gameId: number;
}
export type GetGameInfo = {
    data: {
        name: string;
        description: string;
        languageCode: string;
    }[];
}
export type UpdateGameInfoOptions = {
    gameId: number;
    data: GetGameInfo;
};
export type UpdateGameInfo = {
    successOperations: GetGameInfo["data"];
    failedOperations: {
        languageCode: string;
        errorCode: number;
    }[];
}
export type GetNameDescriptionMetaData = {
    isNameDescriptionMigrationEnabled: boolean;
}
export type GetGameInfoHistoryOptions = {
    gameId: number;
    requestType: string;
    languageCode: string;
    cursor: string;
    count: number;
    sortOrder: "Asc" | "Desc" | string;
}
export type GetGameInfoHistory = {
    history: {
        translationText: string;
        translator: {
            id: number;
            agentType: "User" | string;
        };
        created: Date;
    }[];
    lastEvaluatedId: string;
}
export type GetGameSourceLanguageOptions = {
    gameId: number;
}
export type GetGameSourceLanguage = {
    name: string;
    nativeName: string;
    languageCode: string;
}
export type UpdateGameSourceLanguageOptions = {
    gameId: number;
    languageCode: string;
}
export type UpdateGameSourceLanguage = unknown
export type GetGameSupportedLanguagesOptions = {
    gameId: number;
}
export type GetGameSupportedLanguages = {
    data: {
        name: string;
        languageCodeType: string;
        languageCode: string;
    }[];
}
export type ModifyGameSupportedLanguagesOptions = {
    data: {
        languageCodeType: string;
        languageCode: string;
        delete: boolean;
    }[];
    gameId: number;
};
export type ModifyGameSupportedLanguages = unknown
export type GetGameAutomaticTranslationResultsOptions = {
    gameId: number;
}
export type GetGameAutomaticTranslationResults = {
    data: {
        languageCodeType: string;
        languageCode: string;
        isAutomaticTranslationEnabled: boolean;
    }[];
}
export type GetSupportedLanguagesMetaData = {
    isFeatureEnabled: boolean;
    areAllLanguagesEnabled: boolean;
    minimumUniverseIdForFeature: number;
    isHumanTranslationProgressUIEnabled: boolean;
    isAutomaticTranslationProgressUIEnabled: boolean;
    isSupportedLanguagesChildLocalesUIEnabled: boolean;
}
export type ToggleAutomaticGameTranslationOptions = {
    gameId: number;
    languageCode: string;
    enableAutomaticTranslation: boolean;
}
export type ToggleAutomaticGameTranslation = {
    gameId: number;
    languageCode: string;
    isAutomaticTranslationEnabled: boolean;
}

export default class GameInternationalizationAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://gameinternationalization.roblox.com/"
        });
    }

    getGameInfo (options: GetGameInfoOptions): Promise<GetGameInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGameInfo (options: UpdateGameInfoOptions): Promise<UpdateGameInfo> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}`,
                method: "PATCH",
                json: {
                    data: options.data
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getNameDescriptionMetaData (): Promise<GetNameDescriptionMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameInfoHistory (options: GetGameInfoHistoryOptions): Promise<GetGameInfoHistory> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/name-description/games/${options.gameId}/history`,
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

    getGameSourceLanguage (options: GetGameSourceLanguageOptions): Promise<GetGameSourceLanguage> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/source-language/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    updateGameSourceLanguage (options: UpdateGameSourceLanguageOptions): Promise<UpdateGameSourceLanguage> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/source-language/games/${options.gameId}`,
                method: "PATCH",
                qs: {
                    languageCode: options.languageCode
                },
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameSupportedLanguages (options: GetGameSupportedLanguagesOptions): Promise<GetGameSupportedLanguages> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    modifyGameSupportedLanguages (options: ModifyGameSupportedLanguagesOptions): Promise<ModifyGameSupportedLanguages> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}`,
                method: "PATCH",
                json: options.data,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getGameAutomaticTranslationStatus (options: GetGameAutomaticTranslationResultsOptions): Promise<GetGameAutomaticTranslationResults> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}/automatic-translation-status`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getSupportedLanguagesMetaData (): Promise<GetSupportedLanguagesMetaData> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    toggleGameAutomaticTranslation (options: ToggleAutomaticGameTranslationOptions): Promise<ToggleAutomaticGameTranslation> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/supported-languages/games/${options.gameId}/languages/${options.languageCode}/automatic-translation-status`,
                method: "PATCH",
                json: String(options.enableAutomaticTranslation)
                    .toString(),
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
