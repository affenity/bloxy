const Base = require("./Base");

module.exports = class PartialUser extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
	}
};
