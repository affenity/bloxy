import ClientBase from "./ClientBase";
import { ClientOptions } from "../interfaces/ClientInterface";


export default class Client extends ClientBase {
    constructor (options?: ClientOptions) {
        super(options);
    }
}
