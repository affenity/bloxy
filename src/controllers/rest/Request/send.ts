import RESTRequest from "./RESTRequest";
import { RESTResponseDataType } from "../../../interfaces/RESTInterfaces";


export default async function send (this: RESTRequest): Promise<RESTResponseDataType> {
    const { requestOptions } = this;

    if (!requestOptions) {
        throw new Error(`Error when attempting to run rest.request.send, requestOptions not defined`);
    }

    return await this.controller.requester(requestOptions) as unknown as RESTResponseDataType;
}
