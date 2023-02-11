import { useCallback, useReducer } from "react";
import { AppContext, INITIAL_STATE } from ".";
import { AppContextActions } from "../../enums/AppContextActions";
import { appContextReducer } from "./reducer";

type TProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: TProps) => {
  const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);
  const setIncomeButtonLeft = useCallback(
    (state: boolean) => {
      dispatch({
        type: AppContextActions.SetIncomeButtonLeft,
        payload: { state },
      });
    },
    [dispatch]
  );

  const setIncomeButtonRight = useCallback(
    (state: boolean) => {
      dispatch({
        type: AppContextActions.SetIncomeButtonRight,
        payload: { state },
      });
    },
    [dispatch]
  );

  const setIndexingButtonLeft = useCallback(
    (state: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonLeft,
        payload: { state },
      });
    },
    [dispatch]
  );

  const setIndexingButtonRight = useCallback(
    (state: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonRight,
        payload: { state },
      });
    },
    [dispatch]
  );

  const setIndexingButtonCenter = useCallback(
    (state: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonCenter,
        payload: { state },
      });
    },
    [dispatch]
  );

  return (
    <AppContext.Provider
      value={{
        state,
        setIncomeButtonLeft,
        setIncomeButtonRight,
        setIndexingButtonLeft,
        setIndexingButtonRight,
        setIndexingButtonCenter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
