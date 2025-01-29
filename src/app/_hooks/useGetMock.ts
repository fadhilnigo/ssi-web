import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

export const getMock: ApiFunc<{}, IApiBaseRes<Response>> = () => getJsonWithQuery({
  url: API_ENDPOINT.GET_ARTICLE_LIST,
});

export const useGetMock = () => useQuery({
  queryKey: [EQueryKey.GET_ARTICLE_LIST_DATA],
  queryFn: getMock,
  ...COMMON_API_QUERY_OPTIONS,
});
