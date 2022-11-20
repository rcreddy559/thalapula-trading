import { OptionTrade } from "../typings/OptionTrade";
import { User } from "../typings/User";

export default interface UpdateTradingDocs {
  SetCurrentPage(page: string): void;
  CreateUser(user: User): void;
  LoginUser(user: User): void;
  LogoutUser(user: User): void;
  createOptionTrade(optionTrade: OptionTrade): void;
  getOptionTrades(): void;
  editOptionTrade(id: string): void;
}
