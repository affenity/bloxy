const get = require("../../misc/util/getValue");
const Base = require("./Base");
const GroupShout = require("./Shout");
const GroupMember = require("./Member");

module.exports = class Group extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
		this.id = get("groupId", data);
		this.name = get("name", data);
		this.description = data.description;
		this.owner = data.owner && new GroupMember(this, data.owner);
		this.shout = data.shout && new GroupShout(this, data.shout);
	}
};
