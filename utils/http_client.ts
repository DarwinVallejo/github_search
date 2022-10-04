import axios from "axios";
import qs from "qs";
import snakecaseKeys from "snakecase-keys";
import camelCaseKeys from "camelcase-keys";

const paramsSerializer = (params: any) =>
  qs.stringify(snakecaseKeys(params),);

export const httpClient = axios.create({
  baseURL: 'https://api.github.com',
  paramsSerializer,
});

httpClient.interceptors.response.use((response) => {
  return { response, data: camelCaseKeys(response.data, { deep: true }) }
});

