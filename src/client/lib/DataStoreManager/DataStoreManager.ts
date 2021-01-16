import Client from "../../Client";
import OrderedDataStore from "./structures/OrderedDataStore";
import GlobalDataStore from "./structures/GlobalDataStore";


export default class DataStoreManager {
    public client: Client;

    constructor (client: Client) {
        this.client = client;
    }

    getOrderedDataStore (placeId: number, name: string, scope?: string) {
        return new OrderedDataStore(
            this,
            placeId,
            name,
            scope,
            false
        );
    }

    getDataStore (placeId: number, name: string, scope?: string) {
        return new GlobalDataStore(
            this,
            placeId,
            name,
            scope,
            false
        );
    }
}
