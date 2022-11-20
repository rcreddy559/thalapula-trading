import { useContext, useEffect, useState } from "react"
import { TradingDocsContext } from "../../../../hooks/context/TradingDocsProvider";

export const OptionTradingList = () => {

    const { getOptionTrades, optionTrades, editOptionTrade } = useContext(TradingDocsContext);
    console.log(optionTrades);
    const [totalPL, setTotalPL] = useState(0);

    useEffect(() => {
        getOptionTrades();
    }, [])

    useEffect(() => {
        let pl = 0;
        optionTrades.forEach(trade => {
            pl = pl + (trade.profitOrLoss ? trade.profitOrLoss : 0)
        })

        setTotalPL(pl)
    }, [optionTrades])

    const handleDelete = (id: string) => {
        console.log(id);
    }



    return <>
        <table>
            <tr>
                <td><h2>Trading Details</h2></td>
                <td></td>
                <td>Total Profit / Loss</td>
                <td>: <span style={{ color: (totalPL) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>{totalPL}</span></td>
            </tr>
        </table>
        {optionTrades && optionTrades.map((trade, index) => <table key={index} width="100%" border={1} className={index % 2 === 0 ? "table-light" : 'table-info'} style={{ backgroundColor: index % 2 === 0 ? "#e5eef0" : '#ecebdf' }}>

            <tr>
                <td>
                    <table>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Name</td>
                            <td style={{ fontWeight: 'bold', color: 'blue', fontSize: '20px' }}>: {trade.optionName}</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Date</td>
                            <td><>: {trade.tradeDate.toString().substring(0, trade.tradeDate.toString().indexOf('T')) + ' '} {trade.tradeTime}</></td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Segment</td>
                            <td>: {trade.tradeSegment}</td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Quantity</td>
                            <td>: {trade.quantity}</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Buy Price</td>
                            <td><>: {trade.buyPrice}</></td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Sell Price</td>
                            <td>: {trade.sellPrice}</td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>SL Price</td>
                            <td>: {trade.stopLossPrice}</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Target Price</td>
                            <td><>: {trade.targetPrice}</></td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Target Status</td>
                            <td>: {trade.targetStatus}</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%">
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Emotional Trade</td>
                            <td>: {trade.emotionalTrade}</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Trading Pattern Logics</td>
                            <td><>: {trade.tradingPatternLogics}</></td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Trade Rules</td>
                            <td>: {trade.tradeRules}</td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table width="100%">
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Exit Reason</td>
                            <td>: {trade.exitReason}</td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold' }}>Trading Review</td>
                            <td><>: {trade.tradingReview}</></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="button" className="btn btn-secondary" onClick={() => editOptionTrade(trade.id)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(trade.id)}>Delete</button>
                </td>
                <td></td>
                <td>
                    <span style={{ color: (trade.profitOrLoss) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                        {trade.profitOrLoss >= 0 ? 'Profit' : 'Loss'}  : Rs. {trade.profitOrLoss}
                    </span>
                </td>

            </tr>
        </table>)}
    </>
}


