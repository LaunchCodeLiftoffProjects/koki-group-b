import React, { useState, useEffect } from "react";
import { sortProducts } from "../helpers/MainHelper";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
// import ProductBox from "./ProductBox";
// import Banner from "./Banner";
// import arm_chair from "../images/arm_chair.jpeg";



export default function Main(props) {
  const products = props.products;
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("abc");
  const [cart, setCart] = useState([]);
  const [roomType, setRoomType] = useState(0);
  const [total, setTotal] = useState(0);


  var subTotal =
    Math.round(
      (cart.reduce((a, v) => (a = a + v.Price), 0) + Number.EPSILON) * 100
    ) / 100;
  var tax = Math.round((subTotal * 0.0545 + Number.EPSILON) * 100) / 100;
  var cartTotal = Math.round((subTotal + tax + Number.EPSILON) * 100) / 100;

  function closeCart() {
    document.getElementById("cart").style.display = "none";
  }

  function viewCart() {
    document.getElementById("cart").style.display = "flex";
    console.log(cart);
  }

  function eqProduct(cart, product) {
    for (let i=0; i<cart.length; i++) {
        if (cart[i].id === product.id) {
            return i;
        }
    }
    return -1;
  }

  const addToCart = (product) => {
    product.qty += 1;
    if (product.qty == 1) {
        setCart([...cart, {...product}]);
    } else {
        cart[eqProduct(cart, product)] = product;
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  function filterByRoom(products, roomId) {
    var filtered = products;
    if (roomId === 0) {
      setRoomType(roomId);

      return filtered;
    }

    filtered = products.filter((product) => product.Room === roomId);
    setRoomType(roomId);
    return filtered;
  }

  useEffect(() => {
      const sortArray = (type) => {
        setData(sortProducts(data, type));
      };

      sortArray(sortType);
    }, [sortType]);

  useEffect(() => {
    const filterRoom = (roomId) => {
      setData(filterByRoom(products, roomId));
    };

    filterRoom(roomType);
  }, [roomType]);

  function handleMobileNav() {
    const nav = document.getElementById("nav");

    if (nav.style.display === "none") {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }

  return (
    <div className="main">
      <div className="burger" id="burger" onClick={() => handleMobileNav()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav id="nav">
        <ul className="nav-links nav-left">
          <li className="navLink" onClick={() => filterByRoom(products, 0)}>
            All Products
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 1)}>
            Bedroom
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 2)}>
            Kitchen
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 3)}>
            Dining
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 4)}>
            Living
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 5)}>
            Bathroom
          </li>
          <li className="navLink" onClick={() => filterByRoom(products, 6)}>
            Outdoor
          </li>
        </ul>


      </nav>
      <div className="sort custom-select">
        <div className="sort-contain">
          <label for="sort">Sort by: </label>
          <select
            onChange={(e) => setSortType(e.target.value)}
            id="sort"
            name="sort-ops"
          >
            <option value="abc">Alphabetical</option>
            <option value="PriceL2H">Price (Low to High)</option>
            <option value="PriceH2L">Price (High to Low)</option>
          </select>
        </div>

        <div className="cart-btn-contain">
          <button className="view-cart-btn" onClick={() => viewCart()}>
            <GrCart />
          </button>
          <div className="cart-qty">{total}</div>
        </div>
      </div>
      <div className="grid" id="grid">
        {data.map((product) => (
          <div className="box">
            <h2 className="productName">{product.Product_Name}</h2>
            <div className="imgWindow">
            <img className="productImage" src={product.Image} alt={product.Description}/>
            </div>
            <p>{product.Description}</p>
            <h4>${product.Price}</h4>
            <button className="add2CartBtn" onClick={() => {addToCart(product);  setTotal(total+1);console.log(cart)}}>
              Add to cart
            </button>
          </div>
        ))}
      </div>{" "}
      {/* END "GRID" */}
      <div className="cartBG" id="cart">
        <div className="cartContent">
          <p className="closeCart" onClick={() => closeCart()}>
            <GrClose />
          </p>
          <div className="cartTop">
            <table>
              <tr>
                <th></th>
                <th>Name</th>
                <th id="descTitle">Desc</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
              {cart.map((cartItem) => (
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
                  <td>
                    <button
                      className="removeFromCart"
                      onClick={() => removeFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className="cartBottom">
          <button className="confirm mobileConfirm" id="mobileConfirm" onClick = {() => {props.appCallback(cart)}}>
              <Link to="/Confirm" id="confirm">
                Checkout
              </Link>
            </button>


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
            <button className="confirm desktopConfirm" onClick = {() => {props.appCallback(cart)}}>
              <Link to="/Confirm" id="confirm">
                Checkout
              </Link>
            </button>
          </div>
        </div>{" "}
        {/* END "CART CONTENT" */}
      </div>{" "}
      {/* END "CART BG" */}
      {/* END "MAIN" */}
    </div>
  );
}
