import { useReducer } from "react";
import { createUser, deleteUser, editOptionTrade, fetchOptionTrades, getUser, loginUser, saveOptionTrade } from "../service/Service";
import { OptionTrade } from "../typings/OptionTrade";
import { User } from "../typings/User";
import { HOME_PAGE, SET_CURRENT_PAGE, SET_LOGOUT_USER, SET_OPTIONS_TRADES_PAGE } from "../util/Constants";
import { TradingDocsReducer } from "./reducer/TradingDocsReducer";
import { TradingDocsScheme } from "./TradingDocsScheme";
import { TradingDocsState } from "./TradingDocsState";

const initialState: TradingDocsState = {
    currentPage: HOME_PAGE,
    message: "",
    user: {} as User,
    isLogin: false,
    optionTrades: [],
    optionTrade: {} as OptionTrade,
    isOptionEdit: false
}

export function useTradingDocs(): TradingDocsScheme {
    const [state, dispatch] = useReducer(TradingDocsReducer, initialState);

     return {
        ...state,
        SetCurrentPage(page: string) {
            dispatch({type: SET_CURRENT_PAGE, page})
        },
        CreateUser(user: User) {
            createUser(user, dispatch);
        },
        LoginUser(user: User) {
            getUser(user, dispatch)
        },
        LogoutUser(user: User) {
            //deleteUser();
            dispatch({type: SET_LOGOUT_USER})
        },
        createOptionTrade(optionTrade: OptionTrade) {
            saveOptionTrade(optionTrade, dispatch);
        },
        getOptionTrades() {
            fetchOptionTrades(dispatch);
        },
        editOptionTrade(id: string) {
            editOptionTrade(id, dispatch);
        }
     }
}

