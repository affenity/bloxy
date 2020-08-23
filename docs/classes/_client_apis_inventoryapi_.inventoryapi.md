
# Class: InventoryAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **InventoryAPI**

## Index

### Constructors

* [constructor](_client_apis_inventoryapi_.inventoryapi.md#constructor)

### Properties

* [client](_client_apis_inventoryapi_.inventoryapi.md#client)
* [options](_client_apis_inventoryapi_.inventoryapi.md#options)

### Methods

* [getAssetOwners](_client_apis_inventoryapi_.inventoryapi.md#getassetowners)
* [getPackageAssets](_client_apis_inventoryapi_.inventoryapi.md#getpackageassets)
* [getUserCollectibles](_client_apis_inventoryapi_.inventoryapi.md#getusercollectibles)
* [getUserInventory](_client_apis_inventoryapi_.inventoryapi.md#getuserinventory)
* [getUserInventoryByAssetTypeId](_client_apis_inventoryapi_.inventoryapi.md#getuserinventorybyassettypeid)
* [getUserItemsByTypeAndTargetId](_client_apis_inventoryapi_.inventoryapi.md#getuseritemsbytypeandtargetid)
* [request](_client_apis_inventoryapi_.inventoryapi.md#request)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new InventoryAPI**(`client`: [Client](_client_client_.client.md)): *[InventoryAPI](_client_apis_inventoryapi_.inventoryapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[InventoryAPI](_client_apis_inventoryapi_.inventoryapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getassetowners" name="getassetowners"></a>  getAssetOwners

▸ **getAssetOwners**(`options`: [GetAssetOwnersOptions](../modules/_client_apis_inventoryapi_.md#getassetownersoptions)): *Promise‹[GetAssetOwners](../modules/_client_apis_inventoryapi_.md#getassetowners)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAssetOwnersOptions](../modules/_client_apis_inventoryapi_.md#getassetownersoptions) |

**Returns:** *Promise‹[GetAssetOwners](../modules/_client_apis_inventoryapi_.md#getassetowners)›*

___

### <a id="getpackageassets" name="getpackageassets"></a>  getPackageAssets

▸ **getPackageAssets**(`options`: [GetPackageAssetsOptions](../modules/_client_apis_inventoryapi_.md#getpackageassetsoptions)): *Promise‹[GetPackageAssets](../modules/_client_apis_inventoryapi_.md#getpackageassets)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetPackageAssetsOptions](../modules/_client_apis_inventoryapi_.md#getpackageassetsoptions) |

**Returns:** *Promise‹[GetPackageAssets](../modules/_client_apis_inventoryapi_.md#getpackageassets)›*

___

### <a id="getusercollectibles" name="getusercollectibles"></a>  getUserCollectibles

▸ **getUserCollectibles**(`options`: [GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions)): *Promise‹[GetUserCollectibles](../modules/_client_apis_inventoryapi_.md#getusercollectibles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserCollectiblesOptions](../modules/_client_apis_inventoryapi_.md#getusercollectiblesoptions) |

**Returns:** *Promise‹[GetUserCollectibles](../modules/_client_apis_inventoryapi_.md#getusercollectibles)›*

___

### <a id="getuserinventory" name="getuserinventory"></a>  getUserInventory

▸ **getUserInventory**(`options`: [GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions)): *Promise‹[GetUserInventory](../modules/_client_apis_inventoryapi_.md#getuserinventory)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserInventoryOptions](../modules/_client_apis_inventoryapi_.md#getuserinventoryoptions) |

**Returns:** *Promise‹[GetUserInventory](../modules/_client_apis_inventoryapi_.md#getuserinventory)›*

___

### <a id="getuserinventorybyassettypeid" name="getuserinventorybyassettypeid"></a>  getUserInventoryByAssetTypeId

▸ **getUserInventoryByAssetTypeId**(`options`: [GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions)): *Promise‹[GetUserInventoryByAssetTypeId](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserInventoryByAssetTypeIdOptions](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeidoptions) |

**Returns:** *Promise‹[GetUserInventoryByAssetTypeId](../modules/_client_apis_inventoryapi_.md#getuserinventorybyassettypeid)›*

___

### <a id="getuseritemsbytypeandtargetid" name="getuseritemsbytypeandtargetid"></a>  getUserItemsByTypeAndTargetId

▸ **getUserItemsByTypeAndTargetId**(`options`: [GetUserItemsByTypeAndTargetIdOptions](../modules/_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetidoptions)): *Promise‹[GetUserItemsByTypeAndTargetId](../modules/_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserItemsByTypeAndTargetIdOptions](../modules/_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetidoptions) |

**Returns:** *Promise‹[GetUserItemsByTypeAndTargetId](../modules/_client_apis_inventoryapi_.md#getuseritemsbytypeandtargetid)›*

___

### <a id="request" name="request"></a>  request

▸ **request**(`options`: [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions)): *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[request](_client_apis_developapi_.developapi.md#request)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [BaseAPIRequestOptions](../modules/_client_apis_baseapi_.md#baseapirequestoptions) |

**Returns:** *Promise‹[RESTResponseDataType](../modules/_interfaces_restinterfaces_.md#restresponsedatatype)›*
