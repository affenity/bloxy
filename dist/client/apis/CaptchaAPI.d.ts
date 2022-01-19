import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type GetCaptchaMetadata = {
    funCaptchaPublicKeys: {
        type: string;
        value: string;
    }[];
};
export declare type GetLanguageResources = {
    languageResources: unknown;
};
export default class CaptchaAPI extends BaseAPI {
    constructor(client: Client);
    getCaptchaMetaData(): Promise<GetCaptchaMetadata>;
    getLanguageResources(): Promise<GetLanguageResources>;
}
