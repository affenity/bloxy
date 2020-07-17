import Client from "../../client";
import PartialPlace from "./PartialPlace";
interface PartialGameUniverseOptions {
    id: number;
    name?: string;
    rootPlace?: {
        id: number;
        name?: string | null;
    };
}
export default class PartialGameUniverse {
    client: Client;
    id: number;
    name: string | null;
    rootPlace: PartialPlace | null;
    constructor(data: PartialGameUniverseOptions, client: Client);
}
export {};
