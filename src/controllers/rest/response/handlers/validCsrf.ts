import RESTResponse from "../RESTResponse";
import { RESTResponseDataType } from "../../../../interfaces/RESTInterfaces";

export default async function validCsrf (response: RESTResponse): Promise<RESTResponseDataType | undefined> {
    const { request, responseData } = response;
    const xcsrfToken = request.requestOptions.checks && request.requestOptions.checks.xcsrf && responseData.headers["x-csrf-token"];
    let newResponse;

    if (xcsrfToken) {
        request.controller.setXCSRFToken(xcsrfToken);
        newResponse = await request.send();
    }

    return newResponse;
}
