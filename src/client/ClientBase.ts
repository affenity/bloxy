import EventEmitter from "events";
import RESTController from "../controllers/rest";
import { ClientOptions } from "../interfaces/ClientInterface";
import lodash from "lodash";


export default class ClientBase extends EventEmitter {
    public options: ClientOptions;
    public rest: RESTController;

    constructor (options?: ClientOptions) {
        super();

        this.options = this.updateOptions(options);
        this.rest = new RESTController(this);

        this.init();
    }

    updateOptions = (options?: ClientOptions): ClientOptions => {
        this.options = lodash.merge({
            credentials: {},
            rest: {}
        }, options || {});

        return this.options;
    };

    init (): void {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }
}
