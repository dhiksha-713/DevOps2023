import React, { useContext, useState } from "react";
import { LoginContext } from "./ContextProvider/Context";
//import person from "./images/person.png";
import "bootstrap/dist/css/bootstrap.css";
import "./style/Navbar.css";
//import FontAwesomeIcon from
// import PropTypes from 'prop-types'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  // const { logindata, setLoginData } = useContext(LoginContext);
  //   console.log(logindata.ValidUserOne)
  const { logindata, setLoginData } = useContext(LoginContext);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("http://localhost:5000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      // credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      history("/");
    } else {
      console.log("error");
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-top">
          <div className="logo" id="top-nav">
            <Link to="/" className="home">
              <img src="" height="60px" alt="logo" />
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
              {logindata.ValidUserOne ? (
                <>
                  <i
                    onClick={myFunction}
                    className="fa-solid fa-circle-user fa-2xl dropbtn"
                  ></i>
                  <label>
                    Hi,{" "}
                    {logindata.ValidUserOne.fname.charAt(0).toUpperCase() +
                      logindata.ValidUserOne.fname.slice(1)}
                    !
                  </label>
                </>
              ) : (
                <>
                  <i
                    onClick={myFunction}
                    className="fa-solid fa-circle-user fa-2xl dropbtn"
                  ></i>
                  <label>Welcome back!</label>
                </>
              )}
              {/* <i onClick={myFunction} className="fa-solid fa-circle-user fa-2xl dropbtn"  ></i> */}

              {/* </button> */}
            </div>
            <div id="myDropdown" className="dropdown-content">
              {logindata.ValidUserOne ? (
                <>
                  <Link to="/">Profile</Link>
                  <Link
                    to="/"
                    onClick={() => {
                      logoutuser();
                      handleClose();
                    }}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">SignUp</Link>
                </>
              )}
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
