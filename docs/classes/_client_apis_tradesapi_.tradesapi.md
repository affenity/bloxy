
# Class: TradesAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **TradesAPI**

## Index

### Constructors

* [constructor](_client_apis_tradesapi_.tradesapi.md#constructor)

### Properties

* [client](_client_apis_tradesapi_.tradesapi.md#client)
* [options](_client_apis_tradesapi_.tradesapi.md#options)

### Methods

* [acceptTrade](_client_apis_tradesapi_.tradesapi.md#accepttrade)
* [canTradeWith](_client_apis_tradesapi_.tradesapi.md#cantradewith)
* [counterTrade](_client_apis_tradesapi_.tradesapi.md#countertrade)
* [declineTrade](_client_apis_tradesapi_.tradesapi.md#declinetrade)
* [getTrade](_client_apis_tradesapi_.tradesapi.md#gettrade)
* [getTradesByStatusType](_client_apis_tradesapi_.tradesapi.md#gettradesbystatustype)
* [getTradesCountByStatusType](_client_apis_tradesapi_.tradesapi.md#gettradescountbystatustype)
* [getTradesMetaData](_client_apis_tradesapi_.tradesapi.md#gettradesmetadata)
* [request](_client_apis_tradesapi_.tradesapi.md#request)
* [sendTrade](_client_apis_tradesapi_.tradesapi.md#sendtrade)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new TradesAPI**(`client`: [Client](_client_client_.client.md)): *[TradesAPI](_client_apis_tradesapi_.tradesapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[TradesAPI](_client_apis_tradesapi_.tradesapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="accepttrade" name="accepttrade"></a>  acceptTrade

▸ **acceptTrade**(`options`: [AcceptTradeOptions](../modules/_client_apis_tradesapi_.md#accepttradeoptions)): *Promise‹[AcceptTrade](../modules/_client_apis_tradesapi_.md#accepttrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptTradeOptions](../modules/_client_apis_tradesapi_.md#accepttradeoptions) |

**Returns:** *Promise‹[AcceptTrade](../modules/_client_apis_tradesapi_.md#accepttrade)›*

___

### <a id="cantradewith" name="cantradewith"></a>  canTradeWith

▸ **canTradeWith**(`options`: [CanSelfTradeWithUserOptions](../modules/_client_apis_tradesapi_.md#canselftradewithuseroptions)): *Promise‹[CanSelfTradeWithUser](../modules/_client_apis_tradesapi_.md#canselftradewithuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CanSelfTradeWithUserOptions](../modules/_client_apis_tradesapi_.md#canselftradewithuseroptions) |

**Returns:** *Promise‹[CanSelfTradeWithUser](../modules/_client_apis_tradesapi_.md#canselftradewithuser)›*

___

### <a id="countertrade" name="countertrade"></a>  counterTrade

▸ **counterTrade**(`options`: [CounterTradeOptions](../modules/_client_apis_tradesapi_.md#countertradeoptions)): *Promise‹[CounterTrade](../modules/_client_apis_tradesapi_.md#countertrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CounterTradeOptions](../modules/_client_apis_tradesapi_.md#countertradeoptions) |

**Returns:** *Promise‹[CounterTrade](../modules/_client_apis_tradesapi_.md#countertrade)›*

___

### <a id="declinetrade" name="declinetrade"></a>  declineTrade

▸ **declineTrade**(`options`: [DeclineTradeOptions](../modules/_client_apis_tradesapi_.md#declinetradeoptions)): *Promise‹[DeclineTrade](../modules/_client_apis_tradesapi_.md#declinetrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineTradeOptions](../modules/_client_apis_tradesapi_.md#declinetradeoptions) |

**Returns:** *Promise‹[DeclineTrade](../modules/_client_apis_tradesapi_.md#declinetrade)›*

___

### <a id="gettrade" name="gettrade"></a>  getTrade

▸ **getTrade**(`options`: [GetTradeOptions](../modules/_client_apis_tradesapi_.md#gettradeoptions)): *Promise‹[GetTrade](../modules/_client_apis_tradesapi_.md#gettrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetTradeOptions](../modules/_client_apis_tradesapi_.md#gettradeoptions) |

**Returns:** *Promise‹[GetTrade](../modules/_client_apis_tradesapi_.md#gettrade)›*

___

### <a id="gettradesbystatustype" name="gettradesbystatustype"></a>  getTradesByStatusType

▸ **getTradesByStatusType**(`options`: [GetTradesByStatusTypeOptions](../modules/_client_apis_tradesapi_.md#gettradesbystatustypeoptions)): *Promise‹[GetTradesByStatusType](../modules/_client_apis_tradesapi_.md#gettradesbystatustype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetTradesByStatusTypeOptions](../modules/_client_apis_tradesapi_.md#gettradesbystatustypeoptions) |

**Returns:** *Promise‹[GetTradesByStatusType](../modules/_client_apis_tradesapi_.md#gettradesbystatustype)›*

___

### <a id="gettradescountbystatustype" name="gettradescountbystatustype"></a>  getTradesCountByStatusType

▸ **getTradesCountByStatusType**(`options`: [GetTradesCountByStatusTypeOptions](../modules/_client_apis_tradesapi_.md#gettradescountbystatustypeoptions)): *Promise‹[GetTradesCountByStatusType](../modules/_client_apis_tradesapi_.md#gettradescountbystatustype)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetTradesCountByStatusTypeOptions](../modules/_client_apis_tradesapi_.md#gettradescountbystatustypeoptions) |

**Returns:** *Promise‹[GetTradesCountByStatusType](../modules/_client_apis_tradesapi_.md#gettradescountbystatustype)›*

___

### <a id="gettradesmetadata" name="gettradesmetadata"></a>  getTradesMetaData

▸ **getTradesMetaData**(): *Promise‹[GetTradesMetaData](../modules/_client_apis_tradesapi_.md#gettradesmetadata)›*

**Returns:** *Promise‹[GetTradesMetaData](../modules/_client_apis_tradesapi_.md#gettradesmetadata)›*

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

### <a id="sendtrade" name="sendtrade"></a>  sendTrade

▸ **sendTrade**(`options`: [SendTradeOptions](../modules/_client_apis_tradesapi_.md#sendtradeoptions)): *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SendTradeOptions](../modules/_client_apis_tradesapi_.md#sendtradeoptions) |

**Returns:** *Promise‹[SendTrade](../modules/_client_apis_tradesapi_.md#sendtrade)›*
