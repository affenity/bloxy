import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetGameInfoOptions = {
    gameId: number;
};
export declare type GetGameInfo = {
    data: {
        name: string;
        description: string;
        languageCode: string;
    }[];
};
export declare type UpdateGameInfoOptions = {
    gameId: number;
    data: GetGameInfo;
};
export declare type UpdateGameInfo = {
    successOperations: GetGameInfo["data"];
    failedOperations: {
        languageCode: string;
        errorCode: number;
    }[];
};
export declare type GetNameDescriptionMetaData = {
    isNameDescriptionMigrationEnabled: boolean;
};
export declare type GetGameInfoHistoryOptions = {
    gameId: number;
    requestType: string;
    languageCode: string;
    cursor: string;
    count: number;
    sortOrder: "Asc" | "Desc" | string;
};
export declare type GetGameInfoHistory = {
    history: {
        translationText: string;
        translator: {
            id: number;
            agentType: "User";
        };
        created: Date;
    }[];
    lastEvaluatedId: string;
};
export declare type GetGameSourceLanguageOptions = {
    gameId: number;
};
export declare type GetGameSourceLanguage = {
    name: string;
    nativeName: string;
    languageCode: string;
};
export declare type UpdateGameSourceLanguageOptions = {
    gameId: number;
    languageCode: string;
};
export declare type UpdateGameSourceLanguage = {};
export declare type GetGameSupportedLanguagesOptions = {
    gameId: number;
};
export declare type GetGameSupportedLanguages = {
    data: {
        name: string;
        languageCodeType: string;
        languageCode: string;
    }[];
};
export declare type ModifyGameSupportedLanguagesOptions = {
    data: {
        languageCodeType: string;
        languageCode: string;
        delete: boolean;
    }[];
    gameId: number;
};
export declare type ModifyGameSupportedLanguages = {};
export declare type GetGameAutomaticTranslationResultsOptions = {
    gameId: number;
};
export declare type GetGameAutomaticTranslationResults = {
    data: {
        languageCodeType: string;
        languageCode: string;
        isAutomaticTranslationEnabled: boolean;
    }[];
};
export declare type GetSupportedLanguagesMetaData = {
    isFeatureEnabled: boolean;
    areAllLanguagesEnabled: boolean;
    minimumUniverseIdForFeature: number;
    isHumanTranslationProgressUIEnabled: boolean;
    isAutomaticTranslationProgressUIEnabled: boolean;
    isSupportedLanguagesChildLocalesUIEnabled: boolean;
};
export declare type ToggleAutomaticGameTranslationOptions = {
    gameId: number;
    languageCode: string;
    enableAutomaticTranslation: boolean;
};
export declare type ToggleAutomaticGameTranslation = {
    gameId: number;
    languageCode: string;
    isAutomaticTranslationEnabled: boolean;
};
export default class GameInternationalizationAPI extends BaseAPI {
    constructor(client: Client);
    getGameInfo(options: GetGameInfoOptions): Promise<GetGameInfo>;
    updateGameInfo(options: UpdateGameInfoOptions): Promise<UpdateGameInfo>;
    getNameDescriptionMetaData(): Promise<GetNameDescriptionMetaData>;
    getGameInfoHistory(options: GetGameInfoHistoryOptions): Promise<GetGameInfoHistory>;
    getGameSourceLanguage(options: GetGameSourceLanguageOptions): Promise<GetGameSourceLanguage>;
    updateGameSourceLanguage(options: UpdateGameSourceLanguageOptions): Promise<UpdateGameSourceLanguage>;
    getGameSupportedLanguages(options: GetGameSupportedLanguagesOptions): Promise<GetGameSupportedLanguages>;
    modifyGameSupportedLanguages(options: ModifyGameSupportedLanguagesOptions): Promise<ModifyGameSupportedLanguages>;
    getGameAutomaticTranslationStatus(options: GetGameAutomaticTranslationResultsOptions): Promise<GetGameAutomaticTranslationResults>;
    getSupportedLanguagesMetaData(): Promise<GetSupportedLanguagesMetaData>;
    toggleGameAutomaticTranslation(options: ToggleAutomaticGameTranslationOptions): Promise<ToggleAutomaticGameTranslation>;
}
