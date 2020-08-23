
# Module: "client/apis/UsersAPI"

## Index

### Classes

* [UsersAPI](../classes/_client_apis_usersapi_.usersapi.md)

### Type aliases

* [GetSelfAuthenticatedUserInformation](_client_apis_usersapi_.md#getselfauthenticateduserinformation)
* [GetUserById](_client_apis_usersapi_.md#getuserbyid)
* [GetUserByIdOptions](_client_apis_usersapi_.md#getuserbyidoptions)
* [GetUserStatus](_client_apis_usersapi_.md#getuserstatus)
* [GetUserStatusOptions](_client_apis_usersapi_.md#getuserstatusoptions)
* [GetUsersByUserIds](_client_apis_usersapi_.md#getusersbyuserids)
* [GetUsersByUserIdsOptions](_client_apis_usersapi_.md#getusersbyuseridsoptions)
* [GetUsersByUsernames](_client_apis_usersapi_.md#getusersbyusernames)
* [GetUsersByUsernamesOptions](_client_apis_usersapi_.md#getusersbyusernamesoptions)
* [SearchUsers](_client_apis_usersapi_.md#searchusers)
* [SearchUsersOptions](_client_apis_usersapi_.md#searchusersoptions)
* [SetSelfDisplayName](_client_apis_usersapi_.md#setselfdisplayname)
* [SetSelfDisplayNameOptions](_client_apis_usersapi_.md#setselfdisplaynameoptions)
* [UpdateSelfStatus](_client_apis_usersapi_.md#updateselfstatus)
* [UpdateSelfStatusOptions](_client_apis_usersapi_.md#updateselfstatusoptions)
* [ValidateDisplayNameExistingUser](_client_apis_usersapi_.md#validatedisplaynameexistinguser)
* [ValidateDisplayNameExistingUserOptions](_client_apis_usersapi_.md#validatedisplaynameexistinguseroptions)
* [ValidateDisplayNameNewUser](_client_apis_usersapi_.md#validatedisplaynamenewuser)
* [ValidateDisplayNameNewUserOptions](_client_apis_usersapi_.md#validatedisplaynamenewuseroptions)

## Type aliases

### <a id="getselfauthenticateduserinformation" name="getselfauthenticateduserinformation"></a>  GetSelfAuthenticatedUserInformation

Ƭ **GetSelfAuthenticatedUserInformation**: *object*

#### Type declaration:

* **displayName**: *string*

* **id**: *number*

* **name**: *string*

___

### <a id="getuserbyid" name="getuserbyid"></a>  GetUserById

Ƭ **GetUserById**: *object*

#### Type declaration:

* **created**: *string*

* **description**: *string*

* **displayName**: *string*

* **id**: *number*

* **isBanned**: *boolean*

* **name**: *string*

___

### <a id="getuserbyidoptions" name="getuserbyidoptions"></a>  GetUserByIdOptions

Ƭ **GetUserByIdOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getuserstatus" name="getuserstatus"></a>  GetUserStatus

Ƭ **GetUserStatus**: *object*

#### Type declaration:

* **status**: *string*

___

### <a id="getuserstatusoptions" name="getuserstatusoptions"></a>  GetUserStatusOptions

Ƭ **GetUserStatusOptions**: *object*

#### Type declaration:

* **userId**: *number*

___

### <a id="getusersbyuserids" name="getusersbyuserids"></a>  GetUsersByUserIds

Ƭ **GetUsersByUserIds**: *object*

#### Type declaration:

* **data**: *Omit‹GetUsersByUsernames["data"][0], "requestedUsername"›[]*

___

### <a id="getusersbyuseridsoptions" name="getusersbyuseridsoptions"></a>  GetUsersByUserIdsOptions

Ƭ **GetUsersByUserIdsOptions**: *object*

#### Type declaration:

* **excludeBannedUsers**? : *undefined | false | true*

* **userIds**: *number[]*

___

### <a id="getusersbyusernames" name="getusersbyusernames"></a>  GetUsersByUsernames

Ƭ **GetUsersByUsernames**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getusersbyusernamesoptions" name="getusersbyusernamesoptions"></a>  GetUsersByUsernamesOptions

Ƭ **GetUsersByUsernamesOptions**: *object*

#### Type declaration:

* **excludeBannedUsers**? : *undefined | false | true*

* **usernames**: *string[]*

___

### <a id="searchusers" name="searchusers"></a>  SearchUsers

Ƭ **SearchUsers**: *object*

#### Type declaration:

* **data**: *object[]*

* **nextPageCursor**: *string*

* **previousPageCursor**: *string*

___

### <a id="searchusersoptions" name="searchusersoptions"></a>  SearchUsersOptions

Ƭ **SearchUsersOptions**: *object*

#### Type declaration:

* **cursor**? : *undefined | string*

* **keyword**: *string*

* **limit**? : *10 | 25 | 50 | 100*

___

### <a id="setselfdisplayname" name="setselfdisplayname"></a>  SetSelfDisplayName

Ƭ **SetSelfDisplayName**: *object*

#### Type declaration:

___

### <a id="setselfdisplaynameoptions" name="setselfdisplaynameoptions"></a>  SetSelfDisplayNameOptions

Ƭ **SetSelfDisplayNameOptions**: *object*

#### Type declaration:

* **newDisplayName**: *string*

* **userId**: *number*

___

### <a id="updateselfstatus" name="updateselfstatus"></a>  UpdateSelfStatus

Ƭ **UpdateSelfStatus**: *object*

#### Type declaration:

* **status**: *string*

___

### <a id="updateselfstatusoptions" name="updateselfstatusoptions"></a>  UpdateSelfStatusOptions

Ƭ **UpdateSelfStatusOptions**: *object*

#### Type declaration:

* **status**: *string*

* **userId**: *number*

___

### <a id="validatedisplaynameexistinguser" name="validatedisplaynameexistinguser"></a>  ValidateDisplayNameExistingUser

Ƭ **ValidateDisplayNameExistingUser**: *object*

#### Type declaration:

___

### <a id="validatedisplaynameexistinguseroptions" name="validatedisplaynameexistinguseroptions"></a>  ValidateDisplayNameExistingUserOptions

Ƭ **ValidateDisplayNameExistingUserOptions**: *object*

#### Type declaration:

* **displayName**: *string*

* **userId**: *number*

___

### <a id="validatedisplaynamenewuser" name="validatedisplaynamenewuser"></a>  ValidateDisplayNameNewUser

Ƭ **ValidateDisplayNameNewUser**: *object*

#### Type declaration:

___

### <a id="validatedisplaynamenewuseroptions" name="validatedisplaynamenewuseroptions"></a>  ValidateDisplayNameNewUserOptions

Ƭ **ValidateDisplayNameNewUserOptions**: *object*

#### Type declaration:

* **birthdate**: *string*

* **displayName**: *string*
