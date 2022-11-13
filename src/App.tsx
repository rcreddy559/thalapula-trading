import { Dashboard } from './components/dashboard/Dashboard';
import { TradingDocsContext } from './components/hooks/context/TradingDocsProvider';
import { useTradingDocs } from './components/hooks/useTradingDocs';

function App() {
  const state = useTradingDocs();
  return (<TradingDocsContext.Provider value={state}>
        <Dashboard/>
    </TradingDocsContext.Provider>);
}

export default App;
