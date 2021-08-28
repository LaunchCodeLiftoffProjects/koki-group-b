import React from 'react';
import { Link } from 'react-router-dom';

function Cart(){
    return(
        <div>
            <h1>View Your Cart</h1>
            <Link to="/Confirm">Place Order</Link>
        </div>
    )
}

export default Cart;