class TranslationRolesAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://translationroles.roblox.com/";
		this.request = require("./_request").bind(this);
	}

	getGameLocalizationRoles (universeId) {
		return this.request({
			url: `v1/game-localization-roles/games/${universeId}/current-user/roles`
		});
	}

	getUserBelongingToRole ({ gameId, role }) {
		return this.request({
			url: `v1/game-localization-roles/games/${universeId}/roles/${role}/assignees`
		});
	}

	getSelfGamesRoles ({ role, start, amount }) {
		return this.request({
			url: `v1/game-localization-roles/roles/${role}/current-user`
		});
	}
}

module.exports = TranslationRolesAPI;
