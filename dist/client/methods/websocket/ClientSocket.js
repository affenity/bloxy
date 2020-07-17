"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = NodeJS.EventEmitter;
class ClientSocket extends EventEmitter {
    constructor(client, socket) {
        super();
        this.client = client;
        this.socket = socket;
    }
}
exports.default = ClientSocket;
