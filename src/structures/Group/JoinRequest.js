const GroupMember = require("./Member");

module.exports = class GroupJoinRequest {
	constructor (env, data) {
		this.env = env;
		this.user = data.requester && new GroupMember(env, data.requester);
		this.created = new Date(data.created);
	}

	accept () {
		console.log("accepting");
		console.log(this.user);
		return this.env.acceptJoinRequest(this.user.id);
	}

	decline () {
		return this.env.declineJoinRequest(this.user.id);
	}
};
