export declare type Privacy = "NoOne" | "Friends" | "Following" | "Followers" | "AllUsers";
export declare type ISOString = string;
export declare type CursorData<T> = {
    previousPageCursor?: string;
    nextPageCursor?: string;
    data: T;
};
export declare type SuccessResponse = {
    success: boolean;
};
