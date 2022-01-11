import React from 'react';
import { useState } from 'react';

//style
import './signUp.css';

//components
import FormInput from '../sign-in-and-sign-up.jsx/SignInAndUp';
import CustomButton from '../custom-button/CustomButton';

//database
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';

function SignUp() {

    const[user,setUser] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })


    const handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword } = setUser;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          setUser({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleChange = event => {
        const { name, value } = event.target;
    
        this.setUser({ [name]: value });
      };
     
    return (
        
        <>
        
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={user.displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={user.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={user.confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
            
        </>
    )
}

export default SignUp
