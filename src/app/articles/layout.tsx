import { AxiosError } from 'axios';

import { Footer, Navbar } from '~/@shared/_components';

// Replace Global Typing of Errors with Axios Error
declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError<{ error: string }, any>;
  }
}

const ArticleLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <>
    <Navbar />
    <main className="min-h-[calc(100vh-9.8rem)]">
      {children}
    </main>
    <Footer />
  </>
);

export default ArticleLayout;
