import { useContext } from 'react';
import { TradingDocsContext } from '../../hooks/context/TradingDocsProvider';
import { LOGIN_PAGE } from '../../util/Constants';
import { Login } from '../login/Login';

function Body() {
  const { currentPage } = useContext(TradingDocsContext);
  console.log("------ Current Page: ", currentPage);
  
  return getCurrentPage(currentPage);
}

function getCurrentPage(currentPage: string) {
  if(currentPage === LOGIN_PAGE) {
    return <Login/>
  } else {
    return <h1>Welcome to Trading Docs</h1>
  }
}
export default Body;
