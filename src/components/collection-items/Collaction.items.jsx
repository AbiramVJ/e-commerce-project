import React from 'react'
import './collection.style.css'

import CustomButton from '../custom-button/CustomButton';

function Collactiontems(props) {
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage:`url(${props.imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
           <CustomButton inverted >Add to Cart</CustomButton>

        </div>
    )
}

export default Collactiontems;
