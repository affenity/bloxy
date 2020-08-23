
# Class: BillingAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **BillingAPI**

## Index

### Constructors

* [constructor](_client_apis_billingapi_.billingapi.md#constructor)

### Properties

* [client](_client_apis_billingapi_.billingapi.md#client)
* [options](_client_apis_billingapi_.billingapi.md#options)

### Methods

* [getDeveloperExchangeRate](_client_apis_billingapi_.billingapi.md#getdeveloperexchangerate)
* [getLuobuDeveloperExchangeBalance](_client_apis_billingapi_.billingapi.md#getluobudeveloperexchangebalance)
* [getLuobuDeveloperExchangeEligibility](_client_apis_billingapi_.billingapi.md#getluobudeveloperexchangeeligibility)
* [getLuobuDeveloperExchangeLatestRequestStatus](_client_apis_billingapi_.billingapi.md#getluobudeveloperexchangelatestrequeststatus)
* [getUserPaymentsHistory](_client_apis_billingapi_.billingapi.md#getuserpaymentshistory)
* [getXsollaIFrameToken](_client_apis_billingapi_.billingapi.md#getxsollaiframetoken)
* [incrementCounterByAgent](_client_apis_billingapi_.billingapi.md#incrementcounterbyagent)
* [purchaseAmazonProduct](_client_apis_billingapi_.billingapi.md#purchaseamazonproduct)
* [purchaseAppleProduct](_client_apis_billingapi_.billingapi.md#purchaseappleproduct)
* [purchaseGoogleProduct](_client_apis_billingapi_.billingapi.md#purchasegoogleproduct)
* [redeemDigitalCode](_client_apis_billingapi_.billingapi.md#redeemdigitalcode)
* [redeemGameCard](_client_apis_billingapi_.billingapi.md#redeemgamecard)
* [redeemPromoCode](_client_apis_billingapi_.billingapi.md#redeempromocode)
* [request](_client_apis_billingapi_.billingapi.md#request)
* [reverseGameCard](_client_apis_billingapi_.billingapi.md#reversegamecard)
* [sendXsollaWebhook](_client_apis_billingapi_.billingapi.md#sendxsollawebhook)
* [submitDeveloperExchange](_client_apis_billingapi_.billingapi.md#submitdeveloperexchange)
* [submitLuobuDeveloperExchange](_client_apis_billingapi_.billingapi.md#submitluobudeveloperexchange)
* [validateAmazonProduct](_client_apis_billingapi_.billingapi.md#validateamazonproduct)
* [validateAppleProduct](_client_apis_billingapi_.billingapi.md#validateappleproduct)
* [validateGoogleProduct](_client_apis_billingapi_.billingapi.md#validategoogleproduct)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new BillingAPI**(`client`: [Client](_client_client_.client.md)): *[BillingAPI](_client_apis_billingapi_.billingapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[BillingAPI](_client_apis_billingapi_.billingapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getdeveloperexchangerate" name="getdeveloperexchangerate"></a>  getDeveloperExchangeRate

▸ **getDeveloperExchangeRate**(): *Promise‹[GetDeveloperExchangeRate](../modules/_client_apis_billingapi_.md#getdeveloperexchangerate)›*

**Returns:** *Promise‹[GetDeveloperExchangeRate](../modules/_client_apis_billingapi_.md#getdeveloperexchangerate)›*

___

### <a id="getluobudeveloperexchangebalance" name="getluobudeveloperexchangebalance"></a>  getLuobuDeveloperExchangeBalance

▸ **getLuobuDeveloperExchangeBalance**(): *Promise‹[GetLuobuDeveloperExchangeBalance](../modules/_client_apis_billingapi_.md#getluobudeveloperexchangebalance)›*

**Returns:** *Promise‹[GetLuobuDeveloperExchangeBalance](../modules/_client_apis_billingapi_.md#getluobudeveloperexchangebalance)›*

___

### <a id="getluobudeveloperexchangeeligibility" name="getluobudeveloperexchangeeligibility"></a>  getLuobuDeveloperExchangeEligibility

▸ **getLuobuDeveloperExchangeEligibility**(): *Promise‹[GetLuobuDeveloperExchangeEligibility](../modules/_client_apis_billingapi_.md#getluobudeveloperexchangeeligibility)›*

**Returns:** *Promise‹[GetLuobuDeveloperExchangeEligibility](../modules/_client_apis_billingapi_.md#getluobudeveloperexchangeeligibility)›*

___

### <a id="getluobudeveloperexchangelatestrequeststatus" name="getluobudeveloperexchangelatestrequeststatus"></a>  getLuobuDeveloperExchangeLatestRequestStatus

▸ **getLuobuDeveloperExchangeLatestRequestStatus**(): *Promise‹[GetLatestLuobuDeveloperExchangeStatus](../modules/_client_apis_billingapi_.md#getlatestluobudeveloperexchangestatus)›*

**Returns:** *Promise‹[GetLatestLuobuDeveloperExchangeStatus](../modules/_client_apis_billingapi_.md#getlatestluobudeveloperexchangestatus)›*

___

### <a id="getuserpaymentshistory" name="getuserpaymentshistory"></a>  getUserPaymentsHistory

▸ **getUserPaymentsHistory**(`options`: [GetUserPaymentsOptions](../modules/_client_apis_billingapi_.md#getuserpaymentsoptions)): *Promise‹[GetUserPayments](../modules/_client_apis_billingapi_.md#getuserpayments)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserPaymentsOptions](../modules/_client_apis_billingapi_.md#getuserpaymentsoptions) |

**Returns:** *Promise‹[GetUserPayments](../modules/_client_apis_billingapi_.md#getuserpayments)›*

___

### <a id="getxsollaiframetoken" name="getxsollaiframetoken"></a>  getXsollaIFrameToken

▸ **getXsollaIFrameToken**(`options`: [GetXsollaIFrameTokenOptions](../modules/_client_apis_billingapi_.md#getxsollaiframetokenoptions)): *Promise‹[GetXsollaIFrameToken](../modules/_client_apis_billingapi_.md#getxsollaiframetoken)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetXsollaIFrameTokenOptions](../modules/_client_apis_billingapi_.md#getxsollaiframetokenoptions) |

**Returns:** *Promise‹[GetXsollaIFrameToken](../modules/_client_apis_billingapi_.md#getxsollaiframetoken)›*

___

### <a id="incrementcounterbyagent" name="incrementcounterbyagent"></a>  incrementCounterByAgent

▸ **incrementCounterByAgent**(`options`: [IncrementCounterByAgentOptions](../modules/_client_apis_billingapi_.md#incrementcounterbyagentoptions)): *Promise‹[IncrementCounterByAgent](../modules/_client_apis_billingapi_.md#incrementcounterbyagent)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [IncrementCounterByAgentOptions](../modules/_client_apis_billingapi_.md#incrementcounterbyagentoptions) |

**Returns:** *Promise‹[IncrementCounterByAgent](../modules/_client_apis_billingapi_.md#incrementcounterbyagent)›*

___

### <a id="purchaseamazonproduct" name="purchaseamazonproduct"></a>  purchaseAmazonProduct

▸ **purchaseAmazonProduct**(`options`: [PurchaseAmazonProductOptions](../modules/_client_apis_billingapi_.md#purchaseamazonproductoptions)): *Promise‹[PurchaseAmazonProduct](../modules/_client_apis_billingapi_.md#purchaseamazonproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PurchaseAmazonProductOptions](../modules/_client_apis_billingapi_.md#purchaseamazonproductoptions) |

**Returns:** *Promise‹[PurchaseAmazonProduct](../modules/_client_apis_billingapi_.md#purchaseamazonproduct)›*

___

### <a id="purchaseappleproduct" name="purchaseappleproduct"></a>  purchaseAppleProduct

▸ **purchaseAppleProduct**(`options`: [PurchaseAppleProductOptions](../modules/_client_apis_billingapi_.md#purchaseappleproductoptions)): *Promise‹[PurchaseAppleProduct](../modules/_client_apis_billingapi_.md#purchaseappleproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PurchaseAppleProductOptions](../modules/_client_apis_billingapi_.md#purchaseappleproductoptions) |

**Returns:** *Promise‹[PurchaseAppleProduct](../modules/_client_apis_billingapi_.md#purchaseappleproduct)›*

___

### <a id="purchasegoogleproduct" name="purchasegoogleproduct"></a>  purchaseGoogleProduct

▸ **purchaseGoogleProduct**(`options`: [PurchaseGoogleProductOptions](../modules/_client_apis_billingapi_.md#purchasegoogleproductoptions)): *Promise‹[PurchaseGoogleProduct](../modules/_client_apis_billingapi_.md#purchasegoogleproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PurchaseGoogleProductOptions](../modules/_client_apis_billingapi_.md#purchasegoogleproductoptions) |

**Returns:** *Promise‹[PurchaseGoogleProduct](../modules/_client_apis_billingapi_.md#purchasegoogleproduct)›*

___

### <a id="redeemdigitalcode" name="redeemdigitalcode"></a>  redeemDigitalCode

▸ **redeemDigitalCode**(`options`: [RedeemDigitalCodeOptions](../modules/_client_apis_billingapi_.md#redeemdigitalcodeoptions)): *Promise‹[RedeemDigitalCode](../modules/_client_apis_billingapi_.md#redeemdigitalcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RedeemDigitalCodeOptions](../modules/_client_apis_billingapi_.md#redeemdigitalcodeoptions) |

**Returns:** *Promise‹[RedeemDigitalCode](../modules/_client_apis_billingapi_.md#redeemdigitalcode)›*

___

### <a id="redeemgamecard" name="redeemgamecard"></a>  redeemGameCard

▸ **redeemGameCard**(`options`: [RedeemGameCardOptions](../modules/_client_apis_billingapi_.md#redeemgamecardoptions)): *Promise‹[RedeemGameCard](../modules/_client_apis_billingapi_.md#redeemgamecard)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RedeemGameCardOptions](../modules/_client_apis_billingapi_.md#redeemgamecardoptions) |

**Returns:** *Promise‹[RedeemGameCard](../modules/_client_apis_billingapi_.md#redeemgamecard)›*

___

### <a id="redeempromocode" name="redeempromocode"></a>  redeemPromoCode

▸ **redeemPromoCode**(`options`: [RedeemPromoCodeOptions](../modules/_client_apis_billingapi_.md#redeempromocodeoptions)): *Promise‹[RedeemPromoCode](../modules/_client_apis_billingapi_.md#redeempromocode)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [RedeemPromoCodeOptions](../modules/_client_apis_billingapi_.md#redeempromocodeoptions) |

**Returns:** *Promise‹[RedeemPromoCode](../modules/_client_apis_billingapi_.md#redeempromocode)›*

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

### <a id="reversegamecard" name="reversegamecard"></a>  reverseGameCard

▸ **reverseGameCard**(`options`: [ReverseGameCardOptions](../modules/_client_apis_billingapi_.md#reversegamecardoptions)): *Promise‹[ReverseGameCard](../modules/_client_apis_billingapi_.md#reversegamecard)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ReverseGameCardOptions](../modules/_client_apis_billingapi_.md#reversegamecardoptions) |

**Returns:** *Promise‹[ReverseGameCard](../modules/_client_apis_billingapi_.md#reversegamecard)›*

___

### <a id="sendxsollawebhook" name="sendxsollawebhook"></a>  sendXsollaWebhook

▸ **sendXsollaWebhook**(`options`: [SendXsollaWebhookOptions](../modules/_client_apis_billingapi_.md#sendxsollawebhookoptions)): *Promise‹[SendXsollaWebhook](../modules/_client_apis_billingapi_.md#sendxsollawebhook)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendXsollaWebhookOptions](../modules/_client_apis_billingapi_.md#sendxsollawebhookoptions) |

**Returns:** *Promise‹[SendXsollaWebhook](../modules/_client_apis_billingapi_.md#sendxsollawebhook)›*

___

### <a id="submitdeveloperexchange" name="submitdeveloperexchange"></a>  submitDeveloperExchange

▸ **submitDeveloperExchange**(`options`: [SubmitDeveloperExchangeOptions](../modules/_client_apis_billingapi_.md#submitdeveloperexchangeoptions)): *Promise‹[SubmitDeveloperExchange](../modules/_client_apis_billingapi_.md#submitdeveloperexchange)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SubmitDeveloperExchangeOptions](../modules/_client_apis_billingapi_.md#submitdeveloperexchangeoptions) |

**Returns:** *Promise‹[SubmitDeveloperExchange](../modules/_client_apis_billingapi_.md#submitdeveloperexchange)›*

___

### <a id="submitluobudeveloperexchange" name="submitluobudeveloperexchange"></a>  submitLuobuDeveloperExchange

▸ **submitLuobuDeveloperExchange**(`options`: [SubmitLuobuDeveloperExchangeOptions](../modules/_client_apis_billingapi_.md#submitluobudeveloperexchangeoptions)): *Promise‹[SubmitLuobuDeveloperExchange](../modules/_client_apis_billingapi_.md#submitluobudeveloperexchange)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SubmitLuobuDeveloperExchangeOptions](../modules/_client_apis_billingapi_.md#submitluobudeveloperexchangeoptions) |

**Returns:** *Promise‹[SubmitLuobuDeveloperExchange](../modules/_client_apis_billingapi_.md#submitluobudeveloperexchange)›*

___

### <a id="validateamazonproduct" name="validateamazonproduct"></a>  validateAmazonProduct

▸ **validateAmazonProduct**(`options`: [ValidateAmazonProductOptions](../modules/_client_apis_billingapi_.md#validateamazonproductoptions)): *Promise‹[ValidateAmazonProduct](../modules/_client_apis_billingapi_.md#validateamazonproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateAmazonProductOptions](../modules/_client_apis_billingapi_.md#validateamazonproductoptions) |

**Returns:** *Promise‹[ValidateAmazonProduct](../modules/_client_apis_billingapi_.md#validateamazonproduct)›*

___

### <a id="validateappleproduct" name="validateappleproduct"></a>  validateAppleProduct

▸ **validateAppleProduct**(`options`: [ValidateAppleProductOptions](../modules/_client_apis_billingapi_.md#validateappleproductoptions)): *Promise‹[ValidateAppleProduct](../modules/_client_apis_billingapi_.md#validateappleproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateAppleProductOptions](../modules/_client_apis_billingapi_.md#validateappleproductoptions) |

**Returns:** *Promise‹[ValidateAppleProduct](../modules/_client_apis_billingapi_.md#validateappleproduct)›*

___

### <a id="validategoogleproduct" name="validategoogleproduct"></a>  validateGoogleProduct

▸ **validateGoogleProduct**(`options`: [ValidateGoogleProductOptions](../modules/_client_apis_billingapi_.md#validategoogleproductoptions)): *Promise‹[ValidateGoogleProduct](../modules/_client_apis_billingapi_.md#validategoogleproduct)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateGoogleProductOptions](../modules/_client_apis_billingapi_.md#validategoogleproductoptions) |

**Returns:** *Promise‹[ValidateGoogleProduct](../modules/_client_apis_billingapi_.md#validategoogleproduct)›*
