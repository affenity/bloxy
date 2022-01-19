export declare type UserIdOption = {
    userId: number;
};
export declare type UserIdsOption = {
    userIds: number[];
};
export declare type PlaceIdOption = {
    placeId: number;
};
export declare type PlaceIdsOption = {
    placeIds: number[];
};
export declare type UniverseIdOption = {
    universeId: number;
};
export declare type UniverseIdsOption = {
    universeIds: number[];
};
export declare type AssetIdOption = {
    assetId: number;
};
export declare type AssetIdsOption = {
    assetIds: number[];
};
export declare type GroupIdOption = {
    groupId: number;
};
export declare type GroupIdsOption = {
    groupIds: number[];
};
export declare type SortOption = {
    sortOrder?: "Asc" | "Desc";
    limit?: 10 | 25 | 50 | 100;
    cursor?: string;
};
export declare type UsernamePasswordOption = {
    username: string;
    password: string;
};
export declare type PageSortOrder = SortOption["sortOrder"];
export declare type PageSortLimit = SortOption["limit"];
export declare type PageSortCursor = SortOption["cursor"];
export declare type ItemType = "Asset" | "GamePass" | "Badge" | "Bundle";
