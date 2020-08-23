
# Class: VIPServer

## Hierarchy

* **VIPServer**

## Index

### Constructors

* [constructor](_structures_game_.vipserver.md#constructor)

### Properties

* [active](_structures_game_.vipserver.md#active)
* [client](_structures_game_.vipserver.md#client)
* [code](_structures_game_.vipserver.md#code)
* [game](_structures_game_.vipserver.md#game)
* [id](_structures_game_.vipserver.md#id)
* [name](_structures_game_.vipserver.md#name)
* [permissions](_structures_game_.vipserver.md#permissions)
* [subscription](_structures_game_.vipserver.md#subscription)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new VIPServer**(`data`: [VIPServerOptions](../interfaces/_structures_game_.vipserveroptions.md), `client`: [Client](_client_client_.client.md)): *[VIPServer](_structures_game_.vipserver.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [VIPServerOptions](../interfaces/_structures_game_.vipserveroptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[VIPServer](_structures_game_.vipserver.md)*

## Properties

### <a id="active" name="active"></a>  active

• **active**: *boolean*

___

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="code" name="code"></a>  code

• **code**: *string*

___

### <a id="game" name="game"></a>  game

• **game**: *[PartialGameUniverse](_structures_game_.partialgameuniverse.md)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="name" name="name"></a>  name

• **name**: *string*

___

### <a id="permissions" name="permissions"></a>  permissions

• **permissions**: *object*

#### Type declaration:

* **clanAllowed**: *boolean*

* **enemyClanId**: *number*

* **friendsAllowed**: *boolean*

* **users**: *[PartialUser](_structures_user_.partialuser.md)[]*

___

### <a id="subscription" name="subscription"></a>  subscription

• **subscription**: *object*

#### Type declaration:

* **active**: *boolean*

* **expirationDate**: *Date*

* **expired**: *boolean*

* **price**: *number*
