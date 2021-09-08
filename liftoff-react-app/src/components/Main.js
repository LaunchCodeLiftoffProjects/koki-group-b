import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";
import { sortProducts } from "../helpers/MainHelper";
import { Link } from 'react-router-dom';
import Banner from "./Banner";
import arm_chair from '../images/arm_chair.jpeg'
import { GrCart } from "react-icons/gr"
import { GrClose } from 'react-icons/gr'


export default function Main(props) {
  const products = props.products;
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("abc");
  const [cart, setCart] = useState([]);

  var subTotal = Math.round(((cart.reduce((a,v) =>  a = a + v.Price , 0 )) + Number.EPSILON) * 100) / 100
  var tax = Math.round(((subTotal * .0545) + Number.EPSILON) * 100) / 100
  var cartTotal = Math.round(((subTotal + tax) + Number.EPSILON) * 100) / 100


  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }

  function viewCart() {
    document.getElementById("cart").style.display = "flex";
  }


  const addToCart= (product) => {
    setCart([...cart, product])
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  }

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
          <button className="view-cart-btn" onClick={() => viewCart()}><GrCart/></button>
          <div className="cart-qty">{cart.length}</div>
        </div>
      </div>

      <div className="grid" id="grid">
        {data.map((product) =>
                <div className="box" >        
                    <h2 className="productName">{product.Product_Name}</h2>
                    <div className="imgWindow"><img className="productImage" src={product.Image} /></div>                    
                    <p>{product.Description}</p>
                    <h4>${product.Price}</h4>
                    <button className="add2CartBtn" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
        )}
      </div> {/* END "GRID" */}



      <div className="cartBG" id="cart">
        <div className="cartContent">
          <p className="closeCart" onClick={() => closeCart()}><GrClose /></p>
            <div className="cartTop">
              <table>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th id="descTitle">Desc</th>
                  <th>Price</th>
                  <th>Qty</th>
                </tr>
                {cart.map((cartItem) =>
                <tr>
                  <td><div className="cartImgWindow"><img className="cartProductImage" src={cartItem.Image} /></div></td>
                  <td>{cartItem.Product_Name}</td>
                  <td id="desctxt">{cartItem.Description}</td>
                  <td>${cartItem.Price}</td>
                  <td>Qty Here</td>
                  <td><button className="removeFromCart" onClick={() => removeFromCart(cartItem)}>Remove</button></td>
                </tr>
                )}
              </table>
            </div>

                  

            <div className="cartBottom">
              {/* <table>
                <tr>
                  <th>Sub Total</th>
                  <th>Tax</th>
                  <th id="total">Total</th>
                </tr>
                <tr>
                  <td>${subTotal}</td>
                  <td>${tax}</td>
                  <td id="totalPrice">${cartTotal}</td>
                </tr>
              </table> */}

              <table className="cartTotals">
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
              <button className="confirm"><Link to="/Confirm" id="confirm">Checkout</Link></button>
            </div>

        </div> {/* END "CART CONTENT" */}
          
      </div> {/* END "CART BG" */}

      
    {/* END "MAIN" */}</div> 

    
  );
}
