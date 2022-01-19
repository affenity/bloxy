import { GenericDataStore } from "./GenericDataStore";
import { DataStoreManager } from "../DataStoreManager";
export declare class GlobalDataStore<DataType> extends GenericDataStore<DataType> {
    constructor(manager: DataStoreManager, placeId: number, name: string, scope?: string, legacy?: boolean);
}
