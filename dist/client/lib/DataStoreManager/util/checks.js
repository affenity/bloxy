"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValue = exports.checkScope = exports.checkName = exports.checkPlaceId = exports.checkKey = void 0;
const constants_1 = require("./constants");
function checkKey(key) {
    if (key.length === 0 ||
        key.length > constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`Key cannot be blank or be more than ${constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }
    return true;
}
exports.checkKey = checkKey;
function checkPlaceId(placeId) {
    if (placeId < 1) {
        throw new Error(`Place ID must be greater than 1`);
    }
    return true;
}
exports.checkPlaceId = checkPlaceId;
function checkName(name) {
    if (name.length === 0 ||
        name.length > constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`DataStore name cannot be blank or be more than ${constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }
    return true;
}
exports.checkName = checkName;
function checkScope(scope) {
    if (scope.length === 0 ||
        scope.length > constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`DataStore scope cannot be blank or be more than ${constants_1.DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }
    return true;
}
exports.checkScope = checkScope;
function checkValue(value) {
    if (value.length === 0 ||
        value.length > constants_1.DataStoreManagerConstants.DFInt.DataStoreMaxValueSize) {
        throw new Error(`DataStore values cannot be blank or be more than ${constants_1.DataStoreManagerConstants.DFInt.DataStoreMaxValueSize} characters!`);
    }
    return true;
}
exports.checkValue = checkValue;
