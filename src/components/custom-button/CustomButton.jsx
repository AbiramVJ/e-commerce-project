import React from 'react'
import './custom.button.css'

function CustomButton({children, isGoogleSignIn, inverted,...otherProps}) {
    return (
        <>
        <button className={`${inverted ? 'inverted':''} custom-button`} {...otherProps}>
        {children}

        </button>
            
        </>
    )
}

export default CustomButton
