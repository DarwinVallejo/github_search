export interface PaginationRequest {
  q: String;
  sort?: String;
  order: 'asc' | 'desc'
  perPage: number;
  page: number;
};