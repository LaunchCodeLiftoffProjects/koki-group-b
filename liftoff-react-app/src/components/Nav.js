import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return(
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
          <Link to="/Cart">Cart</Link>
          <li className="navLink"><a href="#">Log In</a></li>
          <li className="navLink"><a href="#">Sign Up</a></li>
          
          <div className="burger">
          <div></div>
          <div></div>
          <div></div>
          </div>

        </ul>
      </nav>
    )
}