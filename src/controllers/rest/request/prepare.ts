import { RESTRequestOptions } from "../../../interfaces/RESTInterfaces";
import { RESTRequest } from "./";
import querystring from "querystring";

export async function prepare(
  request: RESTRequest,
  options: RESTRequestOptions
): Promise<void> {
  request.setOptions(options);

  if (!request.requestOptions.url) {
    throw new Error("No url was provided when executing rest.request.prepare");
  }
  if (!request.requestOptions.headers) {
    request.requestOptions.headers = {};
  }
  if (request.requestOptions.followAllRedirects !== false) {
    request.requestOptions.followAllRedirects = true;
  }
  if (!request.requestOptions.method) {
    request.requestOptions.method = "GET";
  }
  if (request.requestOptions.qs) {
    if (!request.requestOptions.url.includes("?")) {
      request.requestOptions.url += `?${querystring.stringify(
        request.requestOptions.qs as Record<string, string>
      )}`;
    } else {
      request.requestOptions.url += `&${querystring.stringify(
        request.requestOptions.qs as Record<string, string>
      )}`;
    }
  }
  if (
    (request.requestOptions.xcsrf !== false &&
      request.requestOptions.method.toLowerCase() !== "get") ||
    request.requestOptions.xcsrf === true
  ) {
    request.requestOptions.headers = {
      ...request.requestOptions.headers,
      "X-CSRF-TOKEN": await request.controller.getXCSRFToken()
    };
    if (!request.requestOptions.responseOptions) {
      request.requestOptions.responseOptions = {};
    }
    if (!request.requestOptions.responseOptions.disallowedStatusMessages) {
      request.requestOptions.responseOptions.disallowedStatusMessages = [];
    }
    request.requestOptions.responseOptions.disallowedStatusMessages.push(
      "Token Validation Failed"
    );
  }
  if (request.requestOptions.json) {
    request.requestOptions.body =
      typeof request.requestOptions.json === "string"
        ? request.requestOptions.json
        : JSON.stringify(request.requestOptions.json);
    request.requestOptions.headers["content-type"] = "application/json";
    delete request.requestOptions.json;
  }
  if (!request.requestOptions.excludeCookies) {
    request.requestOptions.headers.Cookie =
      request.controller.cookieJar.getCookieStringSync(
        request.requestOptions.url
      );
  }

  // -- Utilities

  // Making sure the library does not throw errors if the request fails for some reason
  // We want to handle any issues ourselves
  request.requestOptions.throwHttpErrors = false;
}
