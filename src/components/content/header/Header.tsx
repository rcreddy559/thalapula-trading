import { useContext } from "react";
import { TradingDocsContext } from "../../hooks/context/TradingDocsProvider";
import { LOGIN_PAGE, THALAPULA_TRADING, HOME_PAGE, REGISTER_PAGE, OPTIONS_TRADE_DASHBOARD_PAGE, CREATE_OPTIONS_TRADE_PAGE, SET_OPTIONS_TRADES_PAGE } from '../../util/Constants';

function Header() {
    const { SetCurrentPage, user, isLogin, LogoutUser, message} = useContext(TradingDocsContext);
    
    return ( <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand"
                onClick={() => SetCurrentPage(HOME_PAGE)}>{THALAPULA_TRADING}</div>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item text-primary">
                        {user.name && user.name + " ( " + user.email + " )"}
                    </li>
                    <li className="nav-item">
                        <button type="button"
                            className="btn btn-secondary"
                            onClick={() => SetCurrentPage(OPTIONS_TRADE_DASHBOARD_PAGE)}>Options Dashboard</button>
                        <button type="button"
                            className="btn btn-secondary"
                            onClick={() => SetCurrentPage(CREATE_OPTIONS_TRADE_PAGE)}>Create Options Trade</button>
                    </li>
                    <li className="nav-item text-primary">
                    <button type="button"
                            className="btn btn-secondary"
                            onClick={() => SetCurrentPage(SET_OPTIONS_TRADES_PAGE)}>Options Trades</button> 
                    </li>
                </ul>
                <span className="navbar-text">
                    {isLogin ? <button type="button" className="btn btn-secondary"
                        onClick={() => LogoutUser(user)}>Logout</button> :
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <button type="button" className="btn btn-primary"
                                onClick={() => SetCurrentPage(LOGIN_PAGE)}>Login</button>
                            <button type="button" className="btn btn-secondary"
                                onClick={() => SetCurrentPage(REGISTER_PAGE)}>New Account</button>
                        </div>
                    }
                </span>
            </div>
        </nav>
        {message && <div className="alert alert-dark text-center" role="alert">{message}</div>}
        </>
    );
}

export default Header;
