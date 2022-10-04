import { PaginationRequest } from "../models/request/pagination_request";
import { PaginationResponse } from "../models/response/pagination_response";
import { User } from "../models/user";
import { httpClient } from "../utils/http_client";

export async function getUsers(name: String, page: number): Promise<PaginationResponse<User>> {
  const pagination: PaginationRequest = { page: page, q: name, order: 'desc', perPage: 12 };
  const response = await httpClient.get(`/search/users`, { params: pagination });
  return response.data;
};