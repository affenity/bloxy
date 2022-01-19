import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type LocaleGetCountryRegionsOptions = {
    locale: string;
};
export declare type LocaleGetCountryRegions = {
    countryRegionList: {
        code: string;
        name: string;
        displayName: string;
    }[];
};
export declare type LocaleGetLocalesOptions = {
    displayValueLocale?: string;
};
export declare type LocaleGetLocales = {
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
export declare type LocaleGetSupportedLocales = {
    supportedLocales: LocaleGetLocales["data"][0]["locale"][];
};
export declare type LocaleGetUserLocale = {
    supportedLocale: LocaleGetLocales["data"][0]["locale"];
};
export declare type LocaleGetLocusSupportedLocales = {
    signupAndLogin: LocaleGetLocales["data"][0]["locale"];
    generalExperience: LocaleGetLocales["data"][0]["locale"];
    ugc: LocaleGetLocales["data"][0]["locale"];
};
export declare type LocaleSetUserLocaleOptions = {
    supportedLocaleCode: string;
};
export declare type LocaleSetUserLocale = {
    success: boolean;
};
export declare class LocaleAPI extends BaseAPI {
    constructor(client: Client);
    getCountryRegions(options: LocaleGetCountryRegionsOptions): Promise<LocaleGetCountryRegions>;
    getLocales(options: LocaleGetLocalesOptions): Promise<LocaleGetLocales>;
    getSupportedLocales(): Promise<LocaleGetSupportedLocales>;
    getSupportedLocalsForCreators(): Promise<LocaleGetSupportedLocales>;
    getUserLocale(): Promise<LocaleGetUserLocale>;
    getLocusSupportedLocales(): Promise<LocaleGetLocusSupportedLocales>;
    setUserLocale(options: LocaleSetUserLocaleOptions): Promise<LocaleSetUserLocale>;
}
