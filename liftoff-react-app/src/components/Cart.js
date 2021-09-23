import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Cart(){


    return(
        <div>
            <h1>View Your Cart</h1>
            {/* {product.Product_Name}
            <div>
                {cartItems.length === 0 && <p>Cart is Empty</p>}
            </div> */}
            <Link to="/Confirm">Place Order</Link>
        </div>
    )
}

export default Cart;