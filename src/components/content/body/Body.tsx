import { useContext } from 'react';
import { TradingDocsContext } from '../../hooks/context/TradingDocsProvider';
import { CREATE_OPTIONS_TRADE_PAGE, LOGIN_PAGE, OPTIONS_TRADE_DASHBOARD_PAGE, REGISTER_PAGE } from '../../util/Constants';
import { Login } from '../login/Login';
import { Register } from '../login/Register';
import { CreateOptionTrade } from './trading/options/CreateOptionTrade';
import { OptionsDashboard } from './trading/options/OptionsDashboard';

function Body() {
  const { currentPage } = useContext(TradingDocsContext);
  console.log("------ Current Page: ", currentPage);
  
  return getCurrentPage(currentPage);
}

function getCurrentPage(currentPage: string) {
  if(currentPage === LOGIN_PAGE) {
    return <Login/>;
  } else if(currentPage === REGISTER_PAGE){
    return <Register/>;
  } if(currentPage === OPTIONS_TRADE_DASHBOARD_PAGE) {
    return <OptionsDashboard/>
  } if(currentPage === CREATE_OPTIONS_TRADE_PAGE) {
    return <CreateOptionTrade />
  } else {
    return <h1>Welcome to Trading Docs</h1>;
  }
}
export default Body;
