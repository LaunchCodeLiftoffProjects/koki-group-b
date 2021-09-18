import React from 'react'
import { Link } from 'react-router-dom';

function Confirm(props){

    return(
        <div>
            <h1>Your Order has been confirmed</h1>

            <div className="cartContent">

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
                                  <img className="cartProductImage" src={cartItem.Image} />
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
            <Link to="/"  onClick = {() => {console.log(props.cartItems)}}>Home Page</Link>
        </div>
    )
}

export default Confirm;