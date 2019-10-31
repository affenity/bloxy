const SignalClient = require("signalr-client").client;
const handlers = require("./handlers");

exports.conf = {
	names: ["initWS"],
	type: "custom",
	params: [],

	run: function run () {
		const client = this.client;

		const maxRetries = (client.options.setup || {}).maxWSRetries || 3;

		function connectWebSocket (retries) {
			retries = retries || 0;

			client._socket = new SignalClient("wss://realtime.roblox.com/notifications", ["usernotificationhub"], 3, true);
			client._socket.headers.Cookie = client.options.jar.getCookieString("https://roblox.com");
			client._socket[client.user.id] = true;

			// eslint-disable-next-line consistent-return
			client._socket.on("UserNotificationHub", "notification", (name, message) => {
				if (client._socket[client.user.id]) {
					message = JSON.parse(message);
					if (handlers[name]) return handlers[name](client, message);
					console.log(name, message);
					console.log(`No handler found for notification name "${name}"`);
				} else {
					console.log("haha loser");
				}
			});

			client._socket.serviceHandlers.connectFailed = error => {
				client.emit("error", new Error(`Connection failed: ${error.message}`));
				if (retries >= maxRetries) {
					client.emit("close", new Error(`Failed to connect to Roblox. Attempted retries: ${retries}/${maxRetries}`));
				} else {
					setTimeout(connectWebSocket, 1000, retries);
				}
			};

			client._socket.serviceHandlers.onerror = error => {
				client.emit("error", error);
			};

			client._socket.serviceHandlers.connected = () => {
				client.emit("ready");
			};

			client._socket.serviceHandlers.reconnecting = () => {
				client.setTimeout(connectWebSocket, 1000, 0);
				client.emit("reconnecting");
				return true;
			};

			client._socket.start();
		}

		connectWebSocket();
	}
};
