import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type LocaleGetCountryRegionsOptions = {
  locale: string;
};
export type LocaleGetCountryRegions = {
  countryRegionList: {
    code: string;
    name: string;
    displayName: string;
  }[];
};
export type LocaleGetLocalesOptions = {
  displayValueLocale?: string;
};
export type LocaleGetLocales = {
  data: {
    locale: {
      id: number;
      locale: string;
      name: string;
      nativeName: string;
      language: {
        id: number;
        name: string;
        nativeName: string;
        languageCode: string;
      };
    };
    isEnabledForFullExperience: boolean;
    isEnabledForSignupAndLogin: boolean;
    isEnabledForInGameUgc: boolean;
  }[];
};
export type LocaleGetSupportedLocales = {
  supportedLocales: LocaleGetLocales["data"][0]["locale"][];
};
export type LocaleGetUserLocale = {
  supportedLocale: LocaleGetLocales["data"][0]["locale"];
};
export type LocaleGetLocusSupportedLocales = {
  signupAndLogin: LocaleGetLocales["data"][0]["locale"];
  generalExperience: LocaleGetLocales["data"][0]["locale"];
  ugc: LocaleGetLocales["data"][0]["locale"];
};
export type LocaleSetUserLocaleOptions = {
  supportedLocaleCode: string;
};
export type LocaleSetUserLocale = {
  success: boolean;
};

export class LocaleAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://locale.roblox.com/"
    });
  }

  getCountryRegions(
    options: LocaleGetCountryRegionsOptions
  ): Promise<LocaleGetCountryRegions> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/country-regions`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getLocales(options: LocaleGetLocalesOptions): Promise<LocaleGetLocales> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/locales`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getSupportedLocales(): Promise<LocaleGetSupportedLocales> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/locales/supported-locales`
      },
      json: true
    }).then((response) => response.body);
  }

  getSupportedLocalsForCreators(): Promise<LocaleGetSupportedLocales> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/locales/supported-locales-for-creators`
      },
      json: true
    }).then((response) => response.body);
  }

  getUserLocale(): Promise<LocaleGetUserLocale> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/locales/user-locale`
      },
      json: true
    }).then((response) => response.body);
  }

  getLocusSupportedLocales(): Promise<LocaleGetLocusSupportedLocales> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/locales/user-localization-locus-supported-locales`
      },
      json: true
    }).then((response) => response.body);
  }

  setUserLocale(
    options: LocaleSetUserLocaleOptions
  ): Promise<LocaleSetUserLocale> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/locales/set-user-supported-locale`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
