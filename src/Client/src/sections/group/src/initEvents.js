exports.conf = {
	names: ["initEvents"],
	type: "custom",
	params: [
		[
			"config",
			true,
			joi => joi.object({
				wall: {
					enabled: joi.bool().default(false),
					interval: joi.number()
				},
				joinRequests: {
					enabled: joi.bool().default(false),
					interval: joi.number()
				},
				shout: {
					enabled: joi.bool().default(false),
					interval: joi.number()
				}
			})
		]
	],
	run
};

async function run ({ config }) {
	const { wall, joinRequests, shout } = config;
	this._eventCache = {
		wall: {},
		joinRequests: {},
		shout: {}
	};

	if (wall && (wall.enabled || wall.interval)) {
		this.client.setInterval(async () => {
			const newWallPosts = await checkWall(this);
			newWallPosts.forEach(post => {
				this.emit("wallPost", post, this);
			});
		}, wall.interval || 2000);
	}

	if (joinRequests && (joinRequests.enabled || joinRequests.interval)) {
		this.client.setInterval(async () => {
			const newJoins = await checkJoinRequests(this);
			newJoins.forEach(joinRequest => {
				this.emit("joinRequest", joinRequest, this);
			});
		}, joinRequests.interval || 2000);
	}

	if (shout && (shout.enabled || shout.interval)) {
		this.client.setInterval(async () => {
			const newShout = await checkShout(this);
			if (newShout) {
				this.emit("shout", newShout, this);
			}
		}, shout.interval || 2000);
	}
}

async function checkJoinRequests (group) {
	const joinRequests = await group.getJoinRequests({
		limit: 100
	});
	const { data } = joinRequests;
	const sortedJoinRequests = data.sort((a, b) => b.created.getTime() - a.created.getTime());
	let newJoinRequests = [];

	if (group._eventCache.joinRequests.latest) {
		newJoinRequests = sortedJoinRequests.filter(request => request.created.getTime() > group._eventCache.joinRequests.latest);
	}

	if (sortedJoinRequests && sortedJoinRequests[0]) {
		group._eventCache.joinRequests.latest = sortedJoinRequests[0].created.getTime();
	}

	return newJoinRequests;
}

async function checkWall (group) {
	const getWall = await group.getWall({
		limit: 100
	});
	const { data } = getWall;
	const sortedWallPosts = data.sort((a, b) => b.id - a.id);
	let newWallPosts = [];

	if (group._eventCache.wall.latest) {
		newWallPosts = sortedWallPosts.filter(post => post.id > group._eventCache.wall.latest);
	}

	if (sortedWallPosts && sortedWallPosts[0]) {
		group._eventCache.wall.latest = sortedWallPosts[0].id;
	}

	return newWallPosts;
}

async function checkShout (group) {
	const updatedGroup = await group.client.getGroup(group.id);
	const isUpdated = group._eventCache.shout.latest && updatedGroup.shout && updatedGroup.shout.body.trim().toLowerCase() !== group._eventCache.shout.latest;

	if (updatedGroup.shout) {
		group._eventCache.shout.latest = (updatedGroup.shout.body || "").toString().trim().toLowerCase();
	}

	if (isUpdated) {
		return updatedGroup.shout;
	}

}
