const GroupRole = require("./Role");
const PartialUser = require("../User").Partial;

module.exports = class GroupMember extends PartialUser {
	constructor (env, data, roleData) {
		super(env, data && (data.user || data));
		this.env = env;
		this.role = (data.role && new GroupRole(env, data.role)) || (roleData && new GroupRole(env, roleData || data.role));
	}

	kick () {
		return this.env.kick(this.id);
	}

	update (role) {
		return this.env.updateMember(this.id, role.id);
	}

	payoutOnce (amount) {
		return this.env.payoutUsers([
			{
				userId: this.id,
				amount: amount
			}
		]);
	}

	makeOwner () {
		return this.env.changeOwner(this.id);
	}

	deleteWallPosts () {
		return this.env.deleteUserWallPosts(this.id);
	}
};
