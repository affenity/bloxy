// Misc. "type" converter

export function generalIdentifierToNumber (identifier: string | number): number {
    if (typeof identifier === "string") {
        return Number(identifier);
    } else {
        return identifier;
    }
}

export function convertObjectToValue (dataObject: Record<string, unknown>, namingConventions: string[]): unknown {
    // eslint-disable-next-line security/detect-object-injection
    return namingConventions.map(name => dataObject[name] || null)
        .find(value => !!value) as unknown;
}
