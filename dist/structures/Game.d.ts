import Client from "../client";
import { CreatorType, GameGenre, MorphAvatarType } from "../util/constants";
import { PartialGroup } from "./Group";
import { PartialUser } from "./User";
import { GetPlaceStatisticsByTypeOptions } from "../client/apis/DevelopAPI";
import { GetGameServersByTypeOptions } from "../client/apis/GamesAPI";
export interface GameBadgeBaseOptions {
    id: number;
    name?: string;
}
export declare class GameBadgeBase {
    client: Client;
    id: number;
    name: string | null;
    constructor(data: GameBadgeBaseOptions, client: Client);
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
export declare class GameBadge {
    client: Client;
    id: number;
    name: string;
    description: string;
    displayedDescription: string;
    displayedName: string;
    enabled: boolean;
    iconId: number;
    displayedIconId: number;
    created: Date;
    updated: Date;
    statistics: {
        pastDayAwardedCount: number;
        awardedCount: number;
        winRatePercentage: number;
    };
    awardingUniverse: PartialGameUniverse;
    constructor(data: GameBadgeOptions, client: Client);
}
export declare type PartialGameBadgeOptions = GameBadgeBaseOptions;
export declare class PartialGameBadge extends GameBadgeBase {
    constructor(data: PartialGameBadgeOptions, client: Client);
}
export interface GamePassOptions {
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
}
export declare class GamePass {
    client: Client;
    id: number;
    name: string;
    displayName: string;
    productId: number;
    price: number;
    constructor(data: GamePassOptions, client: Client);
}
export interface BasePlaceOptions {
    id: number;
    name?: string;
}
export declare class BasePlace {
    client: Client;
    id: number;
    name: string | null;
    constructor(options: BasePlaceOptions, client: Client);
    getCompatibilities(): Promise<import("../client/apis/DevelopAPI").GetPlaceCompatibilities>;
    updatePlaceConfiguration(options: {
        name: string;
        description: string;
    }): Promise<import("../client/apis/DevelopAPI").UpdatePlaceConfiguration>;
    getStatistics(options: Omit<GetPlaceStatisticsByTypeOptions, "placeId">): Promise<import("../client/apis/DevelopAPI").GetPlaceStatisticsByType>;
    awardBadge(userId: number, badgeId: number): Promise<boolean>;
    getGameServers(options: Omit<GetGameServersByTypeOptions, "placeId">): Promise<import("../client/apis/GamesAPI").GetGameServersByType>;
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
export declare class Place extends BasePlace {
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
interface PartialPlaceOptions {
    id: number;
    name?: string | null;
}
export declare class PartialPlace extends BasePlace {
    constructor(data: PartialPlaceOptions, client: Client);
}
export interface PartialGameUniverseOptions {
    id: number;
    name?: string;
    rootPlace?: {
        id: number;
        name?: string | null;
    };
}
export declare class PartialGameUniverse {
    client: Client;
    id: number;
    name: string | null;
    rootPlace: PartialPlace | null;
    constructor(data: PartialGameUniverseOptions, client: Client);
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
export declare class GameUniverse {
    client: Client;
    id: number;
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
export interface PartialVIPServerOptions {
    id: number;
}
export declare class PartialVIPServer {
    client: Client;
    id: number;
    constructor(data: PartialVIPServerOptions, client: Client);
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
        users: Array<{
            id: number;
            name: string;
            displayName: string;
        }>;
    };
}
export declare class VIPServer {
    client: Client;
    id: number;
    name: string;
    game: PartialGameUniverse;
    code: string;
    active: boolean;
    subscription: {
        active: boolean;
        expired: boolean;
        expirationDate: Date;
        price: number;
    };
    permissions: {
        clanAllowed: boolean;
        enemyClanId: number;
        friendsAllowed: boolean;
        users: PartialUser[];
    };
    constructor(data: VIPServerOptions, client: Client);
}
export interface GameMediaDataOptions {
    assetTypeId: number;
    assetType: "Video" | "Image" | string;
    imageId: number | null;
    videoHash: string | null;
    videoTitle: string | null;
    approved: boolean;
}
export declare class GameMediaData {
    client: Client;
    assetTypeId: number;
    assetType: "Video" | "Image" | string;
    imageId: number | null;
    videoHash: string | null;
    videoTitle: string | null;
    approved: boolean;
    constructor(data: GameMediaDataOptions, client: Client);
}
export {};
