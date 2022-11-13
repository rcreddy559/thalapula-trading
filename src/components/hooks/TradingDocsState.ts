import { BinaryOperatorToken } from "typescript";
import { User } from "../typings/User";

export interface TradingDocsState {
    currentPage: string;
    message: string;
    user: User;
    isLogin: boolean;
}