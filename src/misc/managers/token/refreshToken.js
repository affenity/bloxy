module.exports = async function refreshToken () {
	const { response } = await this.client.request.request({ url: "https://auth.roblox.com/v2/login", method: "POST", jar: false, xcsrf: false, ignoreTokenError: true }).catch(e => { throw new Error(e); });
	if (!response || !response.headers["x-csrf-token"]) throw new Error("Failed to get X-CSRF-Token");
	this.token = response.headers["x-csrf-token"];
	return this.token;
};
