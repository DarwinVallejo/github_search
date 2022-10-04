import { User } from "./user";

export interface Repository {
  id: string;
  name: string;
  fullName: string;
  owner: User;
  htmlUrl: string;
  description: string;
  language: string;
  stargazersCount: number;
  watchsersCount: number;
  forksCount: number
};