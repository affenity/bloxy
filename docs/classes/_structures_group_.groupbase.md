
# Class: GroupBase

## Hierarchy

* **GroupBase**

  ↳ [PartialGroup](_structures_group_.partialgroup.md)

  ↳ [Group](_structures_group_.group.md)

## Index

### Constructors

* [constructor](_structures_group_.groupbase.md#constructor)

### Properties

* [client](_structures_group_.groupbase.md#client)
* [id](_structures_group_.groupbase.md#id)
* [name](_structures_group_.groupbase.md#name)

### Methods

* [acceptJoinRequest](_structures_group_.groupbase.md#acceptjoinrequest)
* [acceptJoinRequests](_structures_group_.groupbase.md#acceptjoinrequests)
* [acceptRelationshipRequest](_structures_group_.groupbase.md#acceptrelationshiprequest)
* [acceptRelationshipRequests](_structures_group_.groupbase.md#acceptrelationshiprequests)
* [canSelfManage](_structures_group_.groupbase.md#canselfmanage)
* [changeOwner](_structures_group_.groupbase.md#changeowner)
* [claim](_structures_group_.groupbase.md#claim)
* [createRelationship](_structures_group_.groupbase.md#createrelationship)
* [createRole](_structures_group_.groupbase.md#createrole)
* [createSocialLink](_structures_group_.groupbase.md#createsociallink)
* [createWallPost](_structures_group_.groupbase.md#createwallpost)
* [declineJoinRequest](_structures_group_.groupbase.md#declinejoinrequest)
* [declineJoinRequests](_structures_group_.groupbase.md#declinejoinrequests)
* [declineRelationshipRequest](_structures_group_.groupbase.md#declinerelationshiprequest)
* [declineRelationshipRequests](_structures_group_.groupbase.md#declinerelationshiprequests)
* [deleteRelationship](_structures_group_.groupbase.md#deleterelationship)
* [deleteRole](_structures_group_.groupbase.md#deleterole)
* [deleteSocialLink](_structures_group_.groupbase.md#deletesociallink)
* [deleteWallPost](_structures_group_.groupbase.md#deletewallpost)
* [getAllRolesPermissions](_structures_group_.groupbase.md#getallrolespermissions)
* [getAllies](_structures_group_.groupbase.md#getallies)
* [getEnemies](_structures_group_.groupbase.md#getenemies)
* [getFunds](_structures_group_.groupbase.md#getfunds)
* [getGroup](_structures_group_.groupbase.md#getgroup)
* [getGuestPermissions](_structures_group_.groupbase.md#getguestpermissions)
* [getIsMember](_structures_group_.groupbase.md#getismember)
* [getIsPendingJoin](_structures_group_.groupbase.md#getispendingjoin)
* [getIsUserPrimaryGroup](_structures_group_.groupbase.md#getisuserprimarygroup)
* [getJoinRequest](_structures_group_.groupbase.md#getjoinrequest)
* [getJoinRequests](_structures_group_.groupbase.md#getjoinrequests)
* [getMembers](_structures_group_.groupbase.md#getmembers)
* [getMembersWithRole](_structures_group_.groupbase.md#getmemberswithrole)
* [getPayouts](_structures_group_.groupbase.md#getpayouts)
* [getRelationshipRequests](_structures_group_.groupbase.md#getrelationshiprequests)
* [getRelationships](_structures_group_.groupbase.md#getrelationships)
* [getRevenueSummaryInTimeFrame](_structures_group_.groupbase.md#getrevenuesummaryintimeframe)
* [getRolePermissions](_structures_group_.groupbase.md#getrolepermissions)
* [getRoles](_structures_group_.groupbase.md#getroles)
* [getSelfMembership](_structures_group_.groupbase.md#getselfmembership)
* [getSettings](_structures_group_.groupbase.md#getsettings)
* [getSocialLinks](_structures_group_.groupbase.md#getsociallinks)
* [getTransactions](_structures_group_.groupbase.md#gettransactions)
* [getUniverses](_structures_group_.groupbase.md#getuniverses)
* [getWallPosts](_structures_group_.groupbase.md#getwallposts)
* [join](_structures_group_.groupbase.md#join)
* [kickMember](_structures_group_.groupbase.md#kickmember)
* [payoutMembers](_structures_group_.groupbase.md#payoutmembers)
* [removeAsPrimary](_structures_group_.groupbase.md#removeasprimary)
* [setAsPrimary](_structures_group_.groupbase.md#setasprimary)
* [updateDescription](_structures_group_.groupbase.md#updatedescription)
* [updateIcon](_structures_group_.groupbase.md#updateicon)
* [updateMember](_structures_group_.groupbase.md#updatemember)
* [updateRecurringPayouts](_structures_group_.groupbase.md#updaterecurringpayouts)
* [updateRole](_structures_group_.groupbase.md#updaterole)
* [updateRolePermissions](_structures_group_.groupbase.md#updaterolepermissions)
* [updateSettings](_structures_group_.groupbase.md#updatesettings)
* [updateShout](_structures_group_.groupbase.md#updateshout)
* [updateSocialLink](_structures_group_.groupbase.md#updatesociallink)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GroupBase**(`data`: [GroupBaseOptions](../interfaces/_structures_group_.groupbaseoptions.md), `client`: [Client](_client_client_.client.md)): *[GroupBase](_structures_group_.groupbase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [GroupBaseOptions](../interfaces/_structures_group_.groupbaseoptions.md) |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GroupBase](_structures_group_.groupbase.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

___

### <a id="id" name="id"></a>  id

• **id**: *number*

___

### <a id="name" name="name"></a>  name

• **name**: *string | null*

## Methods

### <a id="acceptjoinrequest" name="acceptjoinrequest"></a>  acceptJoinRequest

▸ **acceptJoinRequest**(`userId`: number): *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

___

### <a id="acceptjoinrequests" name="acceptjoinrequests"></a>  acceptJoinRequests

▸ **acceptJoinRequests**(`options`: Omit‹[AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions), "groupId"›): *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions), "groupId"› |

**Returns:** *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

___

### <a id="acceptrelationshiprequest" name="acceptrelationshiprequest"></a>  acceptRelationshipRequest

▸ **acceptRelationshipRequest**(`type`: "enemies" | "allies", `withGroup`: number): *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "enemies" &#124; "allies" |
`withGroup` | number |

**Returns:** *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

___

### <a id="acceptrelationshiprequests" name="acceptrelationshiprequests"></a>  acceptRelationshipRequests

▸ **acceptRelationshipRequests**(`options`: Omit‹[AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions), "groupId"›): *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

___

### <a id="canselfmanage" name="canselfmanage"></a>  canSelfManage

▸ **canSelfManage**(): *Promise‹boolean›*

Returns whether the authenticated user can manage the group or not

**Returns:** *Promise‹boolean›*

___

### <a id="changeowner" name="changeowner"></a>  changeOwner

▸ **changeOwner**(`userId`: number): *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

___

### <a id="claim" name="claim"></a>  claim

▸ **claim**(): *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

**Returns:** *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

___

### <a id="createrelationship" name="createrelationship"></a>  createRelationship

▸ **createRelationship**(`options`: Omit‹[CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions), "groupId"›): *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions), "groupId"› |

**Returns:** *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

___

### <a id="createrole" name="createrole"></a>  createRole

▸ **createRole**(`options`: Omit‹[CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions), "groupId"›): *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions), "groupId"› |

**Returns:** *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

___

### <a id="createsociallink" name="createsociallink"></a>  createSocialLink

▸ **createSocialLink**(`options`: Omit‹[PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions), "groupId"›): *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions), "groupId"› |

**Returns:** *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

___

### <a id="createwallpost" name="createwallpost"></a>  createWallPost

▸ **createWallPost**(`options`: Omit‹[CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions), "groupId"›): *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions), "groupId"› |

**Returns:** *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

___

### <a id="declinejoinrequest" name="declinejoinrequest"></a>  declineJoinRequest

▸ **declineJoinRequest**(`userId`: number): *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

___

### <a id="declinejoinrequests" name="declinejoinrequests"></a>  declineJoinRequests

▸ **declineJoinRequests**(`userIds`: number[]): *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`userIds` | number[] |

**Returns:** *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

___

### <a id="declinerelationshiprequest" name="declinerelationshiprequest"></a>  declineRelationshipRequest

▸ **declineRelationshipRequest**(`type`: "enemies" | "allies", `withGroup`: number): *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`type` | "enemies" &#124; "allies" |
`withGroup` | number |

**Returns:** *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

___

### <a id="declinerelationshiprequests" name="declinerelationshiprequests"></a>  declineRelationshipRequests

▸ **declineRelationshipRequests**(`options`: Omit‹[DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions), "groupId"›): *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

___

### <a id="deleterelationship" name="deleterelationship"></a>  deleteRelationship

▸ **deleteRelationship**(`options`: Omit‹[DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions), "groupId"›): *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions), "groupId"› |

**Returns:** *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

___

### <a id="deleterole" name="deleterole"></a>  deleteRole

▸ **deleteRole**(`roleId`: number): *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |

**Returns:** *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

___

### <a id="deletesociallink" name="deletesociallink"></a>  deleteSocialLink

▸ **deleteSocialLink**(`id`: number): *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

___

### <a id="deletewallpost" name="deletewallpost"></a>  deleteWallPost

▸ **deleteWallPost**(`id`: number): *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

___

### <a id="getallrolespermissions" name="getallrolespermissions"></a>  getAllRolesPermissions

▸ **getAllRolesPermissions**(): *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

**Returns:** *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

___

### <a id="getallies" name="getallies"></a>  getAllies

▸ **getAllies**(`maxItems`: number, `startItem?`: undefined | number): *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"allies"››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxItems` | number | 100 |
`startItem?` | undefined &#124; number | - |

**Returns:** *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"allies"››*

___

### <a id="getenemies" name="getenemies"></a>  getEnemies

▸ **getEnemies**(`maxItems`: number, `startItem?`: undefined | number): *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"enemies"››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxItems` | number | 100 |
`startItem?` | undefined &#124; number | - |

**Returns:** *Promise‹[GroupRelationships](../modules/_structures_group_.md#grouprelationships)‹"enemies"››*

___

### <a id="getfunds" name="getfunds"></a>  getFunds

▸ **getFunds**(): *Promise‹number›*

Gets the currently available funds in the group

**Returns:** *Promise‹number›*

___

### <a id="getgroup" name="getgroup"></a>  getGroup

▸ **getGroup**(): *Promise‹[Group](_structures_group_.group.md)›*

**Returns:** *Promise‹[Group](_structures_group_.group.md)›*

___

### <a id="getguestpermissions" name="getguestpermissions"></a>  getGuestPermissions

▸ **getGuestPermissions**(): *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

**Returns:** *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

___

### <a id="getismember" name="getismember"></a>  getIsMember

▸ **getIsMember**(`userId`: number): *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

___

### <a id="getispendingjoin" name="getispendingjoin"></a>  getIsPendingJoin

▸ **getIsPendingJoin**(): *Promise‹boolean›*

**Returns:** *Promise‹boolean›*

___

### <a id="getisuserprimarygroup" name="getisuserprimarygroup"></a>  getIsUserPrimaryGroup

▸ **getIsUserPrimaryGroup**(`userId`: number): *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GroupMember](_structures_group_.groupmember.md) | null›*

___

### <a id="getjoinrequest" name="getjoinrequest"></a>  getJoinRequest

▸ **getJoinRequest**(`userId`: number): *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

___

### <a id="getjoinrequests" name="getjoinrequests"></a>  getJoinRequests

▸ **getJoinRequests**(`options`: Omit‹[GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupJoinRequest](_structures_group_.groupjoinrequest.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupJoinRequest](_structures_group_.groupjoinrequest.md)››*

___

### <a id="getmembers" name="getmembers"></a>  getMembers

▸ **getMembers**(`options`: Omit‹[GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

___

### <a id="getmemberswithrole" name="getmemberswithrole"></a>  getMembersWithRole

▸ **getMembersWithRole**(`options`: Omit‹[GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupMember](_structures_group_.groupmember.md)››*

___

### <a id="getpayouts" name="getpayouts"></a>  getPayouts

▸ **getPayouts**(): *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

**Returns:** *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

___

### <a id="getrelationshiprequests" name="getrelationshiprequests"></a>  getRelationshipRequests

▸ **getRelationshipRequests**(`options`: Omit‹[GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions), "groupId"›): *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions), "groupId"› |

**Returns:** *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

___

### <a id="getrelationships" name="getrelationships"></a>  getRelationships

▸ **getRelationships**(`options`: Omit‹[GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions), "groupId"›): *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions), "groupId"› |

**Returns:** *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

___

### <a id="getrevenuesummaryintimeframe" name="getrevenuesummaryintimeframe"></a>  getRevenueSummaryInTimeFrame

▸ **getRevenueSummaryInTimeFrame**(`timeFrame`: GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"]): *Promise‹[GetGroupRevenueSummaryInTimeFrame](../modules/_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)›*

**Parameters:**

Name | Type |
------ | ------ |
`timeFrame` | GetGroupRevenueSummaryInTimeFrameOptions["timeFrame"] |

**Returns:** *Promise‹[GetGroupRevenueSummaryInTimeFrame](../modules/_client_apis_economyapi_.md#getgrouprevenuesummaryintimeframe)›*

___

### <a id="getrolepermissions" name="getrolepermissions"></a>  getRolePermissions

▸ **getRolePermissions**(`roleId`: number): *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |

**Returns:** *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

___

### <a id="getroles" name="getroles"></a>  getRoles

▸ **getRoles**(): *Promise‹[GroupRole](_structures_group_.grouprole.md)[]›*

**Returns:** *Promise‹[GroupRole](_structures_group_.grouprole.md)[]›*

___

### <a id="getselfmembership" name="getselfmembership"></a>  getSelfMembership

▸ **getSelfMembership**(): *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

**Returns:** *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

___

### <a id="getsettings" name="getsettings"></a>  getSettings

▸ **getSettings**(): *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

**Returns:** *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

___

### <a id="getsociallinks" name="getsociallinks"></a>  getSocialLinks

▸ **getSocialLinks**(): *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

**Returns:** *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

___

### <a id="gettransactions" name="gettransactions"></a>  getTransactions

▸ **getTransactions**(`options`: Omit‹[GetGroupTransactionsOptions](../modules/_client_apis_economyapi_.md#getgrouptransactionsoptions), "groupId"›): *Promise‹[GetGroupTransactions](../modules/_client_apis_economyapi_.md#getgrouptransactions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetGroupTransactionsOptions](../modules/_client_apis_economyapi_.md#getgrouptransactionsoptions), "groupId"› |

**Returns:** *Promise‹[GetGroupTransactions](../modules/_client_apis_economyapi_.md#getgrouptransactions)›*

___

### <a id="getuniverses" name="getuniverses"></a>  getUniverses

▸ **getUniverses**(`options?`: Omit‹[GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[PartialGameUniverse](_structures_game_.partialgameuniverse.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | Omit‹[GetGroupUniversesOptions](../modules/_client_apis_developapi_.md#getgroupuniversesoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[PartialGameUniverse](_structures_game_.partialgameuniverse.md)››*

___

### <a id="getwallposts" name="getwallposts"></a>  getWallPosts

▸ **getWallPosts**(`options`: Omit‹[GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions), "groupId"›): *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupWallPost](_structures_group_.groupwallpost.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions), "groupId"› |

**Returns:** *Promise‹[CursorPage](_structures_asset_.cursorpage.md)‹[GroupWallPost](_structures_group_.groupwallpost.md)››*

___

### <a id="join" name="join"></a>  join

▸ **join**(`options`: Omit‹[JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions), "groupId"›): *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions), "groupId"› |

**Returns:** *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

___

### <a id="kickmember" name="kickmember"></a>  kickMember

▸ **kickMember**(`userId`: number): *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |

**Returns:** *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

___

### <a id="payoutmembers" name="payoutmembers"></a>  payoutMembers

▸ **payoutMembers**(`options`: Omit‹[PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions), "groupId"›): *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions), "groupId"› |

**Returns:** *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

___

### <a id="removeasprimary" name="removeasprimary"></a>  removeAsPrimary

▸ **removeAsPrimary**(): *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

**Returns:** *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

___

### <a id="setasprimary" name="setasprimary"></a>  setAsPrimary

▸ **setAsPrimary**(): *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

**Returns:** *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

___

### <a id="updatedescription" name="updatedescription"></a>  updateDescription

▸ **updateDescription**(`description`: string): *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

**Parameters:**

Name | Type |
------ | ------ |
`description` | string |

**Returns:** *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

___

### <a id="updateicon" name="updateicon"></a>  updateIcon

▸ **updateIcon**(`file`: unknown): *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

**Parameters:**

Name | Type |
------ | ------ |
`file` | unknown |

**Returns:** *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

___

### <a id="updatemember" name="updatemember"></a>  updateMember

▸ **updateMember**(`userId`: number, `roleId`: number): *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | number |
`roleId` | number |

**Returns:** *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

___

### <a id="updaterecurringpayouts" name="updaterecurringpayouts"></a>  updateRecurringPayouts

▸ **updateRecurringPayouts**(`options`: Omit‹[UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions), "groupId"›): *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions), "groupId"› |

**Returns:** *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

___

### <a id="updaterole" name="updaterole"></a>  updateRole

▸ **updateRole**(`roleId`: number, `options`: Omit‹[UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions), "groupId" | "roleId"›): *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |
`options` | Omit‹[UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions), "groupId" &#124; "roleId"› |

**Returns:** *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

___

### <a id="updaterolepermissions" name="updaterolepermissions"></a>  updateRolePermissions

▸ **updateRolePermissions**(`roleId`: number, `permissions`: Omit‹[UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions), "groupId" | "roleId"›): *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`roleId` | number |
`permissions` | Omit‹[UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions), "groupId" &#124; "roleId"› |

**Returns:** *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

___

### <a id="updatesettings" name="updatesettings"></a>  updateSettings

▸ **updateSettings**(`options`: Omit‹[UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions), "groupId"›): *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions), "groupId"› |

**Returns:** *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

___

### <a id="updateshout" name="updateshout"></a>  updateShout

▸ **updateShout**(`shout`: string): *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`shout` | string |

**Returns:** *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

___

### <a id="updatesociallink" name="updatesociallink"></a>  updateSocialLink

▸ **updateSocialLink**(`options`: Omit‹[UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions), "groupId"›): *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | Omit‹[UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions), "groupId"› |

**Returns:** *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*
