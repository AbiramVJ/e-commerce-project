import React from "react";
import { useState } from "react";
//style
import "./cart.items.css";

function CartItem(props) {

  return (
    <>
      <div className="cart-item">
        <img src={props.imageUrl} alt="items" />
        <div className="item-details">
          <span className="price">{props.name}</span>
          <span className="price">
            {props.quantity} x ${props.price}
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
