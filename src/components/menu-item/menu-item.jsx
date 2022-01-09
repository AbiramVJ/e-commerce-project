import React from 'react'
import './menu-item.css'


//component


function MenuItem(props) {
    return (
        <div className='menu-item'>
        <div className='background-image'  style={{backgroundImage:`url(${props.imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>{props.title}</h1>
            </div>
            
        </div>
    )
}

export default MenuItem;
