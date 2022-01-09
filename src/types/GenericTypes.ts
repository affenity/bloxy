export type Privacy =
  | "NoOne"
  | "Friends"
  | "Following"
  | "Followers"
  | "AllUsers";

export type ISOString = string;
export type CursorData<T> = {
  previousPageCursor?: string;
  nextPageCursor?: string;
  data: T;
};
export type SuccessResponse = {
  success: boolean;
};
