import React from 'react';
import "../data"

export default function ProductBox(props) {
    // console.log("props: " + props)
    const product = props.data;

    // console.log("product: " + product)

    return(
        <div className="box">
        
            <h2>{product.Product_Name}</h2>
            <p>{product.Description}</p>
            <h4>${product.Price}</h4>
            <button className="add2CartBtn">Add to cart</button>
        </div>
    )
}