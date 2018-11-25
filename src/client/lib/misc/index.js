module.exports = function (self) {

	return {
		getUserId: require("./getUserId").bind(self),
		isClass  : require("./isClass").bind(self),
		verifyCode: require("./verifyCode").bind(self)
	};
};