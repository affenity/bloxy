interface BloxyHttpErrorOptions {
    message: string;
    name?: string;
    statusMessage: string;
    statusCode: number;
    possibleReasons: string[];
}
export declare class BloxyHttpError extends Error {
    statusCode: number;
    statusMessage: string;
    constructor(options: BloxyHttpErrorOptions);
}
export {};
