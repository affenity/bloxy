"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const SignalR = tslib_1.__importStar(require("signalr-client"));
const ClientSocket_1 = tslib_1.__importDefault(require("../../lib/ClientSocket"));
function connect(client) {
    var _a, _b, _c;
    const maxRetries = (_c = (_b = (_a = client.options.setup) === null || _a === void 0 ? void 0 : _a.websocket) === null || _b === void 0 ? void 0 : _b.maxRetries) !== null && _c !== void 0 ? _c : 3;
    const connectToURL = `wss://realtime.roblox.com/notifications`;
    const clientCookies = client.rest.cookieJar.getCookieStringSync("https://roblox.com");
    if (client.socket) {
        // Closing off the connection so we can re-connect
        client.socket.close();
    }
    const connectToSocket = (retries = 0) => {
        const socket = new SignalR.client(connectToURL, ["usernotificationhub"], 3, true);
        socket.headers.Cookie = clientCookies;
        const attemptReconnect = () => connectToSocket(++retries);
        const onError = (error) => {
        };
        if (retries >= maxRetries) {
            socket.close();
            throw new Error(`Failed to establish a socket connection, attempted ${retries} times.`);
        }
        return new ClientSocket_1.default(client, socket);
    };
    connectToSocket();
}
exports.default = connect;
