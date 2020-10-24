import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetCountryRegionsOptions = {
    locale: string;
}
export type GetCountryRegions = {
    countryRegionList: {
        code: string;
        name: string;
        displayName: string;
    }[];
}
export type GetLocalesOptions = {
    displayValueLocale?: string;
}
export type GetLocales = {
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
}
export type GetSupportedLocales = {
    supportedLocales: GetLocales["data"][0]["locale"][];
}
export type GetUserLocale = {
    supportedLocale: GetLocales["data"][0]["locale"];
}
export type GetLocusSupportedLocales = {
    signupAndLogin: GetLocales["data"][0]["locale"];
    generalExperience: GetLocales["data"][0]["locale"];
    ugc: GetLocales["data"][0]["locale"];
}
export type SetUserLocaleOptions = {
    supportedLocaleCode: string;
}
export type SetUserLocale = {
    success: boolean;
}

export default class LocaleAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://locale.roblox.com/"
        });
    }

    getCountryRegions (options: GetCountryRegionsOptions): Promise<GetCountryRegions> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/country-regions`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getLocales (options: GetLocalesOptions): Promise<GetLocales> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    getSupportedLocales (): Promise<GetSupportedLocales> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales/supported-locales`
            },
            json: true
        })
            .then(response => response.body);
    }

    getUserLocale (): Promise<GetUserLocale> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/locales/user-locale`
            },
            json: true
        })
            .then(response => response.body);
    }

    getLocusSupportedLocales (): Promise<GetLocusSupportedLocales> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/locales/user-localization-locus-supported-locales`
            },
            json: true
        })
            .then(response => response.body);
    }

    setUserLocale (options: SetUserLocaleOptions): Promise<SetUserLocale> {
        return this.request({
            requiresAuth: true,
            request: {
                path: `v1/locales/set-user-supported-locale`,
                method: "POST",
                json: options
            },
            json: true
        })
            .then(response => response.body);
    }
}
