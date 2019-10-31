const staticTypes = require("../../misc/util/staticTypeDeclarations");

module.exports = [
	{
		names: ["getGroup"],
		type: "request",
		params: [
			[
				"groupId",
				true,
				staticTypes.groupId
			]
		],
		request: {
			url: (env, { groupId }) => `https://groups.roblox.com/v1/groups/${groupId}`
		},
		response: (env, params, data) => new env.client.structures.Group.Group(env, data)

	},
	{
		names: ["getUser"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			],
			[
				"getSimple",
				false,
				joi => joi.bool()
			]
		],
		request: {
			url: (env, { userId, getSimple }) => {
				if (getSimple) return `https://users.roblox.com/v1/users/${userId}`;
				return `https://www.roblox.com/users/profile/profileheader-json?userId=${userId}`;
			}
		},
		response: (env, params, data) => new env.client.structures.User.User(env, data)
	},
	{
		names: ["getMultiUsers"],
		type: "request",
		params: [
			[
				"users",
				true,
				staticTypes.arrayType("userId")
			],
			[
				"areNames",
				false,
				joi => joi.bool()
			]
		],
		request: {

			url: (env, { areNames }) => areNames ? "https://users.roblox.com/v1/usernames/users" : "https://users.roblox.com/v1/users",
			method: "POST",
			json: (env, { users, areNames }) => ({
				[areNames ? "usernames" : "userIds"]: users
			})
		},
		response: (env, params, data) => data.data.map(userData => new env.client.structures.User.Partial(env, userData))

	},
	{
		names: ["getIdByUsername"],
		type: "custom",
		params: [
			[
				"username",
				true,
				joi => joi.string()
			]
		],
		run: async function run ({ username }) {
			const getUser = await this.client.getMultiUsers([username], true);
			return getUser[0];
		}
	},
	{
		names: ["getUserGroups"],
		type: "request",
		params: [
			[
				"userId",
				true,
				staticTypes.userId
			]
		],
		request: {
			url: (env, { userId }) => `https://groups.roblox.com/v1/users/${userId}/groups/roles`
		},
		response: (env, params, data) => data.data.map(userGroup => new env.client.structures.Group.User(
			env,
			userGroup.group,
			userGroup.role
		))
	},
	{
		names: ["userOwnsGamepass"],
		type: "request",
		params: [
			[
				"user",
				true,
				staticTypes.userId
			],
			[
				"passId",
				true,
				staticTypes.any
			]
		],
		request: {
			url: (env, { user, passId }) => `https://inventory.roblox.com/v1/users/${user}/items/GamePass/${passId}`
		},
		response: (env, params, data) => data.data.length > 0
	},
	{
		names: ["userOwnsAsset"],
		type: "request",
		params: [
			[
				"user",
				true,
				staticTypes.userId
			],
			[
				"assetId",
				true,
				staticTypes.any
			]
		],
		request: {
			url: (env, { user, assetId }) => `https://api.roblox.com/ownership/hasasset?userId=${user}&assetId=${assetId}`
		},
		response: (env, params, data) => data.toString().toLowerCase().includes("true")
	}
];
