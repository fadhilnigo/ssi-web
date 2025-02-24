import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

export interface IArticleItem {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description?: string;
}

type Response = IArticleItem[];

export const getArticleList: ApiFunc<{}, IApiBaseRes<Response>> = () => getJsonWithQuery({
  url: API_ENDPOINT.GET_ARTICLE_LIST,
});

export const useGetArticleList = () => useQuery({
  queryKey: [EQueryKey.GET_ARTICLE_LIST],
  queryFn: getArticleList,
  ...COMMON_API_QUERY_OPTIONS,
});
