import React from 'react'
import CustomButton from '../../custom-button/CustomButton'
import { useState } from 'react'
//style
import "./cardDropDown.css"

// component
import CartItem from '../cart_item/CartItem'


function CardDropDown(props) {
    
    return (
        <>
        <div className='root'>
        

        <div className='cart-dropdown'>
        
            <div className='cart-items'>
          
            {
              props.items.filter((item,idx)=>idx<4).map((items)=>(
                  <CartItem key={items.id}{...items}/>
              ))
          } 
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
        <div className='root-card'>enjoy our product</div>
        </div>
        </>
        
       
    )
}

export default CardDropDown
