import GroupBase from "./GroupBase";
import Client from "../../client";
export interface PartialGroupOptions {
    id: number;
    name?: string;
}
export default class PartialGroup extends GroupBase {
    constructor(data: PartialGroupOptions, client: Client);
}
