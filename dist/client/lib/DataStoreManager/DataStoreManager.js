"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreManager = void 0;
const OrderedDataStore_1 = require("./structures/OrderedDataStore");
const GlobalDataStore_1 = require("./structures/GlobalDataStore");
class DataStoreManager {
    constructor(client) {
        this.client = client;
    }
    getOrderedDataStore(placeId, name, scope) {
        if (!this.client.isLoggedIn()) {
            throw new Error(`You must be logged in to be able to use data stores!`);
        }
        return new OrderedDataStore_1.OrderedDataStore(this, placeId, name, scope, false);
    }
    getDataStore(placeId, name, scope) {
        if (!this.client.isLoggedIn()) {
            throw new Error(`You must be logged in to be able to use data stores!`);
        }
        return new GlobalDataStore_1.GlobalDataStore(this, placeId, name, scope, false);
    }
}
exports.DataStoreManager = DataStoreManager;
