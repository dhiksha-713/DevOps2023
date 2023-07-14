import React from 'react'
import './CartScreen.css'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Components
import CartItem from '../components/CartItem'

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

export default function CartScreen() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);//get cart from states
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);//type conversion from string to number
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)//starting price is 0
      .toFixed(2);
  };
  const openPopup = () =>{
   
    if(window.confirm("Are you sure you want to continue\nPlease confirm!!")){
    alert("Thank you for shopping")
    }
    else
    {
        alert("Your order is cancelled");
    }
  }

  return (
    <>
    <div className="cartscreen divbody">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartItems.length===0 ? (
            <div>
              Your cart is empty!  <Link to="/HomeScreen" className='Continue_shop'>Click here to Continue Shopping...</Link>
            </div>
          ) : cartItems.map(item => (
            <CartItem  key={item.product}
            item={item}
            qtyChangeHandler={qtyChangeHandler}
            removeHandler={removeFromCartHandler}/>
          ))}
        </div>

        <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p>Subtotal ({getCartCount()}) items</p>
                <p>₹{getCartSubTotal()}</p> 
            </div>
            <div>
                <button onClick={openPopup}>Proceed To Checkout</button>
            </div>
        </div>
      </div>
    </>
  );
};

// export default CartScreen;
