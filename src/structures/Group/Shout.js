const GroupMember = require("./Member");

module.exports = class GroupShout {
	constructor (env, data) {
		this.env = env;
		this.body = (data || {}).body;
		this.poster = data.poster && new GroupMember(env, data.poster);
		this.created = new Date((data || {}).created);
	}
};
