import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Products from "./components/Products";
import Branches from "./components/Branches";
import Gallery from "./components/Gallery";
import Developers from "./components/Developers";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
function App() {
  const [loginForm, setLoginForm] = useState("login");

  const toggleForm = (formName) => {
    console.log(formName);
    setLoginForm(formName);
  };

  const currentLocation = useLocation();

  // Check if the current location is the login page
  const isLoginPage = currentLocation.pathname === "/login";
  const isRegisterPage = currentLocation.pathname === "/register";

  return (
    <>
      {(!isLoginPage && !isRegisterPage)&& <Navbar />}
      <Routes>
        <Route path="/login" element={<Login></Login>} exact></Route>
        <Route path="/register" element={<Register></Register>} exact></Route>
        <Route path="/" element={<Home />} exact></Route>{" "}
        {/* Added route for the root path */}
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/products" element={<Products />} exact></Route>
        <Route path="/branch" element={<Branches />} exact></Route>
        <Route path="/gallery" element={<Gallery />} exact></Route>
        <Route path="/developers" element={<Developers />} exact></Route>
        {/* <Route path="/HomeScreen" element={<HomeScreen />} exact></Route>
        <Route path="/product/:id" element={<ProductScreen  />} exact></Route>
        <Route path="/cart" element={<CartScreen />} exact></Route> */}
      </Routes>
      {(!isLoginPage && !isRegisterPage) && <Footer />}
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
