import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetCountryRegionsOptions = {
    locale: string;
};
export declare type GetCountryRegions = {
    countryRegionList: {
        code: string;
        name: string;
        displayName: string;
    }[];
};
export declare type GetLocalesOptions = {
    displayValueLocale?: string;
};
export declare type GetLocales = {
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
export declare type GetSupportedLocales = {
    supportedLocales: GetLocales["data"][0]["locale"][];
};
export declare type GetUserLocale = {
    supportedLocale: GetLocales["data"][0]["locale"];
};
export declare type GetLocusSupportedLocales = {
    signupAndLogin: GetLocales["data"][0]["locale"];
    generalExperience: GetLocales["data"][0]["locale"];
    ugc: GetLocales["data"][0]["locale"];
};
export declare type SetUserLocaleOptions = {
    supportedLocaleCode: string;
};
export declare type SetUserLocale = {
    success: boolean;
};
export default class LocaleAPI extends BaseAPI {
    constructor(client: Client);
    getCountryRegions(options: GetCountryRegionsOptions): Promise<GetCountryRegions>;
    getLocales(options: GetLocalesOptions): Promise<GetLocales>;
    getSupportedLocales(): Promise<GetSupportedLocales>;
    getUserLocale(): Promise<GetUserLocale>;
    getLocusSupportedLocales(): Promise<GetLocusSupportedLocales>;
    setUserLocale(options: SetUserLocaleOptions): Promise<SetUserLocale>;
}
