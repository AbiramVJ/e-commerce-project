import React from 'react';
//style
import './cart-icon.css'

import{ReactComponent as ShoppingIcon} from "../../../assets/shopinning-bag.svg"
//redux
import { connect } from 'react-redux';




function CartIcon({toggleCartHidden}) {

  
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>5</span>        
        </div>
    )

  
}

export default  CartIcon
