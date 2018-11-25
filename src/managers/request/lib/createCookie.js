const toughCookie = require("tough-cookie");



module.exports = function (key, value, domain, hostOnly, httpOnly) {

	let newCookie = new toughCookie.Cookie({
		key: key,
		value: value,
		domain: domain,
		hostOnly: hostOnly,
		httpOnly: httpOnly
	});

	return newCookie;
};