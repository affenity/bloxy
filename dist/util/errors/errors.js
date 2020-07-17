"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloxyHttpError = void 0;
const constants_1 = require("../constants");
class BloxyHttpError extends Error {
    constructor(options) {
        options.possibleReasons = [...options.possibleReasons, ...constants_1.StatusCodeReasons[options.statusCode.toString()]];
        const revisedMessage = `\n\n${options.message} | Status code: ${options.statusCode}, status: ${options.status}. ${options.possibleReasons.length > 0 ? `Possible reasons:\n${options.possibleReasons.map(r => `- ${r}`).join("\n")}\n\n` : ""}`;
        super(revisedMessage);
        this.name = options.name || "BloxyHttpError";
        this.statusCode = options.statusCode;
        this.status = options.status;
    }
}
exports.BloxyHttpError = BloxyHttpError;
