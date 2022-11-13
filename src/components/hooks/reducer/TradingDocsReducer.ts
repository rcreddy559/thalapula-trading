import { SET_CURRENT_PAGE, SET_MESSAGE } from "../../util/Constants";
import { TradingDocsAction } from '../TradingDocsAction'
import { TradingDocsState } from "../TradingDocsState";

export function TradingDocsReducer(
  state: TradingDocsState,
  action: TradingDocsAction
): TradingDocsState {
  state = {
    ...state,
    message: "",
  };
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {...state, 
        currentPage: action.page
      }
    }

    case SET_MESSAGE: {
      return {
        ...state, 
        message: action.value
      }
    }

    default:
      return state;
  }
}
