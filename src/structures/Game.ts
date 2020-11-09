import Client from "../client";
import { CreatorType, GameGenre, MorphAvatarType } from "../util/constants";
import { PartialGroup, PartialGroupOptions } from "./Group";
import { PartialUser, PartialUserOptions } from "./User";
import { GetPlaceStatisticsByTypeOptions } from "../client/apis/DevelopAPI";
import { GetGameServersByTypeOptions } from "../client/apis/GamesAPI";


interface Structures {
    PartialUser: new (data: PartialUserOptions, client: Client) => PartialUser;
    PartialGameUniverse: new (data: PartialGameUniverseOptions, client: Client) => PartialGameUniverse;
    PartialGroup: new (data: PartialGroupOptions, client: Client) => PartialGroup;
    PartialPlace: new (data: PartialPlaceOptions, client: Client) => PartialPlace;
}


const retrieveStructures = (): Structures => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup,
    PartialPlace: require("./Game").PartialPlace
});


export interface GameBadgeBaseOptions {
    id: number;
    name?: string;
}


export class GameBadgeBase {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: GameBadgeBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}


export interface GameBadgeOptions {
    id: number;
    name: string;
    description: string;
    displayName: string;
    displayDescription: string;
    enabled: boolean;
    iconImageId: number;
    displayIconImageId: number;
    created: string;
    updated: string;
    statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: {
        id: number;
        name: string;
        rootPlaceId: number;
    };
}


export class GameBadge {
    public client: Client;
    public id: number;
    public name: string;
    public description: string;
    public displayedDescription: string;
    public displayedName: string;
    public enabled: boolean;
    public iconId: number;
    public displayedIconId: number;
    public created: Date;
    public updated: Date;
    public statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: PartialGameUniverse;

    constructor (data: GameBadgeOptions, client: Client) {
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.displayedName = data.displayName;
        this.displayedDescription = data.displayDescription;
        this.enabled = data.enabled;
        this.iconId = data.iconImageId;
        this.displayedIconId = data.displayIconImageId;
        this.created = new Date(data.created);
        this.updated = new Date(data.updated);
        this.statistics = {
            pastDayAwardedCount: data.statistics.pastDayAwardedCount,
            awardedCount: data.statistics.awardedCount,
            winRatePercentage: data.statistics.winRatePercentage
        };
        this.awardingUniverse = new structures.PartialGameUniverse({
            id: data.awardingUniverse.id,
            rootPlace: {
                id: data.awardingUniverse.rootPlaceId
            },
            name: data.awardingUniverse.name
        }, client);
    }
}


export type PartialGameBadgeOptions = GameBadgeBaseOptions;


export class PartialGameBadge extends GameBadgeBase {
    constructor (data: PartialGameBadgeOptions, client: Client) {
        super(data, client);
    }
}


export interface GamePassOptions {
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
}


export class GamePass {
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


export interface BasePlaceOptions {
    id: number;
    name?: string;
}


export class BasePlace {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (options: BasePlaceOptions, client: Client) {
        this.client = client;
        this.id = options.id;
        this.name = options.name || null;
    }

    getCompatibilities () {
        return this.client.apis.developAPI.getPlaceCompatibilities({
            placeId: this.id
        });
    }

    updatePlaceConfiguration (options: { name: string; description: string }) {
        return this.client.apis.developAPI.updatePlaceConfiguration({
            placeId: this.id,
            ...options
        });
    }

    getStatistics (options: Omit<GetPlaceStatisticsByTypeOptions, "placeId">) {
        return this.client.apis.developAPI.getPlaceStatistics({
            placeId: this.id,
            ...options
        });
    }

    awardBadge (userId: number, badgeId: number) {
        return this.client.apis.generalApi.awardBadge({
            placeId: this.id,
            badgeId,
            userId
        });
    }

    getGameServers (options: Omit<GetGameServersByTypeOptions, "placeId">) {
        return this.client.apis.gamesAPI.getGameServersByType({
            placeId: this.id,
            ...options
        });
    }
}


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


export class Place extends BasePlace {
    public description: string;
    public url: string;
    public creatorName: string;
    public creatorId: number;
    public playable: boolean;
    public prohibitedReason: string;
    public prohibited: boolean;
    public universe: PartialGameUniverse;
    public price: number;
    public imageToken: string;

    constructor (data: PlaceOptions, client: Client) {
        const structures = retrieveStructures();

        super({
            id: data.placeId,
            name: data.name
        }, client);
        this.description = data.description;
        this.url = data.url;
        this.creatorName = data.builder;
        this.creatorId = data.builderId;
        this.playable = data.isPlayable;
        this.prohibitedReason = data.reasonProhibited;
        this.prohibited = this.prohibitedReason.toLowerCase() !== "none";
        this.universe = new structures.PartialGameUniverse({
            id: data.universeId,
            rootPlace: {
                id: data.universeRootPlaceId
            }
        }, client);
        this.price = data.price;
        this.imageToken = data.imageToken;
    }
}


interface PartialPlaceOptions {
    id: number;
    name?: string | null;
}


export class PartialPlace extends BasePlace {
    constructor (data: PartialPlaceOptions, client: Client) {
        super({
            id: data.id,
            name: data.name || undefined
        }, client);
    }
}


export interface PartialGameUniverseOptions {
    id: number;
    name?: string;
    rootPlace?: {
        id: number;
        name?: string | null;
    };
}


export class PartialGameUniverse {
    public client: Client;
    public id: number;
    public name: string | null;
    public rootPlace: PartialPlace | null;

    constructor (data: PartialGameUniverseOptions, client: Client) {
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
        this.rootPlace = data.rootPlace ? new structures.PartialPlace({
            id: data.rootPlace.id,
            name: data.rootPlace.name || null
        }, client) : null;
    }
}


export interface GameUniverseOptions {
    id: number;
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


export class GameUniverse {
    public client: Client;
    public id: number;
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

    constructor (data: GameUniverseOptions, client: Client) {
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.rootPlace = data.rootPlaceId ? new structures.PartialPlace({
            id: data.rootPlaceId
        }, client) : null;
        this.name = data.name;
        this.description = data.description;
        this.creatorType = data.creatorType.toLowerCase() === "group" ? CreatorType.GROUP : CreatorType.USER;
        this.creator = this.creatorType === CreatorType.GROUP ? new structures.PartialGroup({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new structures.PartialUser({
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


export interface PartialVIPServerOptions {
    id: number;
}


export class PartialVIPServer {
    public client: Client;
    public id: number;

    constructor (data: PartialVIPServerOptions, client: Client) {
        this.client = client;
        this.id = data.id;
    }
}


export interface VIPServerOptions {
    id: number;
    name: string;
    game: {
        id: number;
        name: string;
        rootPlace: {
            id: number;
            name: string;
        };
    };
    joinCode: string;
    active: boolean;
    subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: string;
        price: number;
    };
    permissions: {
        clanAllowed: boolean;
        enemyClanId: number | number;
        friendsAllowed: boolean;
        users: {
            id: number;
            name: string;
            displayName: string;
        }[];
    };
}


export class VIPServer {
    public client: Client;
    public id: number;
    public name: string;
    public game: PartialGameUniverse;
    public code: string;
    public active: boolean;
    public subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: Date;
        price: number;
    };
    public permissions: {
        clanAllowed: boolean;
        enemyClanId: number;
        friendsAllowed: boolean;
        users: PartialUser[];
    };

    constructor (data: VIPServerOptions, client: Client) {
        const structures = retrieveStructures();

        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.game = new structures.PartialGameUniverse({
            id: data.game.id,
            name: data.game.name,
            rootPlace: {
                id: data.game.rootPlace.id,
                name: data.game.rootPlace.name
            }
        }, client);
        this.active = data.active;
        this.code = data.joinCode;
        this.subscription = {
            active: data.subscription.active,
            expired: data.subscription.expired,
            expirationDate: new Date(data.subscription.expirationDate),
            price: data.subscription.price
        };
        this.permissions = {
            clanAllowed: data.permissions.clanAllowed,
            enemyClanId: data.permissions.enemyClanId,
            friendsAllowed: data.permissions.friendsAllowed,
            users: data.permissions.users.map(userData => new structures.PartialUser(userData, client))
        };
    }
}


export interface GameMediaDataOptions {
    assetTypeId: number;
    assetType: "Video" | "Image" | string;
    imageId: number | null;
    videoHash: string | null;
    videoTitle: string | null;
    approved: boolean;
}


export class GameMediaData {
    public client: Client;
    public assetTypeId: number;
    public assetType: "Video" | "Image" | string;
    public imageId: number | null;
    public videoHash: string | null;
    public videoTitle: string | null;
    public approved: boolean;

    constructor (data: GameMediaDataOptions, client: Client) {
        this.client = client;
        this.assetTypeId = data.assetTypeId;
        this.assetType = data.assetType;
        this.imageId = data.imageId;
        this.videoHash = data.videoHash;
        this.videoTitle = data.videoTitle;
        this.approved = data.approved;
    }
}
