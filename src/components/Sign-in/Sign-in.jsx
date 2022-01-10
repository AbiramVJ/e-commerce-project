import React from 'react';
import { useState } from 'react';



function Signin(props) {

    const[userData,setUserData] = useState({
        email:"",
        password:""
    });

    const handleSubmit = event => {
        event.preventDefault();
    
        setUserData({ email: '', password: '' });
      };
    
    const handleChange = event => {
        const { value, name } = event.target;
    
        setUserData({ [name]: value });
      };
    
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form >
                <input name='email' type='email' value={userData.email} required/>
                <label>Email</label>
                <input name='password' type='password' value={userData.password} require/>
                <label>password</label>
                <input type="submit" value="submit from"/>
            </form>
        </div>
    )
}

export default Signin;
