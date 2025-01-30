import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { COMMON_API_QUERY_OPTIONS, EQueryKey } from '~/@api/query';
import { getMock } from '../_hooks/useGetMock';

// List all and fetch API that wanted to be fetched on the server
const ServerSideQueryProvider = async ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  // example
  await queryClient.prefetchQuery({
    queryKey: [EQueryKey.GET_ARTICLE_LIST_DATA],
    queryFn: getMock,
    ...COMMON_API_QUERY_OPTIONS,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default ServerSideQueryProvider;
