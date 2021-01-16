import DataStoreManagerConstants from "./constants";


export function checkKey (key: string): boolean {
    if (key.length === 0 || key.length > DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`Key cannot be blank or be more than ${DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }

    return true;
}

export function checkPlaceId (placeId: number): boolean {
    if (placeId < 1) {
        throw new Error(`Place ID must be greater than 1`);
    }

    return true;
}

export function checkName (name: string): boolean {
    if (name.length === 0 || name.length > DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`DataStore name cannot be blank or be more than ${DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }

    return true;
}

export function checkScope (scope: string): boolean {
    if (scope.length === 0 || scope.length > DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit) {
        throw new Error(`DataStore scope cannot be blank or be more than ${DataStoreManagerConstants.DFInt.DataStoreKeyLengthLimit} characters!`);
    }

    return true;
}

export function checkValue (value: string): boolean {
    if (value.length === 0 || value.length > DataStoreManagerConstants.DFInt.DataStoreMaxValueSize) {
        throw new Error(`DataStore values cannot be blank or be more than ${DataStoreManagerConstants.DFInt.DataStoreMaxValueSize} characters!`);
    }

    return true;
}
