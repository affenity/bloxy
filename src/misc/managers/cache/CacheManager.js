const NodeCache = require("node-cache");

class CacheStore {
	constructor (name, defaultExpiration) {
		this.prefix = name;
		this.cache = new NodeCache({
			stdTTL: defaultExpiration || 3600
		});
	}

	set (key, value, expire) {
		return this.cache.set(`${this.prefix}-${key}`, value, expire);
	}

	get (key) {
		return this.cache.get(`${this.prefix}-${key}`);
	}

	clear () {
		return this.cache.flushAll();
	}

	close () {
		return this.cache.close();
	}
}

module.exports = class CacheManager {
	constructor (client) {
		this.client = client;
		this.defaultTTL = 3600;
		const CACHE_SETTINGS = client.options.setup.cacheSettings || {};
		this.cache = {
			users: new CacheStore("users", CACHE_SETTINGS.users || (CACHE_SETTINGS.default || this.defaultTTL)),
			groups: new CacheStore("groups", CACHE_SETTINGS.groups || (CACHE_SETTINGS.default || this.defaultTTL))
		};
	}

	newCache (name) {
		const CACHE_SETTINGS = this.bloxySetup.setup.cacheSettings;
		let newStore = new CacheStore(name, CACHE_SETTINGS.overrides[name] || (CACHE_SETTINGS.default || this.defaultTTL));
		this.cache[name] = newStore;
		return newStore;
	}

	delCache (name) {
		this.cache[name].close();
		delete this.cache[name];
	}

	clearCache () {
		// eslint-disable-next-line array-callback-return
		Object.keys(this.cache).every(x => {
			this.cache[x].clear();
		});
	}
};
