import BaseAPI from "./BaseAPI";
import Client from "../Client";


export type PremiumUpsellCheckOptions = {
    userId: number;
    universeId: number;
    placeId: number;
}
export type PremiumUpsellCheck = unknown
export type ValidateUserMembershipOptions = {
    userId: number;
}
export type ValidateUserMembership = boolean;


export default class PremiumFeaturesAPI extends BaseAPI {
    constructor (client: Client) {
        super({
            client,
            baseUrl: "https://premiumfeatures.roblox.com/"
        });
    }

    premiumUpsellCheck (options: PremiumUpsellCheckOptions): Promise<PremiumUpsellCheck> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/premium-upsell-check`,
                qs: options
            },
            json: true
        })
            .then(response => response.body);
    }

    validateUserMembership (options: ValidateUserMembershipOptions): Promise<ValidateUserMembership> {
        return this.request({
            requiresAuth: false,
            request: {
                path: `v1/users/${options.userId}/validate-membership`
            },
            json: true
        })
            .then(response => response.body);
    }
}
