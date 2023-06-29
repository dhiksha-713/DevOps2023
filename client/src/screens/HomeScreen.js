import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
//import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  

  return (
    <div className="homescreen divbody">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
};

export default HomeScreen;