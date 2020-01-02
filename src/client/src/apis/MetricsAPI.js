class MetricsAPI {
	constructor (client) {
		this.client = client;
		this.baseUrl = "https://metrics.roblox.com/";
		this.request = require("./_request").bind(this, this);
	}

	getThumbnailMetadata () {
		return this.request({
			url: "v1/thumbnails/metadata"
		});
	}

	reportThumbnailLoadDuration ({ duration, loadState }) {
		return this.request({
			url: "v1/thumbnails/load",
			method: "POST",
			json: {
				duration,
				loadState
			}
		});
	}

	reportRecordBundleLoadSuccess (data) {
		return this.request({
			url: "v1/bundle-metrics/report",
			method: "POST",
			json: data
		});
	}
}

module.exports = MetricsAPI;
