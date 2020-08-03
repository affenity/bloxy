import Client from "../../client";
import PartialGameUniverse from "./GameUniverse/PartialGameUniverse";
export interface PlaceOptions {
    placeId: number;
    name: string;
    url: string;
    description: string;
    builder: string;
    builderId: number;
    isPlayable: boolean;
    reasonProhibited: string;
    universeId: number;
    universeRootPlaceId: number;
    price: number;
    imageToken: string;
}
export default class Place {
    client: Client;
    id: number;
    name: string;
    description: string;
    url: string;
    creatorName: string;
    creatorId: number;
    playable: boolean;
    prohibitedReason: string;
    prohibited: boolean;
    universe: PartialGameUniverse;
    price: number;
    imageToken: string;
    constructor(data: PlaceOptions, client: Client);
}
