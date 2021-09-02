import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Cart(){

    // const product = props.data
    // console.log(product)
    
    // const [cartItems,setCartItems] = useState([]);
    
    // const onAdd = (product) => {
    //     console.log("added")
    //     console.log(product)
    // }

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