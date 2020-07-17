import PartialUser from "../user/PartialUser";
import PartialGroup from "../group/PartialGroup";
import { CreatorType } from "../../util/constants";
import Client from "../../client";
import { ProductDetails } from "../../client/apis/CatalogAPI";
export interface BundleOptions {
    id: number;
    name: string;
    description: string;
    bundleType: string;
    items: {
        owned: boolean;
        id: number;
        name: string;
        type: string;
    }[];
    creator: {
        id: number;
        name: string;
        type: string;
    };
    product: ProductDetails;
}
export default class Bundle {
    client: Client;
    id: number;
    name: string;
    description: string;
    bundleType: string;
    items: {
        owned: boolean;
        id: number;
        name: string;
        type: string;
    }[];
    creatorType: CreatorType;
    creator: PartialUser | PartialGroup;
    product: {
        id: number;
        type: string;
        publicDomain: boolean;
        forSale: boolean;
        price: number;
        premiumPricing: {
            discount: number;
            price: number;
        };
    };
    constructor(data: BundleOptions, client: Client);
}
