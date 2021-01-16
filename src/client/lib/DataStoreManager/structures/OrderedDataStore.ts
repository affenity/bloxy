import GenericDataStore from "./GenericDataStore";
import DataStoreManager from "../DataStoreManager";


export default class OrderedDataStore extends GenericDataStore {
    constructor (manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean) {
        super(manager, "OrderedDataStore", placeId, name, scope || null, legacy || false);
    }
}
