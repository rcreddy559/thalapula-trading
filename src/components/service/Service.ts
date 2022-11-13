import { Dispatch } from "react";
import { TradingDocsAction } from "../hooks/TradingDocsAction";
import { User } from "../typings/User";
import { SET_USER } from '../util/Constants'

export function createUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    console.log("-------createUser User---------", user);
    dispatch({type: SET_USER, value: user});
}

export function loginUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    console.log("-------loginUser User---------", user);
    dispatch({type: SET_USER, value: user});
}