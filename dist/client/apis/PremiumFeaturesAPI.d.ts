import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";
export declare type PremiumFeaturesUpsellCheckOptions = {
    userId: number;
    universeId: number;
    placeId: number;
};
export declare type PremiumFeaturesUpsellCheck = unknown;
export declare type PremiumFeaturesValidateUserMembershipOptions = {
    userId: number;
};
export declare type PremiumFeaturesValidateUserMembership = boolean;
export declare class PremiumFeaturesAPI extends BaseAPI {
    constructor(client: Client);
    premiumUpsellCheck(options: PremiumFeaturesUpsellCheckOptions): Promise<PremiumFeaturesUpsellCheck>;
    validateUserMembership(options: PremiumFeaturesValidateUserMembershipOptions): Promise<PremiumFeaturesValidateUserMembership>;
}
