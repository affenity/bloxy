
module.exports = async function () {
	let response = await this.requestManager.request("https://www.roblox.com/favorite/toggle", { method: "POST", xcsrf: false });
	if (!response || !response.headers["x-csrf-token"]) throw new Error("Failed to get X-CSRF-Token");
	this.token = response.headers["x-csrf-token"];
};