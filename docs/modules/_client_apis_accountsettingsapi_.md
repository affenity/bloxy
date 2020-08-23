
# Module: "client/apis/AccountSettingsAPI"

## Index

### Classes

* [AccountSettingsAPI](../classes/_client_apis_accountsettingsapi_.accountsettingsapi.md)

### Type aliases

* [GetAppChatPrivacy](_client_apis_accountsettingsapi_.md#getappchatprivacy)
* [GetContactUpsell](_client_apis_accountsettingsapi_.md#getcontactupsell)
* [GetGameChatPrivacy](_client_apis_accountsettingsapi_.md#getgamechatprivacy)
* [GetInventoryPrivacy](_client_apis_accountsettingsapi_.md#getinventoryprivacy)
* [GetIsXboxUsernameValid](_client_apis_accountsettingsapi_.md#getisxboxusernamevalid)
* [GetIsXboxUsernameValidOptions](_client_apis_accountsettingsapi_.md#getisxboxusernamevalidoptions)
* [GetSettingsGroups](_client_apis_accountsettingsapi_.md#getsettingsgroups)
* [GetTwoStepStatus](_client_apis_accountsettingsapi_.md#gettwostepstatus)
* [GetUserEmailStatus](_client_apis_accountsettingsapi_.md#getuseremailstatus)
* [GetUserPrivacy](_client_apis_accountsettingsapi_.md#getuserprivacy)
* [GetUserPrivacySettingsInfo](_client_apis_accountsettingsapi_.md#getuserprivacysettingsinfo)
* [GetUserPrivateMessagePrivacy](_client_apis_accountsettingsapi_.md#getuserprivatemessageprivacy)
* [GetUserTradePrivacy](_client_apis_accountsettingsapi_.md#getusertradeprivacy)
* [GetUserTradeQualityFilter](_client_apis_accountsettingsapi_.md#getusertradequalityfilter)
* [GetWebsiteTheme](_client_apis_accountsettingsapi_.md#getwebsitetheme)
* [GetWebsiteThemes](_client_apis_accountsettingsapi_.md#getwebsitethemes)
* [SendEmailVerification](_client_apis_accountsettingsapi_.md#sendemailverification)
* [UpdateAppChatPrivacy](_client_apis_accountsettingsapi_.md#updateappchatprivacy)
* [UpdateAppChatPrivacyOptions](_client_apis_accountsettingsapi_.md#updateappchatprivacyoptions)
* [UpdateContactUpsellSuppression](_client_apis_accountsettingsapi_.md#updatecontactupsellsuppression)
* [UpdateContactUpsellSuppressionOptions](_client_apis_accountsettingsapi_.md#updatecontactupsellsuppressionoptions)
* [UpdateGameChatPrivacy](_client_apis_accountsettingsapi_.md#updategamechatprivacy)
* [UpdateGameChatPrivacyOptions](_client_apis_accountsettingsapi_.md#updategamechatprivacyoptions)
* [UpdateInventoryPrivacy](_client_apis_accountsettingsapi_.md#updateinventoryprivacy)
* [UpdateInventoryPrivacyOptions](_client_apis_accountsettingsapi_.md#updateinventoryprivacyoptions)
* [UpdateTwoStepStatus](_client_apis_accountsettingsapi_.md#updatetwostepstatus)
* [UpdateTwoStepStatusOptions](_client_apis_accountsettingsapi_.md#updatetwostepstatusoptions)
* [UpdateUserEmail](_client_apis_accountsettingsapi_.md#updateuseremail)
* [UpdateUserEmailOptions](_client_apis_accountsettingsapi_.md#updateuseremailoptions)
* [UpdateUserPrivacy](_client_apis_accountsettingsapi_.md#updateuserprivacy)
* [UpdateUserPrivacyOptions](_client_apis_accountsettingsapi_.md#updateuserprivacyoptions)
* [UpdateUserPrivateMessagePrivacy](_client_apis_accountsettingsapi_.md#updateuserprivatemessageprivacy)
* [UpdateUserPrivateMessagePrivacyOptions](_client_apis_accountsettingsapi_.md#updateuserprivatemessageprivacyoptions)
* [UpdateUserPromotionChannels](_client_apis_accountsettingsapi_.md#updateuserpromotionchannels)
* [UpdateUserPromotionChannelsOptions](_client_apis_accountsettingsapi_.md#updateuserpromotionchannelsoptions)
* [UpdateUserTradePrivacy](_client_apis_accountsettingsapi_.md#updateusertradeprivacy)
* [UpdateUserTradePrivacyOptions](_client_apis_accountsettingsapi_.md#updateusertradeprivacyoptions)
* [UpdateUserTradeQualityFilter](_client_apis_accountsettingsapi_.md#updateusertradequalityfilter)
* [UpdateUserTradeQualityFilterOptions](_client_apis_accountsettingsapi_.md#updateusertradequalityfilteroptions)
* [UpdateWebsiteTheme](_client_apis_accountsettingsapi_.md#updatewebsitetheme)
* [UpdateWebsiteThemeOptions](_client_apis_accountsettingsapi_.md#updatewebsitethemeoptions)

## Type aliases

### <a id="getappchatprivacy" name="getappchatprivacy"></a>  GetAppChatPrivacy

Ƭ **GetAppChatPrivacy**: *object*

#### Type declaration:

* **appChatPrivacy**: *string*

___

### <a id="getcontactupsell" name="getcontactupsell"></a>  GetContactUpsell

Ƭ **GetContactUpsell**: *object*

#### Type declaration:

* **upsellScreenType**: *string*

___

### <a id="getgamechatprivacy" name="getgamechatprivacy"></a>  GetGameChatPrivacy

Ƭ **GetGameChatPrivacy**: *object*

#### Type declaration:

* **gameChatPrivacy**: *string*

___

### <a id="getinventoryprivacy" name="getinventoryprivacy"></a>  GetInventoryPrivacy

Ƭ **GetInventoryPrivacy**: *object*

#### Type declaration:

* **inventoryPrivacy**: *string*

___

### <a id="getisxboxusernamevalid" name="getisxboxusernamevalid"></a>  GetIsXboxUsernameValid

Ƭ **GetIsXboxUsernameValid**: *object*

#### Type declaration:

* **errorCode**? : *undefined | string*

* **errorMessage**? : *undefined | string*

* **isValid**: *boolean*

___

### <a id="getisxboxusernamevalidoptions" name="getisxboxusernamevalidoptions"></a>  GetIsXboxUsernameValidOptions

Ƭ **GetIsXboxUsernameValidOptions**: *object*

#### Type declaration:

* **authorization**: *string*

* **signature**: *string*

* **username**: *string*

___

### <a id="getsettingsgroups" name="getsettingsgroups"></a>  GetSettingsGroups

Ƭ **GetSettingsGroups**: *object[]*

___

### <a id="gettwostepstatus" name="gettwostepstatus"></a>  GetTwoStepStatus

Ƭ **GetTwoStepStatus**: *object*

#### Type declaration:

* **enabled**: *boolean*

___

### <a id="getuseremailstatus" name="getuseremailstatus"></a>  GetUserEmailStatus

Ƭ **GetUserEmailStatus**: *object*

#### Type declaration:

* **email**: *string*

* **verified**: *boolean*

___

### <a id="getuserprivacy" name="getuserprivacy"></a>  GetUserPrivacy

Ƭ **GetUserPrivacy**: *object*

#### Type declaration:

* **phoneDiscovery**: *string*

___

### <a id="getuserprivacysettingsinfo" name="getuserprivacysettingsinfo"></a>  GetUserPrivacySettingsInfo

Ƭ **GetUserPrivacySettingsInfo**: *object*

#### Type declaration:

* **isPhoneDiscoveryEnabled**: *boolean*

___

### <a id="getuserprivatemessageprivacy" name="getuserprivatemessageprivacy"></a>  GetUserPrivateMessagePrivacy

Ƭ **GetUserPrivateMessagePrivacy**: *object*

#### Type declaration:

* **privateMessagePrivacy**: *string*

___

### <a id="getusertradeprivacy" name="getusertradeprivacy"></a>  GetUserTradePrivacy

Ƭ **GetUserTradePrivacy**: *object*

#### Type declaration:

* **tradePrivacy**: *string*

___

### <a id="getusertradequalityfilter" name="getusertradequalityfilter"></a>  GetUserTradeQualityFilter

Ƭ **GetUserTradeQualityFilter**: *object*

#### Type declaration:

* **tradeValue**: *string*

___

### <a id="getwebsitetheme" name="getwebsitetheme"></a>  GetWebsiteTheme

Ƭ **GetWebsiteTheme**: *object*

#### Type declaration:

* **themeType**: *string*

___

### <a id="getwebsitethemes" name="getwebsitethemes"></a>  GetWebsiteThemes

Ƭ **GetWebsiteThemes**: *object*

#### Type declaration:

* **data**: *string[]*

___

### <a id="sendemailverification" name="sendemailverification"></a>  SendEmailVerification

Ƭ **SendEmailVerification**: *boolean*

___

### <a id="updateappchatprivacy" name="updateappchatprivacy"></a>  UpdateAppChatPrivacy

Ƭ **UpdateAppChatPrivacy**: *boolean*

___

### <a id="updateappchatprivacyoptions" name="updateappchatprivacyoptions"></a>  UpdateAppChatPrivacyOptions

Ƭ **UpdateAppChatPrivacyOptions**: *object*

#### Type declaration:

* **appChatPrivacy**: *string*

___

### <a id="updatecontactupsellsuppression" name="updatecontactupsellsuppression"></a>  UpdateContactUpsellSuppression

Ƭ **UpdateContactUpsellSuppression**: *boolean*

___

### <a id="updatecontactupsellsuppressionoptions" name="updatecontactupsellsuppressionoptions"></a>  UpdateContactUpsellSuppressionOptions

Ƭ **UpdateContactUpsellSuppressionOptions**: *object*

#### Type declaration:

* **suppress**: *boolean*

___

### <a id="updategamechatprivacy" name="updategamechatprivacy"></a>  UpdateGameChatPrivacy

Ƭ **UpdateGameChatPrivacy**: *boolean*

___

### <a id="updategamechatprivacyoptions" name="updategamechatprivacyoptions"></a>  UpdateGameChatPrivacyOptions

Ƭ **UpdateGameChatPrivacyOptions**: *object*

#### Type declaration:

* **gameChatPrivacy**: *string*

___

### <a id="updateinventoryprivacy" name="updateinventoryprivacy"></a>  UpdateInventoryPrivacy

Ƭ **UpdateInventoryPrivacy**: *object*

#### Type declaration:

* **inventoryPrivacy**: *string*

* **privacySettingResponse**: *string*

* **tradePrivacy**: *string*

___

### <a id="updateinventoryprivacyoptions" name="updateinventoryprivacyoptions"></a>  UpdateInventoryPrivacyOptions

Ƭ **UpdateInventoryPrivacyOptions**: *object*

#### Type declaration:

* **inventoryPrivacy**: *string*

___

### <a id="updatetwostepstatus" name="updatetwostepstatus"></a>  UpdateTwoStepStatus

Ƭ **UpdateTwoStepStatus**: *object*

#### Type declaration:

* **enabled**: *boolean*

* **password**: *string*

___

### <a id="updatetwostepstatusoptions" name="updatetwostepstatusoptions"></a>  UpdateTwoStepStatusOptions

Ƭ **UpdateTwoStepStatusOptions**: *object*

#### Type declaration:

* **enabled**: *boolean*

* **password**: *string*

___

### <a id="updateuseremail" name="updateuseremail"></a>  UpdateUserEmail

Ƭ **UpdateUserEmail**: *boolean*

___

### <a id="updateuseremailoptions" name="updateuseremailoptions"></a>  UpdateUserEmailOptions

Ƭ **UpdateUserEmailOptions**: *object*

#### Type declaration:

* **emailAddress**: *string*

* **password**: *string*

___

### <a id="updateuserprivacy" name="updateuserprivacy"></a>  UpdateUserPrivacy

Ƭ **UpdateUserPrivacy**: *object*

#### Type declaration:

* **phoneDiscovery**: *string*

___

### <a id="updateuserprivacyoptions" name="updateuserprivacyoptions"></a>  UpdateUserPrivacyOptions

Ƭ **UpdateUserPrivacyOptions**: *object*

#### Type declaration:

* **phoneDiscovery**: *string*

___

### <a id="updateuserprivatemessageprivacy" name="updateuserprivatemessageprivacy"></a>  UpdateUserPrivateMessagePrivacy

Ƭ **UpdateUserPrivateMessagePrivacy**: *boolean*

___

### <a id="updateuserprivatemessageprivacyoptions" name="updateuserprivatemessageprivacyoptions"></a>  UpdateUserPrivateMessagePrivacyOptions

Ƭ **UpdateUserPrivateMessagePrivacyOptions**: *object*

#### Type declaration:

* **privateMessagePrivacy**: *string*

___

### <a id="updateuserpromotionchannels" name="updateuserpromotionchannels"></a>  UpdateUserPromotionChannels

Ƭ **UpdateUserPromotionChannels**: *boolean*

___

### <a id="updateuserpromotionchannelsoptions" name="updateuserpromotionchannelsoptions"></a>  UpdateUserPromotionChannelsOptions

Ƭ **UpdateUserPromotionChannelsOptions**: *AccountInformationUpdateUserPromotionChannelsOptions*

___

### <a id="updateusertradeprivacy" name="updateusertradeprivacy"></a>  UpdateUserTradePrivacy

Ƭ **UpdateUserTradePrivacy**: *object*

#### Type declaration:

* **inventoryPrivacy**: *string*

* **privacySettingResponse**: *string*

* **tradePrivacy**: *string*

___

### <a id="updateusertradeprivacyoptions" name="updateusertradeprivacyoptions"></a>  UpdateUserTradePrivacyOptions

Ƭ **UpdateUserTradePrivacyOptions**: *object*

#### Type declaration:

* **tradePrivacy**: *string*

___

### <a id="updateusertradequalityfilter" name="updateusertradequalityfilter"></a>  UpdateUserTradeQualityFilter

Ƭ **UpdateUserTradeQualityFilter**: *boolean*

___

### <a id="updateusertradequalityfilteroptions" name="updateusertradequalityfilteroptions"></a>  UpdateUserTradeQualityFilterOptions

Ƭ **UpdateUserTradeQualityFilterOptions**: *object*

#### Type declaration:

* **tradeValue**: *string*

___

### <a id="updatewebsitetheme" name="updatewebsitetheme"></a>  UpdateWebsiteTheme

Ƭ **UpdateWebsiteTheme**: *boolean*

___

### <a id="updatewebsitethemeoptions" name="updatewebsitethemeoptions"></a>  UpdateWebsiteThemeOptions

Ƭ **UpdateWebsiteThemeOptions**: *object*

#### Type declaration:

* **themeType**: *string*
