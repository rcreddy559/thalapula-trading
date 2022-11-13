import { useContext, useState } from "react";
import { TradingDocsContext } from "../../hooks/context/TradingDocsProvider";
import { User } from "../../typings/User";
import { REGISTER_PAGE } from "../../util/Constants";

export const Login = () => {
    const { SetCurrentPage, LoginUser, message } = useContext(TradingDocsContext);

    const [user, setUser] = useState({ email: "123@example.com" } as User);

    function setEmail(name: string, value: string) {
        setUser({
            ...user,
            email: value
        })
    }

    function setPassword(name: string, value: string) {
        setUser({
            ...user,
            password: value
        })
    }   

    return <div className="login-page">
        {message && <div className="alert alert-danger" role="alert">{message}</div>}
        <div className="form-group">
            <label>Email address</label>
            <input type="email"
                name="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                onBlur={(e) => setEmail(e.currentTarget.name, e.currentTarget.value)} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password"
                name="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
                onBlur={(e) => setPassword(e.currentTarget.name, e.currentTarget.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => LoginUser(user)}>Sign in</button>
        <button type="button" className="btn btn-light" onClick={() => SetCurrentPage(REGISTER_PAGE)}>New around here? Sign up</button>
        <button type="button" className="btn btn-light">Forgot password?</button>
    </div>
}