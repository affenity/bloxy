export type UserIdOption = {
  userId: number;
};
export type UserIdsOption = {
  userIds: number[];
};
export type PlaceIdOption = {
  placeId: number;
};
export type PlaceIdsOption = {
  placeIds: number[];
};
export type UniverseIdOption = {
  universeId: number;
};
export type UniverseIdsOption = {
  universeIds: number[];
};
export type AssetIdOption = {
  assetId: number;
};
export type AssetIdsOption = {
  assetIds: number[];
};
export type GroupIdOption = {
  groupId: number;
};
export type GroupIdsOption = {
  groupIds: number[];
};
export type SortOption = {
  sortOrder?: "Asc" | "Desc";
  limit?: 10 | 25 | 50 | 100;
  cursor?: string;
};
export type UsernamePasswordOption = {
  username: string;
  password: string;
};
export type PageSortOrder = SortOption["sortOrder"];
export type PageSortLimit = SortOption["limit"];
export type PageSortCursor = SortOption["cursor"];
export type ItemType = "Asset" | "GamePass" | "Badge" | "Bundle";
