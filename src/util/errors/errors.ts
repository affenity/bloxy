import { StatusCodeReasons } from "../constants";

interface BloxyHttpErrorOptions {
  message: string;
  name?: string;
  statusMessage: string;
  statusCode: number;
  possibleReasons: string[];
}

export class BloxyHttpError extends Error {
  public statusCode: number;
  public statusMessage: string;

  constructor (options: BloxyHttpErrorOptions) {
    const statusRelatedIssues
      = StatusCodeReasons[options.statusCode as keyof typeof StatusCodeReasons]
      || [];
    options.possibleReasons = [
      ...options.possibleReasons,
      ...statusRelatedIssues
    ];
    const revisedMessage = `\n\n${options.message} | Status code: ${
      options.statusCode
    }, status message: ${options.statusMessage}. ${
      options.possibleReasons.length > 0
        ? `Possible reasons:\n${options.possibleReasons
          .map((r) => `- ${r}`)
          .join("\n")}\n\n`
        : ""
    }`;
    super(revisedMessage);
    this.name = options.name || "BloxyHttpError";
    this.statusCode = options.statusCode;
    this.statusMessage = options.statusMessage;
  }
}
