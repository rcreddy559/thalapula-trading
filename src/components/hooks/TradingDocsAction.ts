import { OptionTrade } from '../typings/OptionTrade'
import { User } from '../typings/User'
import {
    EDIT_OPTION_TRADE,
    SAVE_OPTION_TRADES, 
    SET_CURRENT_PAGE, 
    SET_LOGOUT_USER, 
    SET_MESSAGE, SET_USER
} from '../util/Constants'

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE,
    page: string
}

interface SetMessage {
    type: typeof SET_MESSAGE,
    value: string
}

interface SetUser {
    type: typeof SET_USER,
    value: User
}

interface SetLogoutUser {
    type: typeof SET_LOGOUT_USER,
}

interface SaveOptionTrades {
    type: typeof SAVE_OPTION_TRADES,
    value: OptionTrade[]
}

interface EditOptionTrade {
    type: typeof EDIT_OPTION_TRADE,
    value: OptionTrade
}



export type TradingDocsAction = SetCurrentPage
                                | SetMessage
                                | SetUser
                                | SetLogoutUser
                                | EditOptionTrade
                                | SaveOptionTrades