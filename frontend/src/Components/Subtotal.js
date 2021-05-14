<<<<<<< HEAD
 import React from 'react';
=======
import React from 'react';
>>>>>>> Pallavi_branch
 import SubtotalCss from '../CSSstyles/Subtotal.module.css';
 import CurrencyFormat from 'react-currency-format';

 function Subtotal () {
     return (
         <div className={SubtotalCss.subtotal1}>
<<<<<<< HEAD
         <CurrencyFormat
           renderText = {(value) =>(
                <>
                <p>
                    <label>Subtotal (0 items) : </label><strong>0</strong>
                </p>
=======
       <CurrencyFormat
           renderText = {(value) =>(
               <>
               <p>
                    <label>Subtotal (0 items) : </label><strong>0</strong>
               </p>
>>>>>>> Pallavi_branch
              
                 <small className={SubtotalCss.subtotal_gift}>
                   <input type="checkbox"/>This order conatins a gift
<<<<<<< HEAD
                </small>
                </>
            )}
=======
              </small>
               </>
           )}
>>>>>>> Pallavi_branch
           decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
<<<<<<< HEAD
            prefix={"$"}
            />
           <br/>
           <br/>
        <button>Proceed To checkout</button>   
         </div>
    )
 }
 export default Subtotal;
=======
           prefix={"$"}
           />
           <br/>
            <br/>
         <button>Proceed To checkout</button>   
         </div>
     )
 }
 export default Subtotal;
>>>>>>> Pallavi_branch
