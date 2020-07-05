import Client from "../../client";


export interface GamePassOptions {
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
}

export default class GamePass {
    public client: Client;
    public id: number;
    public name: string;
    public displayName: string;
    public productId: number;
    public price: number;

    constructor (data: GamePassOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.displayName = data.displayName;
        this.productId = data.productId;
        this.price = data.price;
    }
}
