interface BloxyHttpErrorOptions {
    message: string;
    name?: string;
    status: string;
    statusCode: number;
    possibleReasons: string[];
}
export declare class BloxyHttpError extends Error {
    statusCode: number;
    status: string;
    constructor(options: BloxyHttpErrorOptions);
}
export {};
