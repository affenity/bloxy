import Client from "../../client";
import { GetGroupUniversesOptions } from "../../client/apis/DevelopAPI";
import CursorPage from "../asset/CursorPage";
import PartialGameUniverse from "../game/GameUniverse/PartialGameUniverse";
export interface GroupBaseOptions {
    id: number;
    name?: string;
}
export default class GroupBase {
    client: Client;
    id: number;
    name: string | null;
    constructor(data: GroupBaseOptions, client: Client);
    getUniverses(options?: Omit<GetGroupUniversesOptions, "groupId">): Promise<CursorPage<PartialGameUniverse>>;
}
