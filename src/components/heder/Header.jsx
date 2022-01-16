import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// redux
import { connect } from 'react-redux';

//component

import CartIcon from '../Cart/cart-icon/cart-icon';
import CardDropDown from '../Cart/Cart-drop-down/CardDropDown';

import {ReactComponent as Logo} from '../../assets/crown.svg';

//style
import "./header.sytle.css"

//auth
import { auth } from '../../firebase/firebase.utils';

function Header({currentUser},props) {
const hidden = false;
    

    return (
        <div className='header'>
            <Link className='logo-container' to='/home'>
                <Logo className='logo'/>
            </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        SHOP
                    </Link>

                    <Link className='option' to='/shop'>
                        CONTACT
                    </Link>  

                    {
                        currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to="/signin">SIGN  IN</Link>
                    }

                    <CartIcon/>

                </div>
             
                
                
        </div>
    )
}


export default Header;
