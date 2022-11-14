import { User } from "../typings/User";

export default interface UpdateTradingDocs {
  SetCurrentPage(page: string): void;
  CreateUser(user: User): void;
  LoginUser(user: User): void;
  LogoutUser(user: User): void;
}
