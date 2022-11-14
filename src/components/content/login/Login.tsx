import { useContext, useState } from "react";
import { TradingDocsContext } from "../../hooks/context/TradingDocsProvider";
import { User } from "../../typings/User";
import { REGISTER_PAGE } from "../../util/Constants";

export const Login = () => {
    const { SetCurrentPage, LoginUser, message } = useContext(TradingDocsContext);

    const [user, setUser] = useState({ email: "123@example.com" } as User);
    const [error, setError] = useState("");

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

    function validateLogin() {
        setError("");
        if(!user.email || user.email.trim().length < 1) {
            setError("Please Enter Valid Email!");
        } else if(!user.password || user.password.trim().length < 1) {
            setError("Please Enter Valid Password!");
        } else {
            LoginUser(user)
        }
    }

    return <div className="login-page">
        {message && <div className="alert alert-danger" role="alert">{message}</div>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="form-group">
            <label>Email address</label>
            <input type="email"
                name="email"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
                onKeyDown={()=>setError("")}
                onBlur={(e) => setEmail(e.currentTarget.name, e.currentTarget.value)} />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password"
                name="password"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
                onKeyDown={()=>setError("")}
                onBlur={(e) => setPassword(e.currentTarget.name, e.currentTarget.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={validateLogin}>Sign in</button>
        <button type="button" className="btn btn-light" onClick={() => SetCurrentPage(REGISTER_PAGE)}>New around here? Sign up</button>
        <button type="button" className="btn btn-light">Forgot password?</button>
    </div>
}