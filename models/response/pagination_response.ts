export interface PaginationResponse<T> {
  totalCount: number;
  items: T[];
};