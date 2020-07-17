"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const SignalRClient = tslib_1.__importStar(require("signalr-client"));
var EventEmitter = NodeJS.EventEmitter;
class ClientSocket extends EventEmitter {
    constructor(client) {
        super();
        this.client = client;
        this.socket = null;
        this.connected = false;
    }
    connect() {
        return new Promise((resolve, reject) => {
            const connectSocket = (retries = 0) => {
                var _a, _b, _c;
                this.socket = new SignalRClient("wss://realtime.roblox.com/notifications", ["usernotificationhub"], 3, true);
                this.socket.headers.Cookie = this.client.rest.cookieJar.getCookieStringSync("https://roblox.com");
                const maxRetries = (_c = (_b = (_a = this.client.options.setup) === null || _a === void 0 ? void 0 : _a.websocket) === null || _b === void 0 ? void 0 : _b.maxRetries) !== null && _c !== void 0 ? _c : 3;
                const attemptReconnect = () => connectSocket(++retries);
                const onError = (error) => {
                    this.emit("error", error);
                    attemptReconnect();
                };
                if (retries >= maxRetries) {
                    reject(new Error(`Connection failed, attempted to establish a connection ${retries} times`));
                }
                this.socket.serviceHandlers.connectFailed = (error) => onError(error);
                this.socket.serviceHandlers.onerror = (error) => onError(error);
                this.socket.serviceHandlers.connected = () => {
                    this.emit("ready");
                    resolve();
                };
                this.socket.serviceHandlers.reconnecting = () => {
                    this.emit("reconnecting");
                };
                // Start the attempt of connection
                this.socket.start();
            };
            connectSocket();
        });
    }
    /**
     * This is called after the connection of the socket has successfully been established
     */
    init() {
        this.socket.on("UserNotificationHub", "notification", (name, message) => {
            this.emit("event", {
                name,
                message
            });
            const parsedMessage = !(message instanceof Object) ? JSON.parse(message) : message;
            const messageType = parsedMessage.Type ? parsedMessage.Type.toLowerCase() : null;
            const socketHandler = socketHandlers.get(messageType);
            if (socketHandler) {
                return socketHandler(this.client, messageType, name, parsedMessage);
            }
        });
    }
}
exports.default = ClientSocket;
