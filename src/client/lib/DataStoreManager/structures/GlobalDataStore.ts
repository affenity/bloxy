import GenericDataStore from "./GenericDataStore";
import DataStoreManager from "../DataStoreManager";


export default class GlobalDataStore<DataType extends any> extends GenericDataStore<DataType> {
    constructor (manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean) {
        super(manager, "GlobalDataStore", placeId, name, scope || null, legacy || false);
    }
}
