import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

export interface IHomeItem {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description?: string;
}

interface Response {
  popular: IHomeItem[];
  latest: IHomeItem[];
  insight: IHomeItem[];
}

export const getHomeItem: ApiFunc<{}, IApiBaseRes<Response>> = () => getJsonWithQuery({
  url: API_ENDPOINT.GET_HOME_ITEM,
});

export const useGetHomeItem = () => useQuery({
  queryKey: [EQueryKey.GET_HOME_ITEM],
  queryFn: getHomeItem,
  ...COMMON_API_QUERY_OPTIONS,
});
