import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { AxiosError } from 'axios';
import Script from 'next/script';

import { Footer, Navbar, Scroll } from '~/@shared/_components';

import Providers from './_providers/providers';
import ServerSideQueryProvider from './_providers/ServerSideQueryProvider';

import './globals.css';

// if (process.env.NEXT_RUNTIME === 'nodejs') {
//   // eslint-disable-next-line global-require
//   const { server } = require('~/@mock/server');
//   server.listen();
// }

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Safety Science Indonesia',
  description: 'Safety Science Indonesia',
};

// Replace Global Typing of Errors with Axios Error
declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<{ error: string }, any>;
  }
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${nunitoSans.variable} antialiased`}
    >
      <Providers>
        <ServerSideQueryProvider>
          <Scroll />
          <Navbar />
          <main className="min-h-[calc(100vh-9.8rem)]">
            {children}
          </main>
          <Footer />
        </ServerSideQueryProvider>
      </Providers>
      <Script src="/resizeUtil.js" strategy="beforeInteractive" />
    </body>
  </html>
);

export default RootLayout;
