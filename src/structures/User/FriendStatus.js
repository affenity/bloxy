const Base = require("./Base");

module.exports = class FriendStatus extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
		this.friends = data.friends;
	}
};
