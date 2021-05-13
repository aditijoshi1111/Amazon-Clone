 import React from 'react';
 import SubtotalCss from '../CSSstyles/Subtotal.module.css';
 import CurrencyFormat from 'react-currency-format';

 function Subtotal () {
     return (
         <div className={SubtotalCss.subtotal1}>
         <CurrencyFormat
           renderText = {(value) =>(
                <>
                <p>
                    <label>Subtotal (0 items) : </label><strong>0</strong>
                </p>
              
                 <small className={SubtotalCss.subtotal_gift}>
                   <input type="checkbox"/>This order conatins a gift
                </small>
                </>
            )}
           decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
           <br/>
           <br/>
        <button>Proceed To checkout</button>   
         </div>
    )
 }
 export default Subtotal;
