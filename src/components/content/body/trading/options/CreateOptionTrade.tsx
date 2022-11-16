
export const CreateOptionTrade = () => {

    return <div className="container">
        <div className="h5 font-weight-bold text-center">Options Registration</div>
        <form>
            <div className="d-sm-flex">
                <div className="form-group">
                    <label className="text-muted mandatory">Date </label>
                    <input type="text" required className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted mandatory">Time</label>
                    <input type="email" required className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted mandatory">Segment</label>
                    <select name="type"  className="form-control">
                        <option value="Python">Cash</option>
                        <option value="Java">Options</option>
                    </select>
                </div>
                <div className="form-group">
                <label className="text-muted mandatory">Segment</label>
                    <select name="type" className="form-control">
                        <option value="Python">Bank Nifty</option>
                        <option value="Java">Nifty 50</option>
                        <option value="JavaScript">Fin Nifty</option>
                    </select>
                </div>
            </div>
            <div className="d-sm-flex">

                <div className="form-group">
                    <label className="text-muted mandatory">Name</label>
                    <input type="text" required className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Buy Price</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Sell Price</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Quantity</label>
                    <input type="number" className="form-control" />
                </div>
            </div>
            <div className="d-sm-flex">

                <div className="form-group">
                    <label className="text-muted mandatory">SL @ Price</label>
                    <input type="text" required className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Target Price</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Target Status Price</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Exit Reason</label>
                    <input type="number" className="form-control" />
                </div>
            </div>
            <div className="d-sm-flex">

                <div className="form-group">
                    <label className="text-muted mandatory">Logic</label>
                    <select name="type" >
                        <option value="Python">Trend line breakout</option>
                        <option value="Java">Support breakout</option>
                        <option value="Java">Resistance breakout</option>
                        <option value="Java">r2 breakout</option>
                        <option value="Java">r3 breakout</option>
                        <option value="Java">s2 breakout</option>
                        <option value="Java">s3 breakout</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted mandatory">RULES </label>
                    <select name="type" >
                        <option value="Python">Trend line breakout</option>
                        <option value="Java">Support breakout</option>
                        <option value="Java">Resistance breakout</option>
                        <option value="Java">r2 breakout</option>
                        <option value="Java">r3 breakout</option>
                        <option value="Java">s2 breakout</option>
                        <option value="Java">s3 breakout</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="text-muted mandatory">EMOTIONS </label>
                    <select name="type" >
                        <option value="Python">Trend line breakout</option>
                        <option value="Java">Support breakout</option>
                        <option value="Java">Resistance breakout</option>
                        <option value="Java">r2 breakout</option>
                        <option value="Java">r3 breakout</option>
                        <option value="Java">s2 breakout</option>
                        <option value="Java">s3 breakout</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label className="text-muted mandatory">Profit or Loss</label>
                <label>Rs. 9812345</label>
            </div>
            <div className="d-flex align-items-center justify-content-sm-end button-section">
                <button className="btn btn-primary mx-4" type="submit">Submit</button>
                <button className="btn">Cancel</button>
            </div>
        </form>
    </div>
}
