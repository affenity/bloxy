
# Module: "client/apis/AdConfigurationAPI"

## Index

### Classes

* [AdConfigurationAPI](../classes/_client_apis_adconfigurationapi_.adconfigurationapi.md)

### Type aliases

* [CreateAd](_client_apis_adconfigurationapi_.md#createad)
* [CreateAdOptions](_client_apis_adconfigurationapi_.md#createadoptions)
* [GetCreateAdMetaData](_client_apis_adconfigurationapi_.md#getcreateadmetadata)
* [GetSponsoredGames](_client_apis_adconfigurationapi_.md#getsponsoredgames)
* [GetSponsoredGamesOptions](_client_apis_adconfigurationapi_.md#getsponsoredgamesoptions)
* [RunAd](_client_apis_adconfigurationapi_.md#runad)
* [RunAdOptions](_client_apis_adconfigurationapi_.md#runadoptions)
* [StopAd](_client_apis_adconfigurationapi_.md#stopad)
* [StopAdOptions](_client_apis_adconfigurationapi_.md#stopadoptions)

## Type aliases

### <a id="createad" name="createad"></a>  CreateAd

Ƭ **CreateAd**: *unknown*

___

### <a id="createadoptions" name="createadoptions"></a>  CreateAdOptions

Ƭ **CreateAdOptions**: *unknown*

___

### <a id="getcreateadmetadata" name="getcreateadmetadata"></a>  GetCreateAdMetaData

Ƭ **GetCreateAdMetaData**: *object*

#### Type declaration:

* **areNativeAdsForConsoleEnabled**: *boolean*

* **areNativeAdsForDesktopEnabled**: *boolean*

* **areNativeAdsForPhoneEnabled**: *boolean*

* **areNativeAdsForTabletEnabled**: *boolean*

* **universeCreatorTargetId**: *number*

* **universeCreatorType**: *string*

* **universeId**: *number*

___

### <a id="getsponsoredgames" name="getsponsoredgames"></a>  GetSponsoredGames

Ƭ **GetSponsoredGames**: *object*

#### Type declaration:

* **creatorType**: *"User" | "Group"*

* **isErroneous**: *boolean*

* **minimumBidAmount**: *number*

* **nextPageStartRowIndex**: *number*

* **sponsoredGames**(): *object*

  * **adId**: *number*

  * **campaign**(): *object*

    * **bid**: *number*

    * **clicks**: *number*

    * **impressions**: *0*

    * **isRunning**: *boolean*

  * **costPerImpressionEstimate**: *number*

  * **gameIconUrl**: *string*

  * **targetDeviceType**: *string*

  * **totalBid**: *number*

  * **totalClicks**: *number*

  * **totalImpressions**: *number*

  * **universeName**: *string*

  * **universeRootPlaceId**: *number*

___

### <a id="getsponsoredgamesoptions" name="getsponsoredgamesoptions"></a>  GetSponsoredGamesOptions

Ƭ **GetSponsoredGamesOptions**: *object*

#### Type declaration:

* **count**? : *undefined | number*

* **groupId**? : *undefined | number*

* **startRowIndex**? : *undefined | number*

___

### <a id="runad" name="runad"></a>  RunAd

Ƭ **RunAd**: *unknown*

___

### <a id="runadoptions" name="runadoptions"></a>  RunAdOptions

Ƭ **RunAdOptions**: *unknown*

___

### <a id="stopad" name="stopad"></a>  StopAd

Ƭ **StopAd**: *unknown*

___

### <a id="stopadoptions" name="stopadoptions"></a>  StopAdOptions

Ƭ **StopAdOptions**: *unknown*
