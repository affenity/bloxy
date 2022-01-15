export type CursorPageOptions = {
  readonly limit?: 10 | 25 | 50 | 100;
  cursor?: string;
  readonly sortOrder?: "Asc" | "Desc";
};

type CursorPageResponse<T> = {
  data: T[];
  previousPageCursor: string | null;
  nextPageCursor: string | null;
};
type CursorPageState = {
  previous: string | null;
  current: string | null;
  next: string | null;
};
type CursorPageMethod<T, C> = (
  options: CursorPageOptions & C
) => Promise<CursorPageResponse<T>>;

export class CursorPage<T, C> {
  options: CursorPageOptions;
  cursors: CursorPageState;
  data: T[][] = [];
  readonly method: CursorPageMethod<T, C>;
  readonly methodOptions: C;
  private currentPage = 0;

  constructor(
    options: CursorPageOptions,
    methodOptions: C,
    response: CursorPageResponse<T>,
    method: CursorPageMethod<T, C>
  ) {
    this.options = options;
    this.cursors = {
      previous: response.previousPageCursor,
      current: response.nextPageCursor,
      next: response.nextPageCursor
    };
    this.data[0] = response.data;
    this.methodOptions = methodOptions;
    this.method = method;
  }

  async getNextPage(): Promise<T[]> {
    if (!this.cursors.next) {
      throw new Error(
        "Attempted to iterate to next page, but no cursor was presented for the next page"
      );
    }

    this.currentPage++;
    if (this.data[this.currentPage]) return this.data[this.currentPage];

    this.options.cursor = this.cursors.next;
    const result = await this.method({
      ...this.options,
      ...this.methodOptions
    });
    this.cursors = {
      previous: result.previousPageCursor,
      current: this.cursors.next,
      next: result.nextPageCursor
    };
    this.data[this.currentPage] = result.data;

    return result.data;
  }

  async getPreviousPage(): Promise<T[]> {
    if (!this.cursors.previous) {
      throw new Error(
        "Attempted to iterate to previous page, but no cursor was presented for the next page"
      );
    }

    this.currentPage--;
    if (this.data[this.currentPage]) return this.data[this.currentPage];

    this.options.cursor = this.cursors.previous;
    const result = await this.method({
      ...this.options,
      ...this.methodOptions
    });
    this.cursors = {
      previous: result.previousPageCursor,
      current: this.cursors.next,
      next: result.nextPageCursor
    };
    this.data[this.currentPage] = result.data;

    return result.data;
  }
}

export function contextCall<T, C>(
  context: any,
  method: CursorPageMethod<T, C>
): CursorPageMethod<T, C> {
  return (options: CursorPageOptions & C) => method.call(context, options);
}
