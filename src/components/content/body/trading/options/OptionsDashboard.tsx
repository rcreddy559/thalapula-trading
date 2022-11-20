import { useContext } from "react";
import { TradingDocsContext } from "../../../../hooks/context/TradingDocsProvider";
import { CREATE_OPTIONS_TRADE_PAGE } from "../../../../util/Constants";
import { OptionTradingList } from "./OptionTradesList";

export const OptionsDashboard = () => {
    const { SetCurrentPage } = useContext(TradingDocsContext);

    return <div>
        <button type="button"
            className="btn btn-secondary"
            onClick={() => SetCurrentPage(CREATE_OPTIONS_TRADE_PAGE)}>Options Trade</button>
        <OptionTradingList />
    </div>
}
