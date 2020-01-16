/**
 * API wrapper for groups.roblox.com
 * @type {ClientGroupsAPI}
 */
class ClientGroupsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://groups.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getGroupInfo (groupId) {
		return this.request({
			url: `v1/groups/${groupId}`
		}, {}, {
			disableAuth: true
		});
	}

	getGroupAuditLogs ({ groupId, actionType, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/audit-log`,
			qs: {
				actionType,
				sortOrder,
				limit,
				cursor
			}
		});
	}

	getGroupSettings (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/settings`
		});
	}

	updateGroupSettings ({ groupId, settings }) {
		return this.request({
			url: `v1/groups/${groupId}/settings`,
			method: "PATCH",
			json: settings
		});
	}

	getGroupMetadata () {
		return this.request({
			url: "v1/groups/configuration/metadata"
		}, {}, {
			disableAuth: true
		});
	}

	getSelfMetadata () {
		return this.request({
			url: "v1/groups/metadata"
		});
	}

	createGroup ({ name, description, isPublic, isPremium, image }) {
		return this.request({
			url: "v1/groups/create",
			method: "POST",
			body: {
				"request.name": name,
				"request.description": description,
				"request.publicGroup": isPublic,
				"request.buildersClubMembersOnly": isPremium,
				"request.files": image
			}
		});
	}

	updateGroupDescription ({ groupId, description }) {
		return this.request({
			url: `v1/groups/${groupId}/description`,
			method: "PATCH",
			json: {
				description
			}
		});
	}

	updateGroupShout ({ groupId, message }) {
		return this.request({
			url: `v1/groups/${groupId}/status`,
			method: "PATCH",
			json: {
				message
			}
		});
	}

	updateGroupIcon ({ groupId, image }) {
		return this.request({
			url: "v1/groups/icon",
			method: "PATCH",
			qs: {
				groupId
			},
			body: {
				"request.files": image
			}
		});
	}

	declineMultipleJoinRequests ({ groupId, userIds }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests`,
			method: "DELETE",
			json: {
				UserIds: userIds
			}
		});
	}

	getJoinRequests ({ groupId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		});
	}

	acceptMultipleJoinRequests ({ groupId, userIds }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests`,
			method: "POST",
			json: {
				UserIds: userIds
			}
		});
	}

	declineJoinRequest ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests/users/${userId}`,
			method: "DELETE"
		});
	}

	getJoinRequest ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests/users/${userId}`
		});
	}

	acceptJoinRequest ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/join-requests/users/${userId}`,
			method: "POST"
		});
	}

	getSelfGroupMembership (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/membership`
		});
	}

	getMembersWithRole ({ groupId, roleId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/roles/${roleId}/users`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	getMembers ({ groupId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/users`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	joinGroup ({ groupId, fcToken }) {
		return this.request({
			url: `v1/groups/${groupId}/users`,
			method: "POST",
			json: {
				captchaToken: fcToken,
				captchaProvider: "PROVIDER_ARKOSE_LABS"
			}
		});
	}

	getSelfPendingGroupJoins () {
		return this.request({
			url: "v1/user/groups/pending"
		});
	}

	getUserMetadata (userId) {
		return this.request({
			url: `v1/users/${userId}/group-membership-status`
		}, {}, {
			disableAuth: true
		});
	}

	getUserGroups (userId) {
		return this.request({
			url: `v1/users/${userId}/groups/roles`
		}, {}, {
			disableAuth: true
		});
	}

	changeGroupOwner ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/change-owner`,
			method: "POST",
			json: {
				userId
			}
		});
	}

	claimGroupOwnership (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/claim-ownership`
		});
	}

	removeMemberFromGroup ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/users/${userId}`,
			method: "DELETE"
		});
	}

	updateMemberInGroup ({ groupId, userId, roleId }) {
		return this.request({
			url: `v1/groups/${groupId}/users/${userId}`,
			method: "PATCH",
			json: {
				roleId
			}
		});
	}

	getCurrentPayouts (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/payouts`
		});
	}

	payoutUser ({ groupId, data }) {
		return this.request({
			url: `v1/groups/${groupId}/payouts`,
			method: "POST",
			json: data
		});
	}

	updateRecurringPayouts ({ groupId, data }) {
		return this.request({
			url: `v1/groups/${groupId}/payouts/recurring`,
			method: "POST",
			json: data
		});
	}

	getGroupRelationshipRequests ({ groupId, relationshipType, start, amount }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/requests`,
			qs: {
				"model.startRowIndex": start,
				"model.maxRows": amount
			}
		});
	}

	getGroupRelationships ({ groupId, relationshipType, start, amount }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}`,
			qs: {
				"model.startRowIndex": start,
				"model.maxRows": amount
			}
		});
	}

	declineMultipleGroupRelationshipRequests ({ groupId, relationshipType, groupIds }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/requests`,
			method: "DELETE",
			json: {
				GroupIds: groupIds.join("\n")
			}
		});
	}

	acceptMultipleGroupRelationshipRequests ({ groupId, relationshipType, groupIds }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/requests`,
			method: "DELETE",
			json: {
				GroupIds: groupIds.join("\n")
			}
		});
	}

	deleteGroupRelationship ({ groupId, otherGroupId, relationshipType }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/${otherGroupId}`,
			method: "DELETE"
		});
	}

	requestRelationshipWithGroup ({ groupId, otherGroupId, relationshipType }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/${otherGroupId}`,
			method: "POST"
		});
	}

	declineGroupRelationshipRequest ({ groupId, otherGroupId, relationshipType }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/requests/${otherGroupId}`,
			method: "DELETE"
		});
	}

	acceptGroupRelationshipRequest ({ groupId, otherGroupId, relationshipType }) {
		return this.request({
			url: `v1/groups/${groupId}/relationships/${relationshipType}/requests/${otherGroupId}`,
			method: "POST"
		});
	}

	getRolePermissions ({ groupId, roleId }) {
		return this.request({
			url: `v1/groups/${groupId}/roles/${roleId}/permissions`
		});
	}

	updateRolePermissions ({ groupId, roleId, permissions }) {
		return this.request({
			url: `v1/groups/${groupId}/roles/${roleId}/permissions`,
			method: "PATCH",
			json: permissions
		});
	}

	getGuestPermissions (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/roles/guest/permissions`
		}, {}, {
			disableAuth: true
		});
	}

	getGroupSocialLinks (groupId) {
		return this.request({
			url: `v1/groups/${groupId}/social-links`
		}, {}, {
			disableAuth: true
		});
	}

	postSocialLink ({ groupId, linkType, linkUrl, linkTitle }) {
		return this.request({
			url: `v1/groups/${groupId}/social-links`,
			method: "POST",
			json: {
				type: linkType,
				url: linkUrl,
				title: linkTitle
			}
		});
	}

	deleteSocialLink ({ groupId, linkId }) {
		return this.request({
			url: `v1/groups/${groupId}/social-links/${linkId}`,
			method: "DELETE"
		});
	}

	updateSocialLink ({ groupId, linkId, linkType, linkUrl, linkTitle }) {
		return this.request({
			url: `v1/groups/${groupId}/social-links/${linkId}`,
			method: "PATCH",
			json: {
				type: linkType,
				url: linkUrl,
				title: linkTitle
			}
		});
	}

	getGroupWallPosts ({ groupId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v1/groups/${groupId}/wall/posts`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	createGroupWallPost ({ groupId, message }) {
		return this.request({
			url: `v1/groups/${groupId}/wall/posts`,
			method: "POST",
			json: {
				body: message
			}
		});
	}

	deleteGroupWallPost ({ groupId, postId }) {
		return this.request({
			url: `v1/groups/${groupId}/wall/posts/${postId}`,
			method: "DELETE"
		});
	}

	deleteGroupWallPostsByUser ({ groupId, userId }) {
		return this.request({
			url: `v1/groups/${groupId}/wall/users/${userId}/posts`,
			method: "DELETE"
		});
	}

	searchGroupsByKeyword ({ keyword, limit, cursor }) {
		return this.request({
			url: `v1/groups/search`,
			qs: {
				keyword,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	searchGroups (query) {
		return this.request({
			url: `v1/groups/search/lookup`,
			qs: {
				groupName: query
			}
		}, {}, {
			disableAuth: true
		});
	}

	getGroupSearchMetadata () {
		return this.request({
			url: "v1/groups/search/metadata"
		}, {}, {
			disableAuth: true
		});
	}

	getGroupRolesById (roleIds) {
		return this.request({
			url: "v1/roles",
			qs: {
				ids: roleIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUserPrimaryGroup (userId) {
		return this.request({
			url: `v1/users/${userId}/groups/primary/role`
		}, {}, {
			disableAuth: true
		});
	}

	removeSelfPrimaryGroup () {
		return this.request({
			url: `v1/user/groups/primary`,
			method: "DELETE"
		});
	}

	setSelfPrimaryGroup (groupId) {
		return this.request({
			url: `v1/user/groups/primary`,
			method: "POST",
			json: {
				groupId
			}
		});
	}

	createGroupRole ({ groupId, name, description, rank, groupFunds }) {
		return this.request({
			url: `v1/groups/${groupId}/rolesets/create`,
			method: "POST",
			json: {
				name,
				description,
				rank,
				usingGroupFunds: groupFunds
			}
		});
	}

	deleteGroupRole ({ groupId, roleId }) {
		return this.request({
			url: `v1/groups/${groupId}/rolesets/${roleId}`,
			method: "DELETE"
		});
	}

	updateGroupRole ({ groupId, roleId, name, description, rank }) {
		return this.request({
			url: `v1/groups/${groupId}/rolesets/${roleId}`,
			method: "PATCH",
			json: {
				name,
				description,
				rank
			}
		});
	}

	getMultiGroupsInfo (groupIds) {
		return this.request({
			url: "v2/groups",
			qs: {
				groupIds: groupIds.join("\n")
			}
		}, {}, {
			disableAuth: true
		});
	}

	getUserGroupsV2 (userId) {
		return this.request({
			url: `v2/users/${userId}/groups/roles`
		}, {}, {
			disableAuth: true
		});
	}

	getGroupWallPostsV2 ({ groupId, sortOrder, limit, cursor }) {
		return this.request({
			url: `v2/groups/${groupId}/wall/posts`,
			qs: {
				sortOrder,
				limit,
				cursor
			}
		}, {}, {
			disableAuth: true
		});
	}

	createGroupWallPostV2 ({ groupId, message }) {
		return this.request({
			url: `v2/groups/${groupId}/wall/posts`,
			method: "POST",
			json: {
				body: message
			}
		});
	}
}


module.exports = ClientGroupsAPI;
