import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type PremiumFeaturesUpsellCheckOptions = {
  userId: number;
  universeId: number;
  placeId: number;
};
export type PremiumFeaturesUpsellCheck = unknown;
export type PremiumFeaturesValidateUserMembershipOptions = {
  userId: number;
};
export type PremiumFeaturesValidateUserMembership = boolean;

export class PremiumFeaturesAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://premiumfeatures.roblox.com/"
    });
  }

  premiumUpsellCheck(
    options: PremiumFeaturesUpsellCheckOptions
  ): Promise<PremiumFeaturesUpsellCheck> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/premium-upsell-check`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  validateUserMembership(
    options: PremiumFeaturesValidateUserMembershipOptions
  ): Promise<PremiumFeaturesValidateUserMembership> {
    return this.request({
      requiresAuth: false,
      request: {
        path: `v1/users/${options.userId}/validate-membership`
      },
      json: true
    }).then((response) => response.body);
  }
}
