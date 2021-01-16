import GenericDataStore from "./GenericDataStore";
import DataStoreManager from "../DataStoreManager";


export default class OrderedDataStore<DataType extends any> extends GenericDataStore<DataType> {
    constructor (manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean) {
        super(manager, "OrderedDataStore", placeId, name, scope || null, legacy || false);
    }
}
