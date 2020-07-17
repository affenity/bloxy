import Client from "../../client";
interface PartialPlaceOptions {
    id: number;
    name?: string | null;
}
export default class PartialPlace {
    client: Client;
    id: number;
    name: string | null;
    constructor(data: PartialPlaceOptions, client: Client);
}
export {};
