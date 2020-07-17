/// <reference types="node" />
import Client from "../../Client";
import EventEmitter from "events";
export default class ClientSocket extends EventEmitter {
    client: Client;
    socket: any;
    connected: boolean;
    constructor(client: Client);
    connect(): Promise<void>;
    /**
     * This is called after the connection of the socket has successfully been established
     */
    init(): void;
}
