import ClientBase from "./ClientBase";
import { ClientCredentialsOptions, ClientOptions } from "../interfaces/ClientInterfaces";
import initAPIs, { APIs } from "./apis";
import ClientUser from "../structures/ClientUser";
import clientLogin from "./methods/login";
import RESTController from "../controllers/rest";
import initStructures, { Structures } from "../structures";
import Group from "../structures/group/Group";
import ClientSocket from "./lib/ClientSocket/ClientSocket";


export default class Client extends ClientBase {
    public user: ClientUser | null;
    public apis: APIs;
    public login: OmitThisParameter<(this: Client, credentials?: ClientCredentialsOptions) => Promise<ClientUser>>;
    public rest: RESTController;
    public structures: Structures;
    public socket: ClientSocket;

    constructor (options?: ClientOptions) {
        super(options);

        this.user = null;
        this.apis = initAPIs(this);
        this.login = (credentials?: ClientCredentialsOptions) => clientLogin.bind(this)(credentials || this.options.credentials || {});
        this.rest = new RESTController(this, this.options.rest);
        this.structures = initStructures();
        this.socket = new ClientSocket(this);

        this.init();
    }

    init (): void {
        if (this.options.rest) {
            this.rest.setOptions(this.options.rest);
        }
    }

    getGroup (groupId: number): Promise<Group> {
        return this.apis.groupsAPI.getGroup({
            groupId
        }).then(data => {
            if (!data) {
                throw new Error(`Group not found: ${groupId}`);
            } else {
                return new Group(data, this);
            }
        });
    }
}
