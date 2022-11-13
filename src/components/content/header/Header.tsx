import { useContext } from "react";
import { TradingDocsContext } from "../../hooks/context/TradingDocsProvider";
import { LOGIN_PAGE, LOGOUT_PAGE, THALAPULA_TRADING, HOME_PAGE } from '../../util/Constants';

function Header() {
    const { SetCurrentPage, user, isLogin } = useContext(TradingDocsContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand" 
                    onClick={() => SetCurrentPage(HOME_PAGE)}>{THALAPULA_TRADING}</div>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">{user.name+'('+user.email+")"}</a>
                    </li>
                </ul>
                <span className="navbar-text">
                { isLogin ? <button type="button" className="btn btn-warning" 
                    onClick={()=> SetCurrentPage(LOGOUT_PAGE)}>Logout</button>:
                    <button type="button" className="btn btn-primary" 
                    onClick={()=> SetCurrentPage(LOGIN_PAGE)}>Login</button>
                }
                </span>
            </div>
        </nav>
    );
}

export default Header;
