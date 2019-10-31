const Base = require("./Base");
const GroupRole = require("./Role");
const GroupMember = require("./Member");
const GroupShout = require("./Shout");

module.exports = class UserGroup extends Base {
	constructor (env, groupData, roleData) {
		super(env, groupData);
		this.env = env;
		this.role = new GroupRole(env, roleData);
		this.owner = groupData.owner && new GroupMember(env, groupData.owner);
		this.shout = groupData.shout && new GroupShout(env, groupData.shout);
		this.memberCount = groupData.memberCount;
		this.isBuildersClubOnly = groupData.isBuildersClubOnly;
		this.hasClan = groupData.hasClan;
		this.publicEntryAllowed = groupData.publicEntryAllowed;
	}
};
