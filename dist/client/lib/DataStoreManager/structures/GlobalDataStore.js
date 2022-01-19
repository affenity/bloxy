"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDataStore = void 0;
const GenericDataStore_1 = require("./GenericDataStore");
class GlobalDataStore extends GenericDataStore_1.GenericDataStore {
    constructor(manager, placeId, name, scope, legacy) {
        super(manager, "GlobalDataStore", placeId, name, scope || null, legacy || false);
    }
}
exports.GlobalDataStore = GlobalDataStore;
