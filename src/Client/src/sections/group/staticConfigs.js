const staticTypes = require("../../../../misc/util/staticTypeDeclarations");

module.exports = [
	{
		names: ["getSettings"],
		type: "request",
		params: [],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/settings`
		},
		response: (env, params, data) => new env.client.structures.Group.Settings(env, data)
	},
	{
		names: ["updateSettings"],
		type: "request",
		params: [
			[
				"settings",
				true,
				joi => joi.object({
					isApprovalRequired: joi.bool(),
					isBuildersClubRequired: joi.bool(),
					areEnemiesAllowed: joi.bool(),
					areGroupFundsVisible: joi.bool(),
					areGroupGamesVisible: joi.bool()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/settings`,
			method: "PATCH",
			json: (env, { settings }) => settings
		}
	},
	{
		names: ["getAuditLogs"],
		type: "request",
		params: [
			[
				"options",
				false,
				joi => joi.object({
					actionType: joi.string(),
					userId: joi.any(),
					sortOrder: joi.string().default("Desc"),
					limit: joi.number().default(100),
					cursor: joi.string()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/audit-log`,
			queries: (env, { options = {} }) => ({
				actionType: options.actionType,
				userId: options.userId,
				sortOrder: options.sortOrder || "Desc",
				limit: options.limit || 100,
				cursor: options.cursor
			})
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params,
			data: data,
			dataClass: env.client.structures.Group.AuditLog,
			repeatFunction: env.getAuditLogs
		})
	},
	{
		names: ["updateDescription"],
		type: "request",
		params: [
			[
				"description",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/description`,
			method: "PATCH",
			json: (env, { description }) => ({
				description
			})
		},
		response: () => true
	},
	{
		names: ["updateShout"],
		type: "request",
		params: [
			[
				"shout",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/status`,
			method: "PATCH",
			json: (env, { shout }) => ({
				message: shout
			})
		},
		response: (env, params, data) => new env.client.structures.Group.Shout(env, data)
	},
	{
		names: ["updateIcon"],
		type: "request",
		params: [
			[
				"file",
				true,
				joi => joi.any()
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/status`,
			method: "PATCH",
			formData: (env, { file }) => ({
				files: file
			})
		},
		response: () => true
	},
	{
		names: ["getJoinRequests"],
		type: "request",
		params: [
			[
				"options",
				false,
				joi => joi.object({
					sortOrder: joi.string().default("Desc"),
					limit: joi.number().default(100),
					cursor: joi.string()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/join-requests`,
			queries: (env, { options = {} }) => ({
				sortOrder: options.sortOrder || "Desc",
				limit: options.limit || 100,
				cursor: options.cursor
			})
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params,
			data: data,
			dataClass: env.client.structures.Group.JoinRequest,
			repeatFunction: env.getJoinRequests
		})
	},
	{
		names: ["getJoinRequest"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/groups/${env.id}/join-requests/users/${userId}`
		}
	},
	{
		names: ["acceptJoinRequest"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/groups/${env.id}/join-requests/users/${userId}`,
			method: "POST",
			json: (env, { userId }) => ({
				groupId: env.id,
				userId: userId
			})
		},
		response: () => true
	},
	{
		names: ["getRoles"],
		type: "request",
		params: [],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/roles`
		},
		response: (env, params, data) => data.roles.map(role => new env.client.structures.Group.Role(env, role))
	},
	{
		names: ["getMembersWithRole"],
		type: "request",
		params: [
			[
				"roleId",
				true,
				staticTypes.groupRole
			],
			[
				"options",
				false,
				joi => joi.object({
					sortOrder: joi.string().default("Desc"),
					limit: joi.number().default(100),
					cursor: joi.string()
				})
			]
		],
		request: {
			url: (env, { roleId }) => `https://groups.roblox.com/v1/groups/${env.id}/roles/${roleId}/users`
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params,
			data: data,
			dataClass: env.client.structures.User.Partial,
			repeatFunction: env.getMembersWithRole
		})
	},
	{
		names: ["getMembers"],
		type: "request",
		params: [
			[
				"options",
				false,
				joi => joi.object({
					sortOrder: joi.string().default("Desc"),
					limit: joi.number().default(100),
					cursor: joi.string()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/users`,
			queries: (env, { options = {} }) => ({
				sortOrder: options.sortOrder || "Desc",
				limit: options.limit || 100,
				cursor: options.cursor
			})
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params,
			data: data,
			dataClass: env.client.structures.Group.Member,
			repeatFunction: env.getMembers
		})
	},
	{
		names: ["getMember"],
		type: "custom",
		params: [
			[
				"user",
				true,
				staticTypes.userId
			]
		],
		run: async function run ({ user }) {
			const userGroups = await this.client.getUserGroups(user);
			const foundGroup = userGroups.find(group => group.id === this.id);
			if (!foundGroup) return null;
			return new this.client.structures.Group.Member(this, {
				userId: user,
				role: foundGroup.role
			});
		}
	},
	{
		names: ["joinGroup"],
		type: "request",
		params: [],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/users`,
			method: "POST"
		}
	},
	{
		names: ["changeOwner"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/change-owner`,
			method: "POST",
			json: (env, { userId }) => ({
				userId
			})
		},
		response: () => true
	},
	{
		names: ["claimOwnership"],
		type: "request",
		params: [],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/claim-ownership`,
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["kick"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/groups/${env.id}/users/${userId}`,
			method: "DELETE"
		},
		response: () => true
	},
	{
		names: ["updateMember"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			],
			[
				"role",
				true,
				staticTypes.groupRole
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/groups/${env.id}/users/${userId}`,
			method: "PATCH",
			json: (env, { role }) => ({
				roleId: role
			})
		},
		response: () => true
	},
	{
		names: ["currentPayouts"],
		type: "request",
		params: [],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/payouts`
		},
		response: (env, params, data) => data.data.map(payoutUser => ({
			user: new env.client.structures.User.Partial(payoutUser.user),
			percentage: payoutUser.percentage
		}))
	},
	{
		names: ["payoutUsers"],
		type: "request",
		params: [
			[
				"payoutConfig",
				true,
				joi => joi.array().items(joi.object({
					userId: joi.any(),
					amount: joi.number()
				}))
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/payouts`,
			method: "POST",
			json: (env, { payoutConfig }) => ({
				PayoutType: "FixedAmount",
				Recipients: payoutConfig.map(conf => ({
					recipientId: conf.userId,
					recipientType: "User",
					amount: conf.amount
				}))
			})
		},
		response: () => true
	},
	{
		names: ["updatePayouts"],
		type: "request",
		params: [
			[
				"payoutConfig",
				true,
				joi => joi.array().items(joi.object({
					userId: joi.any(),
					amount: joi.number()
				}))
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/payouts/recurring`,
			method: "POST",
			json: (env, { payoutConfig }) => ({
				PayoutType: "FixedAmount",
				Recipients: payoutConfig.map(conf => ({
					recipientId: conf.userId,
					recipientType: "User",
					amount: conf.amount
				}))
			})
		},
		response: () => true
	},
	{
		names: ["getRolePermissions"],
		type: "request",
		params: [
			[
				"roleId",
				true,
				staticTypes.groupRole
			]
		],
		request: {
			url: (env, { roleId }) => `https://groups.roblox.com/v1/groups/${env.id}/roles/${roleId}/permissions`
		}
	},
	{
		names: ["getWall"],
		type: "request",
		params: [
			[
				"options",
				false,
				joi => joi.object({
					sortOrder: joi.string().default("Desc"),
					limit: joi.number().default(100),
					cursor: joi.string()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/wall/posts`,
			queries: (env, { options = {} }) => ({
				sortOrder: options.sortOrder || "Desc",
				limit: options.limit || 100,
				cursor: options.cursor
			})
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params, data,
			dataClass: env.client.structures.Group.WallPost,
			repeatFunction: env.getWall
		})
	},
	{
		names: ["postOnWall"],
		type: "request",
		params: [
			[
				"message",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/wall/posts`,
			method: "POST",
			json: (env, { message }) => ({
				message
			})
		},
		response: (env, params, data) => new env.client.structures.Group.WallPost(env, data)
	},
	{
		names: ["deleteWallPost"],
		type: "request",
		params: [
			[
				"post",
				true,
				staticTypes.groupPost
			]
		],
		request: {
			url: (env, { post }) => `https://groups.roblox.com/v1/groups/${env.id}/wall/posts/${post}`,
			method: "DELETE"
		},
		response: () => true
	},
	{
		names: ["deleteUserWallPosts"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/groups/${env.id}/wall/users/${userId}/posts`,
			method: "DELETE"
		},
		response: () => true
	},
	{
		names: ["createRole"],
		type: "request",
		params: [
			[
				"options",
				true,
				joi => joi.object({
					name: joi.string().required(),
					description: joi.string().required(),
					rank: joi.number().required(),
					usingGroupFunds: joi.bool().required()
				})
			]
		],
		request: {
			url: env => `https://groups.roblox.com/v1/groups/${env.id}/rolesets/create`,
			method: "POST",
			json: (env, { options = {} }) => options
		},
		response: () => true
	},
	{
		names: ["deleteRole"],
		type: "request",
		params: [
			[
				"role",
				true,
				staticTypes.groupRole
			]
		],
		request: {
			url: (env, { role }) => `https://groups.roblox.com/v1/groups/${env.id}/rolesets/${role}`,
			method: "DELETE"
		},
		response: () => true
	},
	{
		names: ["updateRole"],
		type: "request",
		params: [
			[
				"role",
				true,
				staticTypes.groupRole
			],
			[
				"options",
				true,
				joi => joi.object({
					name: joi.string(),
					description: joi.string(),
					rank: joi.number()
				})
			]
		],
		request: {
			url: (env, { role }) => `https://groups.roblox.com/v1/groups/${env.id}/rolesets/${role}`,
			method: "PATCH",
			json: (env, { options = {} }) => options
		},
		response: () => true
	},
	{
		names: ["getGroup"],
		type: "custom",
		params: [
			[
				"group",
				true,
				staticTypes.groupId
			]
		],
		run: ({ group }) => this.client.getGroup(group)
	}
];
