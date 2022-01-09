import BaseAPI from "./BaseAPI";
import Client from "../Client";
import { UsernamePasswordOption } from "../../types/GenericOptionTypes";

// AccountPin
export type AuthPin = {
  pin: string;
};
export type AuthUnlockPinOptions = AuthPin;
export type AuthUnlockPin = {
  unlockedUntil: number;
};
export type AuthLockPin = {
  success: boolean;
};

// Metadata
export type AuthMetaData = {
  isUpdateUsernameEnabled: boolean;
  ftuxAvatarAssetMap: string;
  isEmailUpsellAtLogoutEnabled: boolean;
  shouldFetchEmailUpsellIXPValuesAtLogout: boolean;
  isAccountRecoveryPromptEnabled: boolean;
  isContactMethodRequiredAtSignup: boolean;
  isUserAgreementsSignupIntegrationEnabled: boolean;
  isRetypePasswordRequired: boolean;
  arePasswordFieldsPlaintext: boolean;
  isKoreaIdVerificationEnabled: boolean;
  isSignupButtonGreenColorEnabled: boolean;
};

export type AuthTicket = {
  authTicket: string;
};
export type AuthEndpointMetaData = {
  cookieLawNoticeTimeout: number;
};
export type AuthLoginOptions = {
  ctype: "Email" | "Username" | string;
  cvalue: string;
  password: string;
  captchaToken: string;
  captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export type AuthLogin = {
  user: {
    id: number;
    name: string;
    displayName: string;
  };
  twoStepVerificationData?: {
    mediaType: "Email" | string;
    ticket: string;
  };
};
export type AuthCredentialsVerificationOptions = {
  credentialType: "Email" | "Username" | "PhoneNumber";
  credentialValue: string;
  password: string;
};
export type AuthGetCredentialsVerificationStatus = {
  canSend: boolean;
};
export type AuthGetCurrentPasswordStatus = {
  valid: boolean;
};
export type AuthGetPasswordResetMetaDataOptions = {
  targetType: "Email" | "PhoneNumber";
  ticket: string;
};
export type AuthGetPasswordResetMetaData = {
  users: {
    userId: number;
    username: string;
    displayName: string;
  }[];
};
export type AuthResetPasswordOptions = {
  targetType: "Email" | "PhoneNumber";
  ticket: string;
  userId: number;
  password: string;
  passwordRepeated: string;
};
export type AuthValidatePassword = {
  code: string;
  message: string;
};
export type AuthSendPasswordResetOptions = {
  targetType: AuthResetPasswordOptions["targetType"];
  target: string;
  captchaToken: string;
  captchaProvider: "PROVIDER_ARKOSELABS" | string;
};
export type AuthSendPasswordReset = {
  nonce: string;
  transmissionType: string;
};
export type AuthVerifyPasswordResetOptions = {
  targetType: AuthResetPasswordOptions["targetType"];
  nonce: string;
  code: string;
};
export type AuthVerifyPasswordReset = {
  userTickets: {
    user: {
      userId: number;
      username: string;
      displayName: string;
    };
    ticket: string;
  }[];
};
export type AuthChangeUserPasswordOptions = {
  currentPassword: string;
  newPassword: string;
};
export type AuthGetRecoveryMetaData = {
  isOnPhone: boolean;
  codeLength: number;
  isPhoneFeatureEnabledForUsername: boolean;
  isPhoneFeatureEnabledForPassword: boolean;
  isBedev2CaptchaEnabledForPasswordReset: boolean;
};
export type AuthRevertAccountInfoOptions = {
  ticket: string;
};
export type AuthRevertAccountInfo = {
  isTwoStepVerificationEnabled: boolean;
  isEmailVerified: boolean;
  isEmailChanged: boolean;
  userId: number;
  username: string;
  ticket: string;
};
export type AuthRevertAccountOptions = {
  userId: number;
  newPassword: string;
  ticket: string;
};
export type AuthGetSAMLMetaData = unknown;
export type AuthSAMLRequest = unknown;
export type AuthGetTwoStepVerificationMetaData = {
  codeLength: number;
  loadingImageUrl: string;
  supportUrl: string;
};
export type AuthResendTwoStepVerificationOptions = {
  username: string;
  ticket: string;
  actionType: string;
};
export type AuthTwoStepVerification = {
  mediaType: "Email" | "PhoneNumber" | string;
  ticket: string;
};
export type AuthVerifyTwoStepVerificationOptions = {
  username: string;
  ticket: string;
  code: string;
  rememberDevice: boolean;
  actionType: string;
};
export type AuthVerifyTwoStepVerification = unknown;
export type AuthGetExistingUsernamesOptions = {
  username: string;
};
export type AuthGetExistingUsernames = {
  usernames: string[];
};
export type AuthValidateUsernameOptions = {
  username: string;
  birthday: string;
  context: "Unknown" | "Signup" | "UsernameChange" | string;
};
export type AuthValidateUsername = {
  code: string;
  message: string;
};
export type AuthRecoverUsernamesOptions = {
  targetType: "Email" | string;
  target: string;
};
export type AuthRecoverUsernames = {
  transmissionType: string;
};
export type AuthSignUpOptions = {
  username: string;
  password: string;
  gender: "Unknown" | string;
  birthday: string;
  isTosAgreementBoxChecked: boolean;
  email: string;
  locale: string;
  assetIds: number[];
  bodyColorId: number;
  bodyTypeScale: number;
  headScale: number;
  heightScale: number;
  widthScale: number;
  proportionScale: number;
  captchaToken: string;
  captchaProvider: string;
};
export type AuthSignUp = {
  userId: number;
  starterPlaceId: number;
};
export type AuthChangeUsernameOptions = {
  username: string;
  password: string;
};
export type AuthChangeUsername = unknown;
export type AuthChangeUserPassword = unknown;
export type AuthResetPassword = AuthLogin & {
  identityVerificationLoginTicket: string;
  isBanned: boolean;
};
export type AuthRevertAccount = AuthResetPassword;

export default class AuthAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://auth.roblox.com/"
    });
  }

  unlockPin(options: AuthUnlockPinOptions): Promise<AuthUnlockPin> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/account/pin/unlock",
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  lockPin(): Promise<AuthLockPin> {
    return this.request({
      requiresAuth: true,
      request: {
        path: "v1/account/pin/lock",
        method: "POST"
      },
      json: true
    }).then((response) => response.body);
  }

  getAuthTicket(): Promise<AuthTicket> {
    return this.request({
      json: true,
      requiresAuth: true,
      request: {
        path: "v1/authentication-ticket",
        method: "POST",
        headers: {
          referer: "https://www.roblox.com/",
          origin: "roblox.com"
        }
      }
    }).then((response) => ({
      authTicket: response.headers["rbx-authentication-ticket"]
    }));
  }

  getMetaData(): Promise<AuthMetaData> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/metadata"
      }
    }).then((response) => ({
      isUpdateUsernameEnabled: response.body.isUpdateUsernameEnabled,
      ftuxAvatarAssetMap: response.body.ftuxAvatarAssetMap,
      isEmailUpsellAtLogoutEnabled: response.body.IsEmailUpsellAtLogoutEnabled,
      shouldFetchEmailUpsellIXPValuesAtLogout:
        response.body.ShouldFetchEmailUpsellIXPValuesAtLogout,
      isAccountRecoveryPromptEnabled:
        response.body.IsAccountRecoveryPromptEnabled,
      isContactMethodRequiredAtSignup:
        response.body.IsContactMethodRequiredAtSignup,
      isUserAgreementsSignupIntegrationEnabled:
        response.body.IsUserAgreementsSignupIntegrationEnabled,
      isRetypePasswordRequired: response.body.IsRetypePasswordRequired,
      arePasswordFieldsPlaintext: response.body.ArePasswordFieldsPlaintext,
      isKoreaIdVerificationEnabled: response.body.IsKoreaIdVerificationEnabled,
      isSignupButtonGreenColorEnabled:
        response.body.IsSignupButtonGreenColorEnabled
    }));
  }

  getCurrentUserPasswordStatus(): Promise<AuthGetCurrentPasswordStatus> {
    return this.request({
      json: true,
      requiresAuth: true,
      request: {
        path: "v2/passwords/current-status"
      }
    }).then((response) => response.body);
  }

  getPasswordResetMetaData(
    options: AuthGetPasswordResetMetaDataOptions
  ): Promise<AuthGetPasswordResetMetaData> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/passwords/reset",
        qs: {
          "request.targetType": options.targetType,
          "request.ticket": options.ticket
        }
      }
    }).then((response) => response.body);
  }

  resetPassword(options: AuthResetPasswordOptions): Promise<AuthResetPassword> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/passwords/reset",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  validatePassword(
    options: UsernamePasswordOption
  ): Promise<AuthValidatePassword> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/passwords/validate",
        qs: {
          "request.username": options.username,
          "request.password": options.password
        }
      }
    }).then((response) => response.body);
  }

  sendPasswordReset(
    options: AuthSendPasswordResetOptions
  ): Promise<AuthSendPasswordReset> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/passwords/reset/send",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  verifyPasswordReset(
    options: AuthVerifyPasswordResetOptions
  ): Promise<AuthVerifyPasswordReset> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/passwords/reset/verify",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  changeUserPassword(
    options: AuthChangeUserPasswordOptions
  ): Promise<AuthChangeUserPassword> {
    return this.request({
      json: true,
      requiresAuth: true,
      request: {
        path: "v2/user/passwords/change",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  getRecoveryMetaData(): Promise<AuthGetRecoveryMetaData> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/recovery/metadata"
      }
    }).then((response) => response.body);
  }

  getRevertAccountInfo(
    options: AuthRevertAccountInfoOptions
  ): Promise<AuthRevertAccountInfo> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/revert/account",
        qs: {
          ticket: options.ticket
        }
      }
    }).then((response) => response.body);
  }

  revertAccount(options: AuthRevertAccountOptions): Promise<AuthRevertAccount> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/revert/account",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  getSAMLMetaData(): Promise<AuthGetSAMLMetaData> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/saml/metadata"
      }
    }).then((response) => response.body);
  }

  samlAuthenticate(): Promise<AuthSAMLRequest> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/saml/login",
        method: "POST"
      }
    }).then((response) => response.body);
  }

  getTwoStepVerificationMetaData(): Promise<AuthGetTwoStepVerificationMetaData> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/twostepverification/metadata"
      }
    }).then((response) => response.body);
  }

  resendTwoStepVerificationCode(
    options: AuthResendTwoStepVerificationOptions
  ): Promise<AuthTwoStepVerification> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/twostepverification/resend",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  verifyTwoStepVerificationCode(
    options: AuthVerifyTwoStepVerificationOptions
  ): Promise<AuthVerifyTwoStepVerification> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/twostepverification/verify",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  getExistingUsernames(
    options: AuthGetExistingUsernamesOptions
  ): Promise<AuthGetExistingUsernames> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/usernames",
        qs: {
          username: options.username
        }
      }
    }).then((response) => response.body);
  }

  validateUsername(
    options: AuthValidateUsernameOptions
  ): Promise<AuthValidateUsername> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/usernames/validate",
        qs: {
          "request.username": options.username,
          "request.birthday": options.birthday,
          "request.context": options.context
        }
      }
    }).then((response) => response.body);
  }

  recoverUsernames(
    options: AuthRecoverUsernamesOptions
  ): Promise<AuthRecoverUsernames> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/twostepverification/metadata",
        json: options
      }
    }).then((response) => response.body);
  }

  signUp(options: AuthSignUpOptions): Promise<AuthSignUp> {
    return this.request({
      json: true,
      requiresAuth: false,
      request: {
        path: "v2/twostepverification/metadata",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }

  changeUserUsername(
    options: AuthChangeUsernameOptions
  ): Promise<AuthChangeUsername> {
    return this.request({
      json: true,
      requiresAuth: true,
      request: {
        path: "v2/username",
        method: "POST",
        json: options
      }
    }).then((response) => response.body);
  }
}
