import Client from "../Client";
import GeneralAPI from "./GeneralAPI";


export declare type APIs = {
    generalApi: GeneralAPI;
};

export default function initAPIs (client: Client): APIs {
    return {
        generalApi: new GeneralAPI(client)
    };
}
