import { useReducer } from "react";
import { createUser, loginUser } from "../service/Service";
import { User } from "../typings/User";
import { HOME_PAGE, SET_CURRENT_PAGE, SET_LOGOUT_USER } from "../util/Constants";
import { TradingDocsReducer } from "./reducer/TradingDocsReducer";
import { TradingDocsScheme } from "./TradingDocsScheme";
import { TradingDocsState } from "./TradingDocsState";

const initialState: TradingDocsState = {
    currentPage: HOME_PAGE,
    message: "",
    user: {
        name: "",
        email: "",
        id: "",
        password: ""
    },
    isLogin: false
}

export function useTradingDocs(): TradingDocsScheme {
    const [state, dispatch] = useReducer(TradingDocsReducer, initialState);

     return {
        ...state,
        SetCurrentPage(page: string) {
            dispatch({type: SET_CURRENT_PAGE, page})
        },
        CreateUser(user: User) {
            createUser(user, dispatch)
        },
        LoginUser(user: User) {
            loginUser(user, dispatch)
        },
        LogoutUser(user: User) {
            dispatch({type: SET_LOGOUT_USER})
        }
     }
}

