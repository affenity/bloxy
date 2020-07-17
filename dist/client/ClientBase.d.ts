/// <reference types="node" />
import EventEmitter from "events";
import { ClientOptions } from "../interfaces/ClientInterfaces";
export default class ClientBase extends EventEmitter {
    options: ClientOptions;
    constructor(options?: ClientOptions);
    updateOptions: (options?: ClientOptions | undefined) => ClientOptions;
}
