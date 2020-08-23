
# Class: Bundle

## Hierarchy

* **Bundle**

## Index

### Constructors

* [constructor](_structures_asset_.bundle.md#constructor)

### Properties

* [bundleType](_structures_asset_.bundle.md#bundletype)
* [client](_structures_asset_.bundle.md#client)
* [creator](_structures_asset_.bundle.md#creator)
* [creatorType](_structures_asset_.bundle.md#creatortype)
* [description](_structures_asset_.bundle.md#description)
* [id](_structures_asset_.bundle.md#id)
* [items](_structures_asset_.bundle.md#items)
* [name](_structures_asset_.bundle.md#name)
* [product](_structures_asset_.bundle.md#product)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new Bundle**(`data`: [BundleOptions](../interfaces/_structures_asset_.bundleoptions.md), `client`: [Client](_client_client_.client.md)): *[Bundle](_structures_asset_.bundle.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [BundleOptions](../interfaces/_structures_asset_.bundleoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[Bundle](_structures_asset_.bundle.md)*

## Properties

### <a id="bundletype" name="bundletype"></a>  bundleType

• **bundleType**: *string*

___

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="creator" name="creator"></a>  creator

• **creator**: *[PartialUser](_structures_user_.partialuser.md) | [PartialGroup](_structures_group_.partialgroup.md)*

___

### <a id="creatortype" name="creatortype"></a>  creatorType

• **creatorType**: *[CreatorType](../enums/_util_constants_.creatortype.md)*

___

### <a id="description" name="description"></a>  description

• **description**: *string*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="items" name="items"></a>  items

• **items**: *object[]*

___

### <a id="name" name="name"></a>  name

• **name**: *string*

___

### <a id="product" name="product"></a>  product

• **product**: *object*

#### Type declaration:

* **forSale**: *boolean*

* **id**: *number*

* **premiumPricing**(): *object*

  * **discount**: *number*

  * **price**: *number*

* **price**: *number*

* **publicDomain**: *boolean*

* **type**: *string*
