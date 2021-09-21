import React from 'react';
import "../data"
import testBtn from '../helpers/CartHelper';
import Cart from './Cart';

export default function ProductBox(props) {

    const product = props.data;

    return(
        <div className="box">
        
            <h2>{product.Product_Name}</h2>
            <p>{product.Description}</p>
            <h4>${product.Price}</h4>
            <p>ID = {product.id}</p>
            <button className="add2CartBtn">Add to cart</button>
        </div>
    )
}