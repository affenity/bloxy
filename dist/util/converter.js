"use strict";
// Misc. "type" converter
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertObjectToValue = exports.generalIdentifierToNumber = void 0;
function generalIdentifierToNumber(identifier) {
    if (typeof identifier === "string") {
        return Number(identifier);
    }
    else {
        return identifier;
    }
}
exports.generalIdentifierToNumber = generalIdentifierToNumber;
function convertObjectToValue(dataObject, namingConventions) {
    // eslint-disable-next-line security/detect-object-injection
    return namingConventions.map(name => dataObject[name] || null).find(value => !!value);
}
exports.convertObjectToValue = convertObjectToValue;
