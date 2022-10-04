import { Repository } from "../models/repository";
import { PaginationResponse } from "../models/response/pagination_response";
import { PaginationRequest } from "../models/request/pagination_request";
import { httpClient } from "../utils/http_client";

export async function getRepositories(name: String, page: number): Promise<PaginationResponse<Repository>> {
  const pagination: PaginationRequest = { page: page, q: name, order: 'desc', perPage: 10 };
  const response = await httpClient.get(`/search/repositories`, { params: pagination });
  return response.data;

};