'use client';

import { ReactNode } from 'react';
import {
  isServer,
  // MutationCache,
  // QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { MSWProvider } from './MSWProvider';

function makeQueryClient() {
  return new QueryClient({
    // queryCache: new QueryCache({
    //   onError: (error, query) => {
    //     if (query?.meta?.isNotUseGlobarError) return;
    //     showErrorToast(error?.response?.data?.error || error?.message);
    //   },
    // }),
    // mutationCache: new MutationCache({
    //   onError: (error) => {
    //     showErrorToast(error?.response?.data?.error || error?.message);
    //   },
    // }),
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

const Providers = ({ children }: { children: ReactNode }) => {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <MSWProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </MSWProvider>
  );
};

export default Providers;
