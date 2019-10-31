const staticTypes = require("../../../../misc/util/staticTypeDeclarations");

module.exports = [
	{
		names: ["getFriendRequests"],
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
			url: "https://friends.roblox.com/v1/my/friends/requests",
			queries: {
				sortOrder: (env, { options = {} }) => (options || {}).sortOrder || "Desc",
				limit: (env, { options = {} }) => (options || {}).limit || 100,
				cursor: (env, { options = {} }) => (options || {}).cursor
			}
		},
		response: (env, params, data) => new env.client.structures.CursorPage({
			env, params,
			data: data,
			dataClass: env.client.structures.User.FriendRequest,
			repeatFunction: env.friendRequests
		})
	},
	{
		names: ["declineAllFriendRequests"],
		type: "request",
		params: [],
		request: {
			url: "https://friends.roblox.com/v1/user/friend-requests/decline-all",
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["acceptFriendRequest"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}/accept-friend-request`,
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["declineFriendRequest"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}/decline-friend-request`,
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["follow"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}/follow`,
			method: "POST"
		},
		response: (env, params, data) => {
			if (data.isCaptchaRequired === true) throw new Error("Captcha was required");
			return data.success;
		}
	},
	{
		names: ["sendFriendRequest"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}request-friendship`,
			method: "POST"
		},
		response: (env, params, data) => {
			if (data.isCaptchaRequired) throw new Error("Captcha is required");
			return data.success;
		}
	},
	{
		names: ["unfollow"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]

		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}/unfollow`,
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["unfriend"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId}/unfriend`,
			method: "POST"
		},
		response: () => true
	},
	{
		names: ["friendsWith"],
		type: "request",
		params: [
			[
				"listUsers",
				true,
				staticTypes.arrayType("userId")
			],
			[
				"userId",
				false,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://friends.roblox.com/v1/users/${userId || env.id}/friends/statuses`,
			queries: {
				userIds: (env, { listUsers }) => listUsers.join(",")
			}
		},
		response: (env, params, data) => data.data.map(userStatus => new env.client.structures.User.FriendStatus(
			env, userStatus
		))
	},
	{
		names: ["block"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			],
			[
				"block",
				false,
				joi => joi.bool()
			]
		],
		request: {

			url: (env, { block }) => block === undefined || block === true ? "https://api.roblox.com/userblock/block" : "https://api.roblox.com/userblock/unblock",
			method: "POST",
			queries: {
				userId: (env, { userId }) => userId
			}
		},
		response: (env, params, data) => data.success
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
			url: "https://accountinformation.roblox.com/v1/description",
			method: "POST",
			json: (env, { description }) => ({ description })
		},
		response: () => true
	},
	{
		names: ["updateGender"],
		type: "request",
		params: [
			[
				"gender",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://accountinformation.roblox.com/v1/gender",
			method: "POST",
			json: (env, { gender }) => ({ gender })
		}
	},
	{
		names: ["updateStatus"],
		type: "request",
		params: [
			[
				"status",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://www.roblox.com/home/updatestatus",
			method: "POST",
			form: (env, { status }) => ({
				status,
				sendToFacebook: false
			})
		}
	},
	{
		names: ["getGroups"],
		type: "custom",
		params: [
			[
				"userId",
				false,
				staticTypes.userId
			]
		],
		run: ({ userId }) => this.client.getUserGroups(userId || this.id)
	},
	{
		names: ["tfaEnabled"],
		type: "request",
		params: [],
		request: {
			url: "https://accountsettings.roblox.com/v2/twostepverification"
		},
		response: (env, params, data) => data.enabled
	},
	{
		names: ["toggleTfa"],
		type: "request",
		params: [
			[
				"enabled",
				true,
				joi => joi.bool()
			],
			[
				"password",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://accountsettings.roblox.com/v2/twostepverification",
			method: "PATCH",
			json: (env, { enabled, password }) => ({ enabled, password })
		},
		response: () => true
	},
	{
		names: ["tradePrivacy"],
		type: "request",
		params: [],
		request: {
			url: "https://accountsettings.roblox.com/v1/trade-privacy"
		},
		response: (env, params, data) => data.tradePrivacy
	},
	{
		names: ["updateTradePrivacy"],
		type: "request",
		params: [
			[
				"tradePrivacy",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://accountsettings.roblox.com/v1/trade-privacy",
			method: "POST",
			json: (env, { tradePrivacy }) => ({
				tradePrivacy
			})
		}
	},
	{
		names: ["getMessages"],
		type: "request",
		params: [
			[
				"options",
				false,
				joi => joi.object({
					page: joi.number(),
					limit: joi.number(),
					messageType: joi.any()
				})
			]
		],
		request: {
			url: "https://www.roblox.com/messages/api/get-messages",
			qs: (env, options) => ({
				messageTab: options.messageTab || 0,
				pageNumber: options.pageNumber || 0,
				limit: options.limit || 20
			})
		},
		response: (env, params, data) => ({
			page: data.PageNumber,
			totalPages: data.TotalPages,
			messages: data.Collection.map(message => new env.client.structures.Message(env, message))
		})
	},
	{
		names: ["markMessagesRead"],
		type: "request",
		params: [
			[
				"messages",
				true,
				staticTypes.arrayType("message")
			],
			[
				"markRead",
				true,
				joi => joi.bool()
			]
		],
		request: {

			url: (env, { markRead }) => `https://www.roblox.com/messages/api/mark-messages-${markRead === true ? "read" : "unread"}`,
			method: "POST",
			json: (env, { messages }) => ({
				messageIds: messages
			})
		},
		response: () => true
	},
	{
		names: ["moveMessages"],
		type: "request",
		params: [
			[
				"messages",
				true,
				staticTypes.arrayType("message")
			],
			[
				"to",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: (env, { to }) => `https://www.roblox.com/messages/api/${to}-messages`,
			method: "POST",
			form: (env, { messages }) => ({
				messageIds: messages
			})
		},
		response: () => true
	},
	{
		names: ["sendMessage"],
		type: "request",
		params: [
			[
				"user",
				true,
				staticTypes.userId
			],
			[
				"title",
				true,
				joi => joi.string()
			],
			[
				"message",
				true,
				joi => joi.string()
			]
		],
		request: {
			url: "https://www.roblox.com/messages/send",
			method: "POST",
			json: (env, { user, title, message }) => ({
				recipientId: user,
				subject: title,
				body: message
			})
		},
		response: (env, params, data) => data.success
	},
	{
		names: ["setPrimaryGroup"],
		type: "request",
		params: [
			[
				"group",
				true,
				staticTypes.groupId
			]
		],
		request: {
			url: "https://groups.roblox.com/v1/user/groups/primary",
			method: "POST",
			json: (env, { group }) => ({
				groupId: group
			})
		},
		response: () => true
	},
	{
		names: ["getPrimaryGroup"],
		type: "request",
		params: [
			[
				"userId",
				false,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/users/${userId || env.id}`
		},
		response: (env, params, data) => new env.client.structures.Group.User(env, data.group, data.role)
	},
	{
		names: ["removePrimaryGroup"],
		type: "request",
		params: [],
		request: {
			url: "https://groups.roblox.com/v1/user/groups/primary",
			method: "DELETE"
		},
		response: () => true
	}
];
