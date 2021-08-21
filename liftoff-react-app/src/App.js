import './App.css';
import React, {Component} from 'react';
import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:3005/products`
})

class App extends Component {

  state = {
    products: []
  }

  constructor() {
    super();
    this.getProducts();
  }

  getProducts = async () => {
    let data = await api.get('/').then(({ data }) => data);
    this.setState({ products: data})
  }

  render() {
    return (
      <div className="App">

      <nav>
        <ul className="nav-links nav-left">
          <li className="navLink"><a href="#">Bedroom</a></li>
          <li className="navLink"><a href="#">Kitchen</a></li>
          <li className="navLink"><a href="#">Dining</a></li>
          <li className="navLink"><a href="#">Living</a></li>
          <li className="navLink"><a href="#">Bathroom</a></li>
          <li className="navLink"><a href="#">Outdoor</a></li>
        </ul>

        <ul className="nav-links nav-right">
          <li className="navLink"><a href="#">Cart</a></li>
          <li className="navLink"><a href="#">Log In</a></li>
          <li className="navLink"><a href="#">Sign Up</a></li>
          
          <div className="burger">
          <div></div>
          <div></div>
          <div></div>
          </div>

        </ul>
      </nav>


      <div className="main">

        <div className="window">Hello, World!</div>
        
        <div className="sort">
          <label for="sort">Sort by:</label>
          <select id="sort" name="sort-ops">
            <option value="abc">Alphabetical</option>
            <option value="priceL2H">Price (Low to High)</option>
            <option value="priceH2L">Price (High to Low)</option>
          </select>
        </div>
        
        <div className="grid">
          
          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

          <div className="box">
            {this.state.products.map(product => <h2 key={product.id}>{product.Product_Name}</h2>)}
            {this.state.products.map(product => <p key={product.id}>{product.Description}</p>)}
            {this.state.products.map(product => <h4 key={product.id}>${product.Price}</h4>)}
            <button className="add2CartBtn">Add to cart</button>
          </div>

        </div>

      </div>

      <footer>
        Claire Stanley, Nikolay Pruss, Deepshikha Anand, Cole Epperson 
      </footer>

      </div>

            
    );
  }
        

}


export default App;
