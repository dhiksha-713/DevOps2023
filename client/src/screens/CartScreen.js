import React from 'react'

export default function CartScreen() {
  return (
    <>
    <div className="cartscreen">
        <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        <CartItem/>
        </div>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
            </div>
            <div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    </div>
    </>
  )
}
