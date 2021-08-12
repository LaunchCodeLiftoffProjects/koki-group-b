import logo from './logo.svg';
import './App.css';

function App() {
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
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
          <div className="box">I am a product!</div>
        </div>
      </div>

    </div>
  );
}

export default App;
