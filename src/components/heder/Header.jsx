import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

//style
import "./header.sytle.css"

function Header() {
    return (
        <div className='header'>
            <Link className='logo-container' to='/home'>
                <Logo className='logo'/>
            </Link>
                <div className='options'>
                    <Link className='logo-container' to='/shop'>
                        SHOP
                    </Link>

                    <Link className='logo-container' to='/shop'>
                        CONTACT
                    </Link>  

                </div>
            
        </div>
    )
}

export default Header