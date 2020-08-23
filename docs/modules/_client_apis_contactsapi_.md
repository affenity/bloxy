
# Module: "client/apis/ContactsAPI"

## Index

### Classes

* [ContactsAPI](../classes/_client_apis_contactsapi_.contactsapi.md)

### Type aliases

* [GetContactsMetaData](_client_apis_contactsapi_.md#getcontactsmetadata)
* [GetUsersTags](_client_apis_contactsapi_.md#getuserstags)
* [GetUsersTagsOptions](_client_apis_contactsapi_.md#getuserstagsoptions)
* [MatchContacts](_client_apis_contactsapi_.md#matchcontacts)
* [MatchContactsOptions](_client_apis_contactsapi_.md#matchcontactsoptions)
* [SetPendingUserTag](_client_apis_contactsapi_.md#setpendingusertag)
* [SetPendingUserTagOptions](_client_apis_contactsapi_.md#setpendingusertagoptions)
* [SetUserTag](_client_apis_contactsapi_.md#setusertag)
* [SetUserTagOptions](_client_apis_contactsapi_.md#setusertagoptions)
* [UpdateContacts](_client_apis_contactsapi_.md#updatecontacts)
* [UpdateContactsOptions](_client_apis_contactsapi_.md#updatecontactsoptions)

## Type aliases

### <a id="getcontactsmetadata" name="getcontactsmetadata"></a>  GetContactsMetaData

Ƭ **GetContactsMetaData**: *object*

#### Type declaration:

* **multiGetContactsMaxSize**: *number*

___

### <a id="getuserstags" name="getuserstags"></a>  GetUsersTags

Ƭ **GetUsersTags**: *object[]*

___

### <a id="getuserstagsoptions" name="getuserstagsoptions"></a>  GetUsersTagsOptions

Ƭ **GetUsersTagsOptions**: *object*

#### Type declaration:

* **targetUserIds**: *number[]*

___

### <a id="matchcontacts" name="matchcontacts"></a>  MatchContacts

Ƭ **MatchContacts**: *object*

#### Type declaration:

* **contacts**: *object[]*

___

### <a id="matchcontactsoptions" name="matchcontactsoptions"></a>  MatchContactsOptions

Ƭ **MatchContactsOptions**: *object*

#### Type declaration:

* **contacts**: *object[]*

* **country**: *string*

___

### <a id="setpendingusertag" name="setpendingusertag"></a>  SetPendingUserTag

Ƭ **SetPendingUserTag**: *object*

#### Type declaration:

* **status**: *"Success" | string*

___

### <a id="setpendingusertagoptions" name="setpendingusertagoptions"></a>  SetPendingUserTagOptions

Ƭ **SetPendingUserTagOptions**: *object*

#### Type declaration:

* **targetUserId**: *number*

* **userTag**: *string*

___

### <a id="setusertag" name="setusertag"></a>  SetUserTag

Ƭ **SetUserTag**: *object*

#### Type declaration:

* **status**: *"Success" | string*

___

### <a id="setusertagoptions" name="setusertagoptions"></a>  SetUserTagOptions

Ƭ **SetUserTagOptions**: *object*

#### Type declaration:

* **targetUserId**: *number*

* **userTag**: *string*

___

### <a id="updatecontacts" name="updatecontacts"></a>  UpdateContacts

Ƭ **UpdateContacts**: *object*

#### Type declaration:

___

### <a id="updatecontactsoptions" name="updatecontactsoptions"></a>  UpdateContactsOptions

Ƭ **UpdateContactsOptions**: *[MatchContacts](_client_apis_contactsapi_.md#matchcontacts)*
