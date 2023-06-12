import React from 'react';
import './style/Products.css';
// import {search} from './scripts/Product';

export default function Products() {


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
                <div className="product" id='product'>
                    <img src="./images/chainsaw.png"/>
                    <div className="p-details">
                    <h2>Chainsaw</h2>
                    <h4> Description</h4>
                    <button type="button">See more</button>
                    </div>
                </div>
                <div className="product">
                    <img src="./images/Oleomac.png"/>
                    <h2>Brushcutter</h2>
                    <h4> Description</h4>
                    <button type="button">See more</button>
                </div>
                {/* <div className="product">
                    <img src="./images/PEPPER DECORTICATOR.png"/>
                    <h2>Decorticator</h2>
                    <h4> Description</h4>
                    <button type="button">See more</button>
                </div> */}
                <div className="product">
                    <img src="./images/kisan kraft rotary tiller.png"/>
                    <div className="p-details">
                        <h2>Tiller</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div>
                
                <div className="product">
                    <img src="./images/Areca Tree bike.png"/>
                    <div className="p-details">
                        <h2>TreeBike</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div>
                <div className="product">
                    <img src="./images/Tractors.png"/>
                    <div className="p-details">
                    <h2>Tractor</h2>
                    <h4> Description</h4>
                    <button type="button">See more</button>
                    </div>
                </div>
                <div className="product" id="areca">
                    <img src="./images/areca dehusker 4 belt.png"/>
                    <div className="p-details">
                    <h2>A-Dehuskar</h2>
                    <h4> Description</h4>
                    <button type="button" >See more</button>
                    </div>
                </div>
                {/* <div className="product">
                    <img src="./images/elec. Lawn mowers.png"/>
                    <div className="p-details">
                        <h2>Lawnmower</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div> */}
                <div className="product">
                    <img src="./images/Gardening Tools.png"/>
                    <div className="p-details">
                        <h2>Gardening</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div>
                <div className="product">
                    <img src="./images/Motocart M 350.png"/>
                    <div className="p-details">
                        <h2>Motocart</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div>
                <div className="product">
                    <img src="./images/Chaufcutter1.png"/>
                    <div className="p-details">
                        <h2>Chaufcutter</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div>
                {/* <div className="product">
                    <img src="./images/MILKING M 1.png"/>
                    <div className="p-details">
                        <h2>Milking machine</h2>
                        <h4> Description</h4>
                        <button type="button" >See more</button>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
      </div>
  )
}
