
# Class: GroupsAPI

## Hierarchy

* [BaseAPI](_client_apis_baseapi_.baseapi.md)

  ↳ **GroupsAPI**

## Index

### Constructors

* [constructor](_client_apis_groupsapi_.groupsapi.md#constructor)

### Properties

* [client](_client_apis_groupsapi_.groupsapi.md#client)
* [options](_client_apis_groupsapi_.groupsapi.md#options)

### Methods

* [acceptJoinRequest](_client_apis_groupsapi_.groupsapi.md#acceptjoinrequest)
* [acceptJoinRequests](_client_apis_groupsapi_.groupsapi.md#acceptjoinrequests)
* [acceptRelationshipRequest](_client_apis_groupsapi_.groupsapi.md#acceptrelationshiprequest)
* [acceptRelationshipRequests](_client_apis_groupsapi_.groupsapi.md#acceptrelationshiprequests)
* [changeGroupOwner](_client_apis_groupsapi_.groupsapi.md#changegroupowner)
* [claimGroup](_client_apis_groupsapi_.groupsapi.md#claimgroup)
* [createGroup](_client_apis_groupsapi_.groupsapi.md#creategroup)
* [createRelationship](_client_apis_groupsapi_.groupsapi.md#createrelationship)
* [createRole](_client_apis_groupsapi_.groupsapi.md#createrole)
* [createSocialLink](_client_apis_groupsapi_.groupsapi.md#createsociallink)
* [createWallPost](_client_apis_groupsapi_.groupsapi.md#createwallpost)
* [declineJoinRequest](_client_apis_groupsapi_.groupsapi.md#declinejoinrequest)
* [declineJoinRequests](_client_apis_groupsapi_.groupsapi.md#declinejoinrequests)
* [declineRelationshipRequest](_client_apis_groupsapi_.groupsapi.md#declinerelationshiprequest)
* [declineRelationshipRequests](_client_apis_groupsapi_.groupsapi.md#declinerelationshiprequests)
* [deleteRelationship](_client_apis_groupsapi_.groupsapi.md#deleterelationship)
* [deleteRole](_client_apis_groupsapi_.groupsapi.md#deleterole)
* [deleteSocialLink](_client_apis_groupsapi_.groupsapi.md#deletesociallink)
* [deleteUserWallPosts](_client_apis_groupsapi_.groupsapi.md#deleteuserwallposts)
* [deleteWallPost](_client_apis_groupsapi_.groupsapi.md#deletewallpost)
* [getAllRolesPermissions](_client_apis_groupsapi_.groupsapi.md#getallrolespermissions)
* [getAuditLogs](_client_apis_groupsapi_.groupsapi.md#getauditlogs)
* [getGroup](_client_apis_groupsapi_.groupsapi.md#getgroup)
* [getGroupConfigurationMetaData](_client_apis_groupsapi_.groupsapi.md#getgroupconfigurationmetadata)
* [getGroupPayouts](_client_apis_groupsapi_.groupsapi.md#getgrouppayouts)
* [getGroupRelationships](_client_apis_groupsapi_.groupsapi.md#getgrouprelationships)
* [getGroupRoles](_client_apis_groupsapi_.groupsapi.md#getgrouproles)
* [getGroupSearchMetaData](_client_apis_groupsapi_.groupsapi.md#getgroupsearchmetadata)
* [getGroupSettings](_client_apis_groupsapi_.groupsapi.md#getgroupsettings)
* [getGroupsMetaData](_client_apis_groupsapi_.groupsapi.md#getgroupsmetadata)
* [getGuestPermissions](_client_apis_groupsapi_.groupsapi.md#getguestpermissions)
* [getJoinRequest](_client_apis_groupsapi_.groupsapi.md#getjoinrequest)
* [getJoinRequests](_client_apis_groupsapi_.groupsapi.md#getjoinrequests)
* [getMembers](_client_apis_groupsapi_.groupsapi.md#getmembers)
* [getMembersWithRole](_client_apis_groupsapi_.groupsapi.md#getmemberswithrole)
* [getMultiGroups](_client_apis_groupsapi_.groupsapi.md#getmultigroups)
* [getRelationshipRequests](_client_apis_groupsapi_.groupsapi.md#getrelationshiprequests)
* [getRolePermissions](_client_apis_groupsapi_.groupsapi.md#getrolepermissions)
* [getRolesByIds](_client_apis_groupsapi_.groupsapi.md#getrolesbyids)
* [getSelfGroupMembership](_client_apis_groupsapi_.groupsapi.md#getselfgroupmembership)
* [getSelfPendingGroupJoins](_client_apis_groupsapi_.groupsapi.md#getselfpendinggroupjoins)
* [getSocialLinks](_client_apis_groupsapi_.groupsapi.md#getsociallinks)
* [getUserGroups](_client_apis_groupsapi_.groupsapi.md#getusergroups)
* [getUserPrimaryGroup](_client_apis_groupsapi_.groupsapi.md#getuserprimarygroup)
* [getWallPosts](_client_apis_groupsapi_.groupsapi.md#getwallposts)
* [joinGroup](_client_apis_groupsapi_.groupsapi.md#joingroup)
* [kickMember](_client_apis_groupsapi_.groupsapi.md#kickmember)
* [payoutMembers](_client_apis_groupsapi_.groupsapi.md#payoutmembers)
* [removePrimaryGroup](_client_apis_groupsapi_.groupsapi.md#removeprimarygroup)
* [request](_client_apis_groupsapi_.groupsapi.md#request)
* [searchGroups](_client_apis_groupsapi_.groupsapi.md#searchgroups)
* [searchGroupsByKeyword](_client_apis_groupsapi_.groupsapi.md#searchgroupsbykeyword)
* [setPrimaryGroup](_client_apis_groupsapi_.groupsapi.md#setprimarygroup)
* [updateGroupDescription](_client_apis_groupsapi_.groupsapi.md#updategroupdescription)
* [updateGroupIcon](_client_apis_groupsapi_.groupsapi.md#updategroupicon)
* [updateGroupSettings](_client_apis_groupsapi_.groupsapi.md#updategroupsettings)
* [updateGroupStatus](_client_apis_groupsapi_.groupsapi.md#updategroupstatus)
* [updateMember](_client_apis_groupsapi_.groupsapi.md#updatemember)
* [updateRecurringPayouts](_client_apis_groupsapi_.groupsapi.md#updaterecurringpayouts)
* [updateRole](_client_apis_groupsapi_.groupsapi.md#updaterole)
* [updateRolePermissions](_client_apis_groupsapi_.groupsapi.md#updaterolepermissions)
* [updateSocialLink](_client_apis_groupsapi_.groupsapi.md#updatesociallink)

## Constructors

### <a id="constructor" name="constructor"></a>  constructor

\+ **new GroupsAPI**(`client`: [Client](_client_client_.client.md)): *[GroupsAPI](_client_apis_groupsapi_.groupsapi.md)*

*Overrides [BaseAPI](_client_apis_baseapi_.baseapi.md).[constructor](_client_apis_baseapi_.baseapi.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | [Client](_client_client_.client.md) |

**Returns:** *[GroupsAPI](_client_apis_groupsapi_.groupsapi.md)*

## Properties

### <a id="client" name="client"></a>  client

• **client**: *[Client](_client_client_.client.md)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[client](_client_apis_developapi_.developapi.md#client)*

___

### <a id="options" name="options"></a>  options

• **options**: *[BaseAPIOptions](../modules/_interfaces_apiinterfaces_.md#baseapioptions)*

*Inherited from [DevelopAPI](_client_apis_developapi_.developapi.md).[options](_client_apis_developapi_.developapi.md#options)*

## Methods

### <a id="acceptjoinrequest" name="acceptjoinrequest"></a>  acceptJoinRequest

▸ **acceptJoinRequest**(`options`: [AcceptJoinRequestOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestoptions)): *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptJoinRequestOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestoptions) |

**Returns:** *Promise‹[AcceptJoinRequest](../modules/_client_apis_groupsapi_.md#acceptjoinrequest)›*

___

### <a id="acceptjoinrequests" name="acceptjoinrequests"></a>  acceptJoinRequests

▸ **acceptJoinRequests**(`options`: [AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions)): *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptjoinrequestsoptions) |

**Returns:** *Promise‹[AcceptJoinRequests](../modules/_client_apis_groupsapi_.md#acceptjoinrequests)›*

___

### <a id="acceptrelationshiprequest" name="acceptrelationshiprequest"></a>  acceptRelationshipRequest

▸ **acceptRelationshipRequest**(`options`: [AcceptRelationshipRequestOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestoptions)): *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptRelationshipRequestOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestoptions) |

**Returns:** *Promise‹[AcceptRelationshipRequest](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequest)›*

___

### <a id="acceptrelationshiprequests" name="acceptrelationshiprequests"></a>  acceptRelationshipRequests

▸ **acceptRelationshipRequests**(`options`: [AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions)): *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [AcceptRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequestsoptions) |

**Returns:** *Promise‹[AcceptRelationshipRequests](../modules/_client_apis_groupsapi_.md#acceptrelationshiprequests)›*

___

### <a id="changegroupowner" name="changegroupowner"></a>  changeGroupOwner

▸ **changeGroupOwner**(`options`: [ChangeOwnerOptions](../modules/_client_apis_groupsapi_.md#changeowneroptions)): *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ChangeOwnerOptions](../modules/_client_apis_groupsapi_.md#changeowneroptions) |

**Returns:** *Promise‹[ChangeOwner](../modules/_client_apis_groupsapi_.md#changeowner)›*

___

### <a id="claimgroup" name="claimgroup"></a>  claimGroup

▸ **claimGroup**(`options`: [ClaimGroupOptions](../modules/_client_apis_groupsapi_.md#claimgroupoptions)): *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [ClaimGroupOptions](../modules/_client_apis_groupsapi_.md#claimgroupoptions) |

**Returns:** *Promise‹[ClaimGroup](../modules/_client_apis_groupsapi_.md#claimgroup)›*

___

### <a id="creategroup" name="creategroup"></a>  createGroup

▸ **createGroup**(`options`: [CreateGroupOptions](../modules/_client_apis_groupsapi_.md#creategroupoptions)): *Promise‹[CreateGroup](../modules/_client_apis_groupsapi_.md#creategroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateGroupOptions](../modules/_client_apis_groupsapi_.md#creategroupoptions) |

**Returns:** *Promise‹[CreateGroup](../modules/_client_apis_groupsapi_.md#creategroup)›*

___

### <a id="createrelationship" name="createrelationship"></a>  createRelationship

▸ **createRelationship**(`options`: [CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions)): *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateRelationshipOptions](../modules/_client_apis_groupsapi_.md#createrelationshipoptions) |

**Returns:** *Promise‹[CreateRelationship](../modules/_client_apis_groupsapi_.md#createrelationship)›*

___

### <a id="createrole" name="createrole"></a>  createRole

▸ **createRole**(`options`: [CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions)): *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateRoleOptions](../modules/_client_apis_groupsapi_.md#createroleoptions) |

**Returns:** *Promise‹[CreateRole](../modules/_client_apis_groupsapi_.md#createrole)›*

___

### <a id="createsociallink" name="createsociallink"></a>  createSocialLink

▸ **createSocialLink**(`options`: [PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions)): *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PostSocialLinkOptions](../modules/_client_apis_groupsapi_.md#postsociallinkoptions) |

**Returns:** *Promise‹[PostSocialLink](../modules/_client_apis_groupsapi_.md#postsociallink)›*

___

### <a id="createwallpost" name="createwallpost"></a>  createWallPost

▸ **createWallPost**(`options`: [CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions)): *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [CreateWallPostOptions](../modules/_client_apis_groupsapi_.md#createwallpostoptions) |

**Returns:** *Promise‹[CreateWallPost](../modules/_client_apis_groupsapi_.md#createwallpost)›*

___

### <a id="declinejoinrequest" name="declinejoinrequest"></a>  declineJoinRequest

▸ **declineJoinRequest**(`options`: [DeclineJoinRequestOptions](../modules/_client_apis_groupsapi_.md#declinejoinrequestoptions)): *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineJoinRequestOptions](../modules/_client_apis_groupsapi_.md#declinejoinrequestoptions) |

**Returns:** *Promise‹[DeclineJoinRequest](../modules/_client_apis_groupsapi_.md#declinejoinrequest)›*

___

### <a id="declinejoinrequests" name="declinejoinrequests"></a>  declineJoinRequests

▸ **declineJoinRequests**(`options`: [DeclineJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#declinejoinrequestsoptions)): *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#declinejoinrequestsoptions) |

**Returns:** *Promise‹[DeclineJoinRequests](../modules/_client_apis_groupsapi_.md#declinejoinrequests)›*

___

### <a id="declinerelationshiprequest" name="declinerelationshiprequest"></a>  declineRelationshipRequest

▸ **declineRelationshipRequest**(`options`: [DeclineRelationshipRequestOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestoptions)): *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineRelationshipRequestOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestoptions) |

**Returns:** *Promise‹[DeclineRelationshipRequest](../modules/_client_apis_groupsapi_.md#declinerelationshiprequest)›*

___

### <a id="declinerelationshiprequests" name="declinerelationshiprequests"></a>  declineRelationshipRequests

▸ **declineRelationshipRequests**(`options`: [DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions)): *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeclineRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#declinerelationshiprequestsoptions) |

**Returns:** *Promise‹[DeclineRelationshipRequests](../modules/_client_apis_groupsapi_.md#declinerelationshiprequests)›*

___

### <a id="deleterelationship" name="deleterelationship"></a>  deleteRelationship

▸ **deleteRelationship**(`options`: [DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions)): *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteRelationshipOptions](../modules/_client_apis_groupsapi_.md#deleterelationshipoptions) |

**Returns:** *Promise‹[DeleteRelationship](../modules/_client_apis_groupsapi_.md#deleterelationship)›*

___

### <a id="deleterole" name="deleterole"></a>  deleteRole

▸ **deleteRole**(`options`: [DeleteRoleOptions](../modules/_client_apis_groupsapi_.md#deleteroleoptions)): *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteRoleOptions](../modules/_client_apis_groupsapi_.md#deleteroleoptions) |

**Returns:** *Promise‹[DeleteRole](../modules/_client_apis_groupsapi_.md#deleterole)›*

___

### <a id="deletesociallink" name="deletesociallink"></a>  deleteSocialLink

▸ **deleteSocialLink**(`options`: [DeleteSocialLinkOptions](../modules/_client_apis_groupsapi_.md#deletesociallinkoptions)): *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteSocialLinkOptions](../modules/_client_apis_groupsapi_.md#deletesociallinkoptions) |

**Returns:** *Promise‹[DeleteSocialLink](../modules/_client_apis_groupsapi_.md#deletesociallink)›*

___

### <a id="deleteuserwallposts" name="deleteuserwallposts"></a>  deleteUserWallPosts

▸ **deleteUserWallPosts**(`options`: [DeleteWallPostsByUserOptions](../modules/_client_apis_groupsapi_.md#deletewallpostsbyuseroptions)): *Promise‹[DeleteWallPostsByUser](../modules/_client_apis_groupsapi_.md#deletewallpostsbyuser)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteWallPostsByUserOptions](../modules/_client_apis_groupsapi_.md#deletewallpostsbyuseroptions) |

**Returns:** *Promise‹[DeleteWallPostsByUser](../modules/_client_apis_groupsapi_.md#deletewallpostsbyuser)›*

___

### <a id="deletewallpost" name="deletewallpost"></a>  deleteWallPost

▸ **deleteWallPost**(`options`: [DeleteWallPostOptions](../modules/_client_apis_groupsapi_.md#deletewallpostoptions)): *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [DeleteWallPostOptions](../modules/_client_apis_groupsapi_.md#deletewallpostoptions) |

**Returns:** *Promise‹[DeleteWallPost](../modules/_client_apis_groupsapi_.md#deletewallpost)›*

___

### <a id="getallrolespermissions" name="getallrolespermissions"></a>  getAllRolesPermissions

▸ **getAllRolesPermissions**(`options`: [GetAllRolesPermissionsOptions](../modules/_client_apis_groupsapi_.md#getallrolespermissionsoptions)): *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetAllRolesPermissionsOptions](../modules/_client_apis_groupsapi_.md#getallrolespermissionsoptions) |

**Returns:** *Promise‹[GetAllRolesPermissions](../modules/_client_apis_groupsapi_.md#getallrolespermissions)›*

___

### <a id="getauditlogs" name="getauditlogs"></a>  getAuditLogs

▸ **getAuditLogs**(`options`: [GetGroupAuditLogsOptions](../modules/_client_apis_groupsapi_.md#getgroupauditlogsoptions)): *Promise‹[GetGroupAuditLogs](../modules/_client_apis_groupsapi_.md#getgroupauditlogs)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupAuditLogsOptions](../modules/_client_apis_groupsapi_.md#getgroupauditlogsoptions) |

**Returns:** *Promise‹[GetGroupAuditLogs](../modules/_client_apis_groupsapi_.md#getgroupauditlogs)›*

___

### <a id="getgroup" name="getgroup"></a>  getGroup

▸ **getGroup**(`options`: [GetGroupOptions](../modules/_client_apis_groupsapi_.md#getgroupoptions)): *Promise‹[GetGroup](../modules/_client_apis_groupsapi_.md#getgroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupOptions](../modules/_client_apis_groupsapi_.md#getgroupoptions) |

**Returns:** *Promise‹[GetGroup](../modules/_client_apis_groupsapi_.md#getgroup)›*

___

### <a id="getgroupconfigurationmetadata" name="getgroupconfigurationmetadata"></a>  getGroupConfigurationMetaData

▸ **getGroupConfigurationMetaData**(): *Promise‹[GetGroupConfigurationMetaData](../modules/_client_apis_groupsapi_.md#getgroupconfigurationmetadata)›*

**Returns:** *Promise‹[GetGroupConfigurationMetaData](../modules/_client_apis_groupsapi_.md#getgroupconfigurationmetadata)›*

___

### <a id="getgrouppayouts" name="getgrouppayouts"></a>  getGroupPayouts

▸ **getGroupPayouts**(`options`: [GetGroupPayoutsOptions](../modules/_client_apis_groupsapi_.md#getgrouppayoutsoptions)): *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupPayoutsOptions](../modules/_client_apis_groupsapi_.md#getgrouppayoutsoptions) |

**Returns:** *Promise‹[GetGroupPayouts](../modules/_client_apis_groupsapi_.md#getgrouppayouts)›*

___

### <a id="getgrouprelationships" name="getgrouprelationships"></a>  getGroupRelationships

▸ **getGroupRelationships**(`options`: [GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions)): *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupRelationshipsOptions](../modules/_client_apis_groupsapi_.md#getgrouprelationshipsoptions) |

**Returns:** *Promise‹[GetGroupRelationships](../modules/_client_apis_groupsapi_.md#getgrouprelationships)›*

___

### <a id="getgrouproles" name="getgrouproles"></a>  getGroupRoles

▸ **getGroupRoles**(`options`: [GetGroupRolesOptions](../modules/_client_apis_groupsapi_.md#getgrouprolesoptions)): *Promise‹[GetGroupRoles](../modules/_client_apis_groupsapi_.md#getgrouproles)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupRolesOptions](../modules/_client_apis_groupsapi_.md#getgrouprolesoptions) |

**Returns:** *Promise‹[GetGroupRoles](../modules/_client_apis_groupsapi_.md#getgrouproles)›*

___

### <a id="getgroupsearchmetadata" name="getgroupsearchmetadata"></a>  getGroupSearchMetaData

▸ **getGroupSearchMetaData**(): *Promise‹[GetGroupSearchMetaData](../modules/_client_apis_groupsapi_.md#getgroupsearchmetadata)›*

**Returns:** *Promise‹[GetGroupSearchMetaData](../modules/_client_apis_groupsapi_.md#getgroupsearchmetadata)›*

___

### <a id="getgroupsettings" name="getgroupsettings"></a>  getGroupSettings

▸ **getGroupSettings**(`options`: [GetGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#getgroupsettingsoptions)): *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#getgroupsettingsoptions) |

**Returns:** *Promise‹[GetGroupSettings](../modules/_client_apis_groupsapi_.md#getgroupsettings)›*

___

### <a id="getgroupsmetadata" name="getgroupsmetadata"></a>  getGroupsMetaData

▸ **getGroupsMetaData**(): *Promise‹[GetGroupsMetaData](../modules/_client_apis_groupsapi_.md#getgroupsmetadata)›*

**Returns:** *Promise‹[GetGroupsMetaData](../modules/_client_apis_groupsapi_.md#getgroupsmetadata)›*

___

### <a id="getguestpermissions" name="getguestpermissions"></a>  getGuestPermissions

▸ **getGuestPermissions**(`options`: [GetGuestPermissionsOptions](../modules/_client_apis_groupsapi_.md#getguestpermissionsoptions)): *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetGuestPermissionsOptions](../modules/_client_apis_groupsapi_.md#getguestpermissionsoptions) |

**Returns:** *Promise‹[GetGuestPermissions](../modules/_client_apis_groupsapi_.md#getguestpermissions)›*

___

### <a id="getjoinrequest" name="getjoinrequest"></a>  getJoinRequest

▸ **getJoinRequest**(`options`: [GetJoinRequestOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestoptions)): *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetJoinRequestOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestoptions) |

**Returns:** *Promise‹[GetJoinRequest](../modules/_client_apis_groupsapi_.md#getjoinrequest)›*

___

### <a id="getjoinrequests" name="getjoinrequests"></a>  getJoinRequests

▸ **getJoinRequests**(`options`: [GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions)): *Promise‹[GetJoinRequests](../modules/_client_apis_groupsapi_.md#getjoinrequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetJoinRequestsOptions](../modules/_client_apis_groupsapi_.md#getjoinrequestsoptions) |

**Returns:** *Promise‹[GetJoinRequests](../modules/_client_apis_groupsapi_.md#getjoinrequests)›*

___

### <a id="getmembers" name="getmembers"></a>  getMembers

▸ **getMembers**(`options`: [GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions)): *Promise‹[GetMembers](../modules/_client_apis_groupsapi_.md#getmembers)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMembersOptions](../modules/_client_apis_groupsapi_.md#getmembersoptions) |

**Returns:** *Promise‹[GetMembers](../modules/_client_apis_groupsapi_.md#getmembers)›*

___

### <a id="getmemberswithrole" name="getmemberswithrole"></a>  getMembersWithRole

▸ **getMembersWithRole**(`options`: [GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions)): *Promise‹[GetMembersWithRole](../modules/_client_apis_groupsapi_.md#getmemberswithrole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMembersWithRoleOptions](../modules/_client_apis_groupsapi_.md#getmemberswithroleoptions) |

**Returns:** *Promise‹[GetMembersWithRole](../modules/_client_apis_groupsapi_.md#getmemberswithrole)›*

___

### <a id="getmultigroups" name="getmultigroups"></a>  getMultiGroups

▸ **getMultiGroups**(`options`: [GetMultiGroupsOptions](../modules/_client_apis_groupsapi_.md#getmultigroupsoptions)): *Promise‹[GetMultiGroups](../modules/_client_apis_groupsapi_.md#getmultigroups)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetMultiGroupsOptions](../modules/_client_apis_groupsapi_.md#getmultigroupsoptions) |

**Returns:** *Promise‹[GetMultiGroups](../modules/_client_apis_groupsapi_.md#getmultigroups)›*

___

### <a id="getrelationshiprequests" name="getrelationshiprequests"></a>  getRelationshipRequests

▸ **getRelationshipRequests**(`options`: [GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions)): *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRelationshipRequestsOptions](../modules/_client_apis_groupsapi_.md#getrelationshiprequestsoptions) |

**Returns:** *Promise‹[GetRelationshipRequests](../modules/_client_apis_groupsapi_.md#getrelationshiprequests)›*

___

### <a id="getrolepermissions" name="getrolepermissions"></a>  getRolePermissions

▸ **getRolePermissions**(`options`: [GetRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#getrolepermissionsoptions)): *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#getrolepermissionsoptions) |

**Returns:** *Promise‹[GetRolePermissions](../modules/_client_apis_groupsapi_.md#getrolepermissions)›*

___

### <a id="getrolesbyids" name="getrolesbyids"></a>  getRolesByIds

▸ **getRolesByIds**(`options`: [GetRolesByIdsOptions](../modules/_client_apis_groupsapi_.md#getrolesbyidsoptions)): *Promise‹[GetRolesByIds](../modules/_client_apis_groupsapi_.md#getrolesbyids)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetRolesByIdsOptions](../modules/_client_apis_groupsapi_.md#getrolesbyidsoptions) |

**Returns:** *Promise‹[GetRolesByIds](../modules/_client_apis_groupsapi_.md#getrolesbyids)›*

___

### <a id="getselfgroupmembership" name="getselfgroupmembership"></a>  getSelfGroupMembership

▸ **getSelfGroupMembership**(`options`: [GetSelfGroupMembershipOptions](../modules/_client_apis_groupsapi_.md#getselfgroupmembershipoptions)): *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSelfGroupMembershipOptions](../modules/_client_apis_groupsapi_.md#getselfgroupmembershipoptions) |

**Returns:** *Promise‹[GetSelfGroupMembership](../modules/_client_apis_groupsapi_.md#getselfgroupmembership)›*

___

### <a id="getselfpendinggroupjoins" name="getselfpendinggroupjoins"></a>  getSelfPendingGroupJoins

▸ **getSelfPendingGroupJoins**(): *Promise‹[GetSelfPendingGroupJoins](../modules/_client_apis_groupsapi_.md#getselfpendinggroupjoins)›*

**Returns:** *Promise‹[GetSelfPendingGroupJoins](../modules/_client_apis_groupsapi_.md#getselfpendinggroupjoins)›*

___

### <a id="getsociallinks" name="getsociallinks"></a>  getSocialLinks

▸ **getSocialLinks**(`options`: [GetSocialLinksOptions](../modules/_client_apis_groupsapi_.md#getsociallinksoptions)): *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetSocialLinksOptions](../modules/_client_apis_groupsapi_.md#getsociallinksoptions) |

**Returns:** *Promise‹[GetSocialLinks](../modules/_client_apis_groupsapi_.md#getsociallinks)›*

___

### <a id="getusergroups" name="getusergroups"></a>  getUserGroups

▸ **getUserGroups**(`options`: [GetUserGroupsOptions](../modules/_client_apis_groupsapi_.md#getusergroupsoptions)): *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserGroupsOptions](../modules/_client_apis_groupsapi_.md#getusergroupsoptions) |

**Returns:** *Promise‹[GetUserGroups](../modules/_client_apis_groupsapi_.md#getusergroups)›*

___

### <a id="getuserprimarygroup" name="getuserprimarygroup"></a>  getUserPrimaryGroup

▸ **getUserPrimaryGroup**(`options`: [GetUserPrimaryGroupOptions](../modules/_client_apis_groupsapi_.md#getuserprimarygroupoptions)): *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetUserPrimaryGroupOptions](../modules/_client_apis_groupsapi_.md#getuserprimarygroupoptions) |

**Returns:** *Promise‹[GetUserPrimaryGroup](../modules/_client_apis_groupsapi_.md#getuserprimarygroup)›*

___

### <a id="getwallposts" name="getwallposts"></a>  getWallPosts

▸ **getWallPosts**(`options`: [GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions)): *Promise‹[GetWallPosts](../modules/_client_apis_groupsapi_.md#getwallposts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [GetWallPostsOptions](../modules/_client_apis_groupsapi_.md#getwallpostsoptions) |

**Returns:** *Promise‹[GetWallPosts](../modules/_client_apis_groupsapi_.md#getwallposts)›*

___

### <a id="joingroup" name="joingroup"></a>  joinGroup

▸ **joinGroup**(`options`: [JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions)): *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [JoinGroupOptions](../modules/_client_apis_groupsapi_.md#joingroupoptions) |

**Returns:** *Promise‹[JoinGroup](../modules/_client_apis_groupsapi_.md#joingroup)›*

___

### <a id="kickmember" name="kickmember"></a>  kickMember

▸ **kickMember**(`options`: [KickMemberOptions](../modules/_client_apis_groupsapi_.md#kickmemberoptions)): *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [KickMemberOptions](../modules/_client_apis_groupsapi_.md#kickmemberoptions) |

**Returns:** *Promise‹[KickMember](../modules/_client_apis_groupsapi_.md#kickmember)›*

___

### <a id="payoutmembers" name="payoutmembers"></a>  payoutMembers

▸ **payoutMembers**(`options`: [PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions)): *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [PayoutMembersOptions](../modules/_client_apis_groupsapi_.md#payoutmembersoptions) |

**Returns:** *Promise‹[PayoutMembers](../modules/_client_apis_groupsapi_.md#payoutmembers)›*

___

### <a id="removeprimarygroup" name="removeprimarygroup"></a>  removePrimaryGroup

▸ **removePrimaryGroup**(): *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

**Returns:** *Promise‹[RemovePrimaryGroup](../modules/_client_apis_groupsapi_.md#removeprimarygroup)›*

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

### <a id="searchgroups" name="searchgroups"></a>  searchGroups

▸ **searchGroups**(`options`: [SearchGroupsOptions](../modules/_client_apis_groupsapi_.md#searchgroupsoptions)): *Promise‹[SearchGroups](../modules/_client_apis_groupsapi_.md#searchgroups)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchGroupsOptions](../modules/_client_apis_groupsapi_.md#searchgroupsoptions) |

**Returns:** *Promise‹[SearchGroups](../modules/_client_apis_groupsapi_.md#searchgroups)›*

___

### <a id="searchgroupsbykeyword" name="searchgroupsbykeyword"></a>  searchGroupsByKeyword

▸ **searchGroupsByKeyword**(`options`: [SearchGroupsByKeywordOptions](../modules/_client_apis_groupsapi_.md#searchgroupsbykeywordoptions)): *Promise‹[SearchGroupsByKeyword](../modules/_client_apis_groupsapi_.md#searchgroupsbykeyword)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SearchGroupsByKeywordOptions](../modules/_client_apis_groupsapi_.md#searchgroupsbykeywordoptions) |

**Returns:** *Promise‹[SearchGroupsByKeyword](../modules/_client_apis_groupsapi_.md#searchgroupsbykeyword)›*

___

### <a id="setprimarygroup" name="setprimarygroup"></a>  setPrimaryGroup

▸ **setPrimaryGroup**(`options`: [SetPrimaryGroupOptions](../modules/_client_apis_groupsapi_.md#setprimarygroupoptions)): *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [SetPrimaryGroupOptions](../modules/_client_apis_groupsapi_.md#setprimarygroupoptions) |

**Returns:** *Promise‹[SetPrimaryGroup](../modules/_client_apis_groupsapi_.md#setprimarygroup)›*

___

### <a id="updategroupdescription" name="updategroupdescription"></a>  updateGroupDescription

▸ **updateGroupDescription**(`options`: [UpdateGroupDescriptionOptions](../modules/_client_apis_groupsapi_.md#updategroupdescriptionoptions)): *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGroupDescriptionOptions](../modules/_client_apis_groupsapi_.md#updategroupdescriptionoptions) |

**Returns:** *Promise‹[UpdateGroupDescription](../modules/_client_apis_groupsapi_.md#updategroupdescription)›*

___

### <a id="updategroupicon" name="updategroupicon"></a>  updateGroupIcon

▸ **updateGroupIcon**(`options`: [UpdateGroupIconOptions](../modules/_client_apis_groupsapi_.md#updategroupiconoptions)): *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGroupIconOptions](../modules/_client_apis_groupsapi_.md#updategroupiconoptions) |

**Returns:** *Promise‹[UpdateGroupIcon](../modules/_client_apis_groupsapi_.md#updategroupicon)›*

___

### <a id="updategroupsettings" name="updategroupsettings"></a>  updateGroupSettings

▸ **updateGroupSettings**(`options`: [UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions)): *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGroupSettingsOptions](../modules/_client_apis_groupsapi_.md#updategroupsettingsoptions) |

**Returns:** *Promise‹[UpdateGroupSettings](../modules/_client_apis_groupsapi_.md#updategroupsettings)›*

___

### <a id="updategroupstatus" name="updategroupstatus"></a>  updateGroupStatus

▸ **updateGroupStatus**(`options`: [UpdateGroupStatusOptions](../modules/_client_apis_groupsapi_.md#updategroupstatusoptions)): *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateGroupStatusOptions](../modules/_client_apis_groupsapi_.md#updategroupstatusoptions) |

**Returns:** *Promise‹[UpdateGroupStatus](../modules/_client_apis_groupsapi_.md#updategroupstatus)›*

___

### <a id="updatemember" name="updatemember"></a>  updateMember

▸ **updateMember**(`options`: [UpdateMemberOptions](../modules/_client_apis_groupsapi_.md#updatememberoptions)): *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateMemberOptions](../modules/_client_apis_groupsapi_.md#updatememberoptions) |

**Returns:** *Promise‹[UpdateMember](../modules/_client_apis_groupsapi_.md#updatemember)›*

___

### <a id="updaterecurringpayouts" name="updaterecurringpayouts"></a>  updateRecurringPayouts

▸ **updateRecurringPayouts**(`options`: [UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions)): *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateRecurringPayoutsOptions](../modules/_client_apis_groupsapi_.md#updaterecurringpayoutsoptions) |

**Returns:** *Promise‹[UpdateRecurringPayouts](../modules/_client_apis_groupsapi_.md#updaterecurringpayouts)›*

___

### <a id="updaterole" name="updaterole"></a>  updateRole

▸ **updateRole**(`options`: [UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions)): *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateRoleOptions](../modules/_client_apis_groupsapi_.md#updateroleoptions) |

**Returns:** *Promise‹[UpdateRole](../modules/_client_apis_groupsapi_.md#updaterole)›*

___

### <a id="updaterolepermissions" name="updaterolepermissions"></a>  updateRolePermissions

▸ **updateRolePermissions**(`options`: [UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions)): *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateRolePermissionsOptions](../modules/_client_apis_groupsapi_.md#updaterolepermissionsoptions) |

**Returns:** *Promise‹[UpdateRolePermissions](../modules/_client_apis_groupsapi_.md#updaterolepermissions)›*

___

### <a id="updatesociallink" name="updatesociallink"></a>  updateSocialLink

▸ **updateSocialLink**(`options`: [UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions)): *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [UpdateSocialLinkOptions](../modules/_client_apis_groupsapi_.md#updatesociallinkoptions) |

**Returns:** *Promise‹[UpdateSocialLink](../modules/_client_apis_groupsapi_.md#updatesociallink)›*
