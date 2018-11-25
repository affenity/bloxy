

exports.run = async function (requesterId) {

	let options = {
		method: "POST",
		body: {
			targetUserId: requesterId,
			invitationId: this.userId
		},
		json: true
	};

	let response = await this._setup.request.request("https://www.roblox.com/api/friends/acceptfriendrequest", options);
	if (response.statusCode !== 200) throw new Error(`Failed to accept friend request. ${response.status}`);

	if (response && response.body.success === true) {
		return {
			success: true,
			userId: requesterId
		};
	} else {
		throw new Error("Failed to accept friend request.");
	}
};

exports.conf = {
	required: {
		params: 1,
		auth: true
	},

	name: "acceptFriendRequest",
	params: ["requesterId (Number)"],
	description: "Accepts a friend request from the requesterId (if any)"
};