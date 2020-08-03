import Client from "../../client";
import { CreatorType, GameGenre, MorphAvatarType } from "../../util/constants";
import PartialPlace from "./PartialPlace";
import PartialUser from "../user/PartialUser";
import PartialGroup from "../group/PartialGroup";
export interface GameUniverseOptions {
    rootPlaceId: number;
    name: string;
    description: string;
    creatorType: string;
    creator: {
        id: number;
        name: string;
    };
    price: number;
    allowedGearGenres: string[];
    allowedGearCategories: string[];
    playing: number;
    visits: number;
    maxPlayers: number;
    created: string;
    updated: string;
    studioAccessToApisAllowed: boolean;
    createVipServersAllowed: boolean;
    universeAvatarType: string;
    genre: string;
}
export default class GameUniverse {
    client: Client;
    rootPlace: PartialPlace | null;
    name: string;
    description: string;
    creatorType: CreatorType;
    creator: PartialGroup | PartialUser;
    price: number | null;
    allowedGearGenres: string[];
    allowedGearCategories: string[];
    playing: number;
    visits: number;
    maxPlayers: number;
    created: Date;
    updated: Date;
    studioAccessToAPIsEnabled: boolean;
    createVIPServersEnabled: boolean;
    avatarType: MorphAvatarType;
    genre: GameGenre;
    constructor(data: GameUniverseOptions, client: Client);
}
