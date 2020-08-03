"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const constants_1 = require("../../util/constants");
const PartialPlace_1 = tslib_1.__importDefault(require("./PartialPlace"));
const PartialUser_1 = tslib_1.__importDefault(require("../user/PartialUser"));
const PartialGroup_1 = tslib_1.__importDefault(require("../group/PartialGroup"));
class GameUniverse {
    constructor(data, client) {
        this.client = client;
        this.rootPlace = data.rootPlaceId ? new PartialPlace_1.default({
            id: data.rootPlaceId
        }, client) : null;
        this.name = data.name;
        this.description = data.description;
        this.creatorType = data.creatorType.toLowerCase() === "group" ? constants_1.CreatorType.GROUP : constants_1.CreatorType.USER;
        this.creator = this.creatorType === constants_1.CreatorType.GROUP ? new PartialGroup_1.default({
            id: data.creator.id,
            name: data.creator.name
        }, client) : new PartialUser_1.default({
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
exports.default = GameUniverse;
