import { Dispatch } from "react";
import { TradingDocsAction } from "../hooks/TradingDocsAction";
import { OptionTrade } from "../typings/OptionTrade";
import { User } from "../typings/User";
import { SET_MESSAGE, SET_USER, SAVE_OPTION_TRADES, EDIT_OPTION_TRADE } from '../util/Constants'

export function getUser(loginUser: User, dispatch: Dispatch<TradingDocsAction>) {
    const user = window.localStorage.getItem("user");
    if (user) {
        const storeUser: User = JSON.parse(user);

        if (loginUser.email === storeUser.email && loginUser.password === storeUser.password) {
            dispatch({ type: SET_USER, value: JSON.parse(user) });
        } else {
            dispatch({ type: SET_MESSAGE, value: "Please Enter correct Email and Password" })
        }
    } else {
        dispatch({ type: SET_MESSAGE, value: "Please Create User!" })
    }
}

export function deleteUser() {
    window.localStorage.removeItem("user");
}

export function createUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    window.localStorage.setItem("user", JSON.stringify(user))
    dispatch({ type: SET_USER, value: user });
}

export function loginUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    dispatch({ type: SET_USER, value: user });
}

export function saveOptionTrade(trade: OptionTrade, dispatch: Dispatch<TradingDocsAction>) {
    let optionTrade = getOptionTrades();
    if (optionTrade) {
        let flag: boolean = false;
        for (let i = 0; i < optionTrade.length; i++) {
            if (optionTrade[i].id === trade.id) {
                optionTrade[i] = trade;
                flag = true;
                break;
            }
        }

        if (!flag) {
            optionTrade.push(trade);
        }
    } else {
        optionTrade = [];
        optionTrade.push(trade);
    }
    window.localStorage.setItem("OptionTradeList", JSON.stringify(optionTrade))
    dispatch({ type: SET_MESSAGE, value: "Save Option Trade" })
    dispatch({ type: SAVE_OPTION_TRADES, value: optionTrade })
}

export function fetchOptionTrades(dispatch: Dispatch<TradingDocsAction>) {
    const optionTrade = getOptionTrades();
    if (optionTrade) {
        dispatch({ type: SAVE_OPTION_TRADES, value: optionTrade });
    }
}

export function editOptionTrade(id: string, dispatch: Dispatch<TradingDocsAction>) {
    const optionTrade = getOptionTrade(id);
    if (optionTrade) {
        dispatch({ type: EDIT_OPTION_TRADE, value: optionTrade });
    }
}


function getOptionTrades() {
    const optionTrade = window.localStorage.getItem("OptionTradeList");
    if (optionTrade) {
        const storeOptionTrade: OptionTrade[] = JSON.parse(optionTrade);
        return storeOptionTrade;
    }
}

function getOptionTrade(id: string) {
    const optionTrades = getOptionTrades();
    if (optionTrades) {
        for (let i = 0; i < optionTrades.length; i++) {
            if (optionTrades[i].id === id) {
                return optionTrades[i];
            }
        }

        return {} as OptionTrade;
    }
}