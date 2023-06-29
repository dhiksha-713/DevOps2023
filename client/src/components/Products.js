import React, { useState } from "react";
import product_category from "./data/productsData";
import "./style/Products.css";
import { Link } from 'react-router-dom';
// import {search} from './scripts/Product';

export default function Products() {
  const [search, setSearch] = useState("");

  const productItems = product_category
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.product_name.toLowerCase().includes(search);
    })
    .map((item) => (
      <div className="product" id="product" key={item.id}>
        <img src={item.thumb} />
        <div className="p-details">
          <h2>{item.product_name}</h2>
          <h4>{item.description}</h4>
          <Link to="/HomeScreen"><button type="button">See more</button></Link>
        </div>
      </div>
    ));

  return (
    <div className="divbody">
      <div className="head" id="head">
        <h1>PRODUCTS</h1>
      </div>

      <div className="container-product-fluid" id="container-product-fluid">
        <div className="container-product">
          <center>
            <form>
              <i className="fas fa-search"></i>
              <div className="search">
                <input
                  type="text"
                  id="find"
                  placeholder="search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </center>
          <div className="category">
            <h2>CATEGORIES</h2>
          </div>
          <div className="product-list">{productItems}</div>
        </div>
      </div>
    </div>
  );
}
