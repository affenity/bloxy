
# Module: "client/apis/TradesAPI"

## Index

### Classes

* [TradesAPI](../classes/_client_apis_tradesapi_.tradesapi.md)

### Type aliases

* [AcceptTrade](_client_apis_tradesapi_.md#accepttrade)
* [AcceptTradeOptions](_client_apis_tradesapi_.md#accepttradeoptions)
* [CanSelfTradeWithUser](_client_apis_tradesapi_.md#canselftradewithuser)
* [CanSelfTradeWithUserOptions](_client_apis_tradesapi_.md#canselftradewithuseroptions)
* [CounterTrade](_client_apis_tradesapi_.md#countertrade)
* [CounterTradeOptions](_client_apis_tradesapi_.md#countertradeoptions)
* [DeclineTrade](_client_apis_tradesapi_.md#declinetrade)
* [DeclineTradeOptions](_client_apis_tradesapi_.md#declinetradeoptions)
* [GetTrade](_client_apis_tradesapi_.md#gettrade)
* [GetTradeOptions](_client_apis_tradesapi_.md#gettradeoptions)
* [GetTradesByStatusType](_client_apis_tradesapi_.md#gettradesbystatustype)
* [GetTradesByStatusTypeOptions](_client_apis_tradesapi_.md#gettradesbystatustypeoptions)
* [GetTradesCountByStatusType](_client_apis_tradesapi_.md#gettradescountbystatustype)
* [GetTradesCountByStatusTypeOptions](_client_apis_tradesapi_.md#gettradescountbystatustypeoptions)
* [GetTradesMetaData](_client_apis_tradesapi_.md#gettradesmetadata)
* [SendTrade](_client_apis_tradesapi_.md#sendtrade)
* [SendTradeOptions](_client_apis_tradesapi_.md#sendtradeoptions)

## Type aliases

### <a id="accepttrade" name="accepttrade"></a>  AcceptTrade

Ƭ **AcceptTrade**: *object*

#### Type declaration:

___

### <a id="accepttradeoptions" name="accepttradeoptions"></a>  AcceptTradeOptions

Ƭ **AcceptTradeOptions**: *object*

#### Type declaration:

* **tradeId**: *number*

___

### <a id="canselftradewithuser" name="canselftradewithuser"></a>  CanSelfTradeWithUser

Ƭ **CanSelfTradeWithUser**: *object*

#### Type declaration:

* **canTrade**: *boolean*

* **status**: *string*

___

### <a id="canselftradewithuseroptions" name="canselftradewithuseroptions"></a>  CanSelfTradeWithUserOptions

Ƭ **CanSelfTradeWithUserOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="countertrade" name="countertrade"></a>  CounterTrade

Ƭ **CounterTrade**: *object*

#### Type declaration:

* **id**: *number*

___

### <a id="countertradeoptions" name="countertradeoptions"></a>  CounterTradeOptions

Ƭ **CounterTradeOptions**: *object*

#### Type declaration:

* **offers**: *object[]*

* **tradeId**: *number*

___

### <a id="declinetrade" name="declinetrade"></a>  DeclineTrade

Ƭ **DeclineTrade**: *object*

#### Type declaration:

___

### <a id="declinetradeoptions" name="declinetradeoptions"></a>  DeclineTradeOptions

Ƭ **DeclineTradeOptions**: *object*

#### Type declaration:

* **tradeId**: *number*

___

### <a id="gettrade" name="gettrade"></a>  GetTrade

Ƭ **GetTrade**: *object*

#### Type declaration:

* **created**: *string*

* **expiration**: *string*

* **id**: *number*

* **isActive**: *boolean*

* **offers**: *object[]*

* **status**: *string*

* **user**(): *object*

  * **displayName**: *string*

  * **id**: *number*

  * **name**: *string*

___

### <a id="gettradeoptions" name="gettradeoptions"></a>  GetTradeOptions

Ƭ **GetTradeOptions**: *object*

#### Type declaration:

* **tradeId**: *number*

___

### <a id="gettradesbystatustype" name="gettradesbystatustype"></a>  GetTradesByStatusType

Ƭ **GetTradesByStatusType**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="gettradesbystatustypeoptions" name="gettradesbystatustypeoptions"></a>  GetTradesByStatusTypeOptions

Ƭ **GetTradesByStatusTypeOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **limit**? : *10 | 25 | 50 | 100*

* **sortOrder**? : *"Asc" | "Desc"*

* **tradeStatusType**: *"Inbound" | "Outbound" | "Completed" | "Inactive"*

___

### <a id="gettradescountbystatustype" name="gettradescountbystatustype"></a>  GetTradesCountByStatusType

Ƭ **GetTradesCountByStatusType**: *object*

#### Type declaration:

* **count**: *number*

___

### <a id="gettradescountbystatustypeoptions" name="gettradescountbystatustypeoptions"></a>  GetTradesCountByStatusTypeOptions

Ƭ **GetTradesCountByStatusTypeOptions**: *object*

#### Type declaration:

* **tradeStatusType**: *GetTradesByStatusTypeOptions["tradeStatusType"]*

___

### <a id="gettradesmetadata" name="gettradesmetadata"></a>  GetTradesMetaData

Ƭ **GetTradesMetaData**: *object*

#### Type declaration:

* **maxItemsPerSide**: *number*

* **minValueRatio**: *number*

* **tradeSystemMaxRobuxPercent**: *number*

* **tradeSystemRobuxFee**: *number*

___

### <a id="sendtrade" name="sendtrade"></a>  SendTrade

Ƭ **SendTrade**: *object*

#### Type declaration:

* **id**: *number*

___

### <a id="sendtradeoptions" name="sendtradeoptions"></a>  SendTradeOptions

Ƭ **SendTradeOptions**: *Omit‹[CounterTradeOptions](_client_apis_tradesapi_.md#countertradeoptions), "tradeId"›*
