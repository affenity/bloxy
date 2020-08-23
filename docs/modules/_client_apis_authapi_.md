
# Module: "client/apis/AuthAPI"

## Index

### Classes

* [AuthAPI](../classes/_client_apis_authapi_.authapi.md)

### Type aliases

* [ChangeUserPassword](_client_apis_authapi_.md#changeuserpassword)
* [ChangeUserPasswordOptions](_client_apis_authapi_.md#changeuserpasswordoptions)
* [ChangeUsername](_client_apis_authapi_.md#changeusername)
* [ChangeUsernameOptions](_client_apis_authapi_.md#changeusernameoptions)
* [GetAuthMetaData](_client_apis_authapi_.md#getauthmetadata)
* [GetCredentialsVerificationStatus](_client_apis_authapi_.md#getcredentialsverificationstatus)
* [GetCredentialsVerificationStatusOptions](_client_apis_authapi_.md#getcredentialsverificationstatusoptions)
* [GetCurrentPasswordStatus](_client_apis_authapi_.md#getcurrentpasswordstatus)
* [GetExistingUsernames](_client_apis_authapi_.md#getexistingusernames)
* [GetExistingUsernamesOptions](_client_apis_authapi_.md#getexistingusernamesoptions)
* [GetMetaData](_client_apis_authapi_.md#getmetadata)
* [GetPasswordResetMetaData](_client_apis_authapi_.md#getpasswordresetmetadata)
* [GetPasswordResetMetaDataOptions](_client_apis_authapi_.md#getpasswordresetmetadataoptions)
* [GetRecoveryMetaData](_client_apis_authapi_.md#getrecoverymetadata)
* [GetSAMLMetaData](_client_apis_authapi_.md#getsamlmetadata)
* [GetTwoStepVerificationMetaData](_client_apis_authapi_.md#gettwostepverificationmetadata)
* [Login](_client_apis_authapi_.md#login)
* [LoginOptions](_client_apis_authapi_.md#loginoptions)
* [Logout](_client_apis_authapi_.md#logout)
* [RecoverUsernames](_client_apis_authapi_.md#recoverusernames)
* [RecoverUsernamesOptions](_client_apis_authapi_.md#recoverusernamesoptions)
* [RequestTwoStepVerification](_client_apis_authapi_.md#requesttwostepverification)
* [ResendTwoStepVerification](_client_apis_authapi_.md#resendtwostepverification)
* [ResendTwoStepVerificationOptions](_client_apis_authapi_.md#resendtwostepverificationoptions)
* [ResetPassword](_client_apis_authapi_.md#resetpassword)
* [ResetPasswordOptions](_client_apis_authapi_.md#resetpasswordoptions)
* [RevertAccount](_client_apis_authapi_.md#revertaccount)
* [RevertAccountInfo](_client_apis_authapi_.md#revertaccountinfo)
* [RevertAccountInfoOptions](_client_apis_authapi_.md#revertaccountinfooptions)
* [RevertAccountOptions](_client_apis_authapi_.md#revertaccountoptions)
* [SAMLRequest](_client_apis_authapi_.md#samlrequest)
* [SendCredentialsVerificationMessage](_client_apis_authapi_.md#sendcredentialsverificationmessage)
* [SendCredentialsVerificationMessageOptions](_client_apis_authapi_.md#sendcredentialsverificationmessageoptions)
* [SendPasswordReset](_client_apis_authapi_.md#sendpasswordreset)
* [SendPasswordResetOptions](_client_apis_authapi_.md#sendpasswordresetoptions)
* [SignUp](_client_apis_authapi_.md#signup)
* [SignUpOptions](_client_apis_authapi_.md#signupoptions)
* [ValidatePassword](_client_apis_authapi_.md#validatepassword)
* [ValidatePasswordOptions](_client_apis_authapi_.md#validatepasswordoptions)
* [ValidateUsername](_client_apis_authapi_.md#validateusername)
* [ValidateUsernameOptions](_client_apis_authapi_.md#validateusernameoptions)
* [VerifyPasswordReset](_client_apis_authapi_.md#verifypasswordreset)
* [VerifyPasswordResetOptions](_client_apis_authapi_.md#verifypasswordresetoptions)
* [VerifyTwoStepVerification](_client_apis_authapi_.md#verifytwostepverification)
* [VerifyTwoStepVerificationOptions](_client_apis_authapi_.md#verifytwostepverificationoptions)

## Type aliases

### <a id="changeuserpassword" name="changeuserpassword"></a>  ChangeUserPassword

Ƭ **ChangeUserPassword**: *object*

#### Type declaration:

___

### <a id="changeuserpasswordoptions" name="changeuserpasswordoptions"></a>  ChangeUserPasswordOptions

Ƭ **ChangeUserPasswordOptions**: *object*

#### Type declaration:

* **currentPassword**: *string*

* **newPassword**: *string*

___

### <a id="changeusername" name="changeusername"></a>  ChangeUsername

Ƭ **ChangeUsername**: *object*

#### Type declaration:

___

### <a id="changeusernameoptions" name="changeusernameoptions"></a>  ChangeUsernameOptions

Ƭ **ChangeUsernameOptions**: *object*

#### Type declaration:

* **password**: *string*

* **username**: *string*

___

### <a id="getauthmetadata" name="getauthmetadata"></a>  GetAuthMetaData

Ƭ **GetAuthMetaData**: *object*

#### Type declaration:

* **cookieLawNoticeTimeout**: *number*

___

### <a id="getcredentialsverificationstatus" name="getcredentialsverificationstatus"></a>  GetCredentialsVerificationStatus

Ƭ **GetCredentialsVerificationStatus**: *object*

#### Type declaration:

* **canSend**: *boolean*

___

### <a id="getcredentialsverificationstatusoptions" name="getcredentialsverificationstatusoptions"></a>  GetCredentialsVerificationStatusOptions

Ƭ **GetCredentialsVerificationStatusOptions**: *object*

#### Type declaration:

* **credentialType**: *"Email" | "Username" | "PhoneNumber"*

* **credentialValue**: *string*

* **password**: *string*

___

### <a id="getcurrentpasswordstatus" name="getcurrentpasswordstatus"></a>  GetCurrentPasswordStatus

Ƭ **GetCurrentPasswordStatus**: *object*

#### Type declaration:

* **valid**: *boolean*

___

### <a id="getexistingusernames" name="getexistingusernames"></a>  GetExistingUsernames

Ƭ **GetExistingUsernames**: *object*

#### Type declaration:

* **usernames**: *string[]*

___

### <a id="getexistingusernamesoptions" name="getexistingusernamesoptions"></a>  GetExistingUsernamesOptions

Ƭ **GetExistingUsernamesOptions**: *object*

#### Type declaration:

* **username**: *string*

___

### <a id="getmetadata" name="getmetadata"></a>  GetMetaData

Ƭ **GetMetaData**: *object*

#### Type declaration:

* **ftuxAvatarAssetMap**: *string*

* **isUpdateUsernameEnabled**: *boolean*

___

### <a id="getpasswordresetmetadata" name="getpasswordresetmetadata"></a>  GetPasswordResetMetaData

Ƭ **GetPasswordResetMetaData**: *object*

#### Type declaration:

* **users**: *object[]*

___

### <a id="getpasswordresetmetadataoptions" name="getpasswordresetmetadataoptions"></a>  GetPasswordResetMetaDataOptions

Ƭ **GetPasswordResetMetaDataOptions**: *object*

#### Type declaration:

* **targetType**: *"Email" | "PhoneNumber"*

* **ticket**: *string*

___

### <a id="getrecoverymetadata" name="getrecoverymetadata"></a>  GetRecoveryMetaData

Ƭ **GetRecoveryMetaData**: *object*

#### Type declaration:

* **codeLength**: *number*

* **isBedev2CaptchaEnabledForPasswordReset**: *boolean*

* **isOnPhone**: *boolean*

* **isPhoneFeatureEnabledForPassword**: *boolean*

* **isPhoneFeatureEnabledForUsername**: *boolean*

___

### <a id="getsamlmetadata" name="getsamlmetadata"></a>  GetSAMLMetaData

Ƭ **GetSAMLMetaData**: *unknown*

___

### <a id="gettwostepverificationmetadata" name="gettwostepverificationmetadata"></a>  GetTwoStepVerificationMetaData

Ƭ **GetTwoStepVerificationMetaData**: *object*

#### Type declaration:

* **codeLength**: *number*

* **loadingImageUrl**: *string*

* **supportUrl**: *string*

___

### <a id="login" name="login"></a>  Login

Ƭ **Login**: *object*

#### Type declaration:

* **twoStepVerificationData**? : *undefined | object*

* **user**(): *object*

  * **displayName**: *string*

  * **id**: *number*

  * **name**: *string*

___

### <a id="loginoptions" name="loginoptions"></a>  LoginOptions

Ƭ **LoginOptions**: *object*

#### Type declaration:

* **captchaProvider**: *"PROVIDER_ARKOSELABS" | string*

* **captchaToken**: *string*

* **ctype**: *"Email" | "Username" | string*

* **cvalue**: *string*

* **password**: *string*

___

### <a id="logout" name="logout"></a>  Logout

Ƭ **Logout**: *object*

#### Type declaration:

___

### <a id="recoverusernames" name="recoverusernames"></a>  RecoverUsernames

Ƭ **RecoverUsernames**: *object*

#### Type declaration:

* **transmissionType**: *string*

___

### <a id="recoverusernamesoptions" name="recoverusernamesoptions"></a>  RecoverUsernamesOptions

Ƭ **RecoverUsernamesOptions**: *object*

#### Type declaration:

* **target**: *string*

* **targetType**: *"Email" | string*

___

### <a id="requesttwostepverification" name="requesttwostepverification"></a>  RequestTwoStepVerification

Ƭ **RequestTwoStepVerification**: *object*

#### Type declaration:

* **mediaType**: *"Email" | "PhoneNumber" | string*

* **ticket**: *string*

___

### <a id="resendtwostepverification" name="resendtwostepverification"></a>  ResendTwoStepVerification

Ƭ **ResendTwoStepVerification**: *[RequestTwoStepVerification](_client_apis_authapi_.md#requesttwostepverification)*

___

### <a id="resendtwostepverificationoptions" name="resendtwostepverificationoptions"></a>  ResendTwoStepVerificationOptions

Ƭ **ResendTwoStepVerificationOptions**: *object*

#### Type declaration:

* **actionType**: *string*

* **ticket**: *string*

* **username**: *string*

___

### <a id="resetpassword" name="resetpassword"></a>  ResetPassword

Ƭ **ResetPassword**: *[Login](_client_apis_authapi_.md#login)*

___

### <a id="resetpasswordoptions" name="resetpasswordoptions"></a>  ResetPasswordOptions

Ƭ **ResetPasswordOptions**: *object*

#### Type declaration:

* **password**: *string*

* **passwordRepeated**: *string*

* **targetType**: *"Email" | "PhoneNumber"*

* **ticket**: *string*

* **userId**: *number*

___

### <a id="revertaccount" name="revertaccount"></a>  RevertAccount

Ƭ **RevertAccount**: *[Login](_client_apis_authapi_.md#login)*

___

### <a id="revertaccountinfo" name="revertaccountinfo"></a>  RevertAccountInfo

Ƭ **RevertAccountInfo**: *object*

#### Type declaration:

* **isEmailChanged**: *boolean*

* **isEmailVerified**: *boolean*

* **isTwoStepVerificationEnabled**: *boolean*

* **ticket**: *string*

* **userId**: *number*

* **username**: *string*

___

### <a id="revertaccountinfooptions" name="revertaccountinfooptions"></a>  RevertAccountInfoOptions

Ƭ **RevertAccountInfoOptions**: *object*

#### Type declaration:

* **ticket**: *string*

___

### <a id="revertaccountoptions" name="revertaccountoptions"></a>  RevertAccountOptions

Ƭ **RevertAccountOptions**: *object*

#### Type declaration:

* **newPassword**: *string*

* **ticket**: *string*

* **userId**: *number*

___

### <a id="samlrequest" name="samlrequest"></a>  SAMLRequest

Ƭ **SAMLRequest**: *object*

#### Type declaration:

___

### <a id="sendcredentialsverificationmessage" name="sendcredentialsverificationmessage"></a>  SendCredentialsVerificationMessage

Ƭ **SendCredentialsVerificationMessage**: *object*

#### Type declaration:

___

### <a id="sendcredentialsverificationmessageoptions" name="sendcredentialsverificationmessageoptions"></a>  SendCredentialsVerificationMessageOptions

Ƭ **SendCredentialsVerificationMessageOptions**: *object*

#### Type declaration:

* **credentialType**: *"Email" | "Username" | "PhoneNumber"*

* **credentialValue**: *string*

* **password**: *string*

___

### <a id="sendpasswordreset" name="sendpasswordreset"></a>  SendPasswordReset

Ƭ **SendPasswordReset**: *object*

#### Type declaration:

* **nonce**: *string*

* **transmissionType**: *string*

___

### <a id="sendpasswordresetoptions" name="sendpasswordresetoptions"></a>  SendPasswordResetOptions

Ƭ **SendPasswordResetOptions**: *object*

#### Type declaration:

* **captchaProvider**: *"PROVIDER_ARKOSELABS" | string*

* **captchaToken**: *string*

* **target**: *string*

* **targetType**: *ResetPasswordOptions["targetType"]*

___

### <a id="signup" name="signup"></a>  SignUp

Ƭ **SignUp**: *object*

#### Type declaration:

* **starterPlaceId**: *number*

* **userId**: *number*

___

### <a id="signupoptions" name="signupoptions"></a>  SignUpOptions

Ƭ **SignUpOptions**: *object*

#### Type declaration:

* **assetIds**: *number[]*

* **birthday**: *string*

* **bodyColorId**: *number*

* **bodyTypeScale**: *number*

* **captchaProvider**: *string*

* **captchaToken**: *string*

* **email**: *string*

* **gender**: *"Unknown" | string*

* **headScale**: *number*

* **heightScale**: *number*

* **isTosAgreementBoxChecked**: *boolean*

* **locale**: *string*

* **password**: *string*

* **proportionScale**: *number*

* **username**: *string*

* **widthScale**: *number*

___

### <a id="validatepassword" name="validatepassword"></a>  ValidatePassword

Ƭ **ValidatePassword**: *object*

#### Type declaration:

* **code**: *string*

* **message**: *string*

___

### <a id="validatepasswordoptions" name="validatepasswordoptions"></a>  ValidatePasswordOptions

Ƭ **ValidatePasswordOptions**: *object*

#### Type declaration:

* **password**: *string*

* **username**: *string*

___

### <a id="validateusername" name="validateusername"></a>  ValidateUsername

Ƭ **ValidateUsername**: *object*

#### Type declaration:

* **code**: *string*

* **message**: *string*

___

### <a id="validateusernameoptions" name="validateusernameoptions"></a>  ValidateUsernameOptions

Ƭ **ValidateUsernameOptions**: *object*

#### Type declaration:

* **birthday**: *string*

* **context**: *"Unknown" | "Signup" | "UsernameChange" | string*

* **username**: *string*

___

### <a id="verifypasswordreset" name="verifypasswordreset"></a>  VerifyPasswordReset

Ƭ **VerifyPasswordReset**: *object*

#### Type declaration:

* **userTickets**: *object[]*

___

### <a id="verifypasswordresetoptions" name="verifypasswordresetoptions"></a>  VerifyPasswordResetOptions

Ƭ **VerifyPasswordResetOptions**: *object*

#### Type declaration:

* **code**: *string*

* **nonce**: *string*

* **targetType**: *ResetPasswordOptions["targetType"]*

___

### <a id="verifytwostepverification" name="verifytwostepverification"></a>  VerifyTwoStepVerification

Ƭ **VerifyTwoStepVerification**: *object*

#### Type declaration:

___

### <a id="verifytwostepverificationoptions" name="verifytwostepverificationoptions"></a>  VerifyTwoStepVerificationOptions

Ƭ **VerifyTwoStepVerificationOptions**: *object*

#### Type declaration:

* **actionType**: *string*

* **code**: *string*

* **rememberDevice**: *boolean*

* **ticket**: *string*

* **username**: *string*
