const EventEmitter = require("events");
const misc = require("../misc");
const structures = require("../structures");
const path = require("path");
const ChatManager = require("./src/Chat");
const request = require("request");

const DefaultOptions = {
	setup: {},
	callbacks: {},
	credentials: {}
};

module.exports = class ClientBase extends EventEmitter {
	constructor (options = {}) {
		super();

		this.util = misc.util;
		this._timeouts = new Set();
		this._intervals = new Set();
		this.options = this._setupOptions(options);
		this.errors = misc.errors;
		this.structures = structures;

		this.src = require("./src");
		this.constants = this.src.constants;
		this.token = new misc.managers.token(this);
		this.cache = new misc.managers.cache(this);
		this.request = new misc.managers.request(this);
		this.captcha = new misc.managers.captcha(this);
		this.chat = new ChatManager({ client: this });

		this._setupMethods();
		if (!this.options.jar) this.options.jar = request.jar();
	}

	_setupMethods () {
		require("./methods")({ client: this });
	}

	_setupOptions (options) {
		return Object.assign(JSON.parse(JSON.stringify(DefaultOptions)), options);
	}

	setupMethod (filePath, name) {
		filePath = path.join(__dirname, filePath, name);
		let file;
		try {
			file = require(filePath);
		} catch (error) {
			throw new Error(this.errors.methodRegister.failedMethodSetup(filePath, error));
		}
		if (!file || !file.conf) throw new Error(this.errors.methodRegister.noConf(filePath));
		const tmpStore = this.src.prepareFunctions.prepare.byConfigs({ client: this }, file.conf);
		if (!tmpStore || !tmpStore.register) throw new Error(this.errors.methodRegister.noFunctionStore());
		return tmpStore.register[name];
	}

	destroy () {
		for (const t of this._timeouts) this.clearTimeout(t);
		for (const i of this._intervals) this.clearInterval(i);
		this._timeouts.clear();
		this._intervals.clear();
	}

	setTimeout (fn, delay, ...args) {
		const timeout = setTimeout(() => {
			fn(...args);
			this._timeouts.delete(timeout);
		}, delay);
		this._timeouts.add(timeout);
		return timeout;
	}

	clearTimeout (timeout) {
		clearTimeout(timeout);
		this._timeouts.delete(timeout);
	}

	setInterval (fn, delay, ...args) {
		const interval = setInterval(fn, delay, ...args);
		this._intervals.add(interval);
		return interval;
	}

	clearInterval (interval) {
		clearInterval(interval);
		this._intervals.delete(interval);
	}

	loggedIn () {
		return this.user !== null;
	}

	extend (extendedPath, under) {
		if (this[under]) throw new Error(this.errors.methodRegister.alreadyUnder(under));

		this[under] = {};

		const preparedMethods = this.src.prepareFunctions.prepare.getConfigsByPath({ client: this }, extendedPath);

		for (let [key, value] of Object.entries(preparedMethods.register)) {
			this[under][key] = value;
		}
	}
};
