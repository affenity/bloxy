module.exports = class CursorPage {
	constructor ({ env, params, data, dataName, dataClass, repeatFunction }) {
		this.env = env;
		this.providedOptions = params.options || {};
		this.repeatFunction = repeatFunction;
		this.previousCursor = data.previousPageCursor;
		this.nextCursor = data.nextPageCursor;

		this.data = data[dataName || "data"].map(x => new dataClass(env, x));
	}

	newOptions (cursor, options) {
		return Object.assign(this.providedOptions, { cursor: cursor }, options);
	}
	next (options = {}) {
		return this.repeatFunction(this.newOptions(this.nextCursor, options));
	}

	previous (options = {}) {
		return this.repeatFunction(this.newOptions(this.previousCursor, options));
	}
};
