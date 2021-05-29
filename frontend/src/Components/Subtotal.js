//  import React from 'react';
//  import SubtotalCss from '../CSSstyles/Subtotal.module.css';
//  import CurrencyFormat from 'react-currency-format';
// import { Fragment } from 'react';

//   function Subtotal ({count,total}) {
//      return (
//          <div className={SubtotalCss.subtotal1}>
//         <CurrencyFormat
//             renderText = {(value) =>(
//                 <Fragment>
//                 <p>
//                     <label>Subtotal ({count} items) : </label><strong>{total}</strong>
//                </p>
            
//                   <small className={SubtotalCss.subtotal_gift}>
//                     <input type="checkbox"/>This order conatins a gift
//                </small>
//                 </Fragment>
//             )}
//             decimalScale={2}
//              value={0}
//              displayType={"text"}
//             thousandSeparator={true}
//            prefix={"$"}
//             />
//             <br/>
//              <br/>
//           <button>Proceed To checkout</button>   
//           </div>
//       )
//   }
//   export default Subtotal;
