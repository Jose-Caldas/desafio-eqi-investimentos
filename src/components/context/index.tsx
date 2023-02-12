import { createContext } from "react";

export const INITIAL_STATE = {
  incomeButtonLeft: true,
  incomeButtonRight: false,
  indexingButtonLeft: false,
  indexingButtonRight: false,
  indexingButtonCenter: true,
};

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  setIncomeButtonLeft: (state: boolean) => {},
  setIncomeButtonRight: (state: boolean) => {},
  setIndexingButtonLeft: (state: boolean) => {},
  setIndexingButtonRight: (state: boolean) => {},
  setIndexingButtonCenter: (state: boolean) => {},
});
