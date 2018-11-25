const isClass = require("./isClass");

module.exports = function (user) {


	if (typeof(user) === "string" || typeof(user) === "number") {
		return user;
	} else if ((isClass(user, this._setup.classes.RobloxUser) || isClass(user, this._setup.classes.PartialUser))) {
		return user.userId;
	} else return null;

};