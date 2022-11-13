import { useContext, useState } from "react";
import { TradingDocsContext } from "../../hooks/context/TradingDocsProvider";
import { User } from "../../typings/User";

export const Register = () => {
    const { CreateUser, message } = useContext(TradingDocsContext);

    const [user, setUser] = useState({ } as User);
    const [error, setError] = useState("");


    function setName(name: string, value: string) {

        setUser({
            ...user,
            name: value
        })
    }

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

    function validateUser() {
        setError("");
        console.log(user);
        
        if(!user.name || user.name.trim().length < 1) {
            setError("Please enter valid Name!")
        } else if(!user.email || user.email.trim().length < 1) {
           setError("Please enter valid Email!")
       } else if(!user.password || user.password.trim().length < 1) {
           setError("Please enter valid Password!")
       } else {
            CreateUser(user)
       }
    }

    return <div className="login-page">
        {message && <div className="alert alert-danger" role="alert">{message}</div>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <div className="form-group">
            <label>Name</label>
            <input type="name"
                name="name"
                className="form-control"
                id="exampleDropdownFormEmail1"
                placeholder="Rakesh Junjun Wala"
                onBlur={(e) => setName(e.currentTarget.name, e.currentTarget.value)} />
        </div>
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
        <button type="submit" className="btn btn-primary" onClick={() => validateUser()}>Create</button>
    </div>
}