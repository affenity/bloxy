
# Class: UsersAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **UsersAPI**

## Index

### Constructors

* [constructor](_client_apis_usersapi_.usersapi.md#constructor)

### Properties

* [client](_client_apis_usersapi_.usersapi.md#client)
* [options](_client_apis_usersapi_.usersapi.md#options)

### Methods

* [getAuthenticatedUserInformation](_client_apis_usersapi_.usersapi.md#getauthenticateduserinformation)
* [getUserById](_client_apis_usersapi_.usersapi.md#getuserbyid)
* [getUserStatus](_client_apis_usersapi_.usersapi.md#getuserstatus)
* [getUsersByIds](_client_apis_usersapi_.usersapi.md#getusersbyids)
* [getUsersByUsernames](_client_apis_usersapi_.usersapi.md#getusersbyusernames)
* [request](_client_apis_usersapi_.usersapi.md#request)
* [searchUsers](_client_apis_usersapi_.usersapi.md#searchusers)
* [setDisplayName](_client_apis_usersapi_.usersapi.md#setdisplayname)
* [updateStatus](_client_apis_usersapi_.usersapi.md#updatestatus)
* [validateDisplayNameExistingUser](_client_apis_usersapi_.usersapi.md#validatedisplaynameexistinguser)
* [validateDisplayNameNewUser](_client_apis_usersapi_.usersapi.md#validatedisplaynamenewuser)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new UsersAPI**(`client`: [Client](_client_client_.client.md)): *[UsersAPI](_client_apis_usersapi_.usersapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[UsersAPI](_client_apis_usersapi_.usersapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="getauthenticateduserinformation" name="getauthenticateduserinformation"></a>  getAuthenticatedUserInformation

▸ **getAuthenticatedUserInformation**(): *Promise‹[GetSelfAuthenticatedUserInformation](../modules/_client_apis_usersapi_.md#getselfauthenticateduserinformation)›*

**Returns:** *Promise‹[GetSelfAuthenticatedUserInformation](../modules/_client_apis_usersapi_.md#getselfauthenticateduserinformation)›*

___

### <a id="getuserbyid" name="getuserbyid"></a>  getUserById

▸ **getUserById**(`options`: [GetUserByIdOptions](../modules/_client_apis_usersapi_.md#getuserbyidoptions)): *Promise‹[GetUserById](../modules/_client_apis_usersapi_.md#getuserbyid)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserByIdOptions](../modules/_client_apis_usersapi_.md#getuserbyidoptions) |

**Returns:** *Promise‹[GetUserById](../modules/_client_apis_usersapi_.md#getuserbyid)›*

___

### <a id="getuserstatus" name="getuserstatus"></a>  getUserStatus

▸ **getUserStatus**(`options`: [GetUserStatusOptions](../modules/_client_apis_usersapi_.md#getuserstatusoptions)): *Promise‹[GetUserStatus](../modules/_client_apis_usersapi_.md#getuserstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserStatusOptions](../modules/_client_apis_usersapi_.md#getuserstatusoptions) |

**Returns:** *Promise‹[GetUserStatus](../modules/_client_apis_usersapi_.md#getuserstatus)›*

___

### <a id="getusersbyids" name="getusersbyids"></a>  getUsersByIds

▸ **getUsersByIds**(`options`: [GetUsersByUserIdsOptions](../modules/_client_apis_usersapi_.md#getusersbyuseridsoptions)): *Promise‹[GetUsersByUserIds](../modules/_client_apis_usersapi_.md#getusersbyuserids)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUsersByUserIdsOptions](../modules/_client_apis_usersapi_.md#getusersbyuseridsoptions) |

**Returns:** *Promise‹[GetUsersByUserIds](../modules/_client_apis_usersapi_.md#getusersbyuserids)›*

___

### <a id="getusersbyusernames" name="getusersbyusernames"></a>  getUsersByUsernames

▸ **getUsersByUsernames**(`options`: [GetUsersByUsernamesOptions](../modules/_client_apis_usersapi_.md#getusersbyusernamesoptions)): *Promise‹[GetUsersByUsernames](../modules/_client_apis_usersapi_.md#getusersbyusernames)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUsersByUsernamesOptions](../modules/_client_apis_usersapi_.md#getusersbyusernamesoptions) |

**Returns:** *Promise‹[GetUsersByUsernames](../modules/_client_apis_usersapi_.md#getusersbyusernames)›*

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

### <a id="searchusers" name="searchusers"></a>  searchUsers

▸ **searchUsers**(`options`: [SearchUsersOptions](../modules/_client_apis_usersapi_.md#searchusersoptions)): *Promise‹[SearchUsers](../modules/_client_apis_usersapi_.md#searchusers)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchUsersOptions](../modules/_client_apis_usersapi_.md#searchusersoptions) |

**Returns:** *Promise‹[SearchUsers](../modules/_client_apis_usersapi_.md#searchusers)›*

___

### <a id="setdisplayname" name="setdisplayname"></a>  setDisplayName

▸ **setDisplayName**(`options`: [SetSelfDisplayNameOptions](../modules/_client_apis_usersapi_.md#setselfdisplaynameoptions)): *Promise‹[SetSelfDisplayName](../modules/_client_apis_usersapi_.md#setselfdisplayname)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetSelfDisplayNameOptions](../modules/_client_apis_usersapi_.md#setselfdisplaynameoptions) |

**Returns:** *Promise‹[SetSelfDisplayName](../modules/_client_apis_usersapi_.md#setselfdisplayname)›*

___

### <a id="updatestatus" name="updatestatus"></a>  updateStatus

▸ **updateStatus**(`options`: [UpdateSelfStatusOptions](../modules/_client_apis_usersapi_.md#updateselfstatusoptions)): *Promise‹[UpdateSelfStatus](../modules/_client_apis_usersapi_.md#updateselfstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateSelfStatusOptions](../modules/_client_apis_usersapi_.md#updateselfstatusoptions) |

**Returns:** *Promise‹[UpdateSelfStatus](../modules/_client_apis_usersapi_.md#updateselfstatus)›*

___

### <a id="validatedisplaynameexistinguser" name="validatedisplaynameexistinguser"></a>  validateDisplayNameExistingUser

▸ **validateDisplayNameExistingUser**(`options`: [ValidateDisplayNameExistingUserOptions](../modules/_client_apis_usersapi_.md#validatedisplaynameexistinguseroptions)): *Promise‹[ValidateDisplayNameExistingUser](../modules/_client_apis_usersapi_.md#validatedisplaynameexistinguser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateDisplayNameExistingUserOptions](../modules/_client_apis_usersapi_.md#validatedisplaynameexistinguseroptions) |

**Returns:** *Promise‹[ValidateDisplayNameExistingUser](../modules/_client_apis_usersapi_.md#validatedisplaynameexistinguser)›*

___

### <a id="validatedisplaynamenewuser" name="validatedisplaynamenewuser"></a>  validateDisplayNameNewUser

▸ **validateDisplayNameNewUser**(`options`: [ValidateDisplayNameNewUserOptions](../modules/_client_apis_usersapi_.md#validatedisplaynamenewuseroptions)): *Promise‹[ValidateDisplayNameNewUser](../modules/_client_apis_usersapi_.md#validatedisplaynamenewuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ValidateDisplayNameNewUserOptions](../modules/_client_apis_usersapi_.md#validatedisplaynamenewuseroptions) |

**Returns:** *Promise‹[ValidateDisplayNameNewUser](../modules/_client_apis_usersapi_.md#validatedisplaynamenewuser)›*
