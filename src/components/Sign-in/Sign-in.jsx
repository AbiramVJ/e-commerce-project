import React from 'react';
import { useState } from 'react';

//style
import './signIn.style.css'


//components
import FormInput from '../sign-in-and-sign-up.jsx/SignInAndUp';
import CustomButton from '../custom-button/CustomButton';

//Google auth
import { signInWithGoogle } from '../../firebase/firebase.utils';


function Signin(props) {

    const[user,setUser] = useState({
        email:"",
        password:""
    });

    const handleSubmit = event => {
        event.preventDefault();
        setUser({ email: '', password: '' });
      };
    
    const handleChange = event => {
        const { value, name } = event.target;
        setUser({ [name]: value });
      };
    
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <FormInput name='email' type='email'  value={user.email} handleChange={handleChange} />

                <label>password</label>
                <FormInput name='password' type='password'   value={user.password} handleChange={handleChange}  />
                
                <div className='btn'>
                    <CustomButton type="submit" value="submit from"> SIGN IN</CustomButton>
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignIn > SIGN IN WITH GOOGLE</CustomButton>
                </div>
               
            </form>
        </div>
    )
}

export default Signin;
