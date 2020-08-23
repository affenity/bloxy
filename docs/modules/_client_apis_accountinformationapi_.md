
# Module: "client/apis/AccountInformationAPI"

## Index

### Classes

* [AccountInformationAPI](../classes/_client_apis_accountinformationapi_.accountinformationapi.md)

### Type aliases

* [AddStarCodeAffiliate](_client_apis_accountinformationapi_.md#addstarcodeaffiliate)
* [AddStarCodeAffiliateOptions](_client_apis_accountinformationapi_.md#addstarcodeaffiliateoptions)
* [DeletePhone](_client_apis_accountinformationapi_.md#deletephone)
* [DeletePhoneOptions](_client_apis_accountinformationapi_.md#deletephoneoptions)
* [GetConsecutiveXboxLoginDays](_client_apis_accountinformationapi_.md#getconsecutivexboxlogindays)
* [GetMetaData](_client_apis_accountinformationapi_.md#getmetadata)
* [GetSelfPromotionChannels](_client_apis_accountinformationapi_.md#getselfpromotionchannels)
* [GetStarCodeAffiliate](_client_apis_accountinformationapi_.md#getstarcodeaffiliate)
* [GetUserBirthdate](_client_apis_accountinformationapi_.md#getuserbirthdate)
* [GetUserDescription](_client_apis_accountinformationapi_.md#getuserdescription)
* [GetUserGender](_client_apis_accountinformationapi_.md#getusergender)
* [GetUserPromotionChannels](_client_apis_accountinformationapi_.md#getuserpromotionchannels)
* [GetUserPromotionChannelsOptions](_client_apis_accountinformationapi_.md#getuserpromotionchannelsoptions)
* [GetVerifiedPhoneNumber](_client_apis_accountinformationapi_.md#getverifiedphonenumber)
* [RemoveStarCodeAffiliate](_client_apis_accountinformationapi_.md#removestarcodeaffiliate)
* [ResendPhoneCode](_client_apis_accountinformationapi_.md#resendphonecode)
* [ResendPhoneCodeOptions](_client_apis_accountinformationapi_.md#resendphonecodeoptions)
* [SetPhoneNumber](_client_apis_accountinformationapi_.md#setphonenumber)
* [SetPhoneNumberOptions](_client_apis_accountinformationapi_.md#setphonenumberoptions)
* [UpdateUserBirthdate](_client_apis_accountinformationapi_.md#updateuserbirthdate)
* [UpdateUserBirthdateOptions](_client_apis_accountinformationapi_.md#updateuserbirthdateoptions)
* [UpdateUserDescription](_client_apis_accountinformationapi_.md#updateuserdescription)
* [UpdateUserDescriptionOptions](_client_apis_accountinformationapi_.md#updateuserdescriptionoptions)
* [UpdateUserGender](_client_apis_accountinformationapi_.md#updateusergender)
* [UpdateUserGenderOptions](_client_apis_accountinformationapi_.md#updateusergenderoptions)
* [UpdateUserPromotionChannels](_client_apis_accountinformationapi_.md#updateuserpromotionchannels)
* [UpdateUserPromotionChannelsOptions](_client_apis_accountinformationapi_.md#updateuserpromotionchannelsoptions)
* [VerifyPhone](_client_apis_accountinformationapi_.md#verifyphone)
* [VerifyPhoneOptions](_client_apis_accountinformationapi_.md#verifyphoneoptions)

## Type aliases

### <a id="addstarcodeaffiliate" name="addstarcodeaffiliate"></a>  AddStarCodeAffiliate

Ƭ **AddStarCodeAffiliate**: *[GetStarCodeAffiliate](_client_apis_accountinformationapi_.md#getstarcodeaffiliate)*

___

### <a id="addstarcodeaffiliateoptions" name="addstarcodeaffiliateoptions"></a>  AddStarCodeAffiliateOptions

Ƭ **AddStarCodeAffiliateOptions**: *object*

#### Type declaration:

* **code**: *string*

___

### <a id="deletephone" name="deletephone"></a>  DeletePhone

Ƭ **DeletePhone**: *object*

#### Type declaration:

___

### <a id="deletephoneoptions" name="deletephoneoptions"></a>  DeletePhoneOptions

Ƭ **DeletePhoneOptions**: *[SetPhoneNumberOptions](_client_apis_accountinformationapi_.md#setphonenumberoptions)*

___

### <a id="getconsecutivexboxlogindays" name="getconsecutivexboxlogindays"></a>  GetConsecutiveXboxLoginDays

Ƭ **GetConsecutiveXboxLoginDays**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="getmetadata" name="getmetadata"></a>  GetMetaData

Ƭ **GetMetaData**: *object*

#### Type declaration:

* **isAccountSettingsPolicyEnabled**: *boolean*

* **isAllowedNotificationsEndpointDisabled**: *boolean*

* **isPhoneNumberEnabled**: *boolean*

___

### <a id="getselfpromotionchannels" name="getselfpromotionchannels"></a>  GetSelfPromotionChannels

Ƭ **GetSelfPromotionChannels**: *[UpdateUserPromotionChannelsOptions](_client_apis_accountinformationapi_.md#updateuserpromotionchannelsoptions)*

___

### <a id="getstarcodeaffiliate" name="getstarcodeaffiliate"></a>  GetStarCodeAffiliate

Ƭ **GetStarCodeAffiliate**: *object*

#### Type declaration:

* **code**: *string*

* **name**: *string*

* **userId**: *number*

___

### <a id="getuserbirthdate" name="getuserbirthdate"></a>  GetUserBirthdate

Ƭ **GetUserBirthdate**: *object*

#### Type declaration:

* **birthDay**: *number*

* **birthMonth**: *number*

* **birthYear**: *number*

___

### <a id="getuserdescription" name="getuserdescription"></a>  GetUserDescription

Ƭ **GetUserDescription**: *object*

#### Type declaration:

* **description**: *string*

___

### <a id="getusergender" name="getusergender"></a>  GetUserGender

Ƭ **GetUserGender**: *object*

#### Type declaration:

* **gender**: *number*

___

### <a id="getuserpromotionchannels" name="getuserpromotionchannels"></a>  GetUserPromotionChannels

Ƭ **GetUserPromotionChannels**: *Omit‹[GetSelfPromotionChannels](_client_apis_accountinformationapi_.md#getselfpromotionchannels), "promotionChannelsVisibilityPrivacy"›*

___

### <a id="getuserpromotionchannelsoptions" name="getuserpromotionchannelsoptions"></a>  GetUserPromotionChannelsOptions

Ƭ **GetUserPromotionChannelsOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getverifiedphonenumber" name="getverifiedphonenumber"></a>  GetVerifiedPhoneNumber

Ƭ **GetVerifiedPhoneNumber**: *[SetPhoneNumberOptions](_client_apis_accountinformationapi_.md#setphonenumberoptions)*

___

### <a id="removestarcodeaffiliate" name="removestarcodeaffiliate"></a>  RemoveStarCodeAffiliate

Ƭ **RemoveStarCodeAffiliate**: *object*

#### Type declaration:

___

### <a id="resendphonecode" name="resendphonecode"></a>  ResendPhoneCode

Ƭ **ResendPhoneCode**: *object*

#### Type declaration:

___

### <a id="resendphonecodeoptions" name="resendphonecodeoptions"></a>  ResendPhoneCodeOptions

Ƭ **ResendPhoneCodeOptions**: *[SetPhoneNumberOptions](_client_apis_accountinformationapi_.md#setphonenumberoptions)*

___

### <a id="setphonenumber" name="setphonenumber"></a>  SetPhoneNumber

Ƭ **SetPhoneNumber**: *object*

#### Type declaration:

___

### <a id="setphonenumberoptions" name="setphonenumberoptions"></a>  SetPhoneNumberOptions

Ƭ **SetPhoneNumberOptions**: *object*

#### Type declaration:

* **countryCode**: *string*

* **password**: *string*

* **phone**: *string*

* **prefix**: *string*

___

### <a id="updateuserbirthdate" name="updateuserbirthdate"></a>  UpdateUserBirthdate

Ƭ **UpdateUserBirthdate**: *boolean*

___

### <a id="updateuserbirthdateoptions" name="updateuserbirthdateoptions"></a>  UpdateUserBirthdateOptions

Ƭ **UpdateUserBirthdateOptions**: *[GetUserBirthdate](_client_apis_accountinformationapi_.md#getuserbirthdate)*

___

### <a id="updateuserdescription" name="updateuserdescription"></a>  UpdateUserDescription

Ƭ **UpdateUserDescription**: *boolean*

___

### <a id="updateuserdescriptionoptions" name="updateuserdescriptionoptions"></a>  UpdateUserDescriptionOptions

Ƭ **UpdateUserDescriptionOptions**: *object*

#### Type declaration:

* **description**: *string*

___

### <a id="updateusergender" name="updateusergender"></a>  UpdateUserGender

Ƭ **UpdateUserGender**: *object*

#### Type declaration:

___

### <a id="updateusergenderoptions" name="updateusergenderoptions"></a>  UpdateUserGenderOptions

Ƭ **UpdateUserGenderOptions**: *object*

#### Type declaration:

* **gender**: *number*

___

### <a id="updateuserpromotionchannels" name="updateuserpromotionchannels"></a>  UpdateUserPromotionChannels

Ƭ **UpdateUserPromotionChannels**: *object*

#### Type declaration:

___

### <a id="updateuserpromotionchannelsoptions" name="updateuserpromotionchannelsoptions"></a>  UpdateUserPromotionChannelsOptions

Ƭ **UpdateUserPromotionChannelsOptions**: *object*

#### Type declaration:

* **facebook**: *string*

* **promotionChannelsVisibilityPrivacy**: *string*

* **twitch**: *string*

* **twitter**: *string*

* **youtube**: *string*

___

### <a id="verifyphone" name="verifyphone"></a>  VerifyPhone

Ƭ **VerifyPhone**: *object*

#### Type declaration:

___

### <a id="verifyphoneoptions" name="verifyphoneoptions"></a>  VerifyPhoneOptions

Ƭ **VerifyPhoneOptions**: *[SetPhoneNumberOptions](_client_apis_accountinformationapi_.md#setphonenumberoptions)*
