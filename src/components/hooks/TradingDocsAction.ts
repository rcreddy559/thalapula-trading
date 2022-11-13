import { User } from '../typings/User'
import {SET_CURRENT_PAGE, SET_MESSAGE, SET_USER} from '../util/Constants'

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

export type TradingDocsAction = SetCurrentPage
                                | SetMessage
                                | SetUser