const params = require("./params");
const validate = require("./validate");

module.exports = validate;

for (let k of Object.keys(params)) {
	// eslint-disable-next-line security/detect-object-injection
	module.exports[k] = params[k];
}
