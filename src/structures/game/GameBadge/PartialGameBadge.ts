import GameBadgeBase, { GameBadgeBaseOptions } from "./GameBadgeBase";
import Client from "../../../client";


export type PartialGameBadgeOptions = GameBadgeBaseOptions;

export default class PartialGameBadge extends GameBadgeBase {
    constructor (data: PartialGameBadgeOptions, client: Client) {
        super(data, client);
    }
}
