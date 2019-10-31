const Base = require("./Base");

module.exports = class PartialGroup extends Base {
	constructor (env, data) {
		super(env, data);
		this.env = env;
	}
};
