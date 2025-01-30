'use client';

import {
  Suspense, useEffect, useState,
} from 'react';
import { handlers } from '~/@mock/handlers';

const mockingEnabledPromise = async () => (typeof window !== 'undefined'
  ? import('~/@mock/browser').then(async ({ worker }) => {
    await worker.start({
      onUnhandledRequest(request, print) {
        if (request.url.includes('_next')) {
          return;
        }
        print.warning();
      },
    });
    worker.use(...handlers);

    // eslint-disable-next-line no-console
    console.log(worker.listHandlers());
  })
  : Promise.resolve());

export const MSWProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) =>
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );

const MSWProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    mockingEnabledPromise()
      .then(() => setRender(true));
  }, []);

  return render ? children : null;
};
