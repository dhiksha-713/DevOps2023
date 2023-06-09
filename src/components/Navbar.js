import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
function Navbar() {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="nav">
        <ul className={isMobile?"nav-links-mobile": "nav-links"}
        onClick={() => setIsMobile(false)}
        >
          <Link to='/' className="home">
            <li>HOME</li>
          </Link>
          <Link to='/about' className="about">
            <li>ABOUT US</li>
          </Link>
          <Link to='/products' className="products">
            <li>PRODUCTS & SERVICES</li>
          </Link>
          <Link to='/branch' className="branch">
            <li>BRANCHES</li>
          </Link>
          <Link to='/gallery' className="gallery">
            <li>GALLERY & DEMOS</li>
          </Link>
          <Link to='/developers' className="developers">
            <li>DEVELOPERS</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon"
        onClick={()=>setIsMobile(!isMobile)}
        >
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
        </button>
      </nav>
    </>
  );
}

export default Navbar;

//to install font awesome

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
