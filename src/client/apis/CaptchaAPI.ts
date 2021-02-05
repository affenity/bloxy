import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type GetCaptchaMetadata = {
    funCaptchaPublicKeys: {
        type: string;
        value: string;
    }[];
}
export type GetLanguageResources = {
    languageResources: unknown;
}


export default class CaptchaAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://captcha.roblox.com/"
        });
    }

    getCaptchaMetaData (): Promise<GetCaptchaMetadata> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/captcha/metadata`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }

    getLanguageResources (): Promise<GetLanguageResources> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/language-resources`,
                responseOptions: {
                    allowedStatusCodes: [200]
                }
            },
            json: true
        })
            .then(response => response.body);
    }
}
