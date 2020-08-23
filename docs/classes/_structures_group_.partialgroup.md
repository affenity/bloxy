
# Class: PartialGroup

## Hierarchy

* [GroupBase](_structures_group_.groupbase.md)

  ↳ **PartialGroup**

## Index

### Constructors

* [constructor](_structures_group_.partialgroup.md#constructor)

### Properties

* [client](_structures_group_.partialgroup.md#client)
* [id](_structures_group_.partialgroup.md#id)
* [name](_structures_group_.partialgroup.md#name)

### Methods

* [acceptJoinRequest](_structures_group_.partialgroup.md#acceptjoinrequest)
* [acceptJoinRequests](_structures_group_.partialgroup.md#acceptjoinrequests)
* [acceptRelationshipRequest](_structures_group_.partialgroup.md#acceptrelationshiprequest)
* [acceptRelationshipRequests](_structures_group_.partialgroup.md#acceptrelationshiprequests)
* [canSelfManage](_structures_group_.partialgroup.md#canselfmanage)
* [changeOwner](_structures_group_.partialgroup.md#changeowner)
* [claim](_structures_group_.partialgroup.md#claim)
* [createRelationship](_structures_group_.partialgroup.md#createrelationship)
* [createRole](_structures_group_.partialgroup.md#createrole)
* [createSocialLink](_structures_group_.partialgroup.md#createsociallink)
* [createWallPost](_structures_group_.partialgroup.md#createwallpost)
* [declineJoinRequest](_structures_group_.partialgroup.md#declinejoinrequest)
* [declineJoinRequests](_structures_group_.partialgroup.md#declinejoinrequests)
* [declineRelationshipRequest](_structures_group_.partialgroup.md#declinerelationshiprequest)
* [declineRelationshipRequests](_structures_group_.partialgroup.md#declinerelationshiprequests)
* [deleteRelationship](_structures_group_.partialgroup.md#deleterelationship)
* [deleteRole](_structures_group_.partialgroup.md#deleterole)
* [deleteSocialLink](_structures_group_.partialgroup.md#deletesociallink)
* [deleteWallPost](_structures_group_.partialgroup.md#deletewallpost)
* [getAllRolesPermissions](_structures_group_.partialgroup.md#getallrolespermissions)
* [getAllies](_structures_group_.partialgroup.md#getallies)
* [getEnemies](_structures_group_.partialgroup.md#getenemies)
* [getFunds](_structures_group_.partialgroup.md#getfunds)
* [getGroup](_structures_group_.partialgroup.md#getgroup)
* [getGuestPermissions](_structures_group_.partialgroup.md#getguestpermissions)
* [getIsMember](_structures_group_.partialgroup.md#getismember)
* [getIsPendingJoin](_structures_group_.partialgroup.md#getispendingjoin)
* [getIsUserPrimaryGroup](_structures_group_.partialgroup.md#getisuserprimarygroup)
* [getJoinRequest](_structures_group_.partialgroup.md#getjoinrequest)
* [getJoinRequests](_structures_group_.partialgroup.md#getjoinrequests)
* [getMembers](_structures_group_.partialgroup.md#getmembers)
* [getMembersWithRole](_structures_group_.partialgroup.md#getmemberswithrole)
* [getPayouts](_structures_group_.partialgroup.md#getpayouts)
* [getRelationshipRequests](_structures_group_.partialgroup.md#getrelationshiprequests)
* [getRelationships](_structures_group_.partialgroup.md#getrelationships)
* [getRevenueSummaryInTimeFrame](_structures_group_.partialgroup.md#getrevenuesummaryintimeframe)
* [getRolePermissions](_structures_group_.partialgroup.md#getrolepermissions)
* [getRoles](_structures_group_.partialgroup.md#getroles)
* [getSelfMembership](_structures_group_.partialgroup.md#getselfmembership)
* [getSettings](_structures_group_.partialgroup.md#getsettings)
* [getSocialLinks](_structures_group_.partialgroup.md#getsociallinks)
* [getTransactions](_structures_group_.partialgroup.md#gettransactions)
* [getUniverses](_structures_group_.partialgroup.md#getuniverses)
* [getWallPosts](_structures_group_.partialgroup.md#getwallposts)
* [join](_structures_group_.partialgroup.md#join)
* [kickMember](_structures_group_.partialgroup.md#kickmember)
* [payoutMembers](_structures_group_.partialgroup.md#payoutmembers)
* [removeAsPrimary](_structures_group_.partialgroup.md#removeasprimary)
* [setAsPrimary](_structures_group_.partialgroup.md#setasprimary)
* [updateDescription](_structures_group_.partialgroup.md#updatedescription)
* [updateIcon](_structures_group_.partialgroup.md#updateicon)
* [updateMember](_structures_group_.partialgroup.md#updatemember)
* [updateRecurringPayouts](_structures_group_.partialgroup.md#updaterecurringpayouts)
* [updateRole](_structures_group_.partialgroup.md#updaterole)
* [updateRolePermissions](_structures_group_.partialgroup.md#updaterolepermissions)
* [updateSettings](_structures_group_.partialgroup.md#updatesettings)
* [updateShout](_structures_group_.partialgroup.md#updateshout)
* [updateSocialLink](_structures_group_.partialgroup.md#updatesociallink)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new PartialGroup**(`data`: [PartialGroupOptions](../interfaces/_structures_group_.partialgroupoptions.md), `client`: [Client](_client_client_.client.md)): *[PartialGroup](_structures_group_.partialgroup.md)*

*Overrides [GroupBase](_structures_group_.groupbase.md).[constructor](_structures_group_.groupbase.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [PartialGroupOptions](../interfaces/_structures_group_.partialgroupoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[PartialGroup](_structures_group_.partialgroup.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[client](_structures_group_.groupbase.md#client)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[id](_structures_group_.groupbase.md#id)*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[name](_structures_group_.groupbase.md#name)*

## Methods

### <a id="acceptjoinrequest" name="acceptjoinrequest"></a>  acceptJoinRequest

▸ **acceptJoinRequest**(`userId`: number): *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[acceptJoinRequest](_structures_group_.groupbase.md#acceptjoinrequest)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

___

### <a id="acceptjoinrequests" name="acceptjoinrequests"></a>  acceptJoinRequests

▸ **acceptJoinRequests**(`options`: Omit‹[AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions), "groupId"›): *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[acceptJoinRequests](_structures_group_.groupbase.md#acceptjoinrequests)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions), "groupId"› |

**Returns:** *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

___

### <a id="acceptrelationshiprequest" name="acceptrelationshiprequest"></a>  acceptRelationshipRequest

▸ **acceptRelationshipRequest**(`type`: "enemies" | "allies", `withGroup`: number): *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[acceptRelationshipRequest](_structures_group_.groupbase.md#acceptrelationshiprequest)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "enemies" &#124; "allies" |
`withGroup` | number |

**Returns:** *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

___

### <a id="acceptrelationshiprequests" name="acceptrelationshiprequests"></a>  acceptRelationshipRequests

▸ **acceptRelationshipRequests**(`options`: Omit‹[AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions), "groupId"›): *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[acceptRelationshipRequests](_structures_group_.groupbase.md#acceptrelationshiprequests)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

___

### <a id="canselfmanage" name="canselfmanage"></a>  canSelfManage

▸ **canSelfManage**(): *Promise‹boolean›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[canSelfManage](_structures_group_.groupbase.md#canselfmanage)*

Returns whether the authenticated user can manage the group or not

**Returns:** *Promise‹boolean›*

___

### <a id="changeowner" name="changeowner"></a>  changeOwner

▸ **changeOwner**(`userId`: number): *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[changeOwner](_structures_group_.groupbase.md#changeowner)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

___

### <a id="claim" name="claim"></a>  claim

▸ **claim**(): *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[claim](_structures_group_.groupbase.md#claim)*

**Returns:** *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

___

### <a id="createrelationship" name="createrelationship"></a>  createRelationship

▸ **createRelationship**(`options`: Omit‹[CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions), "groupId"›): *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[createRelationship](_structures_group_.groupbase.md#createrelationship)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions), "groupId"› |

**Returns:** *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

___

### <a id="createrole" name="createrole"></a>  createRole

▸ **createRole**(`options`: Omit‹[CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions), "groupId"›): *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[createRole](_structures_group_.groupbase.md#createrole)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions), "groupId"› |

**Returns:** *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

___

### <a id="createsociallink" name="createsociallink"></a>  createSocialLink

▸ **createSocialLink**(`options`: Omit‹[PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions), "groupId"›): *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[createSocialLink](_structures_group_.groupbase.md#createsociallink)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions), "groupId"› |

**Returns:** *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

___

### <a id="createwallpost" name="createwallpost"></a>  createWallPost

▸ **createWallPost**(`options`: Omit‹[CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions), "groupId"›): *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[createWallPost](_structures_group_.groupbase.md#createwallpost)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions), "groupId"› |

**Returns:** *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

___

### <a id="declinejoinrequest" name="declinejoinrequest"></a>  declineJoinRequest

▸ **declineJoinRequest**(`userId`: number): *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[declineJoinRequest](_structures_group_.groupbase.md#declinejoinrequest)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

___

### <a id="declinejoinrequests" name="declinejoinrequests"></a>  declineJoinRequests

▸ **declineJoinRequests**(`userIds`: number[]): *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[declineJoinRequests](_structures_group_.groupbase.md#declinejoinrequests)*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | number[] |

**Returns:** *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

___

### <a id="declinerelationshiprequest" name="declinerelationshiprequest"></a>  declineRelationshipRequest

▸ **declineRelationshipRequest**(`type`: "enemies" | "allies", `withGroup`: number): *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[declineRelationshipRequest](_structures_group_.groupbase.md#declinerelationshiprequest)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "enemies" &#124; "allies" |
`withGroup` | number |

**Returns:** *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

___

### <a id="declinerelationshiprequests" name="declinerelationshiprequests"></a>  declineRelationshipRequests

▸ **declineRelationshipRequests**(`options`: Omit‹[DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions), "groupId"›): *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[declineRelationshipRequests](_structures_group_.groupbase.md#declinerelationshiprequests)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

___

### <a id="deleterelationship" name="deleterelationship"></a>  deleteRelationship

▸ **deleteRelationship**(`options`: Omit‹[DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions), "groupId"›): *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[deleteRelationship](_structures_group_.groupbase.md#deleterelationship)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions), "groupId"› |

**Returns:** *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

___

### <a id="deleterole" name="deleterole"></a>  deleteRole

▸ **deleteRole**(`roleId`: number): *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[deleteRole](_structures_group_.groupbase.md#deleterole)*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |

**Returns:** *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

___

### <a id="deletesociallink" name="deletesociallink"></a>  deleteSocialLink

▸ **deleteSocialLink**(`id`: number): *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[deleteSocialLink](_structures_group_.groupbase.md#deletesociallink)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

___

### <a id="deletewallpost" name="deletewallpost"></a>  deleteWallPost

▸ **deleteWallPost**(`id`: number): *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[deleteWallPost](_structures_group_.groupbase.md#deletewallpost)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

___

### <a id="getallrolespermissions" name="getallrolespermissions"></a>  getAllRolesPermissions

▸ **getAllRolesPermissions**(): *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getAllRolesPermissions](_structures_group_.groupbase.md#getallrolespermissions)*

**Returns:** *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

___

### <a id="getallies" name="getallies"></a>  getAllies

▸ **getAllies**(`maxItems`: number, `startItem?`: undefined | number): *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"allies"››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getAllies](_structures_group_.groupbase.md#getallies)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxItems` | number | 100 |
`startItem?` | undefined &#124; number | - |

**Returns:** *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"allies"››*

___

### <a id="getenemies" name="getenemies"></a>  getEnemies

▸ **getEnemies**(`maxItems`: number, `startItem?`: undefined | number): *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"enemies"››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getEnemies](_structures_group_.groupbase.md#getenemies)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxItems` | number | 100 |
`startItem?` | undefined &#124; number | - |

**Returns:** *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"enemies"››*

___

### <a id="getfunds" name="getfunds"></a>  getFunds

▸ **getFunds**(): *Promise‹number›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getFunds](_structures_group_.groupbase.md#getfunds)*

Gets the currently available funds in the group

**Returns:** *Promise‹number›*

___

### <a id="getgroup" name="getgroup"></a>  getGroup

▸ **getGroup**(): *Promise‹[Group](_structures_group_.group.md)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getGroup](_structures_group_.groupbase.md#getgroup)*

**Returns:** *Promise‹[Group](_structures_group_.group.md)›*

___

### <a id="getguestpermissions" name="getguestpermissions"></a>  getGuestPermissions

▸ **getGuestPermissions**(): *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getGuestPermissions](_structures_group_.groupbase.md#getguestpermissions)*

**Returns:** *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

___

### <a id="getismember" name="getismember"></a>  getIsMember

▸ **getIsMember**(`userId`: number): *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getIsMember](_structures_group_.groupbase.md#getismember)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

___

### <a id="getispendingjoin" name="getispendingjoin"></a>  getIsPendingJoin

▸ **getIsPendingJoin**(): *Promise‹boolean›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getIsPendingJoin](_structures_group_.groupbase.md#getispendingjoin)*

**Returns:** *Promise‹boolean›*

___

### <a id="getisuserprimarygroup" name="getisuserprimarygroup"></a>  getIsUserPrimaryGroup

▸ **getIsUserPrimaryGroup**(`userId`: number): *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getIsUserPrimaryGroup](_structures_group_.groupbase.md#getisuserprimarygroup)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

___

### <a id="getjoinrequest" name="getjoinrequest"></a>  getJoinRequest

▸ **getJoinRequest**(`userId`: number): *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getJoinRequest](_structures_group_.groupbase.md#getjoinrequest)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

___

### <a id="getjoinrequests" name="getjoinrequests"></a>  getJoinRequests

▸ **getJoinRequests**(`options`: Omit‹[GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupJoinRequest](_structures_group_.groupjoinrequest.md)››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getJoinRequests](_structures_group_.groupbase.md#getjoinrequests)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupJoinRequest](_structures_group_.groupjoinrequest.md)››*

___

### <a id="getmembers" name="getmembers"></a>  getMembers

▸ **getMembers**(`options`: Omit‹[GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getMembers](_structures_group_.groupbase.md#getmembers)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

___

### <a id="getmemberswithrole" name="getmemberswithrole"></a>  getMembersWithRole

▸ **getMembersWithRole**(`options`: Omit‹[GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getMembersWithRole](_structures_group_.groupbase.md#getmemberswithrole)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

___

### <a id="getpayouts" name="getpayouts"></a>  getPayouts

▸ **getPayouts**(): *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getPayouts](_structures_group_.groupbase.md#getpayouts)*

**Returns:** *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

___

### <a id="getrelationshiprequests" name="getrelationshiprequests"></a>  getRelationshipRequests

▸ **getRelationshipRequests**(`options`: Omit‹[GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions), "groupId"›): *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getRelationshipRequests](_structures_group_.groupbase.md#getrelationshiprequests)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

___

### <a id="getrelationships" name="getrelationships"></a>  getRelationships

▸ **getRelationships**(`options`: Omit‹[GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions), "groupId"›): *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getRelationships](_structures_group_.groupbase.md#getrelationships)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions), "groupId"› |

**Returns:** *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

___

### <a id="getrevenuesummaryintimeframe" name="getrevenuesummaryintimeframe"></a>  getRevenueSummaryInTimeFrame

▸ **getRevenueSummaryInTimeFrame**(`timeFrame`: GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]): *Promise‹[GetGroupRevenueSummaryInTimeFrame](../modules/_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getRevenueSummaryInTimeFrame](_structures_group_.groupbase.md#getrevenuesummaryintimeframe)*

**Parameters:**

Name | Type |
------ | ------ |
`timeFrame` | GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"] |

**Returns:** *Promise‹[GetGroupRevenueSummaryInTimeFrame](../modules/_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)›*

___

### <a id="getrolepermissions" name="getrolepermissions"></a>  getRolePermissions

▸ **getRolePermissions**(`roleId`: number): *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getRolePermissions](_structures_group_.groupbase.md#getrolepermissions)*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |

**Returns:** *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

___

### <a id="getroles" name="getroles"></a>  getRoles

▸ **getRoles**(): *Promise‹[GroupRole](_structures_group_.grouprole.md)[]›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getRoles](_structures_group_.groupbase.md#getroles)*

**Returns:** *Promise‹[GroupRole](_structures_group_.grouprole.md)[]›*

___

### <a id="getselfmembership" name="getselfmembership"></a>  getSelfMembership

▸ **getSelfMembership**(): *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getSelfMembership](_structures_group_.groupbase.md#getselfmembership)*

**Returns:** *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

___

### <a id="getsettings" name="getsettings"></a>  getSettings

▸ **getSettings**(): *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getSettings](_structures_group_.groupbase.md#getsettings)*

**Returns:** *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

___

### <a id="getsociallinks" name="getsociallinks"></a>  getSocialLinks

▸ **getSocialLinks**(): *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getSocialLinks](_structures_group_.groupbase.md#getsociallinks)*

**Returns:** *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

___

### <a id="gettransactions" name="gettransactions"></a>  getTransactions

▸ **getTransactions**(`options`: Omit‹[GetGroupTransactionsOptions](../modules/_client_apis_economyapi_.md#getgrouptransactionsoptions), "groupId"›): *Promise‹[GetGroupTransactions](../modules/_client_apis_economyapi_.md#getgrouptransactions)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getTransactions](_structures_group_.groupbase.md#gettransactions)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGroupTransactionsOptions](../modules/_client_apis_economyapi_.md#getgrouptransactionsoptions), "groupId"› |

**Returns:** *Promise‹[GetGroupTransactions](../modules/_client_apis_economyapi_.md#getgrouptransactions)›*

___

### <a id="getuniverses" name="getuniverses"></a>  getUniverses

▸ **getUniverses**(`options?`: Omit‹[GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[PartialGameUniverse](_structures_game_.partialgameuniverse.md)››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getUniverses](_structures_group_.groupbase.md#getuniverses)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[PartialGameUniverse](_structures_game_.partialgameuniverse.md)››*

___

### <a id="getwallposts" name="getwallposts"></a>  getWallPosts

▸ **getWallPosts**(`options`: Omit‹[GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupWallPost](_structures_group_.groupwallpost.md)››*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[getWallPosts](_structures_group_.groupbase.md#getwallposts)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupWallPost](_structures_group_.groupwallpost.md)››*

___

### <a id="join" name="join"></a>  join

▸ **join**(`options`: Omit‹[JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions), "groupId"›): *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[join](_structures_group_.groupbase.md#join)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions), "groupId"› |

**Returns:** *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

___

### <a id="kickmember" name="kickmember"></a>  kickMember

▸ **kickMember**(`userId`: number): *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[kickMember](_structures_group_.groupbase.md#kickmember)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

___

### <a id="payoutmembers" name="payoutmembers"></a>  payoutMembers

▸ **payoutMembers**(`options`: Omit‹[PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions), "groupId"›): *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[payoutMembers](_structures_group_.groupbase.md#payoutmembers)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions), "groupId"› |

**Returns:** *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

___

### <a id="removeasprimary" name="removeasprimary"></a>  removeAsPrimary

▸ **removeAsPrimary**(): *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[removeAsPrimary](_structures_group_.groupbase.md#removeasprimary)*

**Returns:** *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

___

### <a id="setasprimary" name="setasprimary"></a>  setAsPrimary

▸ **setAsPrimary**(): *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[setAsPrimary](_structures_group_.groupbase.md#setasprimary)*

**Returns:** *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

___

### <a id="updatedescription" name="updatedescription"></a>  updateDescription

▸ **updateDescription**(`description`: string): *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateDescription](_structures_group_.groupbase.md#updatedescription)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | string |

**Returns:** *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

___

### <a id="updateicon" name="updateicon"></a>  updateIcon

▸ **updateIcon**(`file`: unknown): *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateIcon](_structures_group_.groupbase.md#updateicon)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | unknown |

**Returns:** *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

___

### <a id="updatemember" name="updatemember"></a>  updateMember

▸ **updateMember**(`userId`: number, `roleId`: number): *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateMember](_structures_group_.groupbase.md#updatemember)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |
`roleId` | number |

**Returns:** *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

___

### <a id="updaterecurringpayouts" name="updaterecurringpayouts"></a>  updateRecurringPayouts

▸ **updateRecurringPayouts**(`options`: Omit‹[UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions), "groupId"›): *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateRecurringPayouts](_structures_group_.groupbase.md#updaterecurringpayouts)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions), "groupId"› |

**Returns:** *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

___

### <a id="updaterole" name="updaterole"></a>  updateRole

▸ **updateRole**(`roleId`: number, `options`: Omit‹[UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions), "groupId" | "roleId"›): *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateRole](_structures_group_.groupbase.md#updaterole)*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |
`options` | Omit‹[UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions), "groupId" &#124; "roleId"› |

**Returns:** *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

___

### <a id="updaterolepermissions" name="updaterolepermissions"></a>  updateRolePermissions

▸ **updateRolePermissions**(`roleId`: number, `permissions`: Omit‹[UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions), "groupId" | "roleId"›): *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateRolePermissions](_structures_group_.groupbase.md#updaterolepermissions)*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |
`permissions` | Omit‹[UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions), "groupId" &#124; "roleId"› |

**Returns:** *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

___

### <a id="updatesettings" name="updatesettings"></a>  updateSettings

▸ **updateSettings**(`options`: Omit‹[UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions), "groupId"›): *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateSettings](_structures_group_.groupbase.md#updatesettings)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions), "groupId"› |

**Returns:** *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

___

### <a id="updateshout" name="updateshout"></a>  updateShout

▸ **updateShout**(`shout`: string): *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateShout](_structures_group_.groupbase.md#updateshout)*

**Parameters:**

Name | Type |
------ | ------ |
`shout` | string |

**Returns:** *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

___

### <a id="updatesociallink" name="updatesociallink"></a>  updateSocialLink

▸ **updateSocialLink**(`options`: Omit‹[UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions), "groupId"›): *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*

*Inherited from [GroupBase](_structures_group_.groupbase.md).[updateSocialLink](_structures_group_.groupbase.md#updatesociallink)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions), "groupId"› |

**Returns:** *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*
