import Client from "../Client";
import GeneralAPI from "./GeneralAPI";
import AccountInformationAPI from "./AccountInformationAPI";
import AccountSettingsAPI from "./AccountSettingsAPI";
import AdConfigurationAPI from "./AdConfigurationAPI";
import AdsAPI from "./AdsAPI";
import AssetDeliveryAPI from "./AssetDeliveryAPI";
import AuthAPI from "./AuthAPI";
import AvatarAPI from "./AvatarAPI";
import BadgesAPI from "./BadgesAPI";
import BillingAPI from "./BillingAPI";
import CaptchaAPI from "./CaptchaAPI";
import CatalogAPI from "./CatalogAPI";


export declare type APIs = {
    accountInformationAPI: AccountInformationAPI;
    accountSettingsAPI: AccountSettingsAPI;
    adConfigurationAPI: AdConfigurationAPI;
    adsAPI: AdsAPI;
    assetDeliveryAPI: AssetDeliveryAPI;
    authAPI: AuthAPI;
    avatarAPI: AvatarAPI;
    badgesAPI: BadgesAPI;
    billingAPI: BillingAPI;
    captchaAPI: CaptchaAPI;
    catalogAPI: CatalogAPI;
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
        avatarAPI: new AvatarAPI(client),
        badgesAPI: new BadgesAPI(client),
        billingAPI: new BillingAPI(client),
        captchaAPI: new CaptchaAPI(client),
        catalogAPI: new CatalogAPI(client),
        generalApi: new GeneralAPI(client)
    };
}
