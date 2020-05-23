import ClientBase from "./ClientBase";
import { ClientCredentialsOptions, ClientOptions } from "../interfaces/ClientInterfaces";
import initAPIs, { APIs } from "./apis";
import ClientUser from "../structures/ClientUser";
import clientLogin from "./methods/login";
import RESTController from "../controllers/rest";
import initStructures, { Structures } from "../structures";


export default class Client extends ClientBase {
    public user: ClientUser | null;
    public apis: APIs;
    public login: OmitThisParameter<(this: Client, credentials: ClientCredentialsOptions) => Promise<ClientUser>>;
    public rest: RESTController;
    public structures: Structures;

    constructor (options?: ClientOptions) {
        super(options);
        this.user = null;
        this.apis = initAPIs(this);
        this.login = clientLogin.bind(this, this.options.credentials || {});
        this.rest = new RESTController(this);
        this.structures = initStructures();

        this.init();
    }

    init (): void {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }
}
