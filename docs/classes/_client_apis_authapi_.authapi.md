
# Class: AuthAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **AuthAPI**

## Index

### Constructors

* [constructor](_client_apis_authapi_.authapi.md#constructor)

### Properties

* [client](_client_apis_authapi_.authapi.md#client)
* [options](_client_apis_authapi_.authapi.md#options)

### Methods

* [changeUserPassword](_client_apis_authapi_.authapi.md#changeuserpassword)
* [changeUserUsername](_client_apis_authapi_.authapi.md#changeuserusername)
* [getAuthMetaData](_client_apis_authapi_.authapi.md#getauthmetadata)
* [getCredentialsVerificationStatus](_client_apis_authapi_.authapi.md#getcredentialsverificationstatus)
* [getCurrentUserPasswordStatus](_client_apis_authapi_.authapi.md#getcurrentuserpasswordstatus)
* [getExistingUsernames](_client_apis_authapi_.authapi.md#getexistingusernames)
* [getMetaData](_client_apis_authapi_.authapi.md#getmetadata)
* [getPasswordResetMetaData](_client_apis_authapi_.authapi.md#getpasswordresetmetadata)
* [getRecoveryMetaData](_client_apis_authapi_.authapi.md#getrecoverymetadata)
* [getRevertAccountInfo](_client_apis_authapi_.authapi.md#getrevertaccountinfo)
* [getSAMLMetaData](_client_apis_authapi_.authapi.md#getsamlmetadata)
* [getTwoStepVerificationMetaData](_client_apis_authapi_.authapi.md#gettwostepverificationmetadata)
* [login](_client_apis_authapi_.authapi.md#login)
* [logout](_client_apis_authapi_.authapi.md#logout)
* [recoverUsernames](_client_apis_authapi_.authapi.md#recoverusernames)
* [request](_client_apis_authapi_.authapi.md#request)
* [resendTwoStepVerificationCode](_client_apis_authapi_.authapi.md#resendtwostepverificationcode)
* [resetPassword](_client_apis_authapi_.authapi.md#resetpassword)
* [revertAccount](_client_apis_authapi_.authapi.md#revertaccount)
* [samlAuthenticate](_client_apis_authapi_.authapi.md#samlauthenticate)
* [sendCredentialsVerificationMessage](_client_apis_authapi_.authapi.md#sendcredentialsverificationmessage)
* [sendPasswordReset](_client_apis_authapi_.authapi.md#sendpasswordreset)
* [signUp](_client_apis_authapi_.authapi.md#signup)
* [validatePassword](_client_apis_authapi_.authapi.md#validatepassword)
* [validateUsername](_client_apis_authapi_.authapi.md#validateusername)
* [verifyPasswordReset](_client_apis_authapi_.authapi.md#verifypasswordreset)
* [verifyTwoStepCode](_client_apis_authapi_.authapi.md#verifytwostepcode)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new AuthAPI**(`client`: [Client](_client_client_.client.md)): *[AuthAPI](_client_apis_authapi_.authapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[AuthAPI](_client_apis_authapi_.authapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="changeuserpassword" name="changeuserpassword"></a>  changeUserPassword

▸ **changeUserPassword**(`options`: [ChangeUserPasswordOptions](../modules/_client_apis_authapi_.md#changeuserpasswordoptions)): *Promise‹[ChangeUserPassword](../modules/_client_apis_authapi_.md#changeuserpassword)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ChangeUserPasswordOptions](../modules/_client_apis_authapi_.md#changeuserpasswordoptions) |

**Returns:** *Promise‹[ChangeUserPassword](../modules/_client_apis_authapi_.md#changeuserpassword)›*

___

### <a id="changeuserusername" name="changeuserusername"></a>  changeUserUsername

▸ **changeUserUsername**(`options`: [ChangeUsernameOptions](../modules/_client_apis_authapi_.md#changeusernameoptions)): *Promise‹[ChangeUsername](../modules/_client_apis_authapi_.md#changeusername)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ChangeUsernameOptions](../modules/_client_apis_authapi_.md#changeusernameoptions) |

**Returns:** *Promise‹[ChangeUsername](../modules/_client_apis_authapi_.md#changeusername)›*

___

### <a id="getauthmetadata" name="getauthmetadata"></a>  getAuthMetaData

▸ **getAuthMetaData**(): *Promise‹[GetAuthMetaData](../modules/_client_apis_authapi_.md#getauthmetadata)›*

**Returns:** *Promise‹[GetAuthMetaData](../modules/_client_apis_authapi_.md#getauthmetadata)›*

___

### <a id="getcredentialsverificationstatus" name="getcredentialsverificationstatus"></a>  getCredentialsVerificationStatus

▸ **getCredentialsVerificationStatus**(`options`: [GetCredentialsVerificationStatusOptions](../modules/_client_apis_authapi_.md#getcredentialsverificationstatusoptions)): *Promise‹[GetCredentialsVerificationStatus](../modules/_client_apis_authapi_.md#getcredentialsverificationstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetCredentialsVerificationStatusOptions](../modules/_client_apis_authapi_.md#getcredentialsverificationstatusoptions) |

**Returns:** *Promise‹[GetCredentialsVerificationStatus](../modules/_client_apis_authapi_.md#getcredentialsverificationstatus)›*

___

### <a id="getcurrentuserpasswordstatus" name="getcurrentuserpasswordstatus"></a>  getCurrentUserPasswordStatus

▸ **getCurrentUserPasswordStatus**(): *Promise‹[GetCurrentPasswordStatus](../modules/_client_apis_authapi_.md#getcurrentpasswordstatus)›*

**Returns:** *Promise‹[GetCurrentPasswordStatus](../modules/_client_apis_authapi_.md#getcurrentpasswordstatus)›*

___

### <a id="getexistingusernames" name="getexistingusernames"></a>  getExistingUsernames

▸ **getExistingUsernames**(`options`: [GetExistingUsernamesOptions](../modules/_client_apis_authapi_.md#getexistingusernamesoptions)): *Promise‹[GetExistingUsernames](../modules/_client_apis_authapi_.md#getexistingusernames)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetExistingUsernamesOptions](../modules/_client_apis_authapi_.md#getexistingusernamesoptions) |

**Returns:** *Promise‹[GetExistingUsernames](../modules/_client_apis_authapi_.md#getexistingusernames)›*

___

### <a id="getmetadata" name="getmetadata"></a>  getMetaData

▸ **getMetaData**(): *Promise‹[GetMetaData](../modules/_client_apis_authapi_.md#getmetadata)›*

**Returns:** *Promise‹[GetMetaData](../modules/_client_apis_authapi_.md#getmetadata)›*

___

### <a id="getpasswordresetmetadata" name="getpasswordresetmetadata"></a>  getPasswordResetMetaData

▸ **getPasswordResetMetaData**(`options`: [GetPasswordResetMetaDataOptions](../modules/_client_apis_authapi_.md#getpasswordresetmetadataoptions)): *Promise‹[GetPasswordResetMetaData](../modules/_client_apis_authapi_.md#getpasswordresetmetadata)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetPasswordResetMetaDataOptions](../modules/_client_apis_authapi_.md#getpasswordresetmetadataoptions) |

**Returns:** *Promise‹[GetPasswordResetMetaData](../modules/_client_apis_authapi_.md#getpasswordresetmetadata)›*

___

### <a id="getrecoverymetadata" name="getrecoverymetadata"></a>  getRecoveryMetaData

▸ **getRecoveryMetaData**(): *Promise‹[GetRecoveryMetaData](../modules/_client_apis_authapi_.md#getrecoverymetadata)›*

**Returns:** *Promise‹[GetRecoveryMetaData](../modules/_client_apis_authapi_.md#getrecoverymetadata)›*

___

### <a id="getrevertaccountinfo" name="getrevertaccountinfo"></a>  getRevertAccountInfo

▸ **getRevertAccountInfo**(`options`: [RevertAccountInfoOptions](../modules/_client_apis_authapi_.md#revertaccountinfooptions)): *Promise‹[RevertAccountInfo](../modules/_client_apis_authapi_.md#revertaccountinfo)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RevertAccountInfoOptions](../modules/_client_apis_authapi_.md#revertaccountinfooptions) |

**Returns:** *Promise‹[RevertAccountInfo](../modules/_client_apis_authapi_.md#revertaccountinfo)›*

___

### <a id="getsamlmetadata" name="getsamlmetadata"></a>  getSAMLMetaData

▸ **getSAMLMetaData**(): *Promise‹[GetSAMLMetaData](../modules/_client_apis_authapi_.md#getsamlmetadata)›*

**Returns:** *Promise‹[GetSAMLMetaData](../modules/_client_apis_authapi_.md#getsamlmetadata)›*

___

### <a id="gettwostepverificationmetadata" name="gettwostepverificationmetadata"></a>  getTwoStepVerificationMetaData

▸ **getTwoStepVerificationMetaData**(): *Promise‹[GetTwoStepVerificationMetaData](../modules/_client_apis_authapi_.md#gettwostepverificationmetadata)›*

**Returns:** *Promise‹[GetTwoStepVerificationMetaData](../modules/_client_apis_authapi_.md#gettwostepverificationmetadata)›*

___

### <a id="login" name="login"></a>  login

▸ **login**(`options`: [LoginOptions](../modules/_client_apis_authapi_.md#loginoptions)): *Promise‹[Login](../modules/_client_apis_authapi_.md#login)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [LoginOptions](../modules/_client_apis_authapi_.md#loginoptions) |

**Returns:** *Promise‹[Login](../modules/_client_apis_authapi_.md#login)›*

___

### <a id="logout" name="logout"></a>  logout

▸ **logout**(): *Promise‹[Logout](../modules/_client_apis_authapi_.md#logout)›*

**Returns:** *Promise‹[Logout](../modules/_client_apis_authapi_.md#logout)›*

___

### <a id="recoverusernames" name="recoverusernames"></a>  recoverUsernames

▸ **recoverUsernames**(`options`: [RecoverUsernamesOptions](../modules/_client_apis_authapi_.md#recoverusernamesoptions)): *Promise‹[RecoverUsernames](../modules/_client_apis_authapi_.md#recoverusernames)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RecoverUsernamesOptions](../modules/_client_apis_authapi_.md#recoverusernamesoptions) |

**Returns:** *Promise‹[RecoverUsernames](../modules/_client_apis_authapi_.md#recoverusernames)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

___

### <a id="resendtwostepverificationcode" name="resendtwostepverificationcode"></a>  resendTwoStepVerificationCode

▸ **resendTwoStepVerificationCode**(`options`: [ResendTwoStepVerificationOptions](../modules/_client_apis_authapi_.md#resendtwostepverificationoptions)): *Promise‹[ResendTwoStepVerification](../modules/_client_apis_authapi_.md#resendtwostepverification)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ResendTwoStepVerificationOptions](../modules/_client_apis_authapi_.md#resendtwostepverificationoptions) |

**Returns:** *Promise‹[ResendTwoStepVerification](../modules/_client_apis_authapi_.md#resendtwostepverification)›*

___

### <a id="resetpassword" name="resetpassword"></a>  resetPassword

▸ **resetPassword**(`options`: [ResetPasswordOptions](../modules/_client_apis_authapi_.md#resetpasswordoptions)): *Promise‹[ResetPassword](../modules/_client_apis_authapi_.md#resetpassword)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ResetPasswordOptions](../modules/_client_apis_authapi_.md#resetpasswordoptions) |

**Returns:** *Promise‹[ResetPassword](../modules/_client_apis_authapi_.md#resetpassword)›*

___

### <a id="revertaccount" name="revertaccount"></a>  revertAccount

▸ **revertAccount**(`options`: [RevertAccountOptions](../modules/_client_apis_authapi_.md#revertaccountoptions)): *Promise‹[RevertAccount](../modules/_client_apis_authapi_.md#revertaccount)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RevertAccountOptions](../modules/_client_apis_authapi_.md#revertaccountoptions) |

**Returns:** *Promise‹[RevertAccount](../modules/_client_apis_authapi_.md#revertaccount)›*

___

### <a id="samlauthenticate" name="samlauthenticate"></a>  samlAuthenticate

▸ **samlAuthenticate**(): *Promise‹[SAMLRequest](../modules/_client_apis_authapi_.md#samlrequest)›*

**Returns:** *Promise‹[SAMLRequest](../modules/_client_apis_authapi_.md#samlrequest)›*

___

### <a id="sendcredentialsverificationmessage" name="sendcredentialsverificationmessage"></a>  sendCredentialsVerificationMessage

▸ **sendCredentialsVerificationMessage**(`options`: [SendCredentialsVerificationMessageOptions](../modules/_client_apis_authapi_.md#sendcredentialsverificationmessageoptions)): *Promise‹[SendCredentialsVerificationMessage](../modules/_client_apis_authapi_.md#sendcredentialsverificationmessage)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendCredentialsVerificationMessageOptions](../modules/_client_apis_authapi_.md#sendcredentialsverificationmessageoptions) |

**Returns:** *Promise‹[SendCredentialsVerificationMessage](../modules/_client_apis_authapi_.md#sendcredentialsverificationmessage)›*

___

### <a id="sendpasswordreset" name="sendpasswordreset"></a>  sendPasswordReset

▸ **sendPasswordReset**(`options`: [SendPasswordResetOptions](../modules/_client_apis_authapi_.md#sendpasswordresetoptions)): *Promise‹[SendPasswordReset](../modules/_client_apis_authapi_.md#sendpasswordreset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendPasswordResetOptions](../modules/_client_apis_authapi_.md#sendpasswordresetoptions) |

**Returns:** *Promise‹[SendPasswordReset](../modules/_client_apis_authapi_.md#sendpasswordreset)›*

___

### <a id="signup" name="signup"></a>  signUp

▸ **signUp**(`options`: [SignUpOptions](../modules/_client_apis_authapi_.md#signupoptions)): *Promise‹[SignUp](../modules/_client_apis_authapi_.md#signup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SignUpOptions](../modules/_client_apis_authapi_.md#signupoptions) |

**Returns:** *Promise‹[SignUp](../modules/_client_apis_authapi_.md#signup)›*

___

### <a id="validatepassword" name="validatepassword"></a>  validatePassword

▸ **validatePassword**(`options`: [ValidatePasswordOptions](../modules/_client_apis_authapi_.md#validatepasswordoptions)): *Promise‹[ValidatePassword](../modules/_client_apis_authapi_.md#validatepassword)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidatePasswordOptions](../modules/_client_apis_authapi_.md#validatepasswordoptions) |

**Returns:** *Promise‹[ValidatePassword](../modules/_client_apis_authapi_.md#validatepassword)›*

___

### <a id="validateusername" name="validateusername"></a>  validateUsername

▸ **validateUsername**(`options`: [ValidateUsernameOptions](../modules/_client_apis_authapi_.md#validateusernameoptions)): *Promise‹[ValidateUsername](../modules/_client_apis_authapi_.md#validateusername)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateUsernameOptions](../modules/_client_apis_authapi_.md#validateusernameoptions) |

**Returns:** *Promise‹[ValidateUsername](../modules/_client_apis_authapi_.md#validateusername)›*

___

### <a id="verifypasswordreset" name="verifypasswordreset"></a>  verifyPasswordReset

▸ **verifyPasswordReset**(`options`: [VerifyPasswordResetOptions](../modules/_client_apis_authapi_.md#verifypasswordresetoptions)): *Promise‹[VerifyPasswordReset](../modules/_client_apis_authapi_.md#verifypasswordreset)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [VerifyPasswordResetOptions](../modules/_client_apis_authapi_.md#verifypasswordresetoptions) |

**Returns:** *Promise‹[VerifyPasswordReset](../modules/_client_apis_authapi_.md#verifypasswordreset)›*

___

### <a id="verifytwostepcode" name="verifytwostepcode"></a>  verifyTwoStepCode

▸ **verifyTwoStepCode**(`options`: [VerifyTwoStepVerificationOptions](../modules/_client_apis_authapi_.md#verifytwostepverificationoptions)): *Promise‹[VerifyTwoStepVerification](../modules/_client_apis_authapi_.md#verifytwostepverification)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [VerifyTwoStepVerificationOptions](../modules/_client_apis_authapi_.md#verifytwostepverificationoptions) |

**Returns:** *Promise‹[VerifyTwoStepVerification](../modules/_client_apis_authapi_.md#verifytwostepverification)›*
