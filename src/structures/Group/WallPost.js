const GroupMember = require("./Member");

module.exports = class GroupWallPost {
	constructor (env, data) {
		this.env = env;
		this.id = data.id;
		this.poster = data.poster && new GroupMember(env, data.poster);
		this.body = data.body;
		this.created = new Date(data.created);
	}

	delete () {
		return t-his.env.deleteWallPost(this.id);
	}

	deleteAll () {
		return this.env.deleteUserWallPosts(this.poster.id);
	}

	kick () {
		return this.env.kick(this.poster.id);
	}
};
