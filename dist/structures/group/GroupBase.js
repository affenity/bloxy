"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CursorPage_1 = tslib_1.__importDefault(require("../asset/CursorPage"));
const PartialGameUniverse_1 = tslib_1.__importDefault(require("../game/GameUniverse/PartialGameUniverse"));
class GroupBase {
    constructor(data, client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }
    getUniverses(options) {
        return this.client.apis.developAPI.getGroupUniverses(Object.assign(Object.assign({}, options), { groupId: this.id })).then(response => {
            console.log(response);
            return new CursorPage_1.default(this.client, options || {}, Object.assign(Object.assign({}, response), { data: response.data.map(universeData => new PartialGameUniverse_1.default(({
                    id: universeData.id,
                    name: universeData.name,
                    rootPlace: universeData.rootPlaceId ? {
                        id: universeData.rootPlaceId
                    } : undefined
                }), this.client)) }), this.getUniverses);
        });
    }
}
exports.default = GroupBase;
