import { Repository } from "models/repository";
import { PaginationResponse } from "models/response/pagination_response";

export const repositoryMock: Repository = {
  id: '23', name: 'First', fullName: 'first', htmlUrl: '', language: '', description: '',
  owner: { id: '', htmlUrl: '', avatarUrl: '', login: '', score: 0 },
  stargazersCount: 0,
  watchsersCount: 0,
  forksCount: 0
};

export const repositoryWithElementsMock: PaginationResponse<Repository> = {
  totalCount: 10,
  items: Array.from(Array(10), () => repositoryMock)
};

export const repositoryWithoutElementsMock: PaginationResponse<Repository> = {
  totalCount: 0,
  items: []
};

export const getRepositoriesMock = (resolveValue: PaginationResponse<Repository>) => (word: String) => {
  return new Promise<PaginationResponse<Repository>>((resolve, reject) => {
    resolve(resolveValue);
  });
}