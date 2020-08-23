
# Module: "client/apis/EconomyAPI"

## Index

### Classes

* [EconomyAPI](../classes/_client_apis_economyapi_.economyapi.md)

### Type aliases

* [GetAssetResaleData](_client_apis_economyapi_.md#getassetresaledata)
* [GetAssetResaleDataOptions](_client_apis_economyapi_.md#getassetresaledataoptions)
* [GetAssetResellers](_client_apis_economyapi_.md#getassetresellers)
* [GetAssetResellersOptions](_client_apis_economyapi_.md#getassetresellersoptions)
* [GetDeveloperExchangeAbility](_client_apis_economyapi_.md#getdeveloperexchangeability)
* [GetDeveloperExchangeHelp](_client_apis_economyapi_.md#getdeveloperexchangehelp)
* [GetDeveloperExchangeInfo](_client_apis_economyapi_.md#getdeveloperexchangeinfo)
* [GetDeveloperExchangeInfoOptions](_client_apis_economyapi_.md#getdeveloperexchangeinfooptions)
* [GetGroupCurrency](_client_apis_economyapi_.md#getgroupcurrency)
* [GetGroupCurrencyOptions](_client_apis_economyapi_.md#getgroupcurrencyoptions)
* [GetGroupRevenueSummaryInTimeFrame](_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)
* [GetGroupRevenueSummaryInTimeFrameOptions](_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframeoptions)
* [GetGroupTransactions](_client_apis_economyapi_.md#getgrouptransactions)
* [GetGroupTransactionsOptions](_client_apis_economyapi_.md#getgrouptransactionsoptions)
* [GetResaleTaxRate](_client_apis_economyapi_.md#getresaletaxrate)
* [GetSelfCurrency](_client_apis_economyapi_.md#getselfcurrency)
* [GetSelfCurrencyOptions](_client_apis_economyapi_.md#getselfcurrencyoptions)
* [GetSelfRevenueSummaryInTimeFrame](_client_apis_economyapi_.md#getselfrevenuesummaryintimeframe)
* [GetSelfRevenueSummaryInTimeFrameOptions](_client_apis_economyapi_.md#getselfrevenuesummaryintimeframeoptions)
* [GetSelfTransactions](_client_apis_economyapi_.md#getselftransactions)
* [GetSelfTransactionsOptions](_client_apis_economyapi_.md#getselftransactionsoptions)
* [GetUserResellableAssetCopies](_client_apis_economyapi_.md#getuserresellableassetcopies)
* [GetUserResellableAssetCopiesOptions](_client_apis_economyapi_.md#getuserresellableassetcopiesoptions)
* [SetAssetCopies](_client_apis_economyapi_.md#setassetcopies)
* [SetAssetCopiesOptions](_client_apis_economyapi_.md#setassetcopiesoptions)
* [SubmitDeveloperExchange](_client_apis_economyapi_.md#submitdeveloperexchange)
* [SubmitDeveloperExchangeOptions](_client_apis_economyapi_.md#submitdeveloperexchangeoptions)

## Type aliases

### <a id="getassetresaledata" name="getassetresaledata"></a>  GetAssetResaleData

Ƭ **GetAssetResaleData**: *object*

#### Type declaration:

* **assetStock**: *number*

* **numberRemaining**: *number*

* **originalPrice**: *number*

* **priceDataPoints**: *object[]*

* **recentAveragePrice**: *number*

* **sales**: *number*

* **volumeDataPoints**: *object[]*

___

### <a id="getassetresaledataoptions" name="getassetresaledataoptions"></a>  GetAssetResaleDataOptions

Ƭ **GetAssetResaleDataOptions**: *object*

#### Type declaration:

* **assetId**: *number*

___

### <a id="getassetresellers" name="getassetresellers"></a>  GetAssetResellers

Ƭ **GetAssetResellers**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getassetresellersoptions" name="getassetresellersoptions"></a>  GetAssetResellersOptions

Ƭ **GetAssetResellersOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

___

### <a id="getdeveloperexchangeability" name="getdeveloperexchangeability"></a>  GetDeveloperExchangeAbility

Ƭ **GetDeveloperExchangeAbility**: *object*

#### Type declaration:

* **canCashOut**: *boolean*

* **hasCashedOutThisMonth**: *boolean*

* **hasVerifiedEmail**: *boolean*

* **isUserBlackListed**: *boolean*

* **lastImbursementStatusIsValid**: *boolean*

* **meetsMinimumCashOutBalance**: *boolean*

* **meetsPremiumRequirement**: *boolean*

___

### <a id="getdeveloperexchangehelp" name="getdeveloperexchangehelp"></a>  GetDeveloperExchangeHelp

Ƭ **GetDeveloperExchangeHelp**: *unknown*

___

### <a id="getdeveloperexchangeinfo" name="getdeveloperexchangeinfo"></a>  GetDeveloperExchangeInfo

Ƭ **GetDeveloperExchangeInfo**: *object*

#### Type declaration:

* **canProceedToCashout**: *boolean*

* **conversionPercent**: *number*

* **currencyOperationErrorMessage**: *string*

* **emailIsVerified**: *boolean*

* **hasCurrencyOperationError**: *boolean*

* **isImbursementBlacklistUser**: *boolean*

* **lastImbursementStatus**: *string*

* **lastImbursementSubmissionDate**: *string*

* **maxRobuxCanCashOut**: *number*

* **meetsMembershipRequirements**: *boolean*

* **minRobuxToCashOut**: *number*

* **percentRobux**: *number*

* **showOnlyExchangeRates**: *boolean*

* **showProgressBar**: *boolean*

___

### <a id="getdeveloperexchangeinfooptions" name="getdeveloperexchangeinfooptions"></a>  GetDeveloperExchangeInfoOptions

Ƭ **GetDeveloperExchangeInfoOptions**: *object*

#### Type declaration:

* **fromDevExPage**: *boolean*

___

### <a id="getgroupcurrency" name="getgroupcurrency"></a>  GetGroupCurrency

Ƭ **GetGroupCurrency**: *object*

#### Type declaration:

* **robux**: *number*

___

### <a id="getgroupcurrencyoptions" name="getgroupcurrencyoptions"></a>  GetGroupCurrencyOptions

Ƭ **GetGroupCurrencyOptions**: *object*

#### Type declaration:

* **groupId**: *number*

___

### <a id="getgrouprevenuesummaryintimeframe" name="getgrouprevenuesummaryintimeframe"></a>  GetGroupRevenueSummaryInTimeFrame

Ƭ **GetGroupRevenueSummaryInTimeFrame**: *object*

#### Type declaration:

* **groupPayoutRobux**: *number*

* **itemSaleRobux**: *number*

* **pendingRobux**: *number*

* **purchasedRoblox**: *number*

* **recurringRobuxStipend**: *number*

* **tradeSystemRobux**: *number*

___

### <a id="getgrouprevenuesummaryintimeframeoptions" name="getgrouprevenuesummaryintimeframeoptions"></a>  GetGroupRevenueSummaryInTimeFrameOptions

Ƭ **GetGroupRevenueSummaryInTimeFrameOptions**: *object*

#### Type declaration:

* **groupId**: *number*

* **timeFrame**: *"Day" | "Week" | "Month" | "Year"*

___

### <a id="getgrouptransactions" name="getgrouptransactions"></a>  GetGroupTransactions

Ƭ **GetGroupTransactions**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="getgrouptransactionsoptions" name="getgrouptransactionsoptions"></a>  GetGroupTransactionsOptions

Ƭ **GetGroupTransactionsOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **groupId**: *number*

* **limit**? : *10 | 25 | 50 | 100*

* **transactionType**: *"Sale" | "Purchase" | "AffiliateSale" | "DevEx" | "GroupPayout" | "AdImpressionPayout"*

___

### <a id="getresaletaxrate" name="getresaletaxrate"></a>  GetResaleTaxRate

Ƭ **GetResaleTaxRate**: *object*

#### Type declaration:

* **minimumFee**: *number*

* **taxRate**: *number*

___

### <a id="getselfcurrency" name="getselfcurrency"></a>  GetSelfCurrency

Ƭ **GetSelfCurrency**: *object*

#### Type declaration:

* **robux**: *number*

___

### <a id="getselfcurrencyoptions" name="getselfcurrencyoptions"></a>  GetSelfCurrencyOptions

Ƭ **GetSelfCurrencyOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getselfrevenuesummaryintimeframe" name="getselfrevenuesummaryintimeframe"></a>  GetSelfRevenueSummaryInTimeFrame

Ƭ **GetSelfRevenueSummaryInTimeFrame**: *[GetGroupRevenueSummaryInTimeFrame](_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)*

___

### <a id="getselfrevenuesummaryintimeframeoptions" name="getselfrevenuesummaryintimeframeoptions"></a>  GetSelfRevenueSummaryInTimeFrameOptions

Ƭ **GetSelfRevenueSummaryInTimeFrameOptions**: *Omit‹[GetGroupRevenueSummaryInTimeFrameOptions](_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframeoptions), "groupId"› & object*

___

### <a id="getselftransactions" name="getselftransactions"></a>  GetSelfTransactions

Ƭ **GetSelfTransactions**: *[GetGroupTransactions](_client_apis_economyapi_.md#getgrouptransactions)*

___

### <a id="getselftransactionsoptions" name="getselftransactionsoptions"></a>  GetSelfTransactionsOptions

Ƭ **GetSelfTransactionsOptions**: *Omit‹[GetGroupTransactionsOptions](_client_apis_economyapi_.md#getgrouptransactionsoptions), "groupId"› & object*

___

### <a id="getuserresellableassetcopies" name="getuserresellableassetcopies"></a>  GetUserResellableAssetCopies

Ƭ **GetUserResellableAssetCopies**: *object*

#### Type declaration:

* **data**: *GetAssetResellers["data"]*

___

### <a id="getuserresellableassetcopiesoptions" name="getuserresellableassetcopiesoptions"></a>  GetUserResellableAssetCopiesOptions

Ƭ **GetUserResellableAssetCopiesOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **userId**: *number*

___

### <a id="setassetcopies" name="setassetcopies"></a>  SetAssetCopies

Ƭ **SetAssetCopies**: *object*

#### Type declaration:

___

### <a id="setassetcopiesoptions" name="setassetcopiesoptions"></a>  SetAssetCopiesOptions

Ƭ **SetAssetCopiesOptions**: *object*

#### Type declaration:

* **assetId**: *number*

* **price**: *number*

* **userAssetId**: *number*

___

### <a id="submitdeveloperexchange" name="submitdeveloperexchange"></a>  SubmitDeveloperExchange

Ƭ **SubmitDeveloperExchange**: *object*

#### Type declaration:

* **cashOutAbility**(): *object*

  * **canCashOut**: *boolean*

  * **hasCashedOutThisMonth**: *boolean*

  * **hasVerifiedEmail**: *boolean*

  * **isUserBlcakListed**: *boolean*

  * **lastImbursementStatusIsValid**: *boolean*

  * **meetsMinimumCashOutBalance**: *boolean*

  * **meetsPremiumRequirement**: *boolean*

* **errors**: *unknown*

* **submitted**: *boolean*

___

### <a id="submitdeveloperexchangeoptions" name="submitdeveloperexchangeoptions"></a>  SubmitDeveloperExchangeOptions

Ƭ **SubmitDeveloperExchangeOptions**: *BillingAPISubmitDeveloperExchangeOptions*
