import Client from "../Client";
import GeneralAPI from "./GeneralAPI";
import AccountInformationAPI from "./AccountInformationAPI";
import AccountSettingsAPI from "./AccountSettingsAPI";
import AdConfigurationAPI from "./AdConfigurationAPI";
import AdsAPI from "./AdsAPI";


export declare type APIs = {
    accountInformationAPI: AccountInformationAPI;
    accountSettingsAPI: AccountSettingsAPI;
    adConfigurationAPI: AdConfigurationAPI;
    adsAPI: AdsAPI;
    generalApi: GeneralAPI;
};

export default function initAPIs (client: Client): APIs {
    return {
        accountInformationAPI: new AccountInformationAPI(client),
        accountSettingsAPI: new AccountSettingsAPI(client),
        adConfigurationAPI: new AdConfigurationAPI(client),
        adsAPI: new AdsAPI(client),
        generalApi: new GeneralAPI(client)
    };
}
