

exports.getCache = async function () {
	return (await this.cacher.get("groupcache") || {});
};

exports.updateCache = async function (newdata) {
	return (await this.cacher.save("groupcache", newdata));
};

exports.deleteCache = async function () {
	return (await this.cacher.delete("groupcache"));
};