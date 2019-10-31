const Base = require("./Base");

module.exports = class UserFriendRequest extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
		this.created = new Date(data.created);
		this.userDescription = data.description;
	}
};
