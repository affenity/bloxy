/// <reference types="node" />
import Client from "../../Client";
import EventEmitter = NodeJS.EventEmitter;
export default class ClientSocket extends EventEmitter {
    client: Client;
    socket: any;
    constructor(client: Client, socket: any);
}
