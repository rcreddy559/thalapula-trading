import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { TradingDocsContext } from '../../../../hooks/context/TradingDocsProvider';
import { OptionTrade } from '../../../../typings/OptionTrade'
import { getTradingPatternLogics } from '../../../../util/TradingUtils'
import DatePicker from "react-datepicker";
import uuid from 'react-uuid';

import "react-datepicker/dist/react-datepicker.css";


export const CreateOptionTrade = () => {

    const { createOptionTrade, isOptionEdit, optionTrade } = useContext(TradingDocsContext);

    const [editOptionTrade, setEditOptionTrade] = useState({} as OptionTrade);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const profitOrLoss = editOptionTrade.quantity * editOptionTrade.sellPrice - editOptionTrade.quantity * editOptionTrade.buyPrice;
        setEditOptionTrade({ ...editOptionTrade, [name]: value, profitOrLoss })
    }

    const handleOnTradeCreate = () => {
        if(!editOptionTrade.id) {
            editOptionTrade.id = uuid();
        }
        editOptionTrade.profitOrLoss = editOptionTrade.quantity * editOptionTrade.sellPrice - editOptionTrade.quantity * editOptionTrade.buyPrice;
        createOptionTrade(editOptionTrade);
    }

    const setTradeDate = (tradeName: string, tradeDate: Date) =>  setEditOptionTrade({ ...editOptionTrade, [tradeName]: tradeDate });

    useEffect(() => {
        if(isOptionEdit) {
            setEditOptionTrade({...optionTrade, tradeDate: new Date(optionTrade.tradeDate)})
        } else {
            setEditOptionTrade({ ...editOptionTrade, tradeDate: new Date() })
        }
    }, [])

    return <div className="container">
        <div className="h5 font-weight-bold text-center">Options Registration</div>
        <form>
            <div className="d-sm-flex">
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Trade Date</label>
                    <DatePicker className="form-control"
                        dateFormat="dd-MM-yyyy"
                        name="tradeDate"
                        selected={editOptionTrade.tradeDate}
                        onChange={(date: Date) => setTradeDate('tradeDate', date)} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Trade Time(mm:ss, ex: 10:26)</label>
                    <input type="email"
                        className="form-control"
                        name="tradeTime"
                        value={editOptionTrade.tradeTime}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Trade Segment</label>
                    <select name="tradeSegment" className="form-control"
                                value={editOptionTrade.tradeSegment}
                                onChange={handleOnChange}>
                        <option value="Cash" >Cash</option>
                        <option value="Options">Options</option>
                    </select>
                </div>
            </div>
            <div className="d-sm-flex">
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Name</label>
                    <input type="text"
                        className="form-control"
                        name="optionName"
                        value={editOptionTrade.optionName}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted">Quantity</label>
                    <input type="number"
                        className="form-control"
                        name="quantity"
                        value={editOptionTrade.quantity}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted">Buy Price</label>
                    <input type="number"
                        className="form-control"
                        name="buyPrice"
                        value={editOptionTrade.buyPrice}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted">Sell Price</label>
                    <input type="number"
                        className="form-control"
                        name="sellPrice"
                        value={editOptionTrade.sellPrice}
                        onChange={handleOnChange} />
                </div>
            </div>
            <div className="d-sm-flex">
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">SL @ Price</label>
                    <input type="number" required
                        className="form-control"
                        name="stopLossPrice"
                        value={editOptionTrade.stopLossPrice}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted">Target Price</label>
                    <input type="number"
                        className="form-control"
                        name="targetPrice"
                        value={editOptionTrade.targetPrice}
                        onChange={handleOnChange} />
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted">Target Status</label>
                    <select name="targetStatus" className="form-control" value={editOptionTrade.targetStatus} onChange={handleOnChange}>
                        <option value="Select">Select</option>
                        <option value="Holding Trade">Holding Trade</option>
                        <option value="Exited Trade">Exited Trade</option>
                    </select>
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Emotional Trade</label>
                    <div className="form-control">
                        <input type="radio" name="emotionalTrade" value="Yes" className='input-margin-left' onChange={handleOnChange} /> Yes
                        <input type="radio" name="emotionalTrade" value="No" className='input-margin-left' onChange={handleOnChange} /> No
                    </div>
                </div>
            </div>
            <div className="d-sm-flex">

                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">Trading Pattern Logics</label>
                    <select name="tradingPatternLogics" className="form-control" onChange={handleOnChange} value={editOptionTrade.tradingPatternLogics}>
                        <option>Select</option>
                        {getTradingPatternLogics()
                            .map((value) => {
                                return <option key={value} value={value}>{value}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group input-margin-left">
                    <label className="text-muted mandatory">RULES </label>
                    <select name="tradeRules" className="form-control" value={editOptionTrade.tradeRules} onChange={handleOnChange}>
                        <option>Select</option>
                        <option value="Trend line breakout">Trend line breakout</option>
                        <option value="Support breakout">Support breakout</option>
                        <option value="Resistance breakout">Resistance breakout</option>
                    </select>
                </div>

                <div className="form-group input-margin-left">
                    <label className="text-muted">Exit Reason</label>
                    <textarea className="form-control"
                        style={{ height: '100px' }}
                        name="exitReason"
                        value={editOptionTrade.exitReason}
                        onChange={handleOnChange}></textarea>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted mandatory">Trading Review</label>
                <textarea className="form-control"
                    style={{ height: '100px' }}
                    name="tradingReview"
                    value={editOptionTrade.tradingReview}
                    onChange={handleOnChange}></textarea>
            </div>
            <div className="form-group">
                <label className="text-muted mandatory">Profit or Loss: <span style={{ color: (editOptionTrade.profitOrLoss) >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>Rs. {editOptionTrade.profitOrLoss}</span></label>
            </div>
            <div className="d-flex align-items-center justify-content-sm-end button-section">
                <button className="btn btn-primary mx-4" type="button" onClick={handleOnTradeCreate}>Create</button>
            </div>
        </form>
    </div>
}
