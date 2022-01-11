import React from 'react';

//style
import './signInSignUp.css'

//components
import Signin from '../../components/Sign-in/Sign-in';
import SignUp from '../../components/SignUp/SignUp';

function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
             <Signin/>
             <SignUp/>
        </div>
    )
}

export default SignInSignUp
