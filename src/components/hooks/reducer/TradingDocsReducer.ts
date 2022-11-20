import { User } from "../../typings/User";
import { 
  HOME_PAGE, 
  SAVE_OPTION_TRADES, 
  SET_CURRENT_PAGE, 
  SET_LOGOUT_USER, 
  SET_MESSAGE, 
  SET_USER, 
  SET_OPTIONS_TRADES_PAGE, 
  CREATE_OPTIONS_TRADE_PAGE, 
  EDIT_OPTION_TRADE 
} from "../../util/Constants";
import { TradingDocsAction } from '../TradingDocsAction'
import { TradingDocsState } from "../TradingDocsState";

export function TradingDocsReducer(
  state: TradingDocsState,
  action: TradingDocsAction
): TradingDocsState {
  state = {
    ...state,
    message: "",
    isOptionEdit: false
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

    case SAVE_OPTION_TRADES: {
      return {
        ...state,
        currentPage: SET_OPTIONS_TRADES_PAGE,
        optionTrades: action.value
      }
    }

    case EDIT_OPTION_TRADE: {
      return {
        ...state,
        isOptionEdit: true,
        currentPage: CREATE_OPTIONS_TRADE_PAGE,
        optionTrade: action.value
      }
    }

    default:
      return state;
  }
}
