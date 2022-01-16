import React from "react";
import { useState } from "react";
//style
import "./cart.items.css";

function CartItem(cart) {

  return (
    <>
      <div className="cart-item">
        <img src={cart.imageUrl} alt="items" />
        <div className="item-details">
          <span className="price">{cart.name}</span>
          <span className="price">
            {cart.quantity} x ${cart.price}
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
