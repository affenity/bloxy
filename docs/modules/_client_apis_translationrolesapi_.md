
# Module: "client/apis/TranslationRolesAPI"

## Index

### Classes

* [TradesAPI](../classes/_client_apis_translationrolesapi_.tradesapi.md)

### Type aliases

* [GetGameRoleAssignees](_client_apis_translationrolesapi_.md#getgameroleassignees)
* [GetGameRoleAssigneesOptions](_client_apis_translationrolesapi_.md#getgameroleassigneesoptions)
* [GetSelfGameRoles](_client_apis_translationrolesapi_.md#getselfgameroles)
* [GetSelfGameRolesOptions](_client_apis_translationrolesapi_.md#getselfgamerolesoptions)
* [GetSelfGamesAccessByRole](_client_apis_translationrolesapi_.md#getselfgamesaccessbyrole)
* [GetSelfGamesAccessByRoleOptions](_client_apis_translationrolesapi_.md#getselfgamesaccessbyroleoptions)
* [UpdateUser](_client_apis_translationrolesapi_.md#updateuser)
* [UpdateUserAccess](_client_apis_translationrolesapi_.md#updateuseraccess)

## Type aliases

### <a id="getgameroleassignees" name="getgameroleassignees"></a>  GetGameRoleAssignees

Ƭ **GetGameRoleAssignees**: *object*

#### Type declaration:

* **data**: *object[]*

___

### <a id="getgameroleassigneesoptions" name="getgameroleassigneesoptions"></a>  GetGameRoleAssigneesOptions

Ƭ **GetGameRoleAssigneesOptions**: *object*

#### Type declaration:

* **gameId**: *number*

* **role**: *"translator"*

___

### <a id="getselfgameroles" name="getselfgameroles"></a>  GetSelfGameRoles

Ƭ **GetSelfGameRoles**: *object*

#### Type declaration:

* **data**: *string[]*

___

### <a id="getselfgamerolesoptions" name="getselfgamerolesoptions"></a>  GetSelfGameRolesOptions

Ƭ **GetSelfGameRolesOptions**: *object*

#### Type declaration:

* **gameId**: *number*

___

### <a id="getselfgamesaccessbyrole" name="getselfgamesaccessbyrole"></a>  GetSelfGamesAccessByRole

Ƭ **GetSelfGamesAccessByRole**: *object*

#### Type declaration:

* **games**: *object[]*

___

### <a id="getselfgamesaccessbyroleoptions" name="getselfgamesaccessbyroleoptions"></a>  GetSelfGamesAccessByRoleOptions

Ƭ **GetSelfGamesAccessByRoleOptions**: *object*

#### Type declaration:

* **exclusiveStartKey**? : *undefined | string*

* **pageSize**? : *undefined | number*

* **role**: *"translator"*

___

### <a id="updateuser" name="updateuser"></a>  UpdateUser

Ƭ **UpdateUser**: *object*

#### Type declaration:

___

### <a id="updateuseraccess" name="updateuseraccess"></a>  UpdateUserAccess

Ƭ **UpdateUserAccess**: *object*

#### Type declaration:

* **gameId**: *number*

* **revoke**? : *undefined | false | true*

* **role**: *"translator"*

* **userId**: *number*
