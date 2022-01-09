import { RESTController } from "../RESTController";
import { RESTRequest } from "../request";
import { BloxyHttpError } from "../../../util/errors/errors";
import { RESTResponseDataType } from "../../../interfaces/RESTInterfaces";

export class RESTResponse {
  public controller: RESTController;
  public request: RESTRequest;
  public responseData: RESTResponseDataType;

  // Public options: RESTResponseOptions;

  constructor(
    controller: RESTController,
    request: RESTRequest,
    responseData: RESTResponseDataType
  ) {
    this.controller = controller;
    this.request = request;
    this.responseData = responseData;
  }

  // eslint-disable-next-line require-await
  async process(): Promise<RESTResponseDataType> {
    const allProcessed = this.controller.responseHandlers.map((handler) =>
      handler(this)
    );

    if (allProcessed.every((processed) => processed === true)) {
      return this.responseData;
    } else {
      const error = allProcessed.find(
        (err) =>
          err instanceof BloxyHttpError &&
          err.name === "BloxyHttpInvalidStatusMessageError" &&
          err.statusMessage.includes("Token Validation Failed")
      );

      if (error) {
        // 1 attempt = 0 retries
        if (
          this.request.attempts - 1 ===
          this.controller.getXCSRFTokenRefreshMaxRetries()
        ) {
          throw error;
        } else {
          this.controller.options.xcsrf = undefined;
          return this.request.send();
        }
      }

      throw allProcessed.find((err) => err instanceof Error);
    }
  }
}
