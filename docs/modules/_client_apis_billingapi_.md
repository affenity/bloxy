
# Module: "client/apis/BillingAPI"

## Index

### Classes

* [BillingAPI](../classes/_client_apis_billingapi_.billingapi.md)

### Type aliases

* [GetDeveloperExchangeRate](_client_apis_billingapi_.md#getdeveloperexchangerate)
* [GetLatestLuobuDeveloperExchangeStatus](_client_apis_billingapi_.md#getlatestluobudeveloperexchangestatus)
* [GetLuobuDeveloperExchangeBalance](_client_apis_billingapi_.md#getluobudeveloperexchangebalance)
* [GetLuobuDeveloperExchangeEligibility](_client_apis_billingapi_.md#getluobudeveloperexchangeeligibility)
* [GetUserPayments](_client_apis_billingapi_.md#getuserpayments)
* [GetUserPaymentsOptions](_client_apis_billingapi_.md#getuserpaymentsoptions)
* [GetXsollaIFrameToken](_client_apis_billingapi_.md#getxsollaiframetoken)
* [GetXsollaIFrameTokenOptions](_client_apis_billingapi_.md#getxsollaiframetokenoptions)
* [IncrementCounterByAgent](_client_apis_billingapi_.md#incrementcounterbyagent)
* [IncrementCounterByAgentOptions](_client_apis_billingapi_.md#incrementcounterbyagentoptions)
* [PurchaseAmazonProduct](_client_apis_billingapi_.md#purchaseamazonproduct)
* [PurchaseAmazonProductOptions](_client_apis_billingapi_.md#purchaseamazonproductoptions)
* [PurchaseAppleProduct](_client_apis_billingapi_.md#purchaseappleproduct)
* [PurchaseAppleProductOptions](_client_apis_billingapi_.md#purchaseappleproductoptions)
* [PurchaseGoogleProduct](_client_apis_billingapi_.md#purchasegoogleproduct)
* [PurchaseGoogleProductOptions](_client_apis_billingapi_.md#purchasegoogleproductoptions)
* [RedeemDigitalCode](_client_apis_billingapi_.md#redeemdigitalcode)
* [RedeemDigitalCodeOptions](_client_apis_billingapi_.md#redeemdigitalcodeoptions)
* [RedeemGameCard](_client_apis_billingapi_.md#redeemgamecard)
* [RedeemGameCardOptions](_client_apis_billingapi_.md#redeemgamecardoptions)
* [RedeemPromoCode](_client_apis_billingapi_.md#redeempromocode)
* [RedeemPromoCodeOptions](_client_apis_billingapi_.md#redeempromocodeoptions)
* [ReverseGameCard](_client_apis_billingapi_.md#reversegamecard)
* [ReverseGameCardOptions](_client_apis_billingapi_.md#reversegamecardoptions)
* [SendXsollaWebhook](_client_apis_billingapi_.md#sendxsollawebhook)
* [SendXsollaWebhookOptions](_client_apis_billingapi_.md#sendxsollawebhookoptions)
* [SubmitDeveloperExchange](_client_apis_billingapi_.md#submitdeveloperexchange)
* [SubmitDeveloperExchangeOptions](_client_apis_billingapi_.md#submitdeveloperexchangeoptions)
* [SubmitLuobuDeveloperExchange](_client_apis_billingapi_.md#submitluobudeveloperexchange)
* [SubmitLuobuDeveloperExchangeOptions](_client_apis_billingapi_.md#submitluobudeveloperexchangeoptions)
* [ValidateAmazonProduct](_client_apis_billingapi_.md#validateamazonproduct)
* [ValidateAmazonProductOptions](_client_apis_billingapi_.md#validateamazonproductoptions)
* [ValidateAppleProduct](_client_apis_billingapi_.md#validateappleproduct)
* [ValidateAppleProductOptions](_client_apis_billingapi_.md#validateappleproductoptions)
* [ValidateGoogleProduct](_client_apis_billingapi_.md#validategoogleproduct)
* [ValidateGoogleProductOptions](_client_apis_billingapi_.md#validategoogleproductoptions)

## Type aliases

### <a id="getdeveloperexchangerate" name="getdeveloperexchangerate"></a>  GetDeveloperExchangeRate

Ƭ **GetDeveloperExchangeRate**: *object*

#### Type declaration:

* **currency-code**: *string*

* **rate**: *number*

___

### <a id="getlatestluobudeveloperexchangestatus" name="getlatestluobudeveloperexchangestatus"></a>  GetLatestLuobuDeveloperExchangeStatus

Ƭ **GetLatestLuobuDeveloperExchangeStatus**: *object*

#### Type declaration:

* **amount**? : *undefined | number*

* **date**? : *undefined | string*

* **status**? : *undefined | string*

___

### <a id="getluobudeveloperexchangebalance" name="getluobudeveloperexchangebalance"></a>  GetLuobuDeveloperExchangeBalance

Ƭ **GetLuobuDeveloperExchangeBalance**: *object*

#### Type declaration:

* **amount**: *number*

___

### <a id="getluobudeveloperexchangeeligibility" name="getluobudeveloperexchangeeligibility"></a>  GetLuobuDeveloperExchangeEligibility

Ƭ **GetLuobuDeveloperExchangeEligibility**: *object*

#### Type declaration:

* **eligibility**? : *"Eligible" | string*

* **errors**? : *undefined | object*

___

### <a id="getuserpayments" name="getuserpayments"></a>  GetUserPayments

Ƭ **GetUserPayments**: *object*

#### Type declaration:

* **data**(): *object*

  * **cardNumber**: *string*

  * **creditCardType**: *string*

  * **money**(): *object*

    * **Amount**: *number*

    * **Currency**(): *object*

      * **CurrencyName**: *string*

      * **CurrencySymbol**: *string*

      * **CurrencyType**: *string*

      * **Id**: *number*

    * **USDAmount**: *number*

  * **paymentDate**: *string*

  * **paymentProviderType**: *"AppleAppStore"*

  * **products**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getuserpaymentsoptions" name="getuserpaymentsoptions"></a>  GetUserPaymentsOptions

Ƭ **GetUserPaymentsOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

___

### <a id="getxsollaiframetoken" name="getxsollaiframetoken"></a>  GetXsollaIFrameToken

Ƭ **GetXsollaIFrameToken**: *object*

#### Type declaration:

* **message**: *string*

* **success**: *boolean*

* **token**: *string*

___

### <a id="getxsollaiframetokenoptions" name="getxsollaiframetokenoptions"></a>  GetXsollaIFrameTokenOptions

Ƭ **GetXsollaIFrameTokenOptions**: *object*

#### Type declaration:

* **mainProductId**: *number*

* **paymentProviderType**: *string*

* **upsellProductId**: *number*

* **verifiedEmailOrPhone**: *boolean*

___

### <a id="incrementcounterbyagent" name="incrementcounterbyagent"></a>  IncrementCounterByAgent

Ƭ **IncrementCounterByAgent**: *unknown*

___

### <a id="incrementcounterbyagentoptions" name="incrementcounterbyagentoptions"></a>  IncrementCounterByAgentOptions

Ƭ **IncrementCounterByAgentOptions**: *object*

#### Type declaration:

* **counterPrefix**: *string*

___

### <a id="purchaseamazonproduct" name="purchaseamazonproduct"></a>  PurchaseAmazonProduct

Ƭ **PurchaseAmazonProduct**: *object*

#### Type declaration:

___

### <a id="purchaseamazonproductoptions" name="purchaseamazonproductoptions"></a>  PurchaseAmazonProductOptions

Ƭ **PurchaseAmazonProductOptions**: *object*

#### Type declaration:

* **amazonUserId**: *string*

* **isRetry**: *boolean*

* **receiptId**: *string*

___

### <a id="purchaseappleproduct" name="purchaseappleproduct"></a>  PurchaseAppleProduct

Ƭ **PurchaseAppleProduct**: *[PurchaseAmazonProduct](_client_apis_billingapi_.md#purchaseamazonproduct)*

___

### <a id="purchaseappleproductoptions" name="purchaseappleproductoptions"></a>  PurchaseAppleProductOptions

Ƭ **PurchaseAppleProductOptions**: *[PurchaseAmazonProductOptions](_client_apis_billingapi_.md#purchaseamazonproductoptions)*

___

### <a id="purchasegoogleproduct" name="purchasegoogleproduct"></a>  PurchaseGoogleProduct

Ƭ **PurchaseGoogleProduct**: *object*

#### Type declaration:

___

### <a id="purchasegoogleproductoptions" name="purchasegoogleproductoptions"></a>  PurchaseGoogleProductOptions

Ƭ **PurchaseGoogleProductOptions**: *object*

#### Type declaration:

* **isRetry**: *boolean*

* **orderId**: *string*

* **packageName**: *string*

* **productId**: *string*

* **token**: *string*

___

### <a id="redeemdigitalcode" name="redeemdigitalcode"></a>  RedeemDigitalCode

Ƭ **RedeemDigitalCode**: *object*

#### Type declaration:

___

### <a id="redeemdigitalcodeoptions" name="redeemdigitalcodeoptions"></a>  RedeemDigitalCodeOptions

Ƭ **RedeemDigitalCodeOptions**: *object*

#### Type declaration:

* **redemptionCode**: *string*

___

### <a id="redeemgamecard" name="redeemgamecard"></a>  RedeemGameCard

Ƭ **RedeemGameCard**: *object*

#### Type declaration:

* **balance**: *string*

* **bonusMsg**: *string*

* **error**: *string*

* **errorMsg**: *string*

* **successMsg**: *string*

* **successSubText**: *string*

___

### <a id="redeemgamecardoptions" name="redeemgamecardoptions"></a>  RedeemGameCardOptions

Ƭ **RedeemGameCardOptions**: *object*

#### Type declaration:

* **captchaProvider**: *"PROVIDER_ARKOSELABS" | string*

* **captchaToken**: *string*

* **pinCode**: *string*

___

### <a id="redeempromocode" name="redeempromocode"></a>  RedeemPromoCode

Ƭ **RedeemPromoCode**: *object*

#### Type declaration:

* **errorMsg**: *string*

* **success**: *boolean*

* **successMsg**: *string*

___

### <a id="redeempromocodeoptions" name="redeempromocodeoptions"></a>  RedeemPromoCodeOptions

Ƭ **RedeemPromoCodeOptions**: *object*

#### Type declaration:

* **code**: *string*

___

### <a id="reversegamecard" name="reversegamecard"></a>  ReverseGameCard

Ƭ **ReverseGameCard**: *object*

#### Type declaration:

___

### <a id="reversegamecardoptions" name="reversegamecardoptions"></a>  ReverseGameCardOptions

Ƭ **ReverseGameCardOptions**: *object*

#### Type declaration:

* **PinCode**: *string*

* **UserId**: *number*

___

### <a id="sendxsollawebhook" name="sendxsollawebhook"></a>  SendXsollaWebhook

Ƭ **SendXsollaWebhook**: *unknown*

___

### <a id="sendxsollawebhookoptions" name="sendxsollawebhookoptions"></a>  SendXsollaWebhookOptions

Ƭ **SendXsollaWebhookOptions**: *unknown*

___

### <a id="submitdeveloperexchange" name="submitdeveloperexchange"></a>  SubmitDeveloperExchange

Ƭ **SubmitDeveloperExchange**: *object*

#### Type declaration:

___

### <a id="submitdeveloperexchangeoptions" name="submitdeveloperexchangeoptions"></a>  SubmitDeveloperExchangeOptions

Ƭ **SubmitDeveloperExchangeOptions**: *object*

#### Type declaration:

* **emailAddress**: *string*

* **firstName**: *string*

* **lastName**: *string*

* **password**: *string*

* **robuxAmount**: *number*

___

### <a id="submitluobudeveloperexchange" name="submitluobudeveloperexchange"></a>  SubmitLuobuDeveloperExchange

Ƭ **SubmitLuobuDeveloperExchange**: *object*

#### Type declaration:

___

### <a id="submitluobudeveloperexchangeoptions" name="submitluobudeveloperexchangeoptions"></a>  SubmitLuobuDeveloperExchangeOptions

Ƭ **SubmitLuobuDeveloperExchangeOptions**: *object*

#### Type declaration:

* **amount**: *number*

* **email**: *string*

* **firstName**: *string*

* **lastName**: *string*

___

### <a id="validateamazonproduct" name="validateamazonproduct"></a>  ValidateAmazonProduct

Ƭ **ValidateAmazonProduct**: *object*

#### Type declaration:

___

### <a id="validateamazonproductoptions" name="validateamazonproductoptions"></a>  ValidateAmazonProductOptions

Ƭ **ValidateAmazonProductOptions**: *object*

#### Type declaration:

* **currency**: *string*

* **productId**: *string*

___

### <a id="validateappleproduct" name="validateappleproduct"></a>  ValidateAppleProduct

Ƭ **ValidateAppleProduct**: *[ValidateAmazonProduct](_client_apis_billingapi_.md#validateamazonproduct)*

___

### <a id="validateappleproductoptions" name="validateappleproductoptions"></a>  ValidateAppleProductOptions

Ƭ **ValidateAppleProductOptions**: *[ValidateAmazonProductOptions](_client_apis_billingapi_.md#validateamazonproductoptions)*

___

### <a id="validategoogleproduct" name="validategoogleproduct"></a>  ValidateGoogleProduct

Ƭ **ValidateGoogleProduct**: *[ValidateAmazonProduct](_client_apis_billingapi_.md#validateamazonproduct)*

___

### <a id="validategoogleproductoptions" name="validategoogleproductoptions"></a>  ValidateGoogleProductOptions

Ƭ **ValidateGoogleProductOptions**: *[ValidateAmazonProductOptions](_client_apis_billingapi_.md#validateamazonproductoptions)*
