class PublishAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://publish.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	uploadUserAsset (file) {
		return this.request({
			url: "v1/assets/upload",
			method: "POST",
			body: {
				"uploadAssetRequest.files": file
			}
		});
	}

	uploadBadgeIcon ({ badgeId, image }) {
		return this.request({
			url: `v1/badges/${badgeId}/icon`,
			method: "POST",
			body: {
				"request.files": image
			}
		});
	}

	uploadGamePassIcon ({ gamePassId, image }) {
		return this.request({
			url: `v1/game-passes/${gamePassId}/icon`,
			method: "POST",
			body: {
				"request.files": image
			}
		});
	}

	uploadGameThumbnail ({ universeId, image }) {
		return this.request({
			url: `v1/games/${universeId}/thumbnail/image`,
			method: "POST",
			body: {
				"request.files": image
			}
		});
	}

	uploadPluginIcon ({ pluginId, image }) {
		return this.request({
			url: `v1/plugins/${pluginId}/icon`,
			method: "POST",
			body: {
				"request.files": image
			}
		});
	}
}

module.exports = PublishAPI;
