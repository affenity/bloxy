"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMediaData = exports.VIPServer = exports.PartialVIPServer = exports.GameUniverse = exports.PartialGameUniverse = exports.PartialPlace = exports.Place = exports.BasePlace = exports.GamePass = exports.PartialGameBadge = exports.GameBadge = exports.GameBadgeBase = void 0;
const constants_1 = require("../util/constants");
const retrieveStructures = () => ({
    PartialUser: require("./User").PartialUser,
    PartialGameUniverse: require("./Game").PartialGameUniverse,
    PartialGroup: require("./Group").PartialGroup,
    PartialPlace: require("./Game").PartialPlace
});
class GameBadgeBase {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
}
exports.GameBadgeBase = GameBadgeBase;
class GameBadge {
    constructor(data, client) {
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
exports.GameBadge = GameBadge;
class PartialGameBadge extends GameBadgeBase {
    constructor(data, client) {
        super(data, client);
    }
}
exports.PartialGameBadge = PartialGameBadge;
class GamePass {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name;
        this.displayName = data.displayName;
        this.productId = data.productId;
        this.price = data.price;
    }
}
exports.GamePass = GamePass;
class BasePlace {
    constructor(options, client) {
        this.client = client;
        this.id = options.id;
        this.name = options.name || null;
    }
    getCompatibilities() {
        return this.client.apis.developAPI.getPlaceCompatibilities({
            placeId: this.id
        });
    }
    updatePlaceConfiguration(options) {
        return this.client.apis.developAPI.updatePlaceConfiguration(Object.assign({ placeId: this.id }, options));
    }
    getStatistics(options) {
        return this.client.apis.developAPI.getPlaceStatistics(Object.assign({ placeId: this.id }, options));
    }
    awardBadge(userId, badgeId) {
        return this.client.apis.generalApi.awardBadge({
            placeId: this.id,
            badgeId,
            userId
        });
    }
    getGameServers(options) {
        return this.client.apis.gamesAPI.getGameServersByType(Object.assign({ placeId: this.id }, options));
    }
}
exports.BasePlace = BasePlace;
class Place extends BasePlace {
    constructor(data, client) {
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
exports.Place = Place;
class PartialPlace extends BasePlace {
    constructor(data, client) {
        super({
            id: data.id,
            name: data.name || undefined
        }, client);
    }
}
exports.PartialPlace = PartialPlace;
class PartialGameUniverse {
    constructor(data, client) {
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
exports.PartialGameUniverse = PartialGameUniverse;
class GameUniverse {
    constructor(data, client) {
        const structures = retrieveStructures();
        this.client = client;
        this.id = data.id;
        this.rootPlace = data.rootPlaceId ? new structures.PartialPlace({
            id: data.rootPlaceId
        }, client) : null;
        this.name = data.name;
        this.description = data.description;
        this.creatorType = data.creatorType.toLowerCase() === "group" ? constants_1.CreatorType.GROUP : constants_1.CreatorType.USER;
        this.creator = this.creatorType === constants_1.CreatorType.GROUP ? new structures.PartialGroup({
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
        this.avatarType = data.universeAvatarType.toLowerCase() === "morphtor6" ? constants_1.MorphAvatarType.R6 : constants_1.MorphAvatarType.R15;
        this.genre = data.genre;
    }
}
exports.GameUniverse = GameUniverse;
class PartialVIPServer {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
    }
}
exports.PartialVIPServer = PartialVIPServer;
class VIPServer {
    constructor(data, client) {
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
exports.VIPServer = VIPServer;
class GameMediaData {
    constructor(data, client) {
        this.client = client;
        this.assetTypeId = data.assetTypeId;
        this.assetType = data.assetType;
        this.imageId = data.imageId;
        this.videoHash = data.videoHash;
        this.videoTitle = data.videoTitle;
        this.approved = data.approved;
    }
}
exports.GameMediaData = GameMediaData;
