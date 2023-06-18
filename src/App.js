import Home from "./components/Home";
import About from "./components/AboutUs";
import { useState } from "react";
import Products from "./components/Products";
import Branches from "./components/Branches";
import Gallery from "./components/Gallery";
import Developers from "./components/Developers";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [flag, setFlag] = useState(true);
  const handleFlag = () => {
    setFlag(false);
  };

  const [loginForm, setLoginForm] = useState("login");

  const toggleForm = (formName) => {
    console.log(formName);
    setLoginForm(formName);
  };

  return (
    <>
      <Router>
        <Navbar flag={flag} handleFlag={handleFlag} />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/products" element={<Products />} exact></Route>
          <Route path="/branch" element={<Branches />} exact></Route>
          <Route path="/gallery" element={<Gallery />} exact></Route>
          <Route path="/developers" element={<Developers />} exact></Route>
          <Route
            path="/login"
            element={
              (loginForm === "login" )? (
                <Login onFormSwitch={toggleForm}></Login>
              ) : (
                <Signup onFormSwitch={toggleForm}></Signup>
              )
            }
            exact
          ></Route>
        </Routes>
        <Footer flag={flag} handleFlag={handleFlag} />
      </Router>
    </>
  );
}

export default App;

// import Home from './components/Home';
// import About from './components/AboutUs';
// import Products from './components/Products';
// import Branches from './components/Branches';
// import Gallery from './components/Gallery';
// import Developers from './components/Developers'
// import Navbar from './components/Navbar';
// import React, { useState } from "react";
// import './App.css';

{
  /* <Routes>
        <Route path='/' Component={Home}>
          <Home></Home>
        </Route>
        <Route path='/about' Component={About}>
          <Home></Home>
        </Route>
        <Route path='/products' Component={Products}>
          <Home></Home>
        </Route>
        <Route path='/branch' Component={Branches}>
          <Home></Home>
        </Route>
        <Route path='/gallery' Component={Gallery}>
          <Home></Home>
        </Route>
        <Route path='/developers' Component={Developers}>
          <Home></Home>
        </Route>
      </Routes> */
}
