import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";
import { sortProducts } from "../helpers/MainHelper";
import { Link } from 'react-router-dom';
import Banner from "./Banner";

export default function Main(props) {
  const products = props.products;
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("abc");
  const [cart, setCart] = useState([]);

  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }

  function viewCart() {
    document.getElementById("cart").style.display = "flex";
  }

  // function add2CartBtn(product) {
  //   cart.push(product)
  //   console.log(cart)
  //   console.log(product)
  // }

  const addToCart= (product) => {
    setCart([...cart, product])
  };

  useEffect(() => {
    const sortArray = (type) => {
      setData(sortProducts(products, type));
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="main">



      <div className="sort custom-select">
        <div className="sort-contain">
          <label for="sort">Sort by: </label>
          <select onChange={(e) => setSortType(e.target.value)} id="sort" name="sort-ops">
            <option value="abc">Alphabetical</option>
            <option value="PriceL2H">Price (Low to High)</option>
            <option value="PriceH2L">Price (High to Low)</option>
          </select>
        </div>
        <div className="cart-btn-contain">
          <button className="view-cart-btn" onClick={() => viewCart()}>View Cart </button>
          <div className="cart-qty">{cart.length}</div>
        </div>


      </div>

      <div className="grid" id="grid">
        {/* {data.map((product, i) => (
          <ProductBox data={product} key={product.id} />
        ))} */}
        {data.map((product) => 
                <div className="box" >        
                    <h2>{product.Product_Name}</h2>
                    <p>{product.Description}</p>
                    <h4>${product.Price}</h4>                    
                    <button className="add2CartBtn" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
        )}
      </div>

      <div className="grid cartBG" id="cart">
        <div className="cartContent">
          {/* <p>{cart.length}</p> */}
          <button className="removeFromCart" onClick={() => closeCart()}>Close Cart</button>
            {cart.map((cartItem) =>
                <div className="cartBox" >
                  <div className="productData">
                    <h2>{cartItem.Product_Name}</h2>
                    <p>{cartItem.Description}</p>                       
                  </div>
                        
                  <div className="productControls">
                      <h4>${cartItem.Price}</h4> 
                      <p>QTY: </p>
                      <button className="removeFromCart">Remove</button>
                  </div>
                
                </div>
            )}
            <h1>TOTAL: ${cart.reduce((a,v) =>  a = a + v.Price , 0 )}</h1>

            <button className="confirm"><Link to="/Confirm">Place Order</Link></button>
        </div>
          
      </div>

      
    </div>

    
  );
}
