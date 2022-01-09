import { BaseAPI } from "./BaseAPI";
import { Client } from "../Client";

export type TwoStepVerificationGetMetaDataOptions = {
  userId: number;
  challengeId: string;
  actionType: string;
};
export type TwoStepVerificationGetMetaData = {
  twoStepVerificationEnabled: boolean;
  authenticatorEnabled: boolean;
  authenticatorQrCodeSize: string;
  emailCodeLength: number;
  authenticatorCodeLength: number;
};
export type TwoStepVerificationGetConfigurationOptions =
  TwoStepVerificationGetMetaDataOptions;
export type TwoStepVerificationGetConfiguration = {
  primaryMediaType: "Email" | string;
  methods: {
    mediaType: "Email" | string;
    enabled: boolean;
    updated: string;
  }[];
};
export type TwoStepVerificationAuthenticatorVerifyOptions = {
  challengeId: string;
  actionType: string;
  code: string;
};
export type TwoStepVerificationAuthenticatorVerify = {
  verificationToken: string;
};
export type TwoStepVerificationAuthenticatorDisableOptions = {
  password: string;
};
export type TwoStepVerificationAuthenticatorDisable = unknown;
export type TwoStepVerificationAuthenticatorEnableOptions = {
  userId: number;
};
export type TwoStepVerificationAuthenticatorEnable = {
  setupToken: string;
  qrCodeImageUrl: string;
  manualEntryKey: string;
};
export type TwoStepVerificationAuthenticatorVerifySetupOptions = {
  setupToken: string;
  code: string;
};
export type TwoStepVerificationAuthenticatorVerifySetup = unknown;
export type TwoStepVerificationEmailSendCodeOptions = {
  challengeId: string;
  actionType: string;
};
export type TwoStepVerificationEmailSendCode = {
  challengeId: string;
  actionType: string;
};
export type TwoStepVerificationEmailVerifyOptions = {
  challengeId: string;
  actionType: string;
  code: string;
};
export type TwoStepVerificationEmailVerify = {
  verificationToken: string;
};
export type TwoStepVerificationEmailDisableOptions = {
  password: string;
};
export type TwoStepVerificationEmailDisable = unknown;
export type TwoStepVerificationEmailEnableOptions = {
  userId: number;
};
export type TwoStepVerificationEmailEnable = unknown;

export class TwoStepVerificationAPI extends BaseAPI {
  constructor(client: Client) {
    super({
      client,
      baseUrl: "https://twostepverification.roblox.com/"
    });
  }

  getMetaData(
    options: TwoStepVerificationGetMetaDataOptions
  ): Promise<TwoStepVerificationGetMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/metadata`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  getConfiguration(
    options?: TwoStepVerificationGetConfigurationOptions
  ): Promise<TwoStepVerificationGetMetaData> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${this.client.user!.id}/configuration`,
        qs: options
      },
      json: true
    }).then((response) => response.body);
  }

  verifyWithAuthenticator(
    options: TwoStepVerificationAuthenticatorVerifyOptions
  ): Promise<TwoStepVerificationAuthenticatorVerify> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${
          this.client.user!.id
        }/challenges/authenticator/verify`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  disableAuthenticator(
    options: TwoStepVerificationAuthenticatorDisableOptions
  ): Promise<TwoStepVerificationAuthenticatorDisable> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${
          this.client.user!.id
        }/configuration/authenticator/disable`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  enableAuthenticator(
    options: TwoStepVerificationAuthenticatorEnableOptions
  ): Promise<TwoStepVerificationAuthenticatorEnable> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${
          this.client.user!.id
        }/configuration/authenticator/enable`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  verifyAuthenticatorSetup(
    options: TwoStepVerificationAuthenticatorVerifySetupOptions
  ): Promise<TwoStepVerificationAuthenticatorVerifySetup> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${
          this.client.user!.id
        }/configuration/authenticator/disable`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  sendEmailCode(
    options: TwoStepVerificationEmailSendCodeOptions
  ): Promise<TwoStepVerificationEmailSendCode> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${this.client.user!.id}/challenges/email/send-code`,
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  verifyEmail(
    options: TwoStepVerificationEmailVerifyOptions
  ): Promise<TwoStepVerificationEmailVerify> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${this.client.user!.id}/challenges/email/verify`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  disableEmail(
    options: TwoStepVerificationEmailDisableOptions
  ): Promise<TwoStepVerificationEmailDisable> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${this.client.user!.id}/configuration/email/disable`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }

  enableEmail(
    options: TwoStepVerificationEmailEnableOptions
  ): Promise<TwoStepVerificationEmailEnable> {
    return this.request({
      requiresAuth: true,
      request: {
        path: `v1/users/${this.client.user!.id}/configuration/email/enable`,
        method: "POST",
        json: options
      },
      json: true
    }).then((response) => response.body);
  }
}
