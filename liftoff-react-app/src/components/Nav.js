import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


export default function Nav(props) {

    function handleMobileNav() {
      const nav = document.getElementById('nav')

      // document.getElementById('nav').style.display = "block";
      if(nav.style.display === 'none') {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none'
      }
    } 

    return(

      <div>
          <div className="burger" id="burger" onClick={() => handleMobileNav()}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <nav id="nav">
            <ul className="nav-links nav-left">
              <li className="navLink"><a href="#">Bedroom</a></li>
              <li className="navLink"><a href="#">Kitchen</a></li>
              <li className="navLink"><a href="#">Dining</a></li>
              <li className="navLink"><a href="#">Living</a></li>
              <li className="navLink"><a href="#">Bathroom</a></li>
              <li className="navLink"><a href="#">Outdoor</a></li>
            </ul>

                  {/* <ul className="nav-links nav-right">
                    <Link to="/Cart">Cart</Link>
                    <li className="navLink"><a href="#">Log In</a></li>
                    <li className="navLink"><a href="#">Sign Up</a></li> */}
                  {/* </ul> */}
          </nav>
      </div>

    )
}