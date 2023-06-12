import React from 'react';
import product_category from './data/productsData';
import './style/Products.css';
// import {search} from './scripts/Product';

export default function Products() {
    const productItems = product_category.map((item) => 
                <div className="product" id='product' key={item.id}>
                    <img src={item.thumb}/>
                    <div className="p-details">
                    <h2>{item.product_name}</h2>
                    <h4>{item.description}</h4>
                    <button type="button">See more</button>
                    </div>
                </div>
    );

  return (
    <div className='divbody'>
    <div className="head" id='head'> 
        <h1>PRODUCTS</h1>
    </div>

    <div className="container-product-fluid" id="container-product-fluid">
        <div className="container-product">
            <center>
            <form>
                <i className="fas fa-search"></i>
                <div className="search">
                    <input type="text" id="find" placeholder="search" onKeyUp={search}/>
                </div>
            </form>
            </center>
            <div className="category">
                <h2>CATEGORIES</h2>
            </div>
            <div className="product-list">
                {productItems}
            </div>
        </div>
    </div>
      </div>
  )
}
