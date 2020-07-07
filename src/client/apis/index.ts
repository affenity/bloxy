import Client from "../Client";
import GeneralAPI from "./GeneralAPI";
import AccountInformationAPI from "./AccountInformationAPI";
import AccountSettingsAPI from "./AccountSettingsAPI";
import AdConfigurationAPI from "./AdConfigurationAPI";
import AdsAPI from "./AdsAPI";
import AssetDeliveryAPI from "./AssetDeliveryAPI";
import AuthAPI from "./AuthAPI";


export declare type APIs = {
    accountInformationAPI: AccountInformationAPI;
    accountSettingsAPI: AccountSettingsAPI;
    adConfigurationAPI: AdConfigurationAPI;
    adsAPI: AdsAPI;
    assetDeliveryAPI: AssetDeliveryAPI;
    authAPI: AuthAPI;
    generalApi: GeneralAPI;
};

export default function initAPIs (client: Client): APIs {
    return {
        accountInformationAPI: new AccountInformationAPI(client),
        accountSettingsAPI: new AccountSettingsAPI(client),
        adConfigurationAPI: new AdConfigurationAPI(client),
        adsAPI: new AdsAPI(client),
        assetDeliveryAPI: new AssetDeliveryAPI(client),
        authAPI: new AuthAPI(client),
        generalApi: new GeneralAPI(client)
    };
}
