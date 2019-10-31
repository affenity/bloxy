module.exports = class GroupRole {
	constructor (env, roleData) {
		this.env = env;
		this.id = roleData.id;
		this.name = roleData.name;
		this.rank = roleData.rank;
	}

	getMembers (options) {
		return this.env.getMembersWithRole(this.id, options);
	}

	getPermissions () {
		return this.env.getRolePermissions(this.id);
	}
};
