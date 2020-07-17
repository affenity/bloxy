import Client from "../../client";
export interface GamePassOptions {
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
}
export default class GamePass {
    client: Client;
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
    constructor(data: GamePassOptions, client: Client);
}
