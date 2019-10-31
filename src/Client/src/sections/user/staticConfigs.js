const staticTypes = require("../../../../misc/util/staticTypeDeclarations");

module.exports = [
	{
		names: ["block"],
		type: "custom",
		params: [
			[
				"block",
				false,
				joi => joi.bool()
			]
		],
		run: ({ block }) => this.client.user.block(this.id, block)
	},
	{
		names: ["acceptFriendRequest"],
		type: "custom",
		params: [],
		run: () => this.client.user.acceptFriendRequest(this.id)
	},
	{
		names: ["declineFriendRequest"],
		type: "custom",
		params: [],
		run: () => this.client.user.declineFriendRequest(this.id)
	},
	{
		names: ["follow"],
		type: "custom",
		params: [],
		run: () => this.client.user.follow(this.id)
	},
	{
		names: ["unfollow"],
		type: "custom",
		params: [],
		run: () => this.client.user.unfollow(this.id)
	},
	{
		names: ["sendFriendRequest"],
		type: "custom",
		params: [],
		run: () => this.client.user.sendFriendRequest(this.id)
	},
	{
		names: ["unfriend"],
		type: "custom",
		params: [],
		run: () => this.client.user.unfriendUser(this.id)
	},
	{
		names: ["friendsWith"],
		type: "custom",
		params: [
			[
				"users",
				false,
				staticTypes.arrayType("userId")
			]
		],
		run: users => this.client.user.friendsWith(users || this.client.user.id, this.id)
	},
	{
		names: ["getUser"],
		type: "custom",
		params: [
			[
				"simple",
				false,
				joi => joi.bool()
			]
		],
		run: ({ simple }) => this.client.getUser(this.id, simple)
	}
];
