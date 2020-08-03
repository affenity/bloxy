import Client from "../../client";
import { GetGroupUniversesOptions } from "../../client/apis/DevelopAPI";
import CursorPage from "../asset/CursorPage";
import PartialGameUniverse from "../game/GameUniverse/PartialGameUniverse";


export interface GroupBaseOptions {
    id: number;
    name?: string;
}


export default class GroupBase {
    public client: Client;
    public id: number;
    public name: string | null;

    constructor (data: GroupBaseOptions, client: Client) {
        this.client = client;
        this.id = data.id;
        this.name = data.name || null;
    }

    getUniverses (options?: Omit<GetGroupUniversesOptions, "groupId">): Promise<CursorPage<PartialGameUniverse>> {
        return this.client.apis.developAPI.getGroupUniverses({
            ...options,
            groupId: this.id
        }).then(response => {
            console.log(response);
            return new CursorPage(this.client, options || {}, {
                ...response,
                data: response.data.map(universeData => new PartialGameUniverse(({
                    id: universeData.id,
                    name: universeData.name,
                    rootPlace: universeData.rootPlaceId ? {
                        id: universeData.rootPlaceId
                    } : undefined
                }), this.client))
            }, this.getUniverses);
        });
    }
}
