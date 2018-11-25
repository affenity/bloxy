


exports.run = async function (requesterId) {
	let options = {
		method: "POST",
		body: {
			targetUserId: requesterId,
			invitationId: this.userId
		},
		json: true
	};

	let response = await this._setup.request.request("https://www.roblox.com/api/friends/declinefriendrequest", options);
	if (response.statusCode !== 200) throw new Error(`Failed to decline friend request. ${response.status}`);

	return {
		success: response.body.success == true,
		userId : requesterId
	};
};



exports.conf = {
	required:  {
		params: 1,
		auth: true
	},

	name: "declineFriendRequest",
	description: "Declines a friend request from the user (if any)",
	params: ["requesterId (Number)"]
};