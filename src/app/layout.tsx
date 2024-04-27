// app/layout.tsx
'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import { usePathname, useRouter } from 'next/navigation';

import { useCreateReducer } from './hooks/usecreatereducer';
import OpenTabContext from './Context/openTab.context';
import { OpenTabInitialState, initialState as openTabInitialState } from './Context/openTab.state';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const contextValue = useCreateReducer<OpenTabInitialState>({
    initialState: openTabInitialState,
  });

  const { state, dispatch } = contextValue;

  useEffect(() => {
    const tab = pathname.split('/').pop() || 'home';
    dispatch({ field: 'activeTab', value: tab });
  }, [pathname, dispatch]);

  return (
    <html lang="en">
      <body>
        <OpenTabContext.Provider value={contextValue}>
          <Head>
            <title>My App</title>
            <meta name="description" content="hey" />
            <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {children}
        </OpenTabContext.Provider>
      </body>
    </html>
  );
};

export default Layout;

// export const getServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? 'en', ['common', 'chat', 'sidebar', 'markdown', 'settings'])),
//     },
//   };
// };