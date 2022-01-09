import BaseAPI from "./BaseAPI";
import Client from "../Client";

export type GameInternationalizationGetGameInfoOptions = {
  gameId: number;
};
export type GameInternationalizationGetGameInfo = {
  data: {
    name: string;
    description: string;
    languageCode: string;
  }[];
};
export type GameInternationalizationUpdateGameInfoOptions = {
  gameId: number;
  data: GameInternationalizationGetGameInfo;
};
export type GameInternationalizationUpdateGameInfo = {
  successOperations: GameInternationalizationGetGameInfo["data"];
  failedOperations: {
    languageCode: string;
    errorCode: number;
  }[];
};
export type GameInternationalizationGetNameDescriptionMetaData = {
  isNameDescriptionMigrationEnabled: boolean;
};
export type GameInternationalizationGetGameInfoHistoryOptions = {
  gameId: number;
  requestType: string;
  languageCode: string;
  cursor: string;
  count: number;
  sortOrder: "Asc" | "Desc" | string;
};
export type GameInternationalizationGetGameInfoHistory = {
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
export type GameInternationalizationGetGameSourceLanguageOptions = {
  gameId: number;
};
export type GameInternationalizationGetGameSourceLanguage = {
  name: string;
  nativeName: string;
  languageCode: string;
};
export type GameInternationalizationUpdateGameSourceLanguageOptions = {
  gameId: number;
  languageCode: string;
};
export type GameInternationalizationUpdateGameSourceLanguage = unknown;
export type GameInternationalizationGetGameSupportedLanguagesOptions = {
  gameId: number;
};
export type GameInternationalizationGetGameSupportedLanguages = {
  data: {
    name: string;
    languageCodeType: string;
    languageCode: string;
  }[];
};
export type GameInternationalizationModifyGameSupportedLanguagesOptions = {
  data: {
    languageCodeType: string;
    languageCode: string;
    delete: boolean;
  }[];
  gameId: number;
};
export type GameInternationalizationModifyGameSupportedLanguages = unknown;
export type GameInternationalizationGetGameAutomaticTranslationResultsOptions =
  {
    gameId: number;
  };
export type GameInternationalizationGetGameAutomaticTranslationResults = {
  data: {
    languageCodeType: string;
    languageCode: string;
    isAutomaticTranslationEnabled: boolean;
  }[];
};
export type GameInternationalizationGetSupportedLanguagesMetaData = {
  isFeatureEnabled: boolean;
  areAllLanguagesEnabled: boolean;
  minimumUniverseIdForFeature: number;
  isHumanTranslationProgressUIEnabled: boolean;
  isAutomaticTranslationProgressUIEnabled: boolean;
  isSupportedLanguagesChildLocalesUIEnabled: boolean;
};
export type GameInternationalizationToggleAutomaticGameTranslationOptions = {
  gameId: number;
  languageCode: string;
  enableAutomaticTranslation: boolean;
};
export type GameInternationalizationToggleAutomaticGameTranslation = {
  gameId: number;
  languageCode: string;
  isAutomaticTranslationEnabled: boolean;
};

export default class GameInternationalizationAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://gameinternationalization.roblox.com/"
    });
  }

  getGameInfo(
    options: GameInternationalizationGetGameInfoOptions
  ): Promise<GameInternationalizationGetGameInfo> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/name-description/games/${options.gameId}`
      },
      json: true
    }).then((response) => response.body);
  }

  updateGameInfo(
    options: GameInternationalizationUpdateGameInfoOptions
  ): Promise<GameInternationalizationUpdateGameInfo> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/name-description/games/${options.gameId}`,
        method: "PATCH",
        json: {
          data: options.data
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getNameDescriptionMetaData(): Promise<GameInternationalizationGetNameDescriptionMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/name-description/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  getGameInfoHistory(
    options: GameInternationalizationGetGameInfoHistoryOptions
  ): Promise<GameInternationalizationGetGameInfoHistory> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/name-description/games/${options.gameId}/history`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  getGameSourceLanguage(
    options: GameInternationalizationGetGameSourceLanguageOptions
  ): Promise<GameInternationalizationGetGameSourceLanguage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/source-language/games/${options.gameId}`
      },
      json: true
    }).then((response) => response.body);
  }

  updateGameSourceLanguage(
    options: GameInternationalizationUpdateGameSourceLanguageOptions
  ): Promise<GameInternationalizationUpdateGameSourceLanguage> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/source-language/games/${options.gameId}`,
        method: "PATCH",
        qs: {
          languageCode: options.languageCode
        }
      },
      json: true
    }).then((response) => response.body);
  }

  getGameSupportedLanguages(
    options: GameInternationalizationGetGameSupportedLanguagesOptions
  ): Promise<GameInternationalizationGetGameSupportedLanguages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/supported-languages/games/${options.gameId}`
      },
      json: true
    }).then((response) => response.body);
  }

  modifyGameSupportedLanguages(
    options: GameInternationalizationModifyGameSupportedLanguagesOptions
  ): Promise<GameInternationalizationModifyGameSupportedLanguages> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/supported-languages/games/${options.gameId}`,
        method: "PATCH",
        json: options.data
      },
      json: true
    }).then((response) => response.body);
  }

  getGameAutomaticTranslationStatus(
    options: GameInternationalizationGetGameAutomaticTranslationResultsOptions
  ): Promise<GameInternationalizationGetGameAutomaticTranslationResults> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/supported-languages/games/${options.gameId}/automatic-translation-status`
      },
      json: true
    }).then((response) => response.body);
  }

  getSupportedLanguagesMetaData(): Promise<GameInternationalizationGetSupportedLanguagesMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/supported-languages/metadata`
      },
      json: true
    }).then((response) => response.body);
  }

  toggleGameAutomaticTranslation(
    options: GameInternationalizationToggleAutomaticGameTranslationOptions
  ): Promise<GameInternationalizationToggleAutomaticGameTranslation> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/supported-languages/games/${options.gameId}/languages/${options.languageCode}/automatic-translation-status`,
        method: "PATCH",
        json: String(options.enableAutomaticTranslation).toString()
      },
      json: true
    }).then((response) => response.body);
  }
}
