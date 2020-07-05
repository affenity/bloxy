import BaseAPI from "./BaseAPI";
import Client from "../Client";


export declare type V2Login = {
    user?: {
        id: number;
        name: string;
        displayName: string;
    };
    twostepVerificationData?: {
        mediaType: "Email";
        ticket: string;
    };
    errors?: unknown;
};

export default class AuthAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://auth.roblox.com/"
        });
    }

    getV2AuthMetaData (): Promise<GetV2AuthMetaData> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v2/auth/metadata"
            }
        }).then(response => response.body as GetV2AuthMetaData);
    }

    v2Login (options: V2LoginOptions): Promise<V2Login> {
        return this.request({
            requiresAuth: false,
            request: {
                path: "v2/login",
                method: "POST",
                json: options
            }
        }).then(response => response.body as V2Login);
    }

    v2Logout (): Promise<V2Logout> {
        return this.request({
            requiresAuth: true,
            request: {
                path: "v2/logout",
                method: "POST"
            }
        }).then(response => response.body as V2Logout);
    }
}
