import Client from "../../Client";
import OrderedDataStore from "./structures/OrderedDataStore";
import GlobalDataStore from "./structures/GlobalDataStore";


export default class DataStoreManager {
    public client: Client;

    constructor (client: Client) {
        this.client = client;
    }

    getOrderedDataStore (placeId: number, name: string, scope?: string) {
        if (!this.client.isLoggedIn()) {
            throw new Error(`You must be logged in to be able to use data stores!`);
        }

        return new OrderedDataStore(
            this,
            placeId,
            name,
            scope,
            false
        );
    }

    getDataStore (placeId: number, name: string, scope?: string) {
        if (!this.client.isLoggedIn()) {
            throw new Error(`You must be logged in to be able to use data stores!`);
        }

        return new GlobalDataStore(
            this,
            placeId,
            name,
            scope,
            false
        );
    }
}
