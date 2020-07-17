import BaseAPI from "./BaseAPI";
import Client from "../Client";
export declare type PremiumUpsellCheckOptions = {
    userId: number;
    universeId: number;
    placeId: number;
};
export declare type PremiumUpsellCheck = {};
export declare type ValidateUserMembershipOptions = {
    userId: number;
};
export declare type ValidateUserMembership = boolean;
export default class PremiumFeaturesAPI extends BaseAPI {
    constructor(client: Client);
    premiumUpsellCheck(options: PremiumUpsellCheckOptions): Promise<PremiumUpsellCheck>;
    validateUserMembership(options: ValidateUserMembershipOptions): Promise<ValidateUserMembership>;
}
