import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

type Response = {
  id: number;
  image: string;
}[];

export const getCarouselItem: ApiFunc<{}, IApiBaseRes<Response>> = () => getJsonWithQuery({
  url: API_ENDPOINT.GET_CAROUSEL_ITEM,
});

export const useGetCarouselItem = () => useQuery({
  queryKey: [EQueryKey.GET_ARTICLE_LIST_DATA],
  queryFn: getCarouselItem,
  ...COMMON_API_QUERY_OPTIONS,
});
