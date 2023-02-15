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
    (newState: boolean) => {
      dispatch({
        type: AppContextActions.SetIncomeButtonLeft,
        payload: { newState },
      });
    },
    [dispatch]
  );

  const setIncomeButtonRight = useCallback(
    (newState: boolean) => {
      dispatch({
        type: AppContextActions.SetIncomeButtonRight,
        payload: { newState },
      });
    },
    [dispatch]
  );

  const setIndexingButtonLeft = useCallback(
    (newState: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonLeft,
        payload: { newState },
      });
    },
    [dispatch]
  );

  const setIndexingButtonRight = useCallback(
    (newState: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonRight,
        payload: { newState },
      });
    },
    [dispatch]
  );

  const setIndexingButtonCenter = useCallback(
    (newState: boolean) => {
      dispatch({
        type: AppContextActions.SetIndexingButtonCenter,
        payload: { newState },
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
