"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloxyHttpError = void 0;
const constants_1 = require("../constants");
class BloxyHttpError extends Error {
    constructor(options) {
        const statusRelatedIssues = constants_1.StatusCodeReasons[options.statusCode]
            || [];
        options.possibleReasons = [
            ...options.possibleReasons,
            ...statusRelatedIssues
        ];
        const revisedMessage = `\n\n${options.message} | Status code: ${options.statusCode}, status message: ${options.statusMessage}. ${options.possibleReasons.length > 0
            ? `Possible reasons:\n${options.possibleReasons
                .map((r) => `- ${r}`)
                .join("\n")}\n\n`
            : ""}`;
        super(revisedMessage);
        this.name = options.name || "BloxyHttpError";
        this.statusCode = options.statusCode;
        this.statusMessage = options.statusMessage;
    }
}
exports.BloxyHttpError = BloxyHttpError;
