import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type GameInternationalizationGetGameInfoOptions = {
    gameId: number;
};
export declare type GameInternationalizationGetGameInfo = {
    data: {
        name: string;
        description: string;
        languageCode: string;
    }[];
};
export declare type GameInternationalizationUpdateGameInfoOptions = {
    gameId: number;
    data: GameInternationalizationGetGameInfo;
};
export declare type GameInternationalizationUpdateGameInfo = {
    successOperations: GameInternationalizationGetGameInfo["data"];
    failedOperations: {
        languageCode: string;
        errorCode: number;
    }[];
};
export declare type GameInternationalizationGetNameDescriptionMetaData = {
    isNameDescriptionMigrationEnabled: boolean;
};
export declare type GameInternationalizationGetGameInfoHistoryOptions = {
    gameId: number;
    requestType: string;
    languageCode: string;
    cursor: string;
    count: number;
    sortOrder: "Asc" | "Desc" | string;
};
export declare type GameInternationalizationGetGameInfoHistory = {
    history: {
        translationText: string;
        translator: {
            id: number;
            agentType: "User" | string;
        };
        created: Date;
    }[];
    lastEvaluatedId: string;
};
export declare type GameInternationalizationGetGameSourceLanguageOptions = {
    gameId: number;
};
export declare type GameInternationalizationGetGameSourceLanguage = {
    name: string;
    nativeName: string;
    languageCode: string;
};
export declare type GameInternationalizationUpdateGameSourceLanguageOptions = {
    gameId: number;
    languageCode: string;
};
export declare type GameInternationalizationUpdateGameSourceLanguage = unknown;
export declare type GameInternationalizationGetGameSupportedLanguagesOptions = {
    gameId: number;
};
export declare type GameInternationalizationGetGameSupportedLanguages = {
    data: {
        name: string;
        languageCodeType: string;
        languageCode: string;
    }[];
};
export declare type GameInternationalizationModifyGameSupportedLanguagesOptions = {
    data: {
        languageCodeType: string;
        languageCode: string;
        delete: boolean;
    }[];
    gameId: number;
};
export declare type GameInternationalizationModifyGameSupportedLanguages = unknown;
export declare type GameInternationalizationGetGameAutomaticTranslationResultsOptions = {
    gameId: number;
};
export declare type GameInternationalizationGetGameAutomaticTranslationResults = {
    data: {
        languageCodeType: string;
        languageCode: string;
        isAutomaticTranslationEnabled: boolean;
    }[];
};
export declare type GameInternationalizationGetSupportedLanguagesMetaData = {
    isFeatureEnabled: boolean;
    areAllLanguagesEnabled: boolean;
    minimumUniverseIdForFeature: number;
    isHumanTranslationProgressUIEnabled: boolean;
    isAutomaticTranslationProgressUIEnabled: boolean;
    isSupportedLanguagesChildLocalesUIEnabled: boolean;
};
export declare type GameInternationalizationToggleAutomaticGameTranslationOptions = {
    gameId: number;
    languageCode: string;
    enableAutomaticTranslation: boolean;
};
export declare type GameInternationalizationToggleAutomaticGameTranslation = {
    gameId: number;
    languageCode: string;
    isAutomaticTranslationEnabled: boolean;
};
export declare class GameInternationalizationAPI extends BaseAPI {
    constructor(client: Client);
    getGameInfo(options: GameInternationalizationGetGameInfoOptions): Promise<GameInternationalizationGetGameInfo>;
    updateGameInfo(options: GameInternationalizationUpdateGameInfoOptions): Promise<GameInternationalizationUpdateGameInfo>;
    getNameDescriptionMetaData(): Promise<GameInternationalizationGetNameDescriptionMetaData>;
    getGameInfoHistory(options: GameInternationalizationGetGameInfoHistoryOptions): Promise<GameInternationalizationGetGameInfoHistory>;
    getGameSourceLanguage(options: GameInternationalizationGetGameSourceLanguageOptions): Promise<GameInternationalizationGetGameSourceLanguage>;
    updateGameSourceLanguage(options: GameInternationalizationUpdateGameSourceLanguageOptions): Promise<GameInternationalizationUpdateGameSourceLanguage>;
    getGameSupportedLanguages(options: GameInternationalizationGetGameSupportedLanguagesOptions): Promise<GameInternationalizationGetGameSupportedLanguages>;
    modifyGameSupportedLanguages(options: GameInternationalizationModifyGameSupportedLanguagesOptions): Promise<GameInternationalizationModifyGameSupportedLanguages>;
    getGameAutomaticTranslationStatus(options: GameInternationalizationGetGameAutomaticTranslationResultsOptions): Promise<GameInternationalizationGetGameAutomaticTranslationResults>;
    getSupportedLanguagesMetaData(): Promise<GameInternationalizationGetSupportedLanguagesMetaData>;
    toggleGameAutomaticTranslation(options: GameInternationalizationToggleAutomaticGameTranslationOptions): Promise<GameInternationalizationToggleAutomaticGameTranslation>;
}
