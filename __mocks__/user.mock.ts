import { PaginationResponse } from "models/response/pagination_response";
import { User } from "models/user";

export const userMock: User = { id: '', htmlUrl: '', avatarUrl: '', login: '', score: 0 };

export const usersWithElementsMock: PaginationResponse<User> = {
  totalCount: 10,
  items: Array.from(Array(10), () => userMock)
};

export const usersWithoutElementsMock: PaginationResponse<User> = {
  totalCount: 0,
  items: []
}

export const getUsersMock = (resolveValue: PaginationResponse<User>) => (word: String) => {
  return new Promise<PaginationResponse<User>>((resolve, reject) => {
    resolve(resolveValue);
  });
}