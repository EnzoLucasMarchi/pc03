export const Wrapper = ({tipAmount, totalAmount})=>{
    return(
        <div className="result-wrapper">
        <div className="result-txt">
          <div className="text-amount">
            <div>
              <h2>Tip Amount</h2>
              <p>/ person</p>
            </div>
            <h3>$<span id="tip-amount">{tipAmount || 0}</span></h3>
          </div>
          <div className="total-amount">
            <div>
              <h2>Total</h2>
              <p>/ person</p>
            </div>
            <h3>$<span id="total">{totalAmount || 0}</span></h3>
          </div>
        </div><button type="button" id="reset-button" className="reset-button">RESET</button>
      </div>
    )
}