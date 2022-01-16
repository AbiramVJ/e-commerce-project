import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import { useState } from 'react'
//style
import "./cardDropDown.css"

// component
import CartItem from '../cart_item/CartItem'

function CardDropDown() {
    const [item] = useState([
        {
          id:1,
          name: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          price: 150,
          quantity: "1",
        },
        {
            id:2,
          name: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          price: 200,
          quantity: "5",
        },
        {
            id:3,
          name: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          price: 300,
          quantity: "12",
        },
      ]);
    return (
        
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {item.map((item,index)=>(
                <CartItem key={item.id} {...item}/>
            ))} 
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
        
       
    )
}

export default CardDropDown
