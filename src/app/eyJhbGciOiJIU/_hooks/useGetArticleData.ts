import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '~/@api/endpoint';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { ApiFunc, getJsonWithQuery, IApiBaseRes } from '~/@api/requestScheme';

interface IRecommendItem {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description?: string;
}

interface Response {
  articleContent: {
    image: string;
    title: string;
    author: string;
    date: string;
    content: string;
    isPopular: boolean;
    isInsight: boolean;
  };
  related: IRecommendItem[];
  moreItem: IRecommendItem[];
}

export const getArticleData: ApiFunc<{ id?: string }, IApiBaseRes<Response>> = ({ id }) => getJsonWithQuery({
  url: API_ENDPOINT.GET_ARTICLE_DATA.replace(':id', id || ''),
});

export const useGetArticleData = (id?: string) => useQuery({
  enabled: !!id,
  queryKey: [EQueryKey.GET_HOME_ITEM, id],
  queryFn: () => getArticleData({ id }),
  ...COMMON_API_QUERY_OPTIONS,
});
