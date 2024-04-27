// context/openTab.state.ts
export interface OpenTabInitialState {
    activeTab: string;
  }
  
  export const initialState: OpenTabInitialState = {
    activeTab: 'home',
  };