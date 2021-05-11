/*import React from 'react';
const Checkout = () => {
    const styles = {
        checkout : {
        background : "red",
        textAlign:"center"
        },
        button : {
        backgroundColor: '#4CAF50',
        border: "none",
        color: "white",
        padding: "15" ,
        textAlign: "center",
        textDecoration: "none",
        display: "inlineBlock",
        fontSize: "45"
        },
        main :{
            background : "#F5F5F5",
            textAlign : "center",
            
        }
       
    }
return(
    <div >
    <h2 style = {styles.checkout}>CHECKOUT</h2>
    <form style = {styles.main}>
        
         <b> <label htmlFor="username">FullName</label></b> <br/>
          <input type="text" name="username" id="username" size="55"/> <br/> 
         
      <b>  <label htmlFor="phone">Phone No.</label> <br/> </b> 
            <input type="text" name="phone" id="phone" size ="55"/><br/> 
         
      
      <b> <label htmlFor="email">Email</label> </b> <br/> 
            <input type="email" name="email" id="email" size="55"/> <br/> 
            <br/>
          <b>  <label htmlFor="country">Country</label> </b><br/>
            <select name="country" id="country">
             <option value="afganistan">Afganistan</option>
             <option value="bhutan">Bhutan</option>
             <option value="canada">Canada</option>
             <option value="denmark">Denmark</option>
             <option value="india">India</option>
             <option value="denmark">Denmark</option>
             <option value="nepal">Nepal</option>
            </select>
            <br/> 
            <br/>
         <b>  <label htmlFor="state">State</label> </b><br/>
            <select name="State" id="state">
             <option value="maharashtra">Maharashtra</option>
             <option value="punjab">Punjab</option>
             <option value="kerala">Kerala</option>
             <option value="gujrat">Gujrat</option>
             <option value="rajasthan">Rajasthan</option>
             <option value="odisha">Odisha</option>
             <option value="goa">Goa</option>
            </select>
            <br/> 
            <br/> 
           <b> <label htmlFor="address">Shipping Address</label> </b> <br/> 
            <textarea id="address" name="address" rows="4" cols="50"/><br/>  
            <br/>         
           <button type = "submit" style={styles.button}>PLACE ORDER</button>
        
    </form>
    <br/>
    <br/>
    </div>
)
}
export default Checkout;*/
import { FormHelperText } from '@material-ui/core';
import React from 'react';
import CheckCSS from '../CSSstyles/Checkout.module.css'
import amazonAd from '../img/amazonAd1.jpg'
import Subtotal from "./Subtotal";
function Checkout() {
    const styles = {
        checkout : {
        background : "red",
        textAlign:"center"
        },
       
        main :{
            background : "#F5F5F5",
            textAlign : "center",
            
            
        },
        mar :{
            marginLeft : 200
        }
       
    }
 return(
     <div>
    <h2 style = {styles.checkout}>CHECKOUT</h2>
    <form style = {styles.main}>
        
         <b> <label htmlFor="username">FullName</label></b> <br/>
          <input type="text" name="username" id="username" size="55"/> <br/> 
         
      <b>  <label htmlFor="phone">Phone No.</label> <br/> </b> 
            <input type="text" name="phone" id="phone" size ="55"/><br/> 
         
      
      <b> <label htmlFor="email">Email</label> </b> <br/> 
            <input type="email" name="email" id="email" size="55"/> <br/> 
            <br/>
          <b>  <label htmlFor="country">Country</label> </b><br/>
            <select name="country" id="country">
             <option value="afganistan">Afganistan</option>
             <option value="bhutan">Bhutan</option>
             <option value="canada">Canada</option>
             <option value="denmark">Denmark</option>
             <option value="india">India</option>
             <option value="denmark">Denmark</option>
             <option value="nepal">Nepal</option>
            </select>
            <br/> 
            <br/>
         <b>  <label htmlFor="state">State</label> </b><br/>
            <select name="State" id="state">
             <option value="maharashtra">Maharashtra</option>
             <option value="punjab">Punjab</option>
             <option value="kerala">Kerala</option>
             <option value="gujrat">Gujrat</option>
             <option value="rajasthan">Rajasthan</option>
             <option value="odisha">Odisha</option>
             <option value="goa">Goa</option>
            </select>
            <br/> 
            <br/> 
           <b> <label htmlFor="address">Shipping Address</label> </b> <br/> 
            <textarea id="address" name="address" rows="4" cols="50"/><br/>  
            <br/>         
           
        
    </form>
    <br/>
    <br/>
     <div className = {CheckCSS.checkout} style={styles.main}>
  <div className="checkout__left">
      <img className = "checkout__ad" src = {amazonAd} alt ="Something went wrong" />
       <div>
       <h2 className="checkout_title">Your shopping Basket</h2>
        </div>
  </div>
  <div classNmae="checkout__right">
      <Subtotal/>
      <h2 style = {styles.mar}>The subtotal will go here</h2>
      

  </div>
     </div>
     </div>
 )
}
export default Checkout;