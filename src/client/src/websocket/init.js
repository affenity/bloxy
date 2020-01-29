const SignalClient = require("signalr-client").client;
const socketHandlers = require("./socketHandlers");

/**
 * @param {Client} client The client
 */
module.exports = client => {
	if (!client.loggedIn) {
		throw new Error("Cannot connect with websocket unauthenticated!");
	}

	const maxRetries = client.options.setup.wsRetries || 3;
	const jar = client.rest.jar;
	const robloxCookie = jar.getCookieStringSync("https://roblox.com");

	if (client.ws) {
		// TODO: Stop the ongoing connection
		client.ws.close();
	}

	client.debug.log(`Initializing connection through web sockets.`);

	const connectSocket = retries => {
		retries = retries || 0;
		const socket = new SignalClient("wss://realtime.roblox.com/notifications", ["usernotificationhub"], 3, true);
		socket.headers.Cookie = robloxCookie;
		const doReconnect = () => connectSocket(++retries);

		if (retries >= maxRetries) {
			throw new Error(`Failed to establish a socket connection, retried ${retries}/${maxRetries} times`);
		}

		socket.on("UserNotificationHub", "notification", (name, message) => {
			// If they are going to implement a custom handler, allow for it by sending the raw name and message
			client.emit("_event", {
				name,
				message
			});

			const parsedMessage = !(message instanceof Object) ? JSON.parse(message) : message;
			const messageType = parsedMessage.Type ? parsedMessage.Type.toLowerCase() : null;
			const socketHandler = socketHandlers[name.toLowerCase()];

			if (socketHandler) {
				if (!socketHandler.disableMessageTypeCheck && !messageType) {
					throw new Error(`No messageType was found for the given event ${message}`);
				} else {
					return socketHandler(client, messageType, name, parsedMessage);
				}
			} else {
				client.debug.log(`Caught socket event with no handler, name: "${name}", message: "${message}"`);
			}
		});

		socket.serviceHandlers.connectFailed = error => {
			client.debug.log(`Got a socket connection failed error: ${error}`);
			client.emit("error", error);
			return doReconnect();
		};

		socket.serviceHandlers.onerror = error => {
			client.debug.log(`An error occurred with the socket connection ${error}`);
			client.emit("error", error);
			return doReconnect();
		};

		socket.serviceHandlers.connected = () => {
			client.debug.log(`Successfully established a socket connection`);
			client.emit("ready");
		};

		socket.serviceHandlers.reconnecting = () => {
			client.debug.log(`Socket is reconnecting...`);
			client.emit("reconnecting");
		};

		socket.start();
	};

	connectSocket();
};
