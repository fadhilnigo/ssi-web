import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

export interface IArticleParam {
  sort: 'desc' | 'asc';
  sortBy: 'update' | '';
  page: number;
  search: string;
  limit: number;
}

export interface IArticleItem {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description?: string;
}

export type TArticleResponse = {
  articles: IArticleItem[];
  totalPage: number;
  totalItem: number;
};

export const getArticleList: ApiFunc<IArticleParam, IApiBaseRes<TArticleResponse>> = (params) => getJsonWithQuery({
  url: API_ENDPOINT.GET_ARTICLE_LIST,
  params,
});

export const useGetArticleList = (params: IArticleParam) => useQuery({
  queryKey: [EQueryKey.GET_ARTICLE_LIST, params],
  queryFn: () => getArticleList(params),
  ...COMMON_API_QUERY_OPTIONS,
});
