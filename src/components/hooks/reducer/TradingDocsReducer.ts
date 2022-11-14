import { User } from "../../typings/User";
import { HOME_PAGE, SET_CURRENT_PAGE, SET_LOGOUT_USER, SET_MESSAGE, SET_USER } from "../../util/Constants";
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

    case SET_USER: {
      return {
        ...state,
        currentPage: HOME_PAGE,
        isLogin: true,
        user: action.value
      }
    }

    case SET_LOGOUT_USER: {
      return {
        ...state,
        currentPage: HOME_PAGE,
        isLogin: false,
        user: {} as User
      }
    }

    default:
      return state;
  }
}
