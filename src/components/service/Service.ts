import { Dispatch } from "react";
import { TradingDocsAction } from "../hooks/TradingDocsAction";
import { User } from "../typings/User";
import { SET_MESSAGE } from '../util/Constants'

export function createUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    console.log("-------createUser User---------", user);

}

export function loginUser(user: User, dispatch: Dispatch<TradingDocsAction>) {
    console.log("-------loginUser User---------", user);

    dispatch({type: SET_MESSAGE, value: "loginUser from service"})
}