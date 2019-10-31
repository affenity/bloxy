const GroupMember = require("./Member");

module.exports = class AuditLog {
	constructor (env, data) {
		this.env = env;
		this.actor = new GroupMember(env, data.actor.user, data.actor.role);
		this.action = data.actionType;
		this.description = data.description;
	}
};
