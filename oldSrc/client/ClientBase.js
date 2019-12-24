const EventEmitter = require("events");


module.exports = class ClientBase extends EventEmitter {
	constructor (options = {}) {
		super();
	}
};
