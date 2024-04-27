// app/page.tsx
'use client';

import { useContext } from 'react';
import OpenTabContext from './Context/openTab.context';
import  Chat  from './components/Chat';
import NAvbar from './components/Navbar';

const Home = () => {
  const { state } = useContext(OpenTabContext);

  return (
    <main className="flex h-screen w-screen flex-col text-sm text-white dark:text-white">
      {/* <div className="fixed top-0 w-full sm:hidden">
        <Navbar />
      </div> */}

      <div className="flex h-full w-full pt-[48px] sm:pt-0">
        {/* <Chat /> */}

        <div className="flex flex-1">
          {state.activeTab === 'home' && <Chat />}
          {state.activeTab === 'home' && <NAvbar />}
          {/* Add other tabs here */}
        </div>
      </div>
    </main>
  );
};

export default Home;