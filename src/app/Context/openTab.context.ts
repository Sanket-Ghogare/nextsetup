// context/openTab.context.ts
import { createContext } from 'react';
import { OpenTabInitialState } from './openTab.state';

const OpenTabContext = createContext<{
  state: OpenTabInitialState;
  dispatch: React.Dispatch<any>;
}>(null!);

export default OpenTabContext;