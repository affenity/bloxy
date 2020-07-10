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
    public client: Client;
    public rootPlace: PartialPlace | null;
    public name: string;
    public description: string;
    public creatorType: CreatorType;
    public creator: PartialGroup | PartialUser;
    public price: number | null;
    public allowedGearGenres: string[];
    public allowedGearCategories: string[];
    public playing: number;
    public visits: number;
    public maxPlayers: number;
    public created: Date;
    public updated: Date;
    public studioAccessToAPIsEnabled: boolean;
    public createVIPServersEnabled: boolean;
    public avatarType: MorphAvatarType;
    public genre: GameGenre;

    constructor (data: any, client: Client) {
        this.client = client;
        this.rootPlace = data.rootPlaceId ? new PartialPlace({
            id: data.rootPlaceId
        }, client) : null;
        this.name = data.name;
        this.description = data.description;
        this.creatorType = data.creator.type.toLowerCase() === "group" ? CreatorType.GROUP : CreatorType.USER;
        this.creator = this.creatorType === CreatorType.GROUP ? new PartialGroup({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new PartialUser({
            id: data.creator.id,
            name: data.creator.name
        }, client);
        this.price = data.price;
        this.allowedGearGenres = data.allowedGearGenres;
        this.allowedGearCategories = data.allowedGearCategories;
        this.playing = data.playing;
        this.visits = data.visits;
        this.maxPlayers = data.maxPlayers;
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
        this.studioAccessToAPIsEnabled = data.studioAccessToApisAllowed;
        this.createVIPServersEnabled = data.createVipServersAllowed;
        this.avatarType = data.universeAvatarType.toLowerCase() === "morphtor6" ? MorphAvatarType.R6 : MorphAvatarType.R15;
        this.genre = data.genre as GameGenre;
    }
}
