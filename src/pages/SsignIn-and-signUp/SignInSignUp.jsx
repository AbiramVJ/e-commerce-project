import React from 'react';

//style
import './signInSignUp.css'

//components
import Signin from '../../components/auth/Sign-in/Sign-in';
import SignUp from '../../components/auth/SignUp/SignUp';

function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
             <Signin/>
             <SignUp/>
        </div>
    )
}

export default SignInSignUp
