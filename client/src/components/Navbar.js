import React, { useState } from "react";
//import person from "./images/person.png";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Navbar.css";
//import FontAwesomeIcon from 
// import PropTypes from 'prop-types'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <>
      <nav className="nav">
        <div className="nav-top">
          <div className="logo" id="top-nav">
            <Link to="/" className="home">
              <img
                src="%PUBLIC_URL%./images/logo.png"
                height="60px"
                alt="logo"
              />
            </Link>
          </div>
          <div className="sayatitle" id="top-nav">
            <span className="saya">SAYA ENTERPRISES</span>
            <br />
            <span className="slogan">
              Sales and Services of Agricultural Machineries and Implements
            </span>{" "}
          </div>
          <div className="cart" id="top-nav">
            <Link to="/">
              <i className="fa fa-shopping-cart fa-2x"></i>
              <span className="cartlogo__badge">0</span>
            </Link>
          </div>
          
          
          <div className="dropdown">
              {/* <button  className="dropbtn"> */}
                {/* <img src={person}/> */}
                {/* <i onClick={myFunction} className="fa-solid fa-circle-user fa-2xl dropbtn"  ></i> */}
                <div className="user_welcome">
                <i onClick={myFunction} className="fa-solid fa-circle-user fa-2xl dropbtn"  ></i>
                {/* </button> */}
                <label className="label_welcome">Welcome Back!</label>
                </div>
              <div id="myDropdown" class="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/register">SignUp</Link>
                <Link to="/">Logout</Link>
              </div>
          </div>
          {/* <div className="login" id="top-nav">
            <h4 className="log">
              <Link to="/login">LOGIN / SIGN UP</Link>
            </h4>
          </div> */}
        </div>
        <div className="nav-bottom">
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>

          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <Link to="/" className="home">
              <li>HOME</li>
            </Link>
            <Link to="/about" className="about">
              <li>ABOUT US</li>
            </Link>
            <Link to="/products" className="products">
              <li>PRODUCTS & SERVICES</li>
            </Link>
            <Link to="/branch" className="branch">
              <li>BRANCHES</li>
            </Link>
            <Link to="/gallery" className="gallery">
              <li>GALLERY & DEMOS</li>
            </Link>
            <Link to="/developers" className="developers">
              <li>DEVELOPERS</li>
            </Link>
            <Link to="/Cart" className="cart-bottom">
              <li>CART</li>
            </Link>
            <Link to="/login" className="login-bottom">
              <li>LOGIN / SIGN UP</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

//to install font awesome

// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
