import { OptionTrade } from "../typings/OptionTrade";
import { User } from "../typings/User";

export interface TradingDocsState {
    currentPage: string;
    message: string;
    user: User;
    isLogin: boolean;
    optionTrades: OptionTrade[];
    optionTrade: OptionTrade;
    isOptionEdit: boolean;
}