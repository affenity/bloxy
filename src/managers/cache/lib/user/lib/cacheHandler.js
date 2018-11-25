

exports.getCache = async function () {
	return (await this.cacher.get("usercache") || {});
};

exports.updateCache = async function (newdata) {
	return (await this.cacher.save("usercache", newdata));
};

exports.deleteCache = async function () {
	return (await this.cacher.delete("usercache"));
};