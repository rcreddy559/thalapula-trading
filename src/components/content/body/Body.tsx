import { useContext } from 'react';
import { TradingDocsContext } from '../../hooks/context/TradingDocsProvider';
import { LOGIN_PAGE, REGISTER_PAGE } from '../../util/Constants';
import { Login } from '../login/Login';
import { Register } from '../login/Register';

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
  } else {
    return <h1>Welcome to Trading Docs</h1>;
  }
}
export default Body;
