class AvatarAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://avatar.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getAvatarInfo () {
		return this.request({
			url: "v1/avatar"
		});
	}

	getAvatarMetadata () {
		return this.request({
			url: "v1/avatar/metadata"
		}, {}, {
			disableAuth: true
		});
	}

	getAvatarRules () {
		return this.request({
			url: "v1/avatar-rules"
		}, {}, {
			disableAuth: true
		});
	}

	getUserAvatar (userId) {
		return this.request({
			url: `v1/users/${userId}/avatar`
		}, {}, {
			disableAuth: true
		});
	}

	getUserWearingAssets (userId) {
		return this.request({
			url: `v1/users/${userId}/currently-wearing`
		}, {}, {
			disableAuth: true
		});
	}

	getUserOutfits ({ userId, page, itemsPerPage, isEditable }) {
		return this.request({
			url: `v1/users/${userId}/outfits`,
			qs: {
				page,
				itemsPerPage,
				isEditable
			}
		}, {}, {
			disableAuth: true
		});
	}

	removeAsset (assetId) {
		return this.request({
			url: `v1/avatar/assets/${assetId}/remove`,
			method: "POST"
		});
	}

	wearAsset (assetId) {
		return this.request({
			url: `v1/avatar/assets/${assetId}/wear`,
			method: "POST"
		});
	}

	redrawThumbnail () {
		return this.request({
			url: "v1/avatar/redraw-thumbnail"
		});
	}

	setBodyColors (options) {
		return this.request({
			url: "v1/avatar/set-body-colors",
			method: "POST",
			json: options
		});
	}

	setAvatarType (avatarType) {
		return this.request({
			url: "v1/avatar/set-player-avatar-type",
			method: "POST",
			json: {
				playerAvatarType: avatarType
			}
		});
	}

	setScales (options) {
		return this.request({
			url: "v1/avatar/set-scales",
			method: "POST",
			json: options
		});
	}

	setWearingAssets (assetIds) {
		return this.request({
			url: "v1/avatar/set-wearing-assets",
			method: "POST",
			json: {
				assetIds
			}
		});
	}

	getOutfitInfo (outfitId) {
		return this.request({
			url: `v1/outfits/${outfitId}/details`
		}, {}, {
			disableAuth: true
		});
	}

	deleteOutfit (outfitId) {
		return this.request({
			url: `v1/outfits/${outfitId}/delete`,
			method: "POST"
		});
	}

	updateOutfit ({ outfitId, options }) {
		return this.request({
			url: `v1/outfits/${outfitId}/update`,
			method: "POST",
			json: options
		});
	}

	wearOutfit (outfitId) {
		return this.request({
			url: `v1/outfits/${outfitId}/wear`,
			method: "POST"
		});
	}

	createOutfit (options) {
		return this.request({
			url: "v1/outfits/create",
			method: "POST",
			json: options
		});
	}

	getRecentItems (itemType) {
		return this.request({
			url: `v1/recent-items/${itemType}/list`
		});
	}
}

module.exports = AvatarAPI;
