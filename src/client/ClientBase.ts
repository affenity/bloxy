import EventEmitter from "events";
import { ClientOptions } from "../interfaces/ClientInterfaces";
import lodash from "lodash";


export default class ClientBase extends EventEmitter {
    public options: ClientOptions;


    constructor (options?: ClientOptions) {
        super();

        this.options = this.updateOptions(options);
    }

    updateOptions = (options?: ClientOptions): ClientOptions => {
        this.options = lodash.merge({
            credentials: {},
            rest: {}
        }, options || {});

        return this.options;
    };
}
