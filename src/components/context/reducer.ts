import { InitialStateType, INITIAL_STATE } from ".";
import { AppContextActions } from "../../enums/AppContextActions";

type DispatchActionProps = {
  type: AppContextActions;
  payload?: any;
};

export const appContextReducer = (
  state = INITIAL_STATE,
  action: DispatchActionProps
): InitialStateType => {
  switch (action.type) {
    case AppContextActions.SetIncomeButtonLeft:
      return {
        ...state,
        incomeButtonLeft: !state.incomeButtonLeft,
      };

    case AppContextActions.SetIncomeButtonRight:
      return {
        ...state,
        incomeButtonRight: !state.incomeButtonRight,
      };

    case AppContextActions.SetIndexingButtonLeft:
      return {
        ...state,
        indexingButtonLeft: !state.indexingButtonLeft,
      };

    case AppContextActions.SetIndexingButtonRight:
      return {
        ...state,
        indexingButtonRight: !state.indexingButtonRight,
      };

    case AppContextActions.SetIndexingButtonCenter:
      return {
        ...state,
        indexingButtonCenter: !state.indexingButtonCenter,
      };

    default:
      throw new Error();
  }
};
