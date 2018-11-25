module.exports = async (self) => {
	let response = await self._setup.request.request("https://www.roblox.com/game/GetCurrentUser.ashx");
	let userId = response.body;

	return parseInt(userId);
};