import Client from "../Client";
import GeneralAPI from "./GeneralAPI";
import AccountInformationAPI from "./AccountInformationAPI";
import AccountSettingsAPI from "./AccountSettingsAPI";


export declare type APIs = {
    accountInformationAPI: AccountInformationAPI;
    accountSettingsAPI: AccountSettingsAPI;
    generalApi: GeneralAPI;
};

export default function initAPIs (client: Client): APIs {
    return {
        accountInformationAPI: new AccountInformationAPI(client),
        accountSettingsAPI: new AccountSettingsAPI(client),
        generalApi: new GeneralAPI(client)
    };
}
