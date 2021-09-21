import React from 'react'
import { Link } from 'react-router-dom';

function Confirm(props){

    var subTotal =
      Math.round(
        (props.cartItems.reduce((a, v) => (a = a + v.Price), 0) + Number.EPSILON) * 100
      ) / 100;
    var tax = Math.round((subTotal * 0.0545 + Number.EPSILON) * 100) / 100;
    var cartTotal = Math.round((subTotal + tax + Number.EPSILON) * 100) / 100;
  
    function verifyPaymentInfo() {
      const ccName = document.getElementById("ccName").value
      const ccnum = document.getElementById("ccNum").value
      const exp = document.getElementById("exp").value
      const cvv = document.getElementById("cvv").value
  
      // console.log(exp.slice(2))
      var expYear = parseInt(exp.slice(2))
      var expMonth = parseInt(exp.slice(0, 2))
      var cardExp = false;
  
      if (expYear === 21) {
        if (expMonth < 9) {
          window.alert("Credit card is expired")  
          cardExp = true;      
        }    
      } else if (expYear < 21) {
        window.alert("Credit card is expired")
        cardExp = true;
      } 
      
  
      if (ccName.length >= 3 && ccnum.length === 16 && exp.length === 4 && !cardExp && cvv.length === 3) {
        // window.alert("Payment Info correct")
        return true
      } else {
        window.alert("Payment Info missing or incorrect")
      }
    }
  
    function verifyShippingInfo() {
      const shipName = document.getElementById("shipName").value
      const address = document.getElementById("address").value
      const city = document.getElementById("city").value
      const state = document.getElementById("state").value
  
      if (shipName.length >= 3 && address.length >= 3 && city.length >= 4 && state.length >= 2) {
        // window.alert("Name, Address, City, and State entered")
        return true
      }  else {
        window.alert("Shipping info missing or incorrect")
      }
    }

    function confirmOrder() {
      if (verifyShippingInfo() && verifyPaymentInfo()) {
        window.alert("Order Confirmed!")
      } 
    }

    return(
      <div class="confirmPage">
        <h1>Review Your Order</h1>

        <Link to="/"  onClick = {() => {console.log(props.cartItems)}}>Home Page</Link>

        <div className="confirm-cart">

          <div className="cartTop">
            <table>
              <tr>
                <th></th>
                <th>Name</th>
                <th id="descTitle">Desc</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
              {props.cartItems.map((cartItem) => (
                <tr>
                  <td>
                    <div className="cartImgWindow">
                      <img className="cartProductImage" src={cartItem.Image} alt={cartItem.Description}/>
                    </div>
                  </td>
                  <td>{cartItem.Product_Name}</td>
                  <td id="desctxt">{cartItem.Description}</td>
                  <td>${cartItem.Price}</td>
                  <td>{cartItem.qty}</td>
                </tr>
              ))}
            </table>
          </div>

        </div>
        
        <div className="confirm-cartTotals-contain">
          <table className="cartTotals confirm-cartTotals">
                  
                <tr>
                  <th>Sub Total</th>
                  <td>${subTotal}</td>
                </tr>
                <tr></tr>
                <th>Tax</th>
                <td>${tax}</td>
                <tr>
                  <th id="total">Total</th>
                  <td id="totalPrice">${cartTotal}</td>
                </tr>
          </table>
        </div>


          <div className="pay-ship">
            
            <div className="paymentInfo infoInput">
              <h2>Payment Info</h2>
              <label for="cname">Name on Card</label>
              <input type="text" id="ccName" name="ccName" placeholder="Homer Simpson" />
              <label for="ccNum">Credit card number</label>
              <input type="text" id="ccNum" name="ccNum" placeholder="1111-2222-3333-4444" />
              <label for="exp">Expiration</label>
              <input type="text" id="exp" name="exp" placeholder="09/26" />
              <label for="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="123" />
            </div>

            <div className="ShippingInfo infoInput" >
              <h2>Shipping Info</h2>
              <label for="shipName">Name</label>
              <input type="text" id="shipName" name="shipName" placeholder="Homer Simpson" />
              <label for="address">Address</label>
              <input type="text" id="address" name="address" placeholder="742 Evergreen Terrace" />
              <label for="city">City</label>
              <input type="text" id="city" name="city" placeholder="Springfield" />
              <label for="state">State</label>
              <input type="text" id="state" name="state" placeholder="MO" />
            </div>
            
            
          </div>
          <button className="confirmBtn" onClick={() => {confirmOrder()}}> Confirm </button>

    </div>
    )
}

export default Confirm;