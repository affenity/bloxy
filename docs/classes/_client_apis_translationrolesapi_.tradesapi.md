
# Class: TradesAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **TradesAPI**

## Index

### Constructors

* [constructor](_client_apis_translationrolesapi_.tradesapi.md#constructor)

### Properties

* [client](_client_apis_translationrolesapi_.tradesapi.md#client)
* [options](_client_apis_translationrolesapi_.tradesapi.md#options)

### Methods

* [getGameRoleAssignees](_client_apis_translationrolesapi_.tradesapi.md#getgameroleassignees)
* [getSelfGameRoles](_client_apis_translationrolesapi_.tradesapi.md#getselfgameroles)
* [getSelfGamesAccessByRole](_client_apis_translationrolesapi_.tradesapi.md#getselfgamesaccessbyrole)
* [request](_client_apis_translationrolesapi_.tradesapi.md#request)
* [updateUserAccess](_client_apis_translationrolesapi_.tradesapi.md#updateuseraccess)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new TradesAPI**(`client`: [Client](_client_client_.client.md)): *[TradesAPI](_client_apis_translationrolesapi_.tradesapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[TradesAPI](_client_apis_translationrolesapi_.tradesapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getgameroleassignees" name="getgameroleassignees"></a>  getGameRoleAssignees

▸ **getGameRoleAssignees**(`options`: [GetGameRoleAssigneesOptions](../modules/_client_apis_translationrolesapi_.md#getgameroleassigneesoptions)): *Promise‹[GetGameRoleAssignees](../modules/_client_apis_translationrolesapi_.md#getgameroleassignees)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGameRoleAssigneesOptions](../modules/_client_apis_translationrolesapi_.md#getgameroleassigneesoptions) |

**Returns:** *Promise‹[GetGameRoleAssignees](../modules/_client_apis_translationrolesapi_.md#getgameroleassignees)›*

___

### <a id="getselfgameroles" name="getselfgameroles"></a>  getSelfGameRoles

▸ **getSelfGameRoles**(`options`: [GetSelfGameRolesOptions](../modules/_client_apis_translationrolesapi_.md#getselfgamerolesoptions)): *Promise‹[GetSelfGameRoles](../modules/_client_apis_translationrolesapi_.md#getselfgameroles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfGameRolesOptions](../modules/_client_apis_translationrolesapi_.md#getselfgamerolesoptions) |

**Returns:** *Promise‹[GetSelfGameRoles](../modules/_client_apis_translationrolesapi_.md#getselfgameroles)›*

___

### <a id="getselfgamesaccessbyrole" name="getselfgamesaccessbyrole"></a>  getSelfGamesAccessByRole

▸ **getSelfGamesAccessByRole**(`options`: [GetSelfGamesAccessByRoleOptions](../modules/_client_apis_translationrolesapi_.md#getselfgamesaccessbyroleoptions)): *Promise‹[GetSelfGamesAccessByRole](../modules/_client_apis_translationrolesapi_.md#getselfgamesaccessbyrole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfGamesAccessByRoleOptions](../modules/_client_apis_translationrolesapi_.md#getselfgamesaccessbyroleoptions) |

**Returns:** *Promise‹[GetSelfGamesAccessByRole](../modules/_client_apis_translationrolesapi_.md#getselfgamesaccessbyrole)›*

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

### <a id="updateuseraccess" name="updateuseraccess"></a>  updateUserAccess

▸ **updateUserAccess**(`options`: [UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess)): *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateUserAccess](../modules/_client_apis_translationrolesapi_.md#updateuseraccess) |

**Returns:** *Promise‹[UpdateUser](../modules/_client_apis_translationrolesapi_.md#updateuser)›*
