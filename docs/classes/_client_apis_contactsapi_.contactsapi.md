
# Class: ContactsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **ContactsAPI**

## Index

### Constructors

* [constructor](_client_apis_contactsapi_.contactsapi.md#constructor)

### Properties

* [client](_client_apis_contactsapi_.contactsapi.md#client)
* [options](_client_apis_contactsapi_.contactsapi.md#options)

### Methods

* [getContactsMetaData](_client_apis_contactsapi_.contactsapi.md#getcontactsmetadata)
* [getUsersTags](_client_apis_contactsapi_.contactsapi.md#getuserstags)
* [matchContacts](_client_apis_contactsapi_.contactsapi.md#matchcontacts)
* [request](_client_apis_contactsapi_.contactsapi.md#request)
* [setPendingUserTag](_client_apis_contactsapi_.contactsapi.md#setpendingusertag)
* [setUserTag](_client_apis_contactsapi_.contactsapi.md#setusertag)
* [updateContacts](_client_apis_contactsapi_.contactsapi.md#updatecontacts)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new ContactsAPI**(`client`: [Client](_client_client_.client.md)): *[ContactsAPI](_client_apis_contactsapi_.contactsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[ContactsAPI](_client_apis_contactsapi_.contactsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getcontactsmetadata" name="getcontactsmetadata"></a>  getContactsMetaData

▸ **getContactsMetaData**(): *Promise‹[GetContactsMetaData](../modules/_client_apis_contactsapi_.md#getcontactsmetadata)›*

**Returns:** *Promise‹[GetContactsMetaData](../modules/_client_apis_contactsapi_.md#getcontactsmetadata)›*

___

### <a id="getuserstags" name="getuserstags"></a>  getUsersTags

▸ **getUsersTags**(`options`: [GetUsersTagsOptions](../modules/_client_apis_contactsapi_.md#getuserstagsoptions)): *Promise‹[GetUsersTags](../modules/_client_apis_contactsapi_.md#getuserstags)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUsersTagsOptions](../modules/_client_apis_contactsapi_.md#getuserstagsoptions) |

**Returns:** *Promise‹[GetUsersTags](../modules/_client_apis_contactsapi_.md#getuserstags)›*

___

### <a id="matchcontacts" name="matchcontacts"></a>  matchContacts

▸ **matchContacts**(`options`: [MatchContactsOptions](../modules/_client_apis_contactsapi_.md#matchcontactsoptions)): *Promise‹[MatchContacts](../modules/_client_apis_contactsapi_.md#matchcontacts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MatchContactsOptions](../modules/_client_apis_contactsapi_.md#matchcontactsoptions) |

**Returns:** *Promise‹[MatchContacts](../modules/_client_apis_contactsapi_.md#matchcontacts)›*

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

### <a id="setpendingusertag" name="setpendingusertag"></a>  setPendingUserTag

▸ **setPendingUserTag**(`options`: [SetPendingUserTagOptions](../modules/_client_apis_contactsapi_.md#setpendingusertagoptions)): *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetPendingUserTagOptions](../modules/_client_apis_contactsapi_.md#setpendingusertagoptions) |

**Returns:** *Promise‹[SetPendingUserTag](../modules/_client_apis_contactsapi_.md#setpendingusertag)›*

___

### <a id="setusertag" name="setusertag"></a>  setUserTag

▸ **setUserTag**(`options`: [SetUserTagOptions](../modules/_client_apis_contactsapi_.md#setusertagoptions)): *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetUserTagOptions](../modules/_client_apis_contactsapi_.md#setusertagoptions) |

**Returns:** *Promise‹[SetUserTag](../modules/_client_apis_contactsapi_.md#setusertag)›*

___

### <a id="updatecontacts" name="updatecontacts"></a>  updateContacts

▸ **updateContacts**(`options`: [UpdateContactsOptions](../modules/_client_apis_contactsapi_.md#updatecontactsoptions)): *Promise‹[UpdateContacts](../modules/_client_apis_contactsapi_.md#updatecontacts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateContactsOptions](../modules/_client_apis_contactsapi_.md#updatecontactsoptions) |

**Returns:** *Promise‹[UpdateContacts](../modules/_client_apis_contactsapi_.md#updatecontacts)›*
