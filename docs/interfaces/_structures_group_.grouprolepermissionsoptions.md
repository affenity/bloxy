
# Interface: GroupRolePermissionsOptions

## Hierarchy

* **GroupRolePermissionsOptions**

## Index

### Properties

* [groupId](_structures_group_.grouprolepermissionsoptions.md#groupid)
* [permissions](_structures_group_.grouprolepermissionsoptions.md#permissions)
* [role](_structures_group_.grouprolepermissionsoptions.md#role)

## Properties

### <a id="groupid" name="groupid"></a>  groupId

• **groupId**: *number*

___

### <a id="permissions" name="permissions"></a>  permissions

• **permissions**: *object*

#### Type declaration:

* **groupEconomyPermissions**(): *object*

  * **addGroupPlaces**: *boolean*

  * **advertiseGroup**: *boolean*

  * **createItems**: *boolean*

  * **manageGroupGames**: *boolean*

  * **manageItems**: *boolean*

  * **spendGroupFunds**: *boolean*

  * **viewGroupPayouts**: *boolean*

* **groupManagementPermissions**(): *object*

  * **manageClan**: *boolean*

  * **manageRelationships**: *boolean*

  * **viewAuditLogs**: *boolean*

* **groupMembershipPermissions**(): *object*

  * **changeRank**: *boolean*

  * **inviteMembers**: *boolean*

  * **removeMembers**: *boolean*

* **groupPostsPermissions**(): *object*

  * **deleteFromWall**: *boolean*

  * **postToStatus**: *boolean*

  * **postToWall**: *boolean*

  * **viewStatus**: *boolean*

  * **viewWall**: *boolean*

___

### <a id="role" name="role"></a>  role

• **role**: *object*

#### Type declaration:

* **description**: *string*

* **id**: *number*

* **memberCount**: *number*

* **name**: *string*

* **rank**: *number*
