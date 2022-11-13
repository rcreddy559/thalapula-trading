import {SET_CURRENT_PAGE, SET_MESSAGE} from '../util/Constants'

interface SetCurrentPage {
    type: typeof SET_CURRENT_PAGE,
    page: string
}

interface SetMessage {
    type: typeof SET_MESSAGE,
    value: string
}

export type TradingDocsAction = SetCurrentPage
                                | SetMessage